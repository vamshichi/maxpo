import Image from 'next/image';

const events = [
  {
    title: 'India Property Show (Singapore August 2024)',
    description:
      "India's Leading B2B Property Exhibition, India Property Show 2024, was held on August 17th and 18th in Singapore. The event was a fabulous success, featuring not only the latest in real estate developments but also a series of cultural activities.",
    images: [
      '/images/event1_1.jpg',
      '/images/event1_2.jpg',
      '/images/event1_3.jpg',
      '/images/event1_4.jpg',
    ],
  },
  {
    title: 'India Property Show (Dubai June 2024)',
    description:
      "India's Leading B2B Property Exhibition, India Property Show 2024, was held on June 8th and 9th at the Ritz-Carlton in Dubai. The event showcased the latest in real estate developments and innovative solutions, connecting key industry professionals.",
    images: [
      '/images/event2_1.jpg',
      '/images/event2_2.jpg',
      '/images/event2_3.jpg',
      '/images/event2_4.jpg',
    ],
  },
  {
    title: 'GMEC 2024',
    description:
      "India's Leading B2B Hospital Needs Exhibition, GMEC 2024, held from May 17-19 at Palace Grounds, Bengaluru. Latest in medical equipment and innovative solutions, and connect with key industry professionals.",
    images: [
      '/images/event3_1.jpg',
      '/images/event3_2.jpg',
      '/images/event3_3.jpg',
      '/images/event3_4.jpg',
    ],
  },
  {
    title: 'India Property Show (Santa Clara 2024)',
    description:
      "This event was a huge success in Santa Clara, US, attracting builders, investors, and visitors from all over. With rave reviews from builders and valuable insights for visitors, it was truly a remarkable event that left a lasting impact on the real estate industry.",
    images: [
      '/images/event4_1.jpg',
      '/images/event4_2.jpg',
      '/images/event4_3.jpg',
      '/images/event4_4.jpg',
    ],
  },
  {
    title: 'India Property Show (Frisco 2024)',
    description:
      "The India Property Show held in Frisco on 20th-21st April 2024 at Hyatt Regency was a resounding success. It attracted builders, investors, and visitors from across the region. With rave reviews from builders and valuable insights for visitors, the event made a lasting impact on the real estate industry.",
    images: [
      '/images/event5_1.jpg',
      '/images/event5_2.jpg',
      '/images/event5_3.jpg',
      '/images/event5_4.jpg',
    ],
  },
  // Add more events as necessary
];

export default function PastEvents() {
  return (
    <section className="py-16 bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Past Events</h2>

        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{event.title}</h3>
              <p className="text-gray-600 mt-4">{event.description}</p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {event.images.map((image, idx) => (
                  <div key={idx} className="relative h-48 bg-gray-300 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`Event ${index + 1} Image ${idx + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
