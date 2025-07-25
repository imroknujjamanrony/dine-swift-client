const CategoryCard = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      {/* Image section */}
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <span className="absolute top-2 right-2 bg-black text-white text-sm font-semibold px-3 py-1 rounded">
          ${price}
        </span>
      </div>

      {/* Text and button section */}
      <div className="p-4 text-center">
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <p className="text-gray-600 text-sm mb-4">{recipe}</p>
        <button className="bg-gray-100 text-yellow-600 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-200">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
