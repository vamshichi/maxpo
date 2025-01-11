'use client';

import React, { useState, useEffect } from "react";
import { CalendarDays, MapPin, Clock, ExternalLink } from 'lucide-react';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Countdown from "react-countdown";

interface Event {
  id: string;
  name: string;
  location: string;
  date: string;
  eventDate: Date;
  image: string | StaticImageData;
  link: string;
  logo: string;
  floorPlanUrl?: string;
  brochureUrl?: string;
}

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const CountdownRenderer = ({
    days,
    hours,
    minutes,
    seconds,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }) => (
    <div className="flex justify-around items-center bg-gradient-to-r from-indigo-500 to-blue-950 text-white p-3 rounded-lg shadow-lg">
      {[
        { value: days, label: "Days" },
        { value: hours, label: "Hours" },
        { value: minutes, label: "Minutes" },
        { value: seconds, label: "Seconds" },
      ].map(({ value, label }) => (
        <div key={label} className="text-center">
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-sm uppercase">{label}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-96 bg-gradient-to-b from-white to-gray-100 rounded-xl shadow-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col">
      <Link href={event.link} className="relative h-56 group">
        <Image
          src={event.image}
          alt={event.name}
          layout="fill"
          className=" group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold">{event.name}</h3>
          <div className="text-sm flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </div>
      </Link>
      <div className="p-5 flex flex-col space-y-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <CalendarDays className="w-5 h-5 text-blue-600" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <Clock className="w-5 h-5 text-blue-600" />
          <span>{new Date(event.eventDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        {isClient ? (
          <Countdown date={event.eventDate} renderer={CountdownRenderer} />
        ) : (
          <CountdownRenderer days={0} hours={0} minutes={0} seconds={0} />
        )}
        <a
          href="#register"
          className="block w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-center font-semibold py-3 rounded-lg hover:from-yellow-600 hover:to-orange-700 transition duration-300"
        >
          Register Now
        </a>
        <div className="flex justify-between text-blue-600 text-sm">
          {event.floorPlanUrl && (
            <Link href={event.floorPlanUrl} className="flex items-center hover:text-blue-800">
              <ExternalLink className="w-4 h-4 mr-1" />
              Floor Plan
            </Link>
          )}
          {event.brochureUrl && (
            <Link href={event.brochureUrl} className="flex items-center hover:text-blue-800">
              <ExternalLink className="w-4 h-4 mr-1" />
              Brochure
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
