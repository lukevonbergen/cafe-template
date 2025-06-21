import './globals.css'
import { Urbanist, Shrikhand } from 'next/font/google'
import Nav from '@/components/navigation/Nav_1'
import Footer from '@/components/footer/Footer_1'
import Banner from '@/components/banner/Banner_1'
import { siteConfig } from '@/config/siteConfig'

// Load fonts
const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
})

const shrikhand = Shrikhand({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-shrikhand',
})

// Font map based on siteConfig.google.fonts keys
const fontMap = {
  Urbanist: urbanist,
  Shrikhand: shrikhand,
}

const baseFont = fontMap[siteConfig.fonts.google.base]
const headingFont = fontMap[siteConfig.fonts.google.heading]
const accentFont = fontMap[siteConfig.fonts.google.accent]

export const metadata = siteConfig.metadata.base

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${baseFont.variable}
          ${headingFont.variable}
          ${accentFont ? accentFont.variable : ''}
          ${siteConfig.fonts.baseClass}
          antialiased
        `}
      >
        {/* Desktop: Banner + Nav Sticky */}
        <div className="hidden md:block sticky top-0 z-50">
          <Banner />
          <Nav />
        </div>

        {/* Mobile: Only Nav Sticky */}
        <div className="block md:hidden sticky top-0 z-50">
          <Nav />
        </div>

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}