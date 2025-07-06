// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import SectionTitle from "../../components/shared/SectionTitle";
const Category = () => {
  const categoryImages = [
    { src: slider1, id: 1, name: "SALADS" },
    { src: slider2, id: 2, name: "PIZZA" },
    { src: slider3, id: 3, name: "SOUPS" },
    { src: slider4, id: 4, name: "DESSERTS" },
    { src: slider5, id: 5, name: "PASTA" },
  ];
  return (
    <section>
      <SectionTitle
        subheading={"---From 11.00am to 10.00pm---"}
        heading={"ORDER ONLINE"}
      />
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-8"
      >
        {categoryImages.map((categoryImg) => (
          <SwiperSlide
            key={categoryImg.id}
            className="w-full h-screen relative"
          >
            <img
              className="w-full h-full object-cover"
              src={categoryImg.src}
              alt={`Category ${categoryImg.id}`}
            />
            <h2
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white font-bold 
    text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
    bg-black/40 px-3 py-1 rounded-lg shadow-md"
            >
              {categoryImg.name}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Category;
