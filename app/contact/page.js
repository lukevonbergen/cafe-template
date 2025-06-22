import Image from 'next/image';
import FindUs from '@/components/findus/FindUs_1';
import { siteConfig } from '@/config/siteConfig';

export const metadata = siteConfig.metadata.contact;

export default function ContactPage() {
  const { contact } = siteConfig;
  const { intro, details, form, formspreeId } = contact;

  return (
    <main>
      {/* Intro Section */}
      <section className="bg-[#f3e9dc] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5E3023] mb-6">
            {intro.heading}
          </h1>
          <p className="text-lg text-[#362415] max-w-2xl mx-auto">
            {intro.blurb}
          </p>
        </div>
      </section>

      {/* Contact Info + Image */}
      <section className="py-16 px-6 md:px-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-semibold text-[#5E3023] mb-6">Where to Find Us</h2>
            <p className="text-md text-[#362415] mb-4">{details.description}</p>
            <p className="text-md text-gray-700 mb-4">
              <strong>Address:</strong><br />
              {details.address}
            </p>
            <p className="text-md text-gray-700 mb-4">
              <strong>Phone:</strong><br />
              <a href={`tel:${details.phone}`} className="text-[#5E3023] hover:underline">
                {details.phoneDisplay}
              </a>
            </p>
            <p className="text-md text-gray-700">
              <strong>Email:</strong><br />
              <a href={`mailto:${details.email}`} className="text-[#5E3023] hover:underline">
                {details.email}
              </a>
            </p>
          </div>

          {/* Café Image */}
          <div>
            <Image
              src={details.image.src}
              alt={details.image.alt}
              width={600}
              height={400}
              className="rounded-xl shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 md:px-12 bg-[#f3e9dc]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#5E3023] mb-8">
            {form.heading}
          </h2>
          <form
            action={`https://formspree.io/f/${formspreeId}`}
            method="POST"
            className="grid gap-6"
          >
            <div>
              <label className="block mb-2 text-[#362415] font-medium">
                {form.fields.name.label}
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder={form.fields.name.placeholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#78ADA5]"
              />
            </div>

            <div>
              <label className="block mb-2 text-[#362415] font-medium">
                {form.fields.email.label}
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder={form.fields.email.placeholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#78ADA5]"
              />
            </div>

            <div>
              <label className="block mb-2 text-[#362415] font-medium">
                {form.fields.message.label}
              </label>
              <textarea
                name="message"
                rows="6"
                required
                placeholder={form.fields.message.placeholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#78ADA5]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#78ADA5] text-white py-3 px-6 rounded-md hover:bg-[#5e9d93] transition duration-200 font-semibold"
            >
              {form.button}
            </button>
          </form>
        </div>
      </section>
      <FindUs />
    </main>
  );
}
