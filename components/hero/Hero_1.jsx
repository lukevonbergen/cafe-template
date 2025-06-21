import Image from 'next/image'
import { siteConfig } from '@/config/siteConfig'

export default function HeroSection() {
  const hero = siteConfig.hero

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white text-center">
      {/* Full-screen background image */}
      <Image
        src={hero.image}
        alt={hero.imageAlt || 'Coffee background'}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Text Content */}
      <div className="relative z-10 max-w-5xl px-6 md:px-12 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight uppercase tracking-wide">
          LIFE BEGINS <br />
          AFTER{' '}
          <span className="text-[#f7785c]">FLAVOUR</span> {/* Highlighted word */}
        </h1>

        {/* Opening hours pill buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <div className="bg-white text-black font-semibold px-4 py-2 rounded-full text-sm shadow-md">
            MON – THURS <span className="ml-4">09.00–21.00</span>
          </div>
          <div className="bg-black text-white font-semibold px-4 py-2 rounded-full text-sm shadow-md border border-white">
            FRI – SUN <span className="ml-4">09.00–23.00</span>
          </div>
        </div>

        {/* Bottom right paragraph */}
        <div className="absolute bottom-8 right-6 max-w-xs text-right text-sm text-white/80">
          Elevate your daily ritual with coffee that’s more than a drink — it’s a connection to nature, tradition, and the people who make it extraordinary.
        </div>
      </div>
    </section>
  )
}