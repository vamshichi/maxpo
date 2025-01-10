'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { motion, AnimatePresence } from 'framer-motion'
import img1 from '@/app/images/headerimg/SLIDE-1-1-1-1-1.jpg'
import img2 from '@/app/images/headerimg/4T5B9834.jpeg'
import img3 from '@/app/images/headerimg/carousel-1.jpg'
// You'll need to install these packages:
// npm install react-slick slick-carousel framer-motion

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const slides = [
  {
    image: img1,
    title: 'MAXPO',
    description: 'Elevating Excellence Globally in Exhibitions, Conferences and Unforgettable Events',
  },
  {
    image: img2,
    title: 'Networking Opportunities',
    description: 'Connect with industry leaders and innovators',
  },
  {
    image: img3,
    title: 'Latest Real Estate Trends',
    description: 'Stay ahead with cutting-edge insights',
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  }

  return (
    <section className="relative h-[80vh] mb-16"> {/* Added margin-bottom */}
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[100vh]"> {/* Set consistent height */}
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <AnimatePresence mode="wait">
              {currentSlide === index && (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center text-center text-white z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <motion.h1
                      className="text-4xl md:text-5xl font-bold mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      className="text-lg md:text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {slide.description}
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </Slider>
    </section>
  )
}
