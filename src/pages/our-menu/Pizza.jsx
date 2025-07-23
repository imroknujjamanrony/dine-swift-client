import Cover from "../shared/Cover";
import coverBg3 from "../../assets/menu/pizza-bg.jpg";
import { useEffect, useState } from "react";
import MenuItemCard from "../shared/MenuItemCard";

const Pizza = () => {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch("/public/menu.json");
        const data = await res.json();
        const filteredPizzas = data.filter(
          (pizza) => pizza.category === "pizza"
        );
        setPizzas(filteredPizzas);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchPizzas();
  }, []);
  console.log(pizzas);
  return (
    <div>
      <Cover
        coverBg={coverBg3}
        heading={"Pizza"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {pizzas.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
    </div>
  );
};

export default Pizza;
