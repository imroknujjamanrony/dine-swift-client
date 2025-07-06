import bgImg from "../../assets/home/chef-service.jpg";

const AboutDine = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat flex justify-center items-center py-16 px-4"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg max-w-4xl w-full text-center p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-black font-bold mb-4">
          Swift Dine
        </h1>
        <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
          Swift Dine is a premier food delivery service that connects you with
          the best local restaurants. Swift Dine is a premier food delivery
          service that connects you with the best local restaurants.
        </p>
      </div>
    </div>
  );
};

export default AboutDine;
