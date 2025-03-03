import ContactSection from "@/components/about/ContactSection";
import { Spotlight } from "@/components/ui/spotlight-new";
import Lightning from "@/Lightning/Lightning";
import React from "react";

const Page = () => {
  return (
    <main className="py-20 h-screen overflow-hidden relative">
      <div
        style={{ width: "100%", height: "100%", position: "absolute" }}
        className="-z-10 opacity-10 -mt-10 "
      >
        <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={1} />
      </div>
      <Spotlight />
      <ContactSection />
    </main>
  );
};

export default Page;
