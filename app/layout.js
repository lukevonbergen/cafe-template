import './globals.css';
import { Inter, Playpen_Sans } from 'next/font/google';
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

export const metadata = siteConfig.metadata.base;

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
