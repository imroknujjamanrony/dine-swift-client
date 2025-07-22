import Cover from "../shared/Cover";
import coverBg2 from "../../assets/menu/dessert-bg.jpeg";
import { useEffect, useState } from "react";
import MenuItemCard from "../shared/MenuItemCard";

const Dessert = () => {
  const [desserts, setDesserts] = useState([]);
  useEffect(() => {
    const fetchDessert = async () => {
      try {
        const res = await fetch("/menu.json");
        const data = await res.json();
        const filteredData = data.filter((item) => item.category === "dessert");
        setDesserts(filteredData);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchDessert();
  }, []);

  return (
    <div>
      <Cover
        coverBg={coverBg2}
        heading={"Desserts"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {desserts.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
    </div>
  );
};

export default Dessert;
