import Cover from "../shared/Cover";
import coverBg4 from "../../assets/menu/salad-bg.jpg";
import { useEffect, useState } from "react";
import MenuItemCard from "../shared/MenuItemCard";

const Salad = () => {
  const [salads, setSalads] = useState([]);
  useEffect(() => {
    const fetchSalads = async () => {
      try {
        const res = await fetch("/public/menu.json");
        const data = await res.json();
        const filteredSalad = data.filter(
          (salad) => salad.category === "salad"
        );
        setSalads(filteredSalad);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchSalads();
  }, []);
  console.log(salads);
  return (
    <div>
      <Cover
        coverBg={coverBg4}
        heading={"salad"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {salads.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
    </div>
  );
};

export default Salad;
