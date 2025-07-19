const Cover = ({ coverBg, heading, subHeading }) => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${coverBg})` }}
    >
      {/* Overlay for slight dark shade */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Container */}
      <div className="relative z-10 max-w-3xl w-full mx-4 sm:mx-6 md:mx-auto text-center bg-black/10 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-white uppercase mb-4">
          {heading}
        </h1>
        <p className="text-sm md:text-lg text-gray-200 uppercase">
          {subHeading}
        </p>
      </div>
    </div>
  );
};

export default Cover;
