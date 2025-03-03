import AboutHero from '@/components/about/AboutHero'
import ContactSection from '@/components/about/ContactSection'
import FeaturesSection from '@/components/about/FeaturesSection'
import FeaturesSectionDemo from '@/components/features-section-demo-2'
import ServicesHeroSection from '@/components/Services/ServicesHeroSection'
import React from 'react'

const Page = () => {
  return (
    <main>
        <AboutHero/>
        <FeaturesSection/>
        <ServicesHeroSection />
        <FeaturesSectionDemo/>
        <ContactSection/>
        
    </main>
  )
}

export default Page