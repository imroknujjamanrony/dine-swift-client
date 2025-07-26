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
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Cover
        coverBg={coverImg6}
        heading={"Our Shop"}
        subHeading={"would you like to try a dish?"}
      ></Cover>
      <div className="py-4">
        <Tabs className="w-11/12 mx-auto py-4 pb-7">
          <TabList className="text-center">
            <Tab>Salads</Tab>
            <Tab>Pizzas </Tab>
            <Tab>Desserts </Tab>
            <Tab>Soups</Tab>
          </TabList>

          <TabPanel>
            {/* salad content */}
            <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2 gap-2">
              {salads.map((item) => (
                <CategoryCard key={item._id} item={item}></CategoryCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            {/* pizzas content */}
            <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2 gap-2">
              {pizzas.map((item) => (
                <CategoryCard key={item._id} item={item}></CategoryCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            {/* soups content */}
            <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2 gap-2">
              {desserts.map((item) => (
                <CategoryCard key={item._id} item={item}></CategoryCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            {/* soups content */}
            <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2 gap-2">
              {soups.map((item) => (
                <CategoryCard key={item._id} item={item}></CategoryCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
