import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import FeaturesSectionDemo from "@/components/features-section-demo-2";
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo";
import ServicesHeroSection from "@/components/Services/ServicesHeroSection";
import { TracingBeamDemo } from "@/components/TracingBeamDemo";
import { Spotlight } from "@/components/ui/spotlight-new";
import React from "react";

export default function page() {
  return (
    <main className="mt-10 relative px-3 overflow-hidden">
      <Spotlight />
      <ServicesHeroSection />
      <AppleCardsCarouselDemo/>
      <FeaturesSectionDemo />
      <MacbookScrollDemo />
      {/* <TracingBeamDemo /> */}
    </main>
  );
}
