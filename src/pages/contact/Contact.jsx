import Cover from "../shared/Cover";
import contactCover from "../../assets/contact/banner.jpg";
import SectionTitle from "../../components/shared/SectionTitle";

const Contact = () => {
  return (
    <div>
      <Cover
        coverBg={contactCover}
        heading={"contact us"}
        subHeading={"would you like to try a dish?"}
      ></Cover>
      <div>
        <SectionTitle
          heading={"our-location"}
          subheading={"visit us"}
        ></SectionTitle>
        <div>
          <div>
            <img src="" alt="" />
            <h2></h2>
            <p></p>
          </div>
          <div>
            <img src="" alt="" />
            <h2></h2>
            <p></p>
          </div>
          <div>
            {" "}
            <img src="" alt="" />
            <h2></h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
