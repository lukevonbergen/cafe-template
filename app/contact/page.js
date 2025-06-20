import Image from 'next/image';
import FindUs from '@/components/findus/FindUs_1';
import { siteConfig } from '@/config/siteConfig';

export const metadata = siteConfig.metadata.contact;

export default function ContactPage() {
  return (
    <main>
      {/* Intro Section */}
      <section className="bg-[#f9f7f4] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-900 mb-6">We’d Love to Hear from You</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Whether you’re booking a table, asking about allergens, or just saying hello — we’re always here.
          </p>
        </div>
      </section>

      {/* Contact Info with Image */}
      <section className="py-16 px-6 md:px-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Contact Details */}
          <div>
            <h2 className="text-2xl font-semibold text-sky-900 mb-6">Where to Find Us</h2>
            <p className="text-md text-gray-700 mb-4">
              You’ll find us on Ocean View Terrace — just a short stroll from the Brighton Pier.
              Whether you're stopping in for a flat white or a full brunch, we're right by the sea.
            </p>
            <p className="text-md text-gray-700 mb-4">
              <strong>Address:</strong><br />
              23 Ocean View Terrace, Brighton BN1 1AA, United Kingdom
            </p>
            <p className="text-md text-gray-700 mb-4">
              <strong>Phone:</strong><br />
              <a href="tel:+441273123456" className="text-sky-900 hover:underline">01273 123456</a>
            </p>
            <p className="text-md text-gray-700">
              <strong>Email:</strong><br />
              <a href="mailto:hello@seasidebrew.co.uk" className="text-sky-900 hover:underline">hello@seasidebrew.co.uk</a>
            </p>
          </div>

          {/* Right: Café Image */}
          <div>
            <Image
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9e/b1/e0/photo1jpg.jpg?w=1000&h=-1&s=1"
              alt="Friendly café interior"
              width={600}
              height={400}
              className="rounded-xl shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Google Map Embed */}
      <FindUs />
    </main>
  );
}
