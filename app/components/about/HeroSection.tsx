// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'

// export default function HeroSection() {
//   return (
//     <section className="relative h-[60vh] flex items-center justify-center">
//       <Image
//         src="/placeholder.svg?height=600&width=1200"
//         alt="Real Estate Expo Banner"
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
//       <motion.div
//         className="relative z-20 text-center text-white"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5 }}
//       >
//         <h1 className="text-5xl font-bold mb-4">About the Real Estate Expo</h1>
//         <p className="text-xl">Discover our mission, vision, and values</p>
//       </motion.div>
//     </section>
//   )
// }

'use client';

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh]  w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        // playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="./video/2x(1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Content */}
      {/* <div className="relative z-10 text-center px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          International Proptech Conference 2025
        </h1>
        <p className="text-lg md:text-2xl mb-6">January 10-12, 2025 | Dubai, UAE</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/register"
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Register for Free
          </a>
          <a
            href="/schedule"
            className="px-6 py-3 bg-white text-blue-600 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            View Schedule
          </a>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
