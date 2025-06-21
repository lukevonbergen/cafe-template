import Image from 'next/image';
import FindUs from '@/components/findus/FindUs_1';
import { siteConfig } from '@/config/siteConfig';

export const metadata = siteConfig.metadata.contact;

export default function ContactPage() {
  return (
    <main>
      {/* Intro Section */}
      <section className="bg-[#f3e9dc] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5E3023] mb-6">We’d Love to Hear from You</h1>
          <p className="text-lg text-[#362415] max-w-2xl mx-auto">
            Whether you’re booking a table, asking about allergens or just saying hello — we’re always here.
          </p>
        </div>
      </section>

      {/* Contact Info with Image */}
      <section className="py-16 px-6 md:px-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Contact Details */}
          <div>
            <h2 className="text-2xl font-semibold text-[#5E3023] mb-6">Where to Find Us</h2>
            <p className="text-md text-[#362415] mb-4">
              You’ll find us on Castle Street in the heart of High Wycombe.
              Pop in for coffee, cocktails or one of our many events.
            </p>
            <p className="text-md text-gray-700 mb-4">
              <strong>Address:</strong><br />
              9 Castle Street, High Wycombe HP13 6RZ, United Kingdom
            </p>
            <p className="text-md text-gray-700 mb-4">
              <strong>Phone:</strong><br />
              <a href="tel:+441494123456" className="text-[#5E3023] hover:underline">01494 123456</a>
            </p>
            <p className="text-md text-gray-700">
              <strong>Email:</strong><br />
              <a href="mailto:hello@thefrontroomhw.co.uk" className="text-[#5E3023] hover:underline">hello@thefrontroomhw.co.uk</a>
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
