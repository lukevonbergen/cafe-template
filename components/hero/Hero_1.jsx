import Image from 'next/image';
import { Coffee, Users, Heart } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

const iconMap = {
  Coffee: <Coffee className="w-5 h-5 text-[#4b2e2e]" />,
  Users: <Users className="w-5 h-5 text-[#4b2e2e]" />,
  Heart: <Heart className="w-5 h-5 text-[#4b2e2e]" />,
};

export default function HeroSection() {
  const hero = siteConfig.hero;

  return (
    <section className="bg-[#f9f7f4] py-24 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#4b2e2e] leading-tight mb-6">{hero.heading}</h1>
          <p className="text-lg text-gray-700 mb-8">{hero.subheading}</p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
            <a href={hero.ctaPrimary.href} className="bg-[#4b2e2e] text-white px-6 py-3 rounded-full font-medium shadow hover:opacity-90 transition">
              {hero.ctaPrimary.label}
            </a>
            <a href={hero.ctaSecondary.href} className="border border-[#4b2e2e] text-[#4b2e2e] px-6 py-3 rounded-full font-medium hover:bg-[#4b2e2e]/10 transition">
              {hero.ctaSecondary.label}
            </a>
          </div>
          <div className="flex justify-center lg:justify-start gap-6 text-sm text-gray-600">
            {hero.values.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                {iconMap[item.icon]}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <div className="relative w-full max-w-md mx-auto">
            <Image src={hero.image} alt="Hero Image" width={600} height={400} className="rounded-2xl shadow-lg object-cover" />
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-white text-xs px-4 py-1 rounded-full shadow border font-semibold text-gray-600 tracking-wide">
              {hero.tagline}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}