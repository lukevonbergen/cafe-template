import Reviews from '@/components/testimonials/Testimonials_1'
import { siteConfig } from '@/config/siteConfig'

export const metadata = siteConfig.metadata.about;

export default function AboutPage() {
  return (
    <main className="bg-[#f9f7f4] py-24 px-6 md:px-12 text-[#4b2e2e]">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#4b2e2e] mb-6">A True York Favourite</h1>
        <p className="text-lg">
          Nestled just steps from York Minster, Wheldrakes is a cosy, independent café serving artisan coffee, fresh brunch, and home-baked cakes — all with a personal touch.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Quality Ingredients */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-[#4b2e2e]">Freshly Made Daily</h2>
          <p className="leading-relaxed">
            From buttery pastries to scones, brownies, and loaded brunch plates — everything is made from scratch in-house using quality, local ingredients.
          </p>
        </div>

        {/* Independent & Local */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-[#4b2e2e]">Proudly Independent</h2>
          <p className="leading-relaxed">
            Family-run and locally loved, we take pride in offering a personal, welcoming experience to every guest — whether it’s your first visit or your fiftieth.
          </p>
        </div>

        {/* Warm Atmosphere */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-[#4b2e2e]">A Space to Slow Down</h2>
          <p className="leading-relaxed">
            Whether you're catching up with friends, treating yourself to a quiet morning, or fuelling up before exploring the city — Wheldrakes is your perfect pit stop.
          </p>
        </div>

        {/* Invitation */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-[#4b2e2e]">Visit Us Anytime</h2>
          <p className="leading-relaxed">
            We’re open 5 days a week, with a charming location on Goodramgate. Pop in for coffee, brunch or cake — no booking needed.
          </p>
        </div>
      </div>
      <Reviews />
    </main>
  );
}
