import Reviews from '@/components/testimonials/Testimonials_1'
import { siteConfig } from '@/config/siteConfig'

export const metadata = siteConfig.metadata.about;

export default function AboutPage() {
  return (
    <main className="bg-[#f3e9dc] py-24 px-6 md:px-12 text-[#362415]">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#5E3023] mb-6">Our Story</h1>
        <p className="text-lg">
          The Front Room is a community-focused coffee lounge filled with plants, art and comfy sofas.
          We love great coffee, local makers and welcoming everyone – dogs included!
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Mission */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-[#5E3023]">Sustainably Minded</h2>
          <p className="leading-relaxed">
            We keep things green by sourcing locally and reducing waste wherever possible.
            From recycling coffee grounds to using eco packaging, caring for the planet is at our core.
          </p>
        </div>

        {/* Family/Local focus */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-[#5E3023]">Part of the Community</h2>
          <p className="leading-relaxed">
            We work closely with local makers and businesses and host regular workshops and events.
            Everyone is welcome – a safe, inclusive space to meet, create and relax.
          </p>
        </div>

        {/* Commitment */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-[#5E3023]">Work From the Lounge</h2>
          <p className="leading-relaxed">
            Weekdays 8&nbsp;am–7&nbsp;pm you can swap the home office for unlimited drinks, free wifi and plenty of plug points – all for £12.50 a day.
          </p>
        </div>

        {/* Invitation */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-[#5E3023]">Pop In Anytime</h2>
          <p className="leading-relaxed">
            Open seven days a week with comfy sofas, a pet lizard and lots of greenery – we’re always ready with a warm welcome.
          </p>
        </div>
      </div>
      <Reviews />
    </main>
  );
}
