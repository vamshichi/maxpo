'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-300 via-blue-50 to-blue-100 text-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Join Us and Experience Excellence
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Don’t miss the opportunity to be a part of an extraordinary event. Register now to secure your spot, and check out the schedule to plan your experience!
        </p>
        <div className="flex justify-center space-x-6">
          <Link href="/register">
            <p className="bg-yellow-500 text-black py-4 px-10 rounded-full text-lg font-semibold shadow-lg transition transform hover:bg-yellow-600 hover:scale-110">
              Register Now
            </p>
          </Link>
          {/* <Link href="/schedule">
            <p className="bg-transparent border-2 border-yellow-500 text-yellow-500 py-4 px-10 rounded-full text-lg font-semibold shadow-lg transition transform hover:bg-yellow-500 hover:text-black hover:scale-110">
              View Schedule
            </p>
          </Link> */}
        </div>
      </div>
    </section>
  );
}
