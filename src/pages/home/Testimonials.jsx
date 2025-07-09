// import SectionTitle from "../../components/shared/SectionTitle";

// // Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "@smastrom/react-rating/style.css";

// // Required Swiper modules
// import { Navigation } from "swiper/modules";
// import { useEffect, useState } from "react";
// import { Rating } from "@smastrom/react-rating";

// const Testimonials = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       const response = await fetch("/public/reviews.json");
//       const data = await response.json();
//       setReviews(data);
//     };
//     fetchTestimonials();
//   }, []);

//   return (
//     <div className="my-20 px-4 md:px-8 lg:px-16">
//       <SectionTitle
//         subheading={"what our clients say"}
//         heading={"Testimonials"}
//       />

//       <Swiper
//         navigation={true}
//         modules={[Navigation]}
//         className="mySwiper"
//         spaceBetween={30}
//         slidesPerView={1}
//       >
//         {reviews.map((review) => (
//           <SwiperSlide key={review.id}>
//             <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl mx-auto text-center space-y-4 border border-gray-100">
//               <Rating
//                 style={{ maxWidth: 200 }}
//                 value={review.rating}
//                 readOnly
//                 className="mx-auto"
//               />
//               <p className="text-gray-600 italic">"{review.details}"</p>
//               <h4 className="text-lg font-semibold text-primary">
//                 {review.name}
//               </h4>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Testimonials;

import SectionTitle from "../../components/shared/SectionTitle";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";

// Required Swiper modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch("/public/reviews.json");
      const data = await response.json();
      setReviews(data);
    };
    fetchTestimonials();
  }, []);

  return (
    <div className="my-20 px-4 md:px-8 lg:px-16">
      <SectionTitle
        subheading={"what our clients say"}
        heading={"Testimonials"}
      />

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={30}
        slidesPerView={1}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl mx-auto text-center space-y-4 border border-gray-100">
              <Rating
                style={{ maxWidth: 200 }}
                value={review.rating}
                readOnly
                className="mx-auto"
              />
              <p className="text-gray-600 italic">"{review.details}"</p>
              <h4 className="text-lg font-semibold text-primary">
                {review.name}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

//added new line at the end of the file
