'use client';

import React from "react";
import MotionWrapper from "../MotionWrapper";
import dubai from '@/app/images/events/a2.jpg'
import edu from '@/app/images/events/g5.jpg'
import ips from '@/app/images/events/g3.jpg'
import Image from "next/image";

const ExhibitionsPlatform: React.FC = () => {
  const exhibitions = [
    {
      title: "India Property Show (Dubai)",
      description:
        "Maxpo Exhibitions expertise shines through our recent triumph in Dubai on December 9th-10th, 2023, at Movenpick Grand All Bustan—where we curated an exceptional Awards and Recognition event, setting the stage for business excellence.",
      location: "Dubai",
      date: "December 9-10, 2023",
      image: dubai ,  // Replace with your image URL
    },
    {
      title: "Edufair 2023",
      description:
        "Maxpo Exhibitions has redefined success with our recent triumph in Riyadh on October 27th-28th, 2023, at Holiday Inn Riyadh—a stellar showcase where expertise met excellence.",
      location: "Riyadh",
      date: "October 27-28, 2023",
      image: edu, // Replace with your image URL
    },
    {
      title: "India Property Show (Saudi-Arabia)",
      description:
        "Embark on success with Maxpo Exhibitions recent triumph in Dubai on May 19th-20th, 2023, at Holiday Inn Saudi Arabia. Our expertise illuminated the way, curating an extraordinary Awards and Recognition event that not only set unparalleled achievement in the heart of Saudi Arabia.",
      location: "Saudi Arabia",
      date: "May 19-20, 2023",
      image: ips, // Replace with your image URL
    },
    
  ];

  return (
    <section id="exhibitions" className="bg-gradient-to-b from-slate-100 via-slate-300 to-slate-100 py-40">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">Exhibitions Platform</h2>
          <p className="text-lg text-gray-600">
            Discover the latest events curated by Maxpo Exhibitions, where excellence meets innovation.
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitions.map((event, index) => (
            <MotionWrapper key={index} delay={index * 0.8} >
            <div
              key={index}
              className="bg-blue-950 rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Event Image */}
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                <p className="text-slate-300 text-sm mb-3">{event.description}</p>
                <p className="text-white text-lg">
                  <i className="fas fa-map-marker-alt mr-2"></i> {event.location}
                </p>
                <p className="text-white text-lg">
                  <i className="fas fa-calendar-alt mr-2"></i> {event.date}
                </p>
              </div>
            </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExhibitionsPlatform;
