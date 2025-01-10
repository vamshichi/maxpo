// import React from "react";

// const Testimonials: React.FC = () => {
//   const testimonials = [
//     {
//       quote: "The event was phenomenal! I gained valuable insights and made great connections.",
//       author: "Jane Doe",
//       role: "CEO, TechCorp",
//       image: "/images/testimonial1.jpg",
//     },
//     {
//       quote: "An excellent platform to showcase our innovations and network with industry leaders.",
//       author: "John Smith",
//       role: "Head of Marketing, InnovateNow",
//       image: "/images/testimonial2.jpg",
//     },
//     {
//       quote: "Truly inspiring and well-organized. I’m looking forward to the next event!",
//       author: "Alice Johnson",
//       role: "Founder, Startup World",
//       image: "/images/testimonial3.jpg",
//     },
//   ];

//   const logos = [
//     "/images/logo1.png",
//     "/images/logo2.png",
//     "/images/logo3.png",
//     "/images/logo4.png",
//     "/images/logo5.png",
//   ];

//   return (
//     <section id="testimonials" className="py-16 bg-gradient-to-b from-gray-100 to-gray-200 relative">
//       <div className="container mx-auto px-6">
//         {/* Section Title */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl font-bold text-gray-800">What People Say</h2>
//           <p className="text-lg text-gray-600 mt-2">
//             Hear from our participants and partners about their experiences.
//           </p>
//         </div>

//         {/* Testimonials Slider */}
//         <div className="relative">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="relative group p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
//               >
//                 <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-gray-300">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.author}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <blockquote className="mt-12 text-gray-600 italic text-center">
//                   "{testimonial.quote}"
//                 </blockquote>
//                 <div className="mt-4 text-center">
//                   <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
//                   <p className="text-sm text-gray-500">{testimonial.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Client/Partner Logos */}
//         <div className="mt-16">
//           <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Our Partners</h3>
//           <div className="flex items-center justify-center gap-8 animate-marquee overflow-hidden">
//             {logos.map((logo, index) => (
//               <img
//                 key={index}
//                 src={logo}
//                 alt={`Partner ${index + 1}`}
//                 className="w-24 h-auto object-contain transform hover:scale-110 transition duration-300"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
