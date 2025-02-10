'use client'

import { FaTradeFederation, FaCalendarAlt, FaMagic, FaAward, FaCertificate, FaBuilding } from 'react-icons/fa';
import MotionWrapper from '../MotionWrapper';

export default function ServicesSection() {
  return (
    <section className="py-40 px-16 bg-gradient-to-r from-gray-50 to-gray-100  text-black">
      <MotionWrapper delay={0.5}>
      <div className="container mx-auto text-center mb-20">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Services</h2>
        <p className="text-lg text-gray-600">
          Maxpo offers a range of professional services designed to help businesses grow and thrive in the global market. Discover how we can support your business through our diverse event solutions.
        </p>
      </div>
      </MotionWrapper>
      {/* Service Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Exhibition */}
        <MotionWrapper delay={0.5}>
        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="text-blue-700 mb-4">
            <FaBuilding className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-black">Exhibitions</h3>
          <p className="text-gray-700">
            Maxpo offers businesses the opportunity to participate in professionally managed and customized exhibitions that are tailored to their needs. These exhibitions help businesses generate new trade, enhance brand awareness, and build valuable networks.
          </p>
        </div>
        </MotionWrapper>
        {/* Conferences */}
        <MotionWrapper delay={0.5}>
        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="text-green-700 mb-4">
            <FaCalendarAlt className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Conferences</h3>
          <p className="text-gray-700">
            Maxpo organizes customized B2B conferences across the Middle-East, South East Asia, Europe, and Africa regions. These conferences offer multiple platforms for delegates, sponsors, and clients, fostering valuable industry connections.
          </p>
        </div>
        </MotionWrapper>
        {/* Special Events */}
        <MotionWrapper delay={0.5}>
        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="text-purple-700 mb-4">
            <FaMagic className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Special Events</h3>
          <p className="text-gray-700">
            Maxpo provides customized creative services for special events, focusing on maximizing outcomes. Popular events include Business Awards, Product Launches, and Real Estate Awards.
          </p>
        </div>
        </MotionWrapper>
        {/* Awards and Recognition */}
        <MotionWrapper delay={0.5}>
        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="text-yellow-700 mb-4">
            <FaAward className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Awards and Recognition</h3>
          <p className="text-gray-700">
            Maxpo specializes in organizing awards and recognition events like the Women Business Awards and Real Estate Awards, offering expert guidance to ensure success and prestige.
          </p>
        </div>
        </MotionWrapper>
        {/* Accreditations */}
        <MotionWrapper delay={0.5}>
        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="text-indigo-700 mb-4">
            <FaCertificate className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Accreditations</h3>
          <p className="text-gray-700">
            Maxpo provides professional and experienced accreditation services, ensuring that your event meets international standards of security, ambiance, and quality.
          </p>
        </div>
        </MotionWrapper>
        {/* Trade Shows */}
        <MotionWrapper delay={0.5}>
        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="text-teal-700 mb-4">
            <FaTradeFederation className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Trade Shows</h3>
          <p className="text-gray-700">
            Maxpo is a leading organizer of trade shows in Dubai, offering specialized services to help businesses grow their networks, enhance visibility, and increase trade opportunities.
          </p>
        </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
