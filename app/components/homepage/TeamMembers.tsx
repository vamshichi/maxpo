import React from 'react';
import Image from 'next/image';
import MotionWrapper from '@/app/components/MotionWrapper'; // Import the wrapper

import Anu from '@/app/images/team/anu.jpg';
import Inayat from '@/app/images/team/inayat.png';
import Zia from '@/app/images/team/zia.png';
import Omer from '@/app/images/team/omer sait.jpeg'

const teamData = [
  { name: 'Inayat Sait', role: 'CMD', image: Inayat },
  { name: 'Zia Sait', role: 'MD & Co-Founder', image: Zia },
  { name: 'Omer Sait', role: 'Director', image: Omer },
  { name: 'Annu Muddusetti', role: 'International Sales Director', image: Anu },
];

const TeamMembers = () => {
  return (
    <section className="bg-white text-black py-40">
      <div className="max-w-7xl mx-auto text-center">
        <MotionWrapper>
          <h2 className="text-4xl font-bold text-navy-blue mb-12">
            We Have Professional & Expert Management
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamData.map((member, index) => (
            <MotionWrapper key={index} delay={index * 0.8}>
              <div className="bg-light-gray p-8 rounded-lg shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-6"
                />
                <h3 className="text-navy-blue text-2xl font-semibold mb-3">{member.name}</h3>
                <p className="text-dark-gray text-sm mb-4">{member.role}</p>
                <button className="bg-navy-blue text-bright-green py-2 px-6 rounded-lg hover:bg-bright-green hover:text-navy-blue transition">
                  Learn More
                </button>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
