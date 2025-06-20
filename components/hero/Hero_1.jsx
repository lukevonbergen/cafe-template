// HeroSection.jsx
import Image from 'next/image';
import { Coffee, Users, Heart } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

const iconMap = {
  Coffee: <Coffee className={`w-5 h-5 ${siteConfig.styles.textPrimary}`} />,
  Users: <Users className={`w-5 h-5 ${siteConfig.styles.textPrimary}`} />,
  Heart: <Heart className={`w-5 h-5 ${siteConfig.styles.textPrimary}`} />,
};

export default function HeroSection() {
  const hero = siteConfig.hero;

  return (
    <section
      className={`${siteConfig.styles.bgLight} relative min-h-screen flex items-center py-24 px-6 md:px-12 ${siteConfig.fonts.baseClass}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-orange-100 to-transparent pointer-events-none" />
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-300/50 rounded-full blur-2xl hidden md:block" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className={`text-4xl md:text-5xl font-extrabold ${siteConfig.styles.textPrimary} leading-tight mb-6`}>
            {hero.heading}
          </h1>
          <p className={`text-lg ${siteConfig.styles.textSubtle} mb-8`}>{hero.subheading}</p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
            <a
              href={hero.ctaPrimary.href}
              className={`${siteConfig.styles.bgPrimary} ${siteConfig.styles.textLight} px-6 py-3 rounded-full font-medium shadow hover:opacity-90 transition`}
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className={`border border-[${siteConfig.brand.primary}] ${siteConfig.styles.textPrimary} px-6 py-3 rounded-full font-medium hover:bg-[${siteConfig.brand.primary}]/10 transition`}
            >
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
          <div className="relative w-full lg:max-w-xl mx-auto">
            <Image
              src={hero.image}
              alt="Hero Image"
              width={600}
              height={400}
              className="relative rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-black/20" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-amber-800 text-white text-sm px-4 py-1 rounded-full shadow-lg font-semibold tracking-wide">
              {hero.tagline}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
