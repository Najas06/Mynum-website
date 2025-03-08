import React from "react";
import { CardStackDemo } from "../CardStackDemo";
import { ParallaxScrollDemo } from "../ParallaxScrollDemo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FeaturesSection = () => {
  return (
    <section>
      <h2 className="text-4xl font-semibold text-center">
        We Promise you the best service ever
      </h2>
      <ParallaxScrollDemo />
      <div className="flex flex-col justify-center items-center">
        <div className="w-full">
          <CardStackDemo />
        </div>
        <div className="w-full">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Frequently Asking Questions</h2>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="3"
            >
              {items.map((item) => (
                <AccordionItem value={item.id} key={item.id} className="py-2">
                  <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-2">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

const items = [
  {
    id: "1",
    title: "What makes Origin UI different?",
    content:
      "Origin UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.",
  },
  {
    id: "2",
    title: "How can I customize the components?",
    content:
      "Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.",
  },
  {
    id: "3",
    title: "Is Origin UI optimized for performance?",
    content:
      "Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.",
  },
  {
    id: "4",
    title: "How accessible are the components?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
];
