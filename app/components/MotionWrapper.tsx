import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number; // Optional delay for staggering
}

const MotionWrapper = ({ children, delay = 0 }: MotionWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
