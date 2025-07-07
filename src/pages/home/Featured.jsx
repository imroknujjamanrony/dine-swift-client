import SectionTitle from "../../components/shared/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="bg-fixed bg-cover bg-center text-white py-20 px-4 md:px-20"
      style={{
        backgroundImage: `url(${featuredImg})`,
      }}
    >
      {/* Overlay */}
      <div className=" bg-opacity-60 p-10 rounded-xl">
        <SectionTitle
          heading="From Our Menu"
          subheading="Check It Out"
        ></SectionTitle>

        {/* Parent content */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-10">
          <img
            src={featuredImg}
            alt="Featured Dish"
            className="w-full max-w-md rounded-lg shadow-lg"
          />

          {/* Text Content */}
          <div className="text-center lg:text-left space-y-4 max-w-xl">
            <p className="text-lg font-medium">March 20, 2023</p>
            <h2 className="text-3xl font-bold uppercase">
              Where can I get some?
            </h2>
            <p className="text-sm text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel saepe
              fuga consectetur facere eligendi earum officia, sapiente nostrum
              dolore qui.
            </p>
            <button className="btn btn-outline border-0 border-b-2 border-b-white uppercase hover:bg-white hover:text-black transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
