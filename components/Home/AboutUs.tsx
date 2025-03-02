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
          <h1 className="text-3xl font-semibold ">About Us</h1>
          <p className="text-balance">
            At MyEnum, we don’t just offer services—we craft experiences that drive results. Whether it's Branding, Digital Marketing, Website Development, or Software Solutions, we bring expertise, innovation, and dedication to every project.
            <br />
            ✔ Strategic Branding – We create powerful brand identities that make a lasting impact.
            <br />
            ✔ Result-Driven Digital Marketing – Our data-driven marketing strategies ensure maximum reach and engagement.
            <br />
            ✔ Custom Website Development – We build stunning, high-performance websites tailored to your business needs.
            <br />
            ✔ Innovative Software Solutions – From automation to enterprise applications, we develop software that scales with your growth.
          </p>

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
