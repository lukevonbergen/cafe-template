'use client';
import { useState } from 'react';
import { siteConfig } from '@/config/siteConfig';

export default function BannerStrip() {
  const [visible, setVisible] = useState(true);
  const banner = siteConfig.banner;

  if (!banner.show || !visible) return null;

  return (
    <div className={`${siteConfig.styles.bgPrimary} ${siteConfig.styles.textLight} text-sm py-2 px-6 flex justify-between items-center font-medium`}>
      <div className="max-w-7xl mx-auto flex-1 flex justify-center md:justify-between items-center flex-wrap gap-2">
        <span>{banner.message}</span>
        <a href={banner.cta.href} className="underline hover:opacity-80 transition">
          {banner.cta.label}
        </a>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="ml-4 text-lg font-bold hover:opacity-70 transition"
        aria-label="Close"
      >
        &times;
      </button>
    </div>
  );
}