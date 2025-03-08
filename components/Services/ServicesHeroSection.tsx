import React from "react";

const ServicesHeroSection = () => {
  return (
    <section className="py-10 px-3 lg:px-6 max-sm:py-5">
      <div
        className="min-h-[274px] max-lg:min-h-[230px] max-sm:min-h-[150px]    w-full rounded-md text-center flex justify-center items-center p-3"
        style={{
          background:
            "url(https://utfs.io/f/CVETMkBmijEYQHVvGhFvzjYqcmWNfKS2CGgVIMD3Q4TOHysk)",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-5xl font-bold text-white px-4 py-2 bg-black/40 rounded-lg shadow-xl bg-gradient-to-r from-blue-500 to-cyan-500 max-lg:text-5xl max-sm:text-3xl">
          Services of MyEnum
        </h2>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
