import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';

export default function AboutUs() {
  const { heading, subheading, features } = siteConfig.about;
  const { textPrimary, textSubtle, textMuted, bgLight } = siteConfig.styles;

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md">
          <Image
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/f0/b5/8a/wheldrakes.jpg?w=1000&h=-1&s=1"
            alt="Wheldrakes café counter"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 tracking-tight ${textPrimary}`}>
            {heading}
          </h2>
          <p className={`text-lg md:text-xl ${textSubtle} mb-10`}>
            {subheading}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg border border-gray-100 bg-[#faf8f6] hover:shadow-lg transition-all duration-200"
              >
                <div className="mb-3">
                  {/* Replace with real icon if needed */}
                  <div className="w-10 h-10 rounded-full bg-[#78ADA5] opacity-80 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-bold">
                    {feature.title.charAt(0)}
                  </div>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${textPrimary}`}>
                  {feature.title}
                </h3>
                <p className={`${textMuted}`}>
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}