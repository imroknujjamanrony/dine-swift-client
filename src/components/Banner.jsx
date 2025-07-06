import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/home/01.jpg";
import img2 from "../assets/home/02.jpg";
import img3 from "../assets/home/03.png";
import img4 from "../assets/home/04.jpg";
import img5 from "../assets/home/05.png";
import img6 from "../assets/home/06.png";

//shortcut for maping images
const Banner = () => {
  const bannerImages = [
    { src: img1, legend: "Legend 1" },
    { src: img2, legend: "Legend 2" },
    { src: img3, legend: "Legend 3" },
    { src: img4, legend: "Legend 4" },
    { src: img5, legend: "Legend 5" },
    { src: img6, legend: "Legend 6" },
  ];
  return (
    <Carousel>
      {bannerImages.map((bannerImg, index) => (
        <div key={index} className="w-full h-screen">
          <img className="w-full h-full" src={bannerImg.src}></img>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
