import { siteConfig } from '@/config/siteConfig';

export default function HowToFindUs() {
  const { heading, text, address, openingHours, mapEmbedUrl } = siteConfig.location;

  return (
    <section className={`${siteConfig.styles.bgLight} py-24 px-6 md:px-12 border-t ${siteConfig.styles.borderDark}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className={`md:w-1/2 text-center md:text-left ${siteConfig.styles.textPrimary}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            {heading}
          </h2>
          <p className={`text-lg ${siteConfig.styles.textSubtle} mb-4`}>{text}</p>
          <p className={`text-md ${siteConfig.styles.textSubtle} leading-relaxed`}>
            <strong>Address:</strong><br />
            {address.map((line, i) => <span key={i}>{line}<br /></span>)}
            <br />
            <strong>Opening Hours:</strong><br />
            {openingHours.map((line, i) => <span key={i}>{line}<br /></span>)}
          </p>
        </div>
        <div className="md:w-1/2 w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-md border">
          <iframe
            title="Location Map"
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}