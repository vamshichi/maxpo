'use client'

import About from "./components/homepage/About";
// import EventHighlights from "./components/homepage/EventHighlights";
// import Exhibitors from "./components/homepage/Exhibitors";
import Hero from "./components/homepage/Hero";
// import Testimonials from "./components/homepage/Testimonials";
// import UpcomingEvents from './components/homepage/UpcomingEvents';
import ExhibitionsPlatform from './components/homepage/ExhibitionsPlatform';
// import TeamMembers from './components/homepage/TeamMembers';
// import MultipleEventCountdown from './components/homepage/MultipleEventCountdown';
import SponsorsSection from './components/homepage/SponsorsSection';
import OurBrands from "./components/homepage/OurBrands";
import ContactDetails from "./components/ContactDetails";



export default function Home() {
  const contactInfo = {
    address: "789 Innovation Boulevard, Future City, FC 98765",
    phone: "+1 (555) 234-5678",
    email: "connect@futureinnovations.com"
  }
  return (
    <div className='bg-slate-200'>
   
        <Hero />
      
      {/* <UpcomingEvents /> */}
      
      
        <About />
        <OurBrands />
        {/* <MultipleEventCountdown /> */}
      <ExhibitionsPlatform />
      <SponsorsSection />
      <ContactDetails contactInfo={contactInfo} />
      {/* <TeamMembers /> */}
      {/* <motion.div variants={fadeInUp}>
        <Exhibitors />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <EventHighlights />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Testimonials />
      </motion.div> */}
      </div>
  );
}