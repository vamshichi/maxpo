'use client'

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/icon.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-950 text-white py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src={Logo}
              alt="Maxpo Exhibitions Logo"
              className="h-8 w-auto md:h-10 hover:opacity-80 transition duration-300"
            />
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
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
        {/* <div className="hidden md:flex items-center space-x-6">
          <Link href="/register">
            <p className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg font-semibold transition transform hover:bg-light-green hover:scale-105">
              REGISTER NOW
            </p>
          </Link>
        </div> */}

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-950 text-white space-y-4 py-4">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <p className="block text-center text-lg hover:text-bright-green transition">
              Home
            </p>
          </Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>
            <p className="block text-center text-lg hover:text-bright-green transition">
              About
            </p>
          </Link>
          <Link href="/events" onClick={() => setIsMenuOpen(false)}>
            <p className="block text-center text-lg hover:text-bright-green transition">
              Events
            </p>
          </Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            <p className="block text-center text-lg hover:text-bright-green transition">
              Contact
            </p>
          </Link>
          <Link href="/register" onClick={() => setIsMenuOpen(false)}>
            <p className="block bg-yellow-500 text-black text-center py-2 rounded-full text-lg font-semibold transition hover:bg-light-green">
              REGISTER NOW
            </p>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
