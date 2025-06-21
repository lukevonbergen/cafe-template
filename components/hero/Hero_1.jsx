import Image from 'next/image'
import { siteConfig } from '@/config/siteConfig'

export default function HeroSection() {
  const hero = siteConfig.hero

  return (
    <section className="relative min-h-[calc(100vh-104px)] flex items-center justify-center text-white">
      {/* Background image */}
      <Image
        src={hero.image}
        alt={hero.imageAlt || 'Coffee background'}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Main heading and mobile blurb */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight uppercase tracking-wide">
          LIFE BEGINS <br />
          AFTER <span className="text-[#f7785c]">FLAVOUR</span>
        </h1>

        {/* Mobile blurb below heading */}
        <p className="mt-6 text-sm text-white/80 max-w-md mx-auto block md:hidden">
          Elevate your daily ritual with coffee that’s more than a drink — it’s a connection to nature, tradition, and the people who make it extraordinary.
        </p>
      </div>

      {/* Opening hours - bottom left on desktop, centered stack on mobile */}
      <div className="absolute bottom-6 left-0 w-full px-6 md:w-auto md:left-6 flex flex-col md:flex-col md:gap-3 md:items-start items-center justify-center gap-2 z-10">
        <div className="bg-white text-black px-4 py-2 rounded-full shadow text-sm font-semibold">
          MON – THURS <span className="ml-4">09.00–21.00</span>
        </div>
        <div className="bg-black/80 text-white px-4 py-2 rounded-full shadow border border-white text-sm font-semibold">
          FRI – SUN <span className="ml-4">09.00–23.00</span>
        </div>
      </div>

      {/* Desktop-only blurb bottom right */}
      <div className="hidden md:block absolute bottom-8 right-6 max-w-xs text-right text-sm text-white/80 z-10">
        Elevate your daily ritual with coffee that’s more than a drink — it’s a connection to nature, tradition, and the people who make it extraordinary.
      </div>
    </section>
  )
}