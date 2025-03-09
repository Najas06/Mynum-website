import AboutDetailsSection from '@/components/about/AboutDetailsSection'
import AboutHero from '@/components/about/AboutHero'
import JoinDetailSection from '@/components/about/JoinDetailSection'
// import ContactSection from '@/components/about/ContactSection'
// import FeaturesSection from '@/components/about/FeaturesSection'
// import FeaturesSectionDemo from '@/components/features-section-demo-2'
// import ServicesHeroSection from '@/components/Services/ServicesHeroSection'
import React from 'react'

const Page = () => {
  return (
    <main>
        <AboutHero/>
        <AboutDetailsSection/>
        <JoinDetailSection/>
        {/* <FeaturesSection/> */}
        {/* <ServicesHeroSection /> */}
        {/* <FeaturesSectionDemo/> */}
        {/* <ContactSection/> */}
        
    </main>
  )
}

export default Page