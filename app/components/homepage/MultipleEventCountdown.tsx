'use client'

import React from "react"
import InteractiveEventShowcase from "@/app/components/homepage/EventCard"
import img1 from '@/app/images/upcoming/1x.jpg'
import img2 from '@/app/images/upcoming/usa.jpg'
import { motion } from 'framer-motion'

const events = [
    {
        id: "1",
        name: "India Property Show",
        location: "At King Faisal Road - Manama, Bahrain",
        date: "21st - 22nd February 2025",
        eventDate: new Date("2025-02-21T00:00:00"),
        image: img1,
        link: "https://bahrain-maxpo-exhibitions.vercel.app/",
        logo: "/placeholder.svg?height=100&width=200",
        floorPlanUrl: "#floorplan",
        brochureUrl: "#brochure",
    },
    {
        id: "2",
        name: "India Property Show",
        location: "At King Faisal Road - Manama, Bahrain",
        date: "21st - 22nd February 2025",
        eventDate: new Date("2025-02-21T00:00:00"),
        image: img2,
        link: "https://bahrain-maxpo-exhibitions.vercel.app/",
        logo: "/placeholder.svg?height=100&width=200",
        floorPlanUrl: "#floorplan",
        brochureUrl: "#brochure",
    },
]

const MultipleEventCountdown: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="max-w-full mx-auto px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 text-center mb-8"
        >
          Upcoming Events
        </motion.h2>
        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-6">
            {events.map((event) => (
              <InteractiveEventShowcase key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MultipleEventCountdown

