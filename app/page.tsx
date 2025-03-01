// import ContactUS from "@/components/ContactUS";
import AboutUs from "@/components/Home/AboutUs";
import HeroSection from "@/components/Home/HeroSection";
import Services from "@/components/Home/Services";
import Testimonals from "@/components/Home/Testimonals";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Page() {
  return (
    <main>
      <HeroSection/>
      <AboutUs/>
      <Services/>
      <WhyChooseUs/>
      <Testimonals/>
      {/* <ContactUS/> */}
    </main>
  )
}
