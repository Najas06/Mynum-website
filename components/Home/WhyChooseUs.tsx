import React from 'react'
import { HeroParallaxDemo } from '../HeroParallaxDemo'
import { HeroScrollDemo } from '../HeroScrollDemo'
import { TimelineDemo } from '../TimelineDemo'
import { Pointer } from '../magicui/pointer'

const WhyChooseUs = () => {
  return (
    <section>
      <Pointer className='fill-cyan-200'/>
        <HeroParallaxDemo/>
        <HeroScrollDemo/>
        <TimelineDemo/>
    </section>
  )
}

export default WhyChooseUs