import { MapPin, Phone, Mail } from 'lucide-react'

interface ContactInfo {
  address: string
  phone: string
  email: string
}

export default function ContactDetails({ contactInfo }: { contactInfo: ContactInfo }) {
  return (
    <section className="w-full max-w-5xl mx-auto p-8 py-40">
      <h2 className="text-4xl font-extrabold text-black mb-12 leading-tight">
        Reach Out <span className="block text-gray-500 text-5xl mt-2">We&apos;re Here for You</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ContactItem
          icon={<MapPin className="h-10 w-10 text-white" />}
          title="Our Location"
          content={contactInfo.address}
        />
        <ContactItem
          icon={<Phone className="h-10 w-10 text-white" />}
          title="Phone"
          content={contactInfo.phone}
          link={`tel:${contactInfo.phone}`}
        />
        <ContactItem
          icon={<Mail className="h-10 w-10 text-white" />}
          title="Email"
          content={contactInfo.email}
          link={`mailto:${contactInfo.email}`}
        />
      </div>
    </section>
  )
}

function ContactItem({ icon, title, content, link }: { icon: React.ReactNode; title: string; content: string; link?: string }) {
  return (
    <div className="flex flex-col items-start space-y-4 group">
      <div className="p-4 bg-blue-950  rounded-full transform transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-gray-500">{title}</h3>
      {link ? (
        <a href={link} className="text-blue-950 hover:text-white transition-colors text-lg">
          {content}
        </a>
      ) : (
        <p className="text-black text-lg">{content}</p>
      )}
    </div>
  )
}

