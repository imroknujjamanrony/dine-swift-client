import { useEffect, useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle";
import MenuItemCard from "../shared/MenuItemCard";

const Popularmenu = () => {
  const [newMenuItems, setNewMenuItems] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((response) => response.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setNewMenuItems(popularItems);
      })
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SectionTitle heading="From Our Menu" subheading="Check It Out" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {newMenuItems.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
    </div>
  );
};

export default Popularmenu;
