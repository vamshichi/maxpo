import React from "react";

const EventHighlights: React.FC = () => {
  const schedule = [
    { time: "10:00 AM", event: "Opening Ceremony" },
    { time: "11:30 AM", event: "Keynote Speech: John Doe" },
    { time: "1:00 PM", event: "Networking Session" },
    { time: "3:00 PM", event: "Panel Discussion: Future of Tech" },
    { time: "5:00 PM", event: "Closing Remarks" },
  ];

  const speakers = [
    {
      name: "Jane Smith",
      image: "/images/speaker1.jpg",
      title: "AI Specialist",
    },
    {
      name: "Robert Brown",
      image: "/images/speaker2.jpg",
      title: "Tech Innovator",
    },
    {
      name: "Emily Davis",
      image: "/images/speaker3.jpg",
      title: "Entrepreneur",
    },
  ];

  return (
    <section id="highlights" className="relative bg-gradient-to-b from-gray-100 to-gray-300 py-16">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Event Highlights</h2>
          <p className="text-lg text-gray-600 mt-2">
            Experience the most exciting moments of the event.
          </p>
        </div>

        {/* Schedule Snapshot */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-2xl transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Interactive Schedule
            </h3>
            <ul className="space-y-4">
              {schedule.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-200 rounded-lg p-4 hover:bg-gray-300 transform hover:translate-x-2 transition duration-300"
                >
                  <span className="text-gray-800 font-semibold">{item.time}</span>
                  <span className="text-gray-600">{item.event}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Past Event Media */}
          <div className="w-full md:w-1/2 relative group">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="/images/event-highlight.jpg"
                alt="Past Event"
                className="w-full h-64 object-cover rounded-lg transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <button className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg transform hover:scale-105">
                  Watch Video
                </button>
              </div>
            </div>
            <p className="text-center text-gray-700 mt-4">Relive past events through images and videos.</p>
          </div>
        </div>

        {/* Keynote Speakers */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Keynote Speakers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="relative group p-6 bg-white rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-24 h-24 rounded-full mx-auto shadow-lg mb-4"
                />
                <h4 className="text-xl font-semibold text-center text-gray-800">{speaker.name}</h4>
                <p className="text-center text-gray-600">{speaker.title}</p>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 group-hover:opacity-80 transition duration-500 flex items-center justify-center">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg transform hover:scale-110">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
