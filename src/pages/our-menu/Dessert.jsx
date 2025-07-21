import Cover from "../shared/Cover";
import coverBg2 from "../../assets/menu/dessert-bg.jpeg";

const Dessert = () => {
  const [desserts,setDesserts]
  return (
    <div>
      <Cover
        coverBg={coverBg2}
        heading={"Desserts"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <div>

      </div>
    </div>
  );
};

export default Dessert;
