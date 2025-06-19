import { siteConfig } from '@/config/siteConfig';

export default function HowToFindUs() {
  const { heading, text, address, openingHours, mapEmbedUrl } = siteConfig.location;

  return (
    <section className="bg-[#f9f7f4] py-24 px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left text-[#4b2e2e]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            {heading}
          </h2>
          <p className="text-lg text-gray-700 mb-4">{text}</p>
          <p className="text-md text-gray-700 leading-relaxed">
            <strong>Address:</strong><br />
            {address.map((line, i) => <>{line}<br /></>)}
            <br />
            <strong>Opening Hours:</strong><br />
            {openingHours.map((line, i) => <>{line}<br /></>)}
          </p>
        </div>
        <div className="md:w-1/2 w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-md border">
          <iframe
            title="Wheldrakes Location"
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