import SectionTitle from "../../components/shared/SectionTitle";
import salad from "../../assets/home/slide5.jpg";

const RecommendItem = () => {
  const recommendItems = [
    {
      img: salad,
      id: 1,
      name: "Caesar Salad",
      description: "Lettuce, Eggs, Cheese, Chicken Breast, Chicken Leg Piece",
    },
    {
      img: salad,
      id: 2,
      name: "Caesar Salad",
      description: "Lettuce, Eggs, Cheese, Chicken Breast, Chicken Leg Piece",
    },
    {
      img: salad,
      id: 3,
      name: "Caesar Salad",
      description: "Lettuce, Eggs, Cheese, Chicken Breast, Chicken Leg Piece",
    },
  ];

  return (
    <div className="my-12 px-4 md:px-10">
      <SectionTitle
        heading="Recommended Items"
        subheading="Should Try"
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recommendItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.img}
              className="w-full h-48 object-cover"
              alt={item.name}
            />
            <div className="p-4 text-center space-y-2">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <button className="btn btn-outline border-0 border-b-4 border-orange-400 hover:bg-orange-400 hover:text-white transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendItem;
