'use client'

import PastEvents from "../components/events/PastEvents"
import MultipleEventCountdown from "../components/homepage/MultipleEventCountdown"


export default function AboutPage() {
  return (
      <div>
        <MultipleEventCountdown />
       <PastEvents />
      </div>
  )
}

