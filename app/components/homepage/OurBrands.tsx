'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import { motion } from 'framer-motion'
import { brands, Brand } from '@/app/data/brands'
import MotionWrapper from '../MotionWrapper'

export default function OurBrands() {
  return (
    <section className="py-16 bg-blue-300 text-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {brands.map((brand, index) => (
            <BrandItem key={brand.name} brand={brand} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BrandItem({ brand, index }: { brand: Brand; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <MotionWrapper key={index} delay={index * 0.7}>
      <Link 
        href={brand.website}
        className="group block relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 transform transition-transform duration-300"
          style={{ 
            borderLeft: `8px solid ${brand.color}`,
            boxShadow: `0 4px 6px -1px ${brand.color}20, 0 2px 4px -1px ${brand.color}30`,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className="relative p-6 flex items-center">
          <div className="flex-shrink-0 mr-6">
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: brand.color }}>{brand.name}</h3>
            <p className="text-gray-600 mb-4">{brand.description}</p>
            <span className={`${isHovered ? "text-blue-500" : "text-gray-600"} transition-colors`}>
              Visit Website →
            </span>
          </div>
        </div>
      </Link>
    </MotionWrapper>
  )
}


