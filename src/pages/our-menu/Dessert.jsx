import Cover from "../shared/Cover";
import coverBg2 from "../../assets/menu/dessert-bg.jpeg";

const Dessert = () => {
  return (
    <div>
      <Cover
        coverBg={coverBg2}
        heading={"/Desserts"}
        subHeading={"dessert"}
      ></Cover>
    </div>
  );
};

export default Dessert;
