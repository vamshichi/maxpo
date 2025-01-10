import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '@/app/icon.png'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-950 text-white py-6 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src={Logo} // Replace with the actual path to your logo
              alt="Maxpo Exhibitions Logo"
              className="h-10 w-auto hover:opacity-80 transition duration-300"
            />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-10">
          <Link href="/">
            <p className="text-lg hover:text-bright-green transition duration-300 transform hover:scale-105">
              Home
            </p>
          </Link>
          <Link href="/about">
            <p className="text-lg hover:text-bright-green transition duration-300 transform hover:scale-105">
              About
            </p>
          </Link>
          <Link href="/events">
            <p className="text-lg hover:text-bright-green transition duration-300 transform hover:scale-105">
              Events
            </p>
          </Link>
          <Link href="/contact">
            <p className="text-lg hover:text-bright-green transition duration-300 transform hover:scale-105">
              Contact
            </p>
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-6">
          <Link href="/register">
            <p className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg font-semibold transition transform hover:bg-light-green hover:scale-105">
              REGISTER NOW
            </p>
          </Link>
        </div>
      </div>

      {/* Animated Background */}
      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-bright-green opacity-20 blur-xl rounded-full animate-pulse"></div> */}
    </header>
  );
};

export default Header;
