import Image from 'next/image'
import { Coffee, Users, Heart } from 'lucide-react'
import { siteConfig } from '@/config/siteConfig'

const iconMap = {
  Coffee: <Coffee className={`w-5 h-5 text-${siteConfig.brand.primary}`} />,
  Users: <Users className={`w-5 h-5 text-${siteConfig.brand.primary}`} />,
  Heart: <Heart className={`w-5 h-5 text-${siteConfig.brand.primary}`} />,
}

export default function HeroSection() {
  const hero = siteConfig.hero

  return (
    <section className={`relative -mt-28 min-h-screen flex items-center justify-center text-center ${siteConfig.fonts.baseClass}`}>
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/30" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12">
        <h1 className={`text-5xl md:text-6xl font-extrabold mb-6 ${siteConfig.styles.textPrimary}`}>{hero.heading}</h1>
        <p className={`text-lg md:text-xl mb-8 ${siteConfig.styles.textSubtle}`}>{hero.subheading}</p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href={hero.ctaPrimary.href}
            className={`${siteConfig.styles.bgPrimary} ${siteConfig.styles.textLight} px-6 py-3 rounded-full font-medium shadow hover:opacity-90 transition`}
          >
            {hero.ctaPrimary.label}
          </a>
          <a
            href={hero.ctaSecondary.href}
            className={`border border-${siteConfig.brand.primary} ${siteConfig.styles.textPrimary} px-6 py-3 rounded-full font-medium hover:bg-${siteConfig.brand.primary}/10 transition`}
          >
            {hero.ctaSecondary.label}
          </a>
        </div>
        <div className="flex justify-center gap-6 text-sm text-gray-600">
          {hero.values.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              {iconMap[item.icon]}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      {hero.tagline && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-amber-800 text-white text-sm px-4 py-1 rounded-full shadow-lg font-semibold tracking-wide">
          {hero.tagline}
        </div>
      )}
    </section>
  )
}
