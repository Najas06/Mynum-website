// import ContactUS from "@/components/ContactUS";
import AboutUs from "@/components/Home/AboutUs";
import HeroSection from "@/components/Home/HeroSection";
// import Services from "@/components/Home/Services";
import Testimonals from "@/components/Home/Testimonals";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";

export default function Page() {
  return (
    <main>
      <HeroSection/>
      <AboutUs/>
      {/* <Services/> */}
      <WobbleCardDemo/>
      <WhyChooseUs/>
      {/* <Testimonals/> */}
      <Testimonials/>
      {/* <ContactUS/> */}
    </main>
  )
}
