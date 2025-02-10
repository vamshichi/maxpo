'use client';

import { FaRocket, FaEye, FaHandshake, FaStar } from 'react-icons/fa';
import MotionWrapper from '../MotionWrapper';

export default function MissionVisionSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-20">
      <div className="container mx-auto px-6 text-gray-800">
        <MotionWrapper delay={0.5}>
        <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-900 tracking-wide">
          Our Mission & Vision
        </h2>
        </MotionWrapper>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Mission */}
          <MotionWrapper delay={0.5}>
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex justify-center items-center mb-4">
              <FaRocket className="w-8 h-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Mission</h3>
            <p className="text-center text-gray-600 pt-5">
              To connect and empower professionals through knowledge sharing, networking, and innovation, creating a sustainable platform for growth.
            </p>
          </div>
          </MotionWrapper>
          {/* Vision */}
          <MotionWrapper delay={0.5}>
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex justify-center items-center mb-4">
              <FaEye className="w-8 h-8 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-4">Vision</h3>
            <p className="text-center text-gray-600 pt-5">
              To become the world&apos;s most trusted platform for education, collaboration, and progress in the real estate industry.
            </p>
          </div>
          </MotionWrapper>
          {/* Core Values */}
          <MotionWrapper delay={0.5}>
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex justify-center items-center mb-4">
              <FaStar className="w-8 h-8 text-purple-700" />
            </div>
            <h3 className="text-xl font-semibold text-purple-700 mb-6">Core Values</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex justify-center items-center shadow-sm">
                  <FaHandshake className="w-5 h-5 text-purple-700" />
                </div>
                <span className="text-gray-700">Innovation</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex justify-center items-center shadow-sm">
                  <FaHandshake className="w-5 h-5 text-purple-700" />
                </div>
                <span className="text-gray-700">Integrity</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex justify-center items-center shadow-sm">
                  <FaHandshake className="w-5 h-5 text-purple-700" />
                </div>
                <span className="text-gray-700">Collaboration</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex justify-center items-center shadow-sm">
                  <FaHandshake className="w-5 h-5 text-purple-700" />
                </div>
                <span className="text-gray-700">Excellence</span>
              </li>
            </ul>
          </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
