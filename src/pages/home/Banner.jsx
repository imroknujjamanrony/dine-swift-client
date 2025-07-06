import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/home/01.jpg";
import img2 from "../../assets/home/02.jpg";
import img3 from "../../assets/home/03.png";
import img4 from "../../assets/home/04.jpg";
import img5 from "../../assets/home/05.png";
import img6 from "../../assets/home/06.png";

const Banner = () => {
  const bannerImages = [
    { src: img1, id: 1 },
    { src: img2, id: 2 },
    { src: img3, id: 3 },
    { src: img4, id: 4 },
    { src: img5, id: 5 },
    { src: img6, id: 6 },
  ];
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
    >
      {bannerImages.map((bannerImg) => (
        <div key={bannerImg.id} className="w-full h-screen">
          <img className="w-full h-full" src={bannerImg.src}></img>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
