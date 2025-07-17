const Cover = ({ coverBg, heading, subHeading }) => {
  return (
    <div
      className="relative bg-cover bg-center h-64 md:h-96 flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${coverBg})` }}
    >
      <div className="absolute inset-0  bg-opacity-90"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-2xl uppercase md:text-4xl font-bold mb-2">
          {heading}
        </h1>
        <p className="text-sm uppercase md:text-lg">{subHeading}</p>
      </div>
    </div>
  );
};

export default Cover;
