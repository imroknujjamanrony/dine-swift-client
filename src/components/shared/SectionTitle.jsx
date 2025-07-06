const SectionTitle = ({ subheading, heading }) => {
  return (
    <div className="md:w-3/12 text-center mx-auto py-8">
      <h5 className="text-[#D99904] text-[20px] font-normal">
        ---{subheading}---
      </h5>

      <h1 className="text-[40px] font-normal uppercase border-y-4 py-4 text-[#151515]">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;
