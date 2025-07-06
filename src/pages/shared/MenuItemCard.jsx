const MenuItemCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex items-center gap-5 bg-white p-4 rounded-lg shadow-md">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[120px] h-[100px] object-cover"
        src={image}
        alt={name}
      />
      <div className="flex-1">
        <div className="flex justify-between items-center border-b border-dashed border-gray-400 pb-1 mb-2">
          <h3 className="uppercase text-gray-800 font-semibold">{name}</h3>
          <p className="text-yellow-600 font-bold">${price}</p>
        </div>
        <p className="text-sm text-gray-600">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItemCard;
