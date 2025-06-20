import './globals.css';
import { Inter, Playpen_Sans, Playfair_Display } from 'next/font/google';
import Nav from '@/components/navigation/Nav_1';
import Footer from '@/components/footer/Footer_1';
import Banner from '@/components/banner/Banner_1';
import { siteConfig } from '@/config/siteConfig';

const fontMap = { Inter, Playpen_Sans, Playfair_Display };
const baseFont = siteConfig.fonts.google.base;
const headingFont = siteConfig.fonts.google.heading;

const inter = fontMap[baseFont.family]({
  weight: baseFont.weights,
  subsets: ['latin'],
  variable: '--font-inter',
});

const playpen = fontMap[headingFont.family]({
  weight: headingFont.weights,
  subsets: ['latin'],
  variable: '--font-playpen',
});

export const metadata = {
  title: 'Wheldrakes – Artisan Coffee & Brunch in York',
  description:
    'Wheldrakes is a beloved independent café in York, serving artisan coffee, fresh brunch, and homemade treats in a cosy, relaxed setting just minutes from York Minster.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playpen.variable} font-sans antialiased`}>
        <Banner />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
