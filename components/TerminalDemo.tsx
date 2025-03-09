import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export function TerminalDemo() {
  return (
   <div className="overflow-hidden">
     <Terminal>
      <TypingAnimation>
        &gt; Scalable Solutions for All Industries
      </TypingAnimation>

      <AnimatedSpan delay={1500} className="text-green-500">
        <span>
          ✔ E-commerce – Organizing product catalogs, <br /> SKU numbering, and
          inventory classification.
        </span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span>
          ✔ Healthcare – Structuring patient records,
          <br /> medical codes, and research data.
        </span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span>
          ✔ Finance – Numbering financial transactions,
          <br /> invoices, and client records.
        </span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span>
          ✔ Education & Research – Streamlining survey data,
          <br /> research samples, and student indexing.
        </span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span>
          ✔ Government & Census – Managing large-scale <br /> census
          enumeration, national registries, and administrative data.
        </span>
      </AnimatedSpan>

      {/* <AnimatedSpan delay={4000} className="text-green-500">
          <span>✔ Checking registry.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={4500} className="text-green-500">
          <span>✔ Updating tailwind.config.ts</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={5000} className="text-green-500">
          <span>✔ Updating app/globals.css</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={5500} className="text-green-500">
          <span>✔ Installing dependencies.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={6000} className="text-blue-500">
          <span>ℹ Updated 1 file:</span>
          <span className="pl-2">- lib/utils.ts</span>
        </AnimatedSpan>
  
        <TypingAnimation delay={6500} className="text-muted-foreground">
          Success! Project initialization completed.
        </TypingAnimation> */}

      <TypingAnimation delay={7000} className="text-muted-foreground overflow-hidden">
        From small businesses and startups to large-scale enterprises, 
      </TypingAnimation>
      <TypingAnimation delay={7000} className="text-muted-foreground  overflow-hidden">
        our flexible enumeration tools adapt to various industries.
      </TypingAnimation>
    </Terminal>
   </div>
  );
}
