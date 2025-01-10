'use client'


import HeroSection from '../components/about/HeroSection'
import AboutSection from '../components/about/AboutSection'
import MissionVisionSection from '../components/about/MissionVisionSection'

import CTASection from '../components/about/CTASection'
import TeamMembers from '../components/homepage/TeamMembers'
import ServicesSection from '../components/about/ServicesSection'

export default function AboutPage() {
  return (
      <div>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MissionVisionSection />
        <TeamMembers />
        <CTASection />
      </div>
  )
}

