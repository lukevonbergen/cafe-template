import './globals.css';
import { Inter, Playpen_Sans, Playfair_Display } from 'next/font/google';
import Nav from '@/components/navigation/Nav_1';
import Footer from '@/components/footer/Footer_1';
import Banner from '@/components/banner/Banner_1';
import { siteConfig } from '@/config/siteConfig';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playpen = Playpen_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-playpen',
});
const playfair = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-playfair',
});

const fontMap = {
  Inter: inter,
  Playpen_Sans: playpen,
  Playfair_Display: playfair,
};

const baseFont = fontMap[siteConfig.fonts.google.base];
const headingFont = fontMap[siteConfig.fonts.google.heading];
const accentFont = fontMap[siteConfig.fonts.google.accent];

export const metadata = siteConfig.metadata.base;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${baseFont.variable} ${headingFont.variable} ${accentFont ? accentFont.variable : ''} ${siteConfig.fonts.baseClass} antialiased`}
      >
        <div className="sticky top-0 z-50">
          <Banner />
          <Nav />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
