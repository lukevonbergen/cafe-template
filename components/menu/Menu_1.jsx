import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';

export default function MenuHighlightSection() {
  const menu = siteConfig.menuHighlights;

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#fdf6f0] to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-3xl font-bold mb-10 ${siteConfig.styles.textPrimary}`}>
          {menu.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {menu.items.map((item, i) => (
            <div key={i} className="rounded-lg shadow bg-white overflow-hidden">
              <Image
                src={item.image}
                alt={item.label}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-sm font-medium">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a
            href={menu.cta.href}
            className={`${siteConfig.styles.bgPrimary} ${siteConfig.styles.textLight} px-6 py-3 rounded-full font-medium shadow hover:opacity-90 transition`}
          >
            {menu.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}