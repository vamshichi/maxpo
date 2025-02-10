'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const AboutUsHero: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const video = document.querySelector('video')
    if (video) {
      video.addEventListener('loadeddata', () => setIsVideoLoaded(true))
    }
    return () => {
      if (video) {
        video.removeEventListener('loadeddata', () => setIsVideoLoaded(true))
      }
    }
  }, [])

  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="./video/2x(1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <AnimatePresence>
          {isVideoLoaded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                Shaping the Future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Real Estate
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                Discover our mission to revolutionize the property industry through innovation, sustainability, and community-driven solutions.
              </p>
              {/* <div className="flex flex-col sm:flex-row items-start gap-4">
                <motion.a
                  href="#our-story"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                  Our Story
                </motion.a>
                <motion.a
                  href="#our-values"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full shadow-lg hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out"
                >
                  Our Values
                </motion.a>
              </div> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        <ChevronDown className="w-8 h-8 text-white opacity-80" />
      </motion.div>
    </section>
  )
}

export default AboutUsHero

