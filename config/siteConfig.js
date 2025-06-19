// config/siteConfig.js

export const siteConfig = {
  // Site Name
  siteName: 'The Jester Berkhamsted',

  // Font settings (used for global Tailwind utility control)
  fonts: {
    base: `'Inter', sans-serif`,                  // For body text
    heading: `'Playfair Display', serif`,         // For headings if needed
    baseClass: 'font-sans',                       // Tailwind utility for base text
    headingClass: 'font-serif',                   // Tailwind utility for styled headings
  },

  // Brand Colours (used in components as visual identity)
  brand: {
    primary: 'text-amber-900',      // Used for headings (deep caramel brown)
    secondary: 'bg-orange-50',      // Section backgrounds (warm cream tone)
    accent: 'bg-amber-500',         // CTAs, buttons (warm amber)
    textDark: 'text-zinc-900',      // Strong default text
    textLight: 'text-white',        // Light-on-dark contrast
    muted: 'text-zinc-400',         // Used for captions, footers
  },

  // Class tokens mapped to Tailwind utility classes
  styles: {
    bgLight: 'bg-orange-50',              // Background for Hero, About, etc.
    bgPrimary: 'bg-amber-800',            // Background for buttons and banner
    textPrimary: 'text-amber-900',        // Used in headings and CTAs
    textMuted: 'text-zinc-500',           // For footer/subtle copy
    textSubtle: 'text-neutral-700',       // For general body content
    borderLight: 'border-zinc-200',       // Gallery, About, etc.
    borderDark: 'border-zinc-400',        // Stronger dividers
  },

  // Banner strip at the top of the page
  banner: {
    show: true,
    message: 'Now open every day from 8AM!',
    cta: {
      label: 'Explore Our Menu',
      href: '/menu',
    },
  },

  // Main nav links in the header and mobile menu
  nav: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
  },

  // Footer links, social links, copyright
  footer: {
    copyright: 'The Jester Berkhamsted',
    nav: [
      { label: 'Menu', href: '/menu' },
      { label: 'About', href: '/about' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
    social: {
      instagram: '',   // Add full Instagram URL
      facebook: '',    // Add full Facebook URL
      tripadvisor: '', // Add full TripAdvisor URL
    },
  },

  // Hero section content
  hero: {
    heading: 'Cosy Coffee, Fresh Bakes, and Local Vibes',
    subheading: 'Welcome to The Jester — your neighbourhood spot for artisan coffee, hearty brunches, and homemade treats in the heart of Berkhamsted.',
    ctaPrimary: { label: 'Browse Our Menu', href: '/menu' },
    ctaSecondary: { label: 'See the Space', href: '/gallery' },
    image: 'https://images.pexels.com/photos/5857506/pexels-photo-5857506.jpeg',  // Hero image
    tagline: 'Independent • Local • Loved',
    values: [
      { icon: 'Coffee', label: 'Specialty Coffee' },
      { icon: 'Users', label: 'Friendly Staff' },
      { icon: 'Heart', label: 'Community Favourite' },
    ],
  },

  // About Us content
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

  // Location / Contact section content
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
    mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=The+Jester,+173+High+St,+Berkhamsted+HP4+3HB,+UK&key=YOUR_API_KEY', // replace with real API key
  },

  // Gallery image grid
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

  // Testimonials section
  testimonials: {
    heading: 'What People Are Saying',
    subheading: 'Real words from happy guests who’ve visited The Jester.',
    entries: [
      {
        quote: "Absolutely beautiful brunch and the best coffee in town. The cakes are divine and the staff couldn’t be friendlier.",
        name: "Emma S.",
        title: "Google Review",
      },
      {
        quote: "Cosy atmosphere with quality food. The eggs benedict was spot on — perfectly poached and full of flavour.",
        name: "Tom H.",
        title: "Google Review",
      },
      {
        quote: "Such a gem! Great menu, lovely service, and the scones were hands down the best I’ve had in ages.",
        name: "Charlotte R.",
        title: "Google Review",
      },
    ]
  },
};