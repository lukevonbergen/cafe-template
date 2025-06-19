// config/siteConfig.js

export const siteConfig = {
  siteName: 'The Jester Berkhamsted',

  fonts: {
    base: `'Inter', sans-serif`,
    heading: `'Playfair Display', serif`,
    baseClass: 'font-sans',
    headingClass: 'font-serif',
  },

  // BRAND COLOURS FOR DEBUGGING
  brand: {
    primary: '#3b2f2f',       // Rich Coffee (used for headings/buttons)
    secondary: '#f3eee7',     // Café Cream (default backgrounds)
    accent: '#b85c38',        // Burnt Orange (used in CTAs/links)
    textDark: '#2e2a27',      // Deep brown text
    textLight: '#fff9f3',     // Light text on dark backgrounds
    muted: '#857b74',         // Subtle text or borders
  },

  // STYLES — TEMPORARY DEBUG COLOURS FOR TESTING
  styles: {
    // Each style has a unique colour so you can test its presence

    // Backgrounds
    bgLight: 'bg-[#E0FFFF]',         // Light Cyan - SHOULD style sections like About, Hero
    bgPrimary: 'bg-[#FFDEAD]',       // Navajo White - SHOULD style buttons, banner strip

    // Text
    textPrimary: 'text-[#DC143C]',   // Crimson - SHOULD style headings
    textMuted: 'text-[#808000]',     // Olive - SHOULD style muted footers, subtle copy
    textSubtle: 'text-[#483D8B]',    // Dark Slate Blue - SHOULD style body text

    // Borders
    borderLight: 'border-[#00CED1]', // Dark Turquoise - SHOULD style gallery/about borders
    borderDark: 'border-[#800080]',  // Purple - SHOULD style dividers on light backgrounds
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
    mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=The+Jester,+173+High+St,+Berkhamsted+HP4+3HB,+UK&key=YOUR_GOOGLE_MAPS_API_KEY',
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
