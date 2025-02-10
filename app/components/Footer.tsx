'use client'

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer: React.FC = () => {
  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Site Map", href: "/sitemap" },
  ];

  const socialMediaLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
  ];

  const offices = [
    {
      name: "Dubai Office",
      phone: "+971 50 943 1529",
      email: "dubai@maxpo.ae",
    },
    {
      name: "Saudi Arabia Office",
      phone: "+971 50 943 1529",
      email: "saudi@maxpo.ae",
    },
    {
      name: "India Office",
      phone: "+91 9845114655",
      email: "info@maxpo.ae",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-950 text-gray-300 py-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-yellow-500 rounded-full blur-3xl"></div>
          <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-green-500 rounded-full blur-3xl"></div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {offices.map((office, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">{office.name}</h3>
              <p className="text-gray-400 flex items-center justify-center md:justify-start mb-2">
                <MdPhone className="mr-2 text-yellow-500" />
                {office.phone}
              </p>
              <p className="text-gray-400 flex items-center justify-center md:justify-start">
                <MdEmail className="mr-2 text-yellow-500" />
                <a href={`mailto:${office.email}`} className="hover:text-green-400 transition duration-300">
                  {office.email}
                </a>
              </p>
            </div>
          ))}
        </div>

        {/* About Us */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-6">About Us</h3>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Maxpo Exhibitions Private Limited is pioneering excellence in the exhibition industry. We elevate businesses globally through expertly curated trade shows and transformative conferences. Crafting success through tailored experiences, we are the leaders in orchestrating award-worthy ceremonies and securing event accreditations worldwide.
          </p>
        </div>

        {/* Subscribe Section */}
        <div className="mb-16">
          <h3 className="text-center text-3xl font-bold text-white mb-6">Subscribe to Our Newsletter</h3>
          <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-2/3 px-4 py-3 rounded-lg bg-white border border-blue-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-yellow-500 text-black text-lg font-semibold rounded-lg hover:bg-green-400 transition duration-300 hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-6">Quick Links</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {navigationLinks.map((link, index) => (
              <Link key={index} href={link.href} passHref>
                <p className="text-gray-400 hover:text-yellow-500 transition duration-300 hover:scale-110 inline-block">
                  {link.label}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-16">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl p-3 bg-blue-800 rounded-full hover:bg-yellow-500 hover:text-blue-900 transition duration-300 hover:scale-110 inline-block"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Maxpo Exhibitions Private Limited. All Rights Reserved.</p>
          <p className="mt-2">
            <MdLocationOn className="inline-block mr-1" />
            123 Exhibition Street, Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
