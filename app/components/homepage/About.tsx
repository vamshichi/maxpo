'use client'

import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, Mic, Building, Network } from 'lucide-react'

const highlights = [
  { label: "Attendees from 20+ Countries", count: 500, icon: Users },
  { label: "Speakers & Industry Experts", count: 100, icon: Mic },
  { label: "Exhibitors Showcasing Innovation", count: 50, icon: Building },
  { label: "Networking Opportunities", count: 1000, icon: Network },
]

const AboutSection: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-blue-950">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-950 to-indigo-950 transform -skew-y-6"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-extrabold text-slate-50 mb-6">
            About Maxpo Exhibitions
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-slate-100 leading-relaxed">
            Maxpo Exhibitions brings together professionals from diverse industries, fostering innovation, networking, and collaboration on a global scale. We are proud to organize multiple world-class events, connecting ideas, businesses, and investors for a brighter future.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-900 shadow-lg rounded-2xl transform rotate-3 transition-transform duration-300 group-hover:rotate-0"></div>
              <div className="relative bg-blue-950 p-8 rounded-2xl shadow-md transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full mb-6 mx-auto">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-50 mb-2">
                  {highlight.count}+
                </h3>
                <p className="text-lg text-slate-100">{highlight.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-20 text-center"
        >
          {/* <motion.a
            href="#learn-more"
            variants={itemVariants}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Learn More About Our Events
            <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
          </motion.a> */}
        </motion.div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-blue-950 to-transparent transform skew-x-12"></div>
    </section>
  )
}

export default AboutSection

