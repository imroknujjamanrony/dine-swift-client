import { useEffect, useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle";
import MenuItemCard from "../shared/MenuItemCard";

const TodaysOffer = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("/public/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) => item.category === "offered");
        setOffers(filtered);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        heading={"todays offer"}
        subheading={"don't miss"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {offers.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
    </div>
  );
};

export default TodaysOffer;
