import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import Image from "next/image";
import SplitText from "../SplitText";
import { Banners } from "@/assets/assets";
const HeroSection = () => {
  return (
    <section className="max-w-[1920px] mx-auto">
      <div>
        <Carousel className="relative">
          <CarouselContent>
          
            {Banners.map((banner, index) => (
              <CarouselItem key={index}>
                <div className="relative">
                  <Image
                    src={banner.image}
                    width={1280}
                    height={1080}
                    className="w-full max-h-screen object-cover opacity-20 max-sm:h-[800px] max-sm:w-full "
                    alt="hero"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col max-sm:top-1/3  max-sm:left-0 max-sm:translate-x-0 max-sm:translate-y-0">
                    <SplitText
                      text={banner.head}
                      className="text-4xl font-semibold text-center md:text-6xl"
                      delay={150}
                      animationFrom={{
                        opacity: 0,
                        transform: "translate3d(0,50px,0)",
                      }}
                      animationTo={{
                        opacity: 1,
                        transform: "translate3d(0,0,0)",
                      }}
                      //   easing="easeOutCubic"
                      threshold={0.2}
                      rootMargin="-50px"
                      //   onLetterAnimationComplete={handleAnimationComplete}
                    />
                    <SplitText
                      text={banner.desc}
                      className="text-sm font-normal text-center md:text-base"
                      delay={50}
                      animationFrom={{
                        opacity: 0,
                        transform: "translate3d(0,50px,0)",
                      }}
                      animationTo={{
                        opacity: 1,
                        transform: "translate3d(0,0,0)",
                      }}
                      //   easing="easeOutCubic"
                      threshold={0.2}
                      rootMargin="-50px"
                      //   onLetterAnimationComplete={handleAnimationComplete}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-5 max-sm:hidden " />
          <CarouselNext className="absolute right-5 max-sm:hidden " />
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
