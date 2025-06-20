'use client';
import { useState } from 'react';
import { siteConfig } from '@/config/siteConfig';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const nav = siteConfig.nav;

  return (
    <header className="w-full py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-full shadow-md px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className={`text-base font-semibold ${siteConfig.styles.textPrimary}`}>{siteConfig.siteName}</a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
            {nav.links.map(link => (
              <a key={link.href} href={link.href} className="hover:text-amber-600 transition">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="hidden md:block">
          <a href="/contact" className="bg-slate-600 text-white px-5 py-1.5 rounded-full text-sm font-medium shadow hover:bg-slate-700 transition">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 text-2xl focus:outline-none" aria-label="Toggle menu">☰</button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white rounded-b-xl shadow-md mt-1 mx-4 px-6 py-4 space-y-4 text-sm font-semibold text-gray-700 transition-all">
          {nav.links.map(link => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block hover:text-amber-600">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}