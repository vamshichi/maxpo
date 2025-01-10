'use client';

import React, { useEffect, useState } from "react";

const UpcomingEvents: React.FC = () => {
  const events = [
    {
      title: "International PropTech Conference",
      location: "Dubai World Trade Center, UAE",
      date: "March 15, 2025",
      time: "10:00 AM - 5:00 PM",
      image: "/path/to/proptech-conference.jpg", // Add image path here
    },
    {
      title: "Tech Innovation Summit",
      location: "Marina Bay Sands, Singapore",
      date: "April 20, 2025",
      time: "9:00 AM - 4:00 PM",
      image: "/path/to/tech-innovation-summit.jpg", // Add image path here
    },
    {
      title: "Global Energy Forum",
      location: "Riyadh Expo Center, Saudi Arabia",
      date: "May 5, 2025",
      time: "11:00 AM - 6:00 PM",
      image: "/path/to/global-energy-forum.jpg", // Add image path here
    },
  ];

  const [countdowns, setCountdowns] = useState<{ [key: number]: string }>({});

  // Function to calculate the countdown from the current date and time
  const calculateCountdown = (eventDate: string, eventTime: string) => {
    const eventDateTime = new Date(`${eventDate} ${eventTime}`);
    const now = new Date();
    const timeDiff = eventDateTime.getTime() - now.getTime();

    // If the event has already passed, return "Event Started"
    if (timeDiff <= 0) return "Event Started";

    const days = Math.floor(timeDiff / (1000 * 3600 * 24));
    const hours = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedCountdowns = events.reduce((acc, event, index) => {
        acc[index] = calculateCountdown(event.date, event.time);
        return acc;
      }, {} as { [key: number]: string });

      setCountdowns(updatedCountdowns);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="upcoming-events"
      className="bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 py-40"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">Upcoming Events</h2>
          <p className="text-lg text-gray-950">
            Join us at these world-class events to connect, innovate, and grow.
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-blue-950 rounded-xl p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl group relative"
            >
              {/* Event Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-xl border border-blue-600 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Event Title */}
              <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>

              {/* Event Details */}
              <p className="text-white-300 text-sm mb-2">
                <i className="fas fa-map-marker-alt mr-2"></i> {event.location}
              </p>
              <p className="text-white-300 text-sm mb-2">
                <i className="fas fa-calendar-alt mr-2"></i> {event.date}
              </p>
              <p className="text-white-300 text-sm mb-2">
                <i className="fas fa-clock mr-2"></i> {event.time}
              </p>

              {/* Countdown Timer */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
                <strong>Countdown:</strong> {countdowns[index] || "Event Started"}
              </div>

              {/* Call-to-Action Button */}
              <div className="mt-6">
                <button className="px-6 py-2 bg-yellow-500 font-semibold text-black rounded-lg hover:bg-green-500 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
