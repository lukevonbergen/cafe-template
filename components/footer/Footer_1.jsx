import { Facebook, Instagram } from 'lucide-react';
import { FaTripadvisor } from 'react-icons/fa';
import { siteConfig } from '@/config/siteConfig';

export default function Footer() {
  const footer = siteConfig.footer;

  return (
    <footer className={`bg-white border-t ${siteConfig.styles.borderDark} py-12 px-6 md:px-12`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} {footer.copyright}. All rights reserved.
        </p>
        <nav className="flex space-x-6 mb-4 md:mb-0">
          {footer.nav.map(link => (
            <a key={link.href} href={link.href} className="hover:text-gray-900 transition">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex space-x-4">
          <a href={footer.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-900 transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href={footer.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gray-900 transition">
            <Facebook className="w-5 h-5" />
          </a>
          <a href={footer.social.tripadvisor} target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor" className="hover:text-gray-900 transition">
            <FaTripadvisor className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}