'use client'

import React from 'react';
import Image from 'next/image';

import { Linkedin } from 'lucide-react';

import Anu from '@/app/images/team/anu.jpg';
import Inayat from '@/app/images/team/inayat.png';
import Zia from '@/app/images/team/zia.png';
import Omer from '@/app/images/team/omer sait.jpeg'
import MotionWrapper from '../MotionWrapper';

const teamData = [
  { name: 'Inayat Sait', role: 'CMD', image: Inayat },
  { name: 'Zia Sait', role: 'MD & Co-Founder', image: Zia },
  { name: 'Omer Sait', role: 'Director', image: Omer },
  { name: 'Annu Muddusetti', role: 'International Sales Director', image: Anu },
];

const TeamMembers = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className='text-center py-10'>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our professional management team brings years of experience and expertise to drive success in every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <MotionWrapper key={index} delay={index * 0.5}>
            
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative h-64 w-full mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-gray-200 text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-2">
                      <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      {/* <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                        <Mail className="w-5 h-5" />
                      </a> */}
                    </div>
                    {/* <button className="text-blue-600 hover:text-blue-800 transition-colors flex items-center text-sm font-medium">
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </button> */}
                  </div>
                  <p className="text-gray-600 text-sm">
                    Experienced professional with a passion for driving innovation and growth.
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

export default TeamMembers;

