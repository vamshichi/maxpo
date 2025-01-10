'use client'

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-200 py-20 px-6 md:px-20 lg:px-40">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">About Us</h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover what makes us a trusted name in global exhibitions and events.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-blue-700">Your Partner in Excellence</h3>
          <p className="text-gray-700 leading-relaxed">
            Maxpo Exhibitions Private Limited specializes in crafting world-class trade shows, 
            conferences, and events that empower businesses to thrive in global markets. With an 
            unwavering commitment to excellence, we elevate brands, foster valuable partnerships, 
            and unlock new opportunities in diverse industries.
          </p>
        </div>
        {/* Expertise Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-green-700">Our Expertise</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                ✓
              </span>
              <p className="text-gray-700">Trade Shows</p>
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                ✓
              </span>
              <p className="text-gray-700">Conferences</p>
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                ✓
              </span>
              <p className="text-gray-700">Special Events</p>
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                ✓
              </span>
              <p className="text-gray-700">Award Ceremonies</p>
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                ✓
              </span>
              <p className="text-gray-700">Accredited Programs</p>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            From dynamic exhibitions to impactful conferences and bespoke special events, Maxpo Exhibitions 
            redefines success through tailor-made experiences. Trust us to deliver innovative and professionally 
            managed events that leave a lasting impression worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
