import { MapPin, Clock, Mail } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function HoursLocationBar() {
  const info = siteConfig.hoursLocation;

  return (
    <section className={`${siteConfig.styles.bgPrimary} text-white py-4 px-6`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{info.hours}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{info.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>{info.email}</span>
        </div>
      </div>
    </section>
  );
}