import { AboutusImg } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HiOutlineClipboardList } from "react-icons/hi";
import ScrollVelocity from "../ScrollVelocity";
import { Pointer } from "../magicui/pointer";

const AboutUs = () => {
  return (
    <section className="my-10">
      <Pointer className="fill-blue-500" />{" "}
      <ScrollVelocity
        texts={["|MyEum Services"]}
        velocity={100}
        className="custom-scroll-text text-2xl font-semibold mx-auto"
      />
      <div className="flex gap-3 justify-center mt-10 max-lg:flex-col  ">
        <div className="w-1/2 flex justify-center max-lg:w-full px-3">
          <Image src={AboutusImg} alt="about us" width={500} height={700} />
        </div>
        <div className="w-1/2 flex flex-col gap-y-6 px-3 max-lg:w-full">
          <h1 className="text-3xl font-semibold ">Why Choose Us?</h1>
          <p className="text-balance">
          At MyEnum, we don’t just provide services—we create digital success stories! Whether you need game-changing branding, high-impact digital marketing, stunning websites, or cutting-edge software solutions, we deliver results that elevate your business to new heights.          
          </p>
          <h1 className="text-3xl font-semibold ">What Makes Us Stand Out?</h1>
          <p className="text-balance">
          * Bold & Memorable Branding – We craft unique brand identities that leave a lasting impression and make your business stand out from the crowd.
          <br />
          * High-Impact Digital Marketing – From viral campaigns to data-driven strategies, we ensure your brand reaches the right audience and drives real results.
          <br />
          * Stunning & Powerful Websites – We design visually striking, high-performance websites that don’t just look good—they convert visitors into customers.
          <br />
          * Smart & Scalable Software Solutions – Our custom software and automation tools are built to streamline operations, boost efficiency, and fuel your growth.
          <br />
          * Innovative. Results-Driven. Future-Ready. That’s MyEnum
          </p>
          <div className="flex gap-3 max-sm:flex-col">
            <Card className="w-1/2 rounded-2xl max-sm:w-full">
              <CardHeader>
                <CardTitle>The Growth Accelerator</CardTitle>
                <CardDescription>
                  Ideal for businesses looking to <strong>scale fast</strong> with <strong>branding, high-converting websites, and data-driven marketing</strong>  to <strong>boost visibility and ROI</strong>.
                  </CardDescription>
              </CardHeader>

              <CardFooter>
                <Button className="rounded">
                  <HiOutlineClipboardList />
                  Deploy
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-1/2 rounded-2xl max-sm:w-full">
              <CardHeader>
                <CardTitle>The Digital Powerhouse</CardTitle>
                <CardDescription>
                  Perfect for businesses seeking <strong>custom software, AI-driven automation, and seamless tech integration</strong> to boost efficiency and future-proof operations.
                  </CardDescription>
              </CardHeader>

              <CardFooter>
                <Button className="rounded">
                  <HiOutlineClipboardList />
                  Deploy
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
