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
      <Pointer className="fill-blue-500" />
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
          <p className="text-balance flex flex-col gap-y-3 text-xl ">
            At MyEnum, we don’t just offer services—we craft experiences that
            drive results. Whether it's Branding, Digital Marketing, Website
            Development, or Software Solutions, we bring expertise, innovation,
            and dedication to every project.
          </p>
          <ul className="flex flex-col gap-y-3  ">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <div className="flex gap-3 max-sm:flex-col">
            <Card className="w-1/2 rounded-2xl max-sm:w-full">
              <CardHeader>
                <CardTitle className="uppercase font-semibold text-2xl">
                  Our Mission
                </CardTitle>
                <CardDescription className="text-neutral-300">
                  To <span className="font-semibold">redefine enumeration</span>{" "}
                  through automation, AI-driven optimization, and seamless data
                  structuring—empowering businesses and organizations with
                  smarter, faster, and more accurate data processing solutions.
                </CardDescription>
              </CardHeader>

              {/* <CardFooter>
                <Button className="rounded">
                  <HiOutlineClipboardList />
                  View
                </Button>
              </CardFooter> */}
            </Card>
            <Card className="w-1/2 rounded-2xl max-sm:w-full">
              <CardHeader>
                <CardTitle className="uppercase font-semibold text-2xl">
                  Our Vision
                </CardTitle>
                <CardDescription className="text-neutral-300">
                  To be the{" "}
                  <span className="font-semibold">
                    global leader in enumeration technology
                  </span>{" "}
                  providing a universal solution for structuring and organizing
                  data across industries, eliminating inefficiencies, and
                  enabling data-driven innovation.
                </CardDescription>
              </CardHeader>

              {/* <CardFooter>
                <Button className="rounded">
                  <HiOutlineClipboardList />
                  View
                </Button>
              </CardFooter> */}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

const points = [
  "AI-Driven Efficiency – Automate enumeration processes, reducing manual labor.",
  "100% Accuracy – Minimize human errors and ensure precision in data classification.",
  "User-Friendly Interface – No coding required, just intuitive workflows.",
  "Seamless Integration – Compatible with APIs, databases, and enterprise software.",
  "Customizable & Scalable – Tailor enumeration to fit your unique business needs.",
  "Robust Security – Your data is encrypted, protected, and compliant with industry standards.",
];
