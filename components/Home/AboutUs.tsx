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
        texts={["| Mynum Services"]}
        velocity={100}
        className="custom-scroll-text text-2xl font-semibold mx-auto"
      />
      <div className="flex gap-3 justify-center mt-10 max-lg:flex-col  ">
        <div className="w-1/2 flex justify-center max-lg:w-full px-3">
          <Image src={AboutusImg} alt="about us" width={500} height={700} />
        </div>
        <div className="w-1/2 flex flex-col gap-y-6 px-3 max-lg:w-full">
          <h1 className="text-3xl font-semibold ">Why Choose MyEnum?</h1>
          <p className="text-balance">
            At MyEnum, we believe in delivering excellence through creativity, innovation, and technology. Whether you're looking for a strong brand presence, high-performing digital marketing strategies, a cutting-edge website, or custom software solutions, we’ve got you covered.
            Here’s what sets us apart:
            * Comprehensive Branding Solutions – We craft unique brand identities that tell your story, making your business stand out in a crowded market. From logos to complete brand strategies, we ensure consistency and impact.
            <br />
            * Data-Driven Digital Marketing – We don’t just market; we create experiences that convert. Our SEO, social media, content marketing, and PPC strategies are designed to maximize engagement and ROI.
            <br />
            * Custom Website Development – Your website is the face of your business. We design and develop responsive, user-friendly, and SEO-optimized websites that enhance user experience and drive conversions.
            <br />
            * Tailored Software Solutions – Whether you need a business management system, mobile app, or automation tools, our software solutions are built for performance, security, and scalability.
            <br />
            * Experienced & Passionate Team – Our team of experts is dedicated to delivering high-quality solutions that align with your business goals. We stay ahead of industry trends to provide you with cutting-edge solutions.
            <br />
            * Client-Centric Approach – Your success is our priority. We believe in collaboration, transparency, and delivering tailor-made solutions that help you achieve measurable growth.
            <br />
            * Innovation & Technology – We leverage the latest technologies and creative strategies to help you stay ahead of the competition in the ever-evolving digital landscape.
            <br />
            💡 Let’s turn your vision into reality! Partner with MyEnum today and take your brand, digital presence, and software solutions to the next level.

          <div className="flex gap-3 max-sm:flex-col">
            <Card className="w-1/2 rounded-2xl max-sm:w-full">
              <CardHeader>
                <CardTitle>Branding</CardTitle>
                <CardDescription>
                  At CBR Branding, we create impactful brand identities that
                  resonate with your audience. Let us help you stand out and
                  reflect your core values.
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
                <CardTitle>Branding</CardTitle>
                <CardDescription>
                  At CBR Branding, we create impactful brand identities that
                  resonate with your audience. Let us help you stand out and
                  reflect your core values.
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
