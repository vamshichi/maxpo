import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <p className="text-3xl font-extrabold hover:text-white transition duration-300">
              <span className="text-yellow-400">Event</span> Expo
            </p>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-10">
          <Link href="/">
            <p className="text-lg hover:text-yellow-400 transition duration-300 transform hover:scale-105">
              Home
            </p>
          </Link>
          <Link href="/about">
            <p className="text-lg hover:text-yellow-400 transition duration-300 transform hover:scale-105">
              About
            </p>
          </Link>
          <Link href="/events">
            <p className="text-lg hover:text-yellow-400 transition duration-300 transform hover:scale-105">
              Events
            </p>
          </Link>
          <Link href="/blog">
            <p className="text-lg hover:text-yellow-400 transition duration-300 transform hover:scale-105">
              Blog
            </p>
          </Link>
          <Link href="/contact">
            <p className="text-lg hover:text-yellow-400 transition duration-300 transform hover:scale-105">
              Contact
            </p>
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-6">
          <Link href="/register">
            <p className="bg-yellow-400 text-gray-900 py-2 px-6 rounded-full text-lg font-semibold transition transform hover:bg-yellow-500 hover:scale-105">
              Register Now
            </p>
          </Link>
          <Link href="/schedule">
            <p className="bg-transparent border-2 border-white py-2 px-6 rounded-full text-lg font-semibold text-white transition transform hover:bg-white hover:text-gray-900 hover:scale-105">
              View Schedule
            </p>
          </Link>
        </div>
      </div>

      {/* Animated Background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-yellow-500 opacity-20 blur-xl rounded-full animate-pulse"></div>
    </header>
  );
};

export default Header;
