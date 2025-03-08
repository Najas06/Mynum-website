import React from "react";
import { Spotlight } from "../ui/spotlight-new";
import { AppleCardsCarouselDemo } from "../AppleCardsCarouselDemo";

const AboutHero = () => {
  return (
    <section className="py-10 px-3 lg:px-6 max-sm:py-5">
      <div className=" w-full rounded-md flex flex-col py-25 max-sm:py-20 md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight />
        {/* <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl  font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Best Branding & Logo Designing <br /> Company in India
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            A subtle yet effective spotlight effect, because the previous
            version is used a bit too much these days.
          </p>
        </div> */}
         <div
        className="min-h-[274px] max-lg:min-h-[230px] max-sm:min-h-[150px]    w-full rounded-md text-center flex justify-center items-center p-3"
        style={{
          background:
            "url(https://utfs.io/f/CVETMkBmijEYQHVvGhFvzjYqcmWNfKS2CGgVIMD3Q4TOHysk)",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-4xl font-bold text-white px-4 py-2 bg-black/40 rounded-lg shadow-xl bg-gradient-to-r from-blue-500 to-cyan-500 max-lg:text-5xl max-sm:text-2xl">
        Best Branding & Logo Designing <br /> Company in India
        </h2>
      </div>
        <AppleCardsCarouselDemo/>
      </div>
    </section>
  );
};

export default AboutHero;
