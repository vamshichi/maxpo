'use client'

import About from "./components/homepage/About";
// import EventHighlights from "./components/homepage/EventHighlights";
// import Exhibitors from "./components/homepage/Exhibitors";
import Hero from "./components/homepage/Hero";
// import Testimonials from "./components/homepage/Testimonials";
// import UpcomingEvents from './components/homepage/UpcomingEvents';
import ExhibitionsPlatform from './components/homepage/ExhibitionsPlatform';
import TeamMembers from './components/homepage/TeamMembers';
import MultipleEventCountdown from './components/homepage/MultipleEventCountdown';
import SponsorsSection from './components/homepage/SponsorsSection';



export default function Home() {
  return (
    <div className='bg-slate-200'>
   
        <Hero />
      
      {/* <UpcomingEvents /> */}
      <MultipleEventCountdown />
      
        <About />
  
      <ExhibitionsPlatform />
      <SponsorsSection />
      <TeamMembers />
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