import { siteConfig } from '@/config/siteConfig';

export default function AboutUs() {
  const { heading, subheading, features } = siteConfig.about;

  return (
    <section className={`${siteConfig.styles.bgLight} py-24 px-6 md:px-12 border-t ${siteConfig.styles.borderLight}`}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 tracking-tight ${siteConfig.styles.textPrimary}`}>
          {heading}
        </h2>
        <p className={`text-lg md:text-xl ${siteConfig.styles.textSubtle} mb-10 max-w-3xl mx-auto`}>
          {subheading}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center md:text-left max-w-sm">
              <h3 className={`text-xl font-semibold ${siteConfig.styles.textPrimary} mb-2`}>{feature.title}</h3>
              <p className={`${siteConfig.styles.textMuted}`}>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}