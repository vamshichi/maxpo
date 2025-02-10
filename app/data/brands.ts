import { StaticImageData } from 'next/image';
import fps from '@/app/images/brands/fps.png'
import ips from '@/app/images/brands/ipsblue.png'
import gmec from '@/app/images/brands/gmec logo.jpg'


export interface Brand {
  name: string;
  logo: string | StaticImageData;
  website: string;
  description: string;
  color: string;
}

export const brands: Brand[] = [
  {
    name: "India Property Show",
    logo: ips,
    website: "https://www.indiapropertyshow.in/",
    description: "Innovative tech solutions for tomorrow's challenges",
    color: "#3B82F6" // blue
  },
  {
    name: "Future Proptech Summit",
    logo: fps,
    website: "https://www.futureproptechsummit.com/",
    description: "Sustainable products for a greener future",
    color: "#3A82F9" // green
  },
  {
    name: "Gmec Exhibitions",
    logo: gmec,
    website: "https://gmecexhibitions.in/",
    description: "Where style meets comfort in every thread",
    color: "#EC4899" // pink
  },
//   {
//     name: "Jubilant Media",
//     logo: "/placeholder.svg?height=100&width=100",
//     website: "https://gourmetdelight.example.com",
//     description: "Exquisite flavors for the discerning palate",
//     color: "#F59E0B" // amber
//   }
];

