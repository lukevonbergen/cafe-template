import { siteConfig } from '@/config/siteConfig';

export default function AboutUs() {
  const { heading, subheading, features } = siteConfig.about;

  return (
    <section className="py-24 px-6 md:px-12 bg-white text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 tracking-tight ${siteConfig.styles.textPrimary}`}>
          {heading}
        </h2>
        <p className={`text-lg md:text-xl ${siteConfig.styles.textSubtle} mb-10 max-w-3xl mx-auto`}>
          {subheading}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow text-left">
              <h3 className={`text-xl font-semibold mb-2 ${siteConfig.styles.textPrimary}`}>
                {feature.title}
              </h3>
              <p className={`${siteConfig.styles.textMuted}`}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}