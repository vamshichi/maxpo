import React from "react";

const Exhibitors: React.FC = () => {
  const categories = [
    { name: "Residential", color: "bg-blue-200" },
    { name: "Commercial", color: "bg-green-200" },
    { name: "Technology", color: "bg-purple-200" },
    { name: "Sustainability", color: "bg-yellow-200" },
  ];

  const featuredExhibitors = [
    { name: "Exhibitor A", logo: "/images/exhibitor1.png" },
    { name: "Exhibitor B", logo: "/images/exhibitor2.png" },
    { name: "Exhibitor C", logo: "/images/exhibitor3.png" },
    { name: "Exhibitor D", logo: "/images/exhibitor4.png" },
  ];

  return (
    <section id="exhibitors" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Exhibitors</h2>
          <p className="text-lg text-gray-600 mt-2">
            Discover leading exhibitors showcasing their latest innovations.
          </p>
        </div>

        {/* Featured Exhibitors */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Featured Exhibitors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredExhibitors.map((exhibitor, index) => (
              <div
                key={index}
                className="group p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105"
              >
                <img
                  src={exhibitor.logo}
                  alt={exhibitor.name}
                  className="h-16 w-auto mx-auto mb-4 group-hover:opacity-80"
                />
                <h4 className="text-xl font-semibold text-center text-gray-800">
                  {exhibitor.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Explore Categories
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`p-4 rounded-full ${category.color} shadow-md transform transition hover:scale-110`}
              >
                <span className="text-lg font-medium text-gray-800">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/exhibitors"
            className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition text-lg font-semibold"
          >
            View All Exhibitors
          </a>
        </div>
      </div>
    </section>
  );
};

export default Exhibitors;
