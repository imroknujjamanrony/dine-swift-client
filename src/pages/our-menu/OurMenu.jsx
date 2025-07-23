import Cover from "../shared/Cover";
import ourMenuCover1 from "../../assets/menu/banner3.jpg";
import TodaysOffer from "./TodaysOffer";
import Dessert from "./Dessert";
import Pizza from "./Pizza";
import Salad from "./Salad";

const OurMenu = () => {
  return (
    <div>
      <Cover
        coverBg={ourMenuCover1}
        heading={"our menu"}
        subHeading={"would you like to try a dish"}
      ></Cover>
      <TodaysOffer></TodaysOffer>
      <Dessert></Dessert>
      <Pizza></Pizza>
      <Salad></Salad>
    </div>
  );
};

export default OurMenu;
