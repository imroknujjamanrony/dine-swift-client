import Cover from "../shared/Cover";
import coverBg4 from "../../assets/menu/soup-bg.jpg";
import { useEffect, useState } from "react";
import MenuItemCard from "../shared/MenuItemCard";

const Soups = () => {
  const [soups, setSoups] = useState([]);
  useEffect(() => {
    const fetchedSoups = async () => {
      try {
        const res = await fetch("/menu.json");
        const data = await res.json();
        const filteredData = data.filter((item) => item.category === "soup");
        setSoups(filteredData);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchedSoups();
  }, []);

  return (
    <div>
      <Cover
        coverBg={coverBg4}
        heading={"Soups"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {soups.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
    </div>
  );
};

export default Soups;
