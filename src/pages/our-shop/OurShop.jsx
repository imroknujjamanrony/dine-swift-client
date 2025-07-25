import Cover from "../shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import coverImg6 from "../../assets/shop/banner2.jpg";
import useMenu from "../../hooks/useMenu";

import CategoryCard from "../shared/CategoryCard";

const OurShop = () => {
  const [menu] = useMenu();
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drink");

  return (
    <div>
      <Cover
        coverBg={coverImg6}
        heading={"Our Shop"}
        subHeading={"would you like to try a dish?"}
      ></Cover>
      <Tabs className="w-11/12 mx-auto">
        <TabList>
          <Tab>Salads</Tab>
          <Tab>Pizzas </Tab>
          <Tab>Soups</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          {/* salad content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2 gap-2">
            {salads.map((item) => (
              <CategoryCard key={item._id} item={item}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {/* pizzas content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2 gap-2">
            {pizzas.map((item) => (
              <CategoryCard key={item._id} item={item}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {/* soups content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2 gap-2">
            {soups.map((item) => (
              <CategoryCard key={item._id} item={item}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {/* drinks content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2 gap-2">
            {drinks.map((item) => (
              <CategoryCard key={item._id} item={item}></CategoryCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
