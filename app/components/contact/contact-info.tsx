"use client"

import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'

const contactItems = [
  { icon: FiMapPin, label: 'Address', value: '123 Business Street, City, Country, ZIP' },
  { icon: FiPhone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: FiMail, label: 'Email', value: 'info@example.com' },
  { icon: FiClock, label: 'Hours', value: 'Monday - Friday, 9am - 5pm' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function ContactInfo() {
  return (
    <div className="bg-white shadow overflow-hidden p-40">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Our Contact Details</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Get in touch with us directly</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <motion.dl
          className="sm:divide-y sm:divide-gray-200"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {contactItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <item.icon className="mr-2 text-indigo-500" />
                {item.label}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.value}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </div>
  )
}

