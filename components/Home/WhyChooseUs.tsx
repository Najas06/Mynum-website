import React from 'react'
import { HeroParallaxDemo } from '../HeroParallaxDemo'
import { HeroScrollDemo } from '../HeroScrollDemo'
import { TimelineDemo } from '../TimelineDemo'
import { Pointer } from '../magicui/pointer'
import HowMynumWork from '../HowMynumWork'

const WhyChooseUs = () => {
  return (
    <section>
      <Pointer className='fill-cyan-200'/>
        <HeroParallaxDemo/>
        <HeroScrollDemo/>
        {/* <TimelineDemo/> */}
        <HowMynumWork/>
    </section>
  )
}

export default WhyChooseUs