"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiUser, FiMail, FiPhone, FiMapPin, FiMessageSquare } from 'react-icons/fi'

const inputVariants = {
  focus: { scale: 1.05, transition: { type: 'spring', stiffness: 300 } },
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    location: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      location: '',
      message: ''
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6 bg-slate-300 p-40">
        <motion.div variants={inputVariants} whileFocus="focus">
          <label htmlFor="fullName" className=" text-sm font-medium text-gray-700 mb-1 flex items-center space-x-2">
            <FiUser className="text-gray-500" />
            <span>Full Name</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 "
          />
        </motion.div>
        <motion.div variants={inputVariants} whileFocus="focus">
          <label htmlFor="email" className=" text-sm font-medium text-gray-700 mb-1 flex items-center space-x-2">
            <FiMail className="text-gray-500" />
            <span>Email</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3"
          />
        </motion.div>
        <motion.div variants={inputVariants} whileFocus="focus">
          <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700 mb-1 flex items-center space-x-2">
            <FiPhone className="text-gray-500" />
            <span>Phone Number</span>
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3"
          />
        </motion.div>
        <motion.div variants={inputVariants} whileFocus="focus">
          <label htmlFor="location" className="text-sm font-medium text-gray-700 mb-1 flex items-center space-x-2">
            <FiMapPin className="text-gray-500" />
            <span>Location</span>
          </label>
          <input
            id="location"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3"
          />
        </motion.div>
        <motion.div variants={inputVariants} whileFocus="focus">
          <label htmlFor="message" className=" text-sm font-medium text-gray-700 mb-1 flex items-center space-x-2">
            <FiMessageSquare className="text-gray-500" />
            <span>Message</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </motion.div>
      </form>
    </motion.div>
  )
}

