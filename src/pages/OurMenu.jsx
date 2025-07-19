import Cover from "./shared/Cover";
import ourMenuCover1 from "../assets/menu//banner3.jpg";

const OurMenu = () => {
  return (
    <div>
      <Cover
        coverBg={ourMenuCover1}
        heading={"our menu"}
        subHeading={"would you like to try a dish"}
      ></Cover>
      <h1>hello from our menu page.</h1>
    </div>
  );
};

export default OurMenu;
