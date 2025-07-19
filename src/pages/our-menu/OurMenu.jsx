import Cover from "../shared/Cover";
import ourMenuCover1 from "../../assets/menu/banner3.jpg";
import TodaysOffer from "./TodaysOffer";

const OurMenu = () => {
  return (
    <div>
      <Cover
        coverBg={ourMenuCover1}
        heading={"our menu"}
        subHeading={"would you like to try a dish"}
      ></Cover>
      <TodaysOffer></TodaysOffer>
    </div>
  );
};

export default OurMenu;
