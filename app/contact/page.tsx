'use client'

import ContactInfo from "../components/contact/contact-info"
import ContactUs from "../components/contact/ContactUs"




export default function AboutPage() {
  return (
      <div>
        <div className=" mx-auto px-40 py-40 bg-slate-50 text-black">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="mb-6 text-lg">
            We'd love to hear from you! Whether you have a question about our services, 
            need support, or just want to say hello, don't hesitate to reach out. 
            Fill out the form below, and we'll get back to you as soon as possible.
          </p>
          </div>
        </div>
        </div>
       <ContactUs />
       <ContactInfo />
      </div>
  )
}

