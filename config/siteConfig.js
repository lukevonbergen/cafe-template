// config/siteConfig.js

export const siteConfig = {
  siteName: 'The Jester Berkhamsted',

  fonts: {
    base: `'Inter', sans-serif`,
    heading: `'Playfair Display', serif`,
    baseClass: 'font-sans',
    headingClass: 'font-serif',
  },

  brand: {
    primary: 'text-rose-700',         // Used in hero headings, CTA borders
    secondary: 'bg-yellow-100',       // Backgrounds for light sections
    accent: 'bg-amber-400',           // Call-to-action buttons or tags
    textDark: 'text-neutral-900',     // Default dark text
    textLight: 'text-slate-100',      // Light text on dark backgrounds
    muted: 'text-gray-400',           // Subtle/inactive text
  },

  styles: {
    bgLight: 'bg-yellow-100',         // Background for Hero/About
    bgPrimary: 'bg-rose-700',         // Background for buttons, banner strip
    textPrimary: 'text-rose-700',     // Headings
    textMuted: 'text-gray-500',       // Footer & captions
    textSubtle: 'text-indigo-700',    // Body text
    borderLight: 'border-blue-300',   // Light section dividers
    borderDark: 'border-purple-500',  // Section tops or darker borders
  },

  banner: {
    show: true,
    message: 'Now open every day from 8AM!',
    cta: {
      label: 'Explore Our Menu',
      href: '/menu',
    },
  },

  nav: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
  },

  footer: {
    copyright: 'The Jester Berkhamsted',
    nav: [
      { label: 'Menu', href: '/menu' },
      { label: 'About', href: '/about' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
    social: {
      instagram: '',
      facebook: '',
      tripadvisor: '',
    },
  },

  hero: {
    heading: 'Cosy Coffee, Fresh Bakes, and Local Vibes',
    subheading: 'Welcome to The Jester — your neighbourhood spot for artisan coffee, hearty brunches, and homemade treats in the heart of Berkhamsted.',
    ctaPrimary: { label: 'Browse Our Menu', href: '/menu' },
    ctaSecondary: { label: 'See the Space', href: '/gallery' },
    image: 'https://images.pexels.com/photos/5857506/pexels-photo-5857506.jpeg',
    tagline: 'Independent • Local • Loved',
    values: [
      { icon: 'Coffee', label: 'Specialty Coffee' },
      { icon: 'Users', label: 'Friendly Staff' },
      { icon: 'Heart', label: 'Community Favourite' },
    ],
  },

  about: {
    heading: 'Crafted with Care in Berkhamsted',
    subheading: `At The Jester, it’s all about good vibes and great flavours. From rich coffee blends to fresh pastries and brunch classics, we’re a locally loved spot with an eye for quality and a heart for the community.`,
    features: [
      {
        title: 'Independent & Passionate',
        text: 'Run by locals, for locals — The Jester is a laid-back hub where quality and community come first.',
      },
      {
        title: 'Brunch, Coffee, & Cakes',
        text: 'Whether it’s your morning flat white, a weekend eggs benedict, or a sweet afternoon fix — we’ve got something for every mood.',
      },
    ],
  },

  location: {
    heading: 'Come Find Us',
    text: 'You’ll find us right in the centre of Berkhamsted — the perfect pitstop for coffee, brunch, or a slice of cake.',
    address: [
      'The Jester Café',
      '173 High Street, Berkhamsted HP4 3HB, United Kingdom',
    ],
    openingHours: [
      'Monday–Sunday: 8:00 AM – 4:00 PM',
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=The+Jester,+173+High+St,+Berkhamsted+HP4+3HB,+UK&key=YOUR_API_KEY',
  },

  gallery: {
    images: [
      { src: 'https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg', alt: 'Coffee and croissant on a table' },
      { src: 'https://images.pexels.com/photos/374147/pexels-photo-374147.jpeg', alt: 'Barista making espresso' },
      { src: 'https://images.pexels.com/photos/618491/pexels-photo-618491.jpeg', alt: 'Café brunch setting' },
      { src: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg', alt: 'Latte art in coffee cup' },
      { src: 'https://images.pexels.com/photos/1833321/pexels-photo-1833321.jpeg', alt: 'Cafe interior with tables' },
      { src: 'https://images.pexels.com/photos/5857499/pexels-photo-5857499.jpeg', alt: 'Selection of cakes on counter' },
    ],
  },
};
