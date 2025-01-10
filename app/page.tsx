'use client'

import { motion } from 'framer-motion';
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

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.6 }
};

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <motion.div variants={fadeInUp}>
        <Hero />
      </motion.div>
      {/* <UpcomingEvents /> */}
      <MultipleEventCountdown />
      <motion.div variants={fadeInUp}>
        <About />
      </motion.div>
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
    </motion.div>
  );
}