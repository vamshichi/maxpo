'use client';

import React from "react";
import CountUp from "react-countup";
import MotionWrapper from "../MotionWrapper";

const About: React.FC = () => {
  const highlights = [
    { label: "Attendees from 20+ Countries", count: 500 },
    { label: "Speakers & Industry Experts", count: 100 },
    { label: "Exhibitors Showcasing Innovation", count: 50 },
    { label: "Networking Opportunities", count: 1000 },
  ];

  return (
    <section
      id="about"
      className="bg-slate-50 py-40"
    >
      <div className="container mx-auto px-6">
        {/* Brief About Maxpo Exhibitions */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-black mb-4 py-5">
            About Maxpo Exhibitions
          </h2>
          <p className="text-lg text-gray-950 max-w-3xl mx-auto mb-8">
            Maxpo Exhibitions brings together professionals from diverse
            industries, fostering innovation, networking, and collaboration on
            a global scale. We are proud to organize multiple world-class
            events, connecting ideas, businesses, and investors for a brighter
            future.
          </p>
        </div>

        {/* Dynamic Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-12">
          {highlights.map((highlight, index) => (
            <MotionWrapper key={index} delay={index * 0.8}>
            <div
              key={index}
              className="p-6 bg-blue-950 shadow-lg rounded-lg transform transition hover:scale-105"
            >
              <h3 className="text-4xl font-bold text-white mb-2">
                <CountUp end={highlight.count} duration={5.5} />
              </h3>
              <p className="text-lg text-slate-300">{highlight.label}</p>
            </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
