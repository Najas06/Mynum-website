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
            At CBR Branding,one of the top branding agencies in India, we
            specialize in creating powerful brand identities and stunning logo
            designs that leave a lasting impression. Whether you’re launching a
            new business or refreshing your current brand, our team works
            closely with you to craft a visual identity that speaks to your
            audience and sets you apart from the competition. Known among the
            top branding companies in India, we bring your brand’s story to life
            through impactful visuals and thoughtful design, blending
            creativity, strategic thinking, and a passion for excellence.
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
