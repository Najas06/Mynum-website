import ContactSection from "@/components/about/ContactSection";
import ContactMap from "@/components/contact/contactMap";
import { Spotlight } from "@/components/ui/spotlight-new";
import Lightning from "@/Lightning/Lightning";
import React from "react";

const Page = () => {
  return (
    <main className="py-20 min-h-screen overflow-hidden relative">
      <Spotlight />
      <ContactMap />
      <ContactSection />
    </main>
  );
};

export default Page;
