// config/siteConfig.js

export const siteConfig = {
  // Site Name
  siteName: 'Seaside Brew Brighton',

  // Metadata used across Next.js pages
  metadata: {
    base: {
      title: 'Seaside Brew – Coffee & Brunch by the Sea in Brighton',
      description:
        'Seaside Brew is a friendly independent café in Brighton serving speciality coffee, hearty brunches and homemade bakes just steps from the beach.',
      icons: {
        icon: '/favicon.ico',
      },
    },
    about: {
      title: 'About | Seaside Brew',
      description:
        'Learn more about Seaside Brew in Brighton – our seaside story, our love of great coffee and brunch, and the team behind the counter.',
    },
    contact: {
      title: 'Contact Us | Seaside Brew',
      description:
        'Find our Brighton café, get in touch by phone or email, and see where we are along the seafront.',
    },
    gallery: {
      title: 'Gallery | Seaside Brew',
      description:
        'Peek inside Seaside Brew and see our beachy café, tasty brunches and local coffee moments.',
    },
  },

  // Font settings (used for global Tailwind utility control)
  fonts: {
    base: `'Inter', sans-serif`,                  // For body text
    heading: `'Playfair Display', serif`,         // For headings if needed
    baseClass: 'font-sans',                       // Tailwind utility for base text
    headingClass: 'font-serif',                   // Tailwind utility for styled headings
    google: {
      base: 'Inter',
      heading: 'Playfair_Display',
      accent: 'Playpen_Sans',
    },
  },

  // Brand Colours (used in components as visual identity)
  brand: {
    primary: 'text-sky-900',      // Used for headings (deep coastal blue)
    secondary: 'bg-teal-50',      // Section backgrounds (soft seafoam)
    accent: 'bg-sky-600',         // CTAs, buttons (bright ocean blue)
    textDark: 'text-gray-900',    // Strong default text
    textLight: 'text-white',      // Light-on-dark contrast
    muted: 'text-gray-400',       // Used for captions, footers
  },

  // Class tokens mapped to Tailwind utility classes
  styles: {
    bgLight: 'bg-teal-50',              // Background for Hero, About, etc.
    bgPrimary: 'bg-sky-800',            // Background for buttons and banner
    textPrimary: 'text-sky-900',        // Used in headings and CTAs
    textMuted: 'text-gray-500',         // For footer/subtle copy
    textSubtle: 'text-gray-700',        // For general body content
    borderLight: 'border-gray-200',     // Gallery, About, etc.
    borderDark: 'border-gray-400',      // Stronger dividers
  },

  // Banner strip at the top of the page
  banner: {
    show: true,
    message: 'Now serving Brighton from 7AM daily!',
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
    heading: 'Fresh Brews & Coastal Views',
    subheading: 'Welcome to Seaside Brew — your go-to spot for speciality coffee, all-day brunch and homemade treats right by Brighton beach.',
    ctaPrimary: { label: 'Browse Our Menu', href: '/menu' },
    ctaSecondary: { label: 'See the Space', href: '/gallery' },
    image: 'https://images.pexels.com/photos/5857506/pexels-photo-5857506.jpeg',  // Hero image
    tagline: 'Independent • Brighton Born • Beachside',
    values: [
      { icon: 'Coffee', label: 'Specialty Coffee' },
      { icon: 'Users', label: 'Friendly Staff' },
      { icon: 'Heart', label: 'Community Favourite' },
    ],
  },

  // About Us content
  about: {
    heading: 'Crafted with Care in Brighton',
    subheading: `At Seaside Brew we mix Brighton's lively spirit with a love of quality. From locally roasted coffee to fresh pastries and brunch favourites, we're a welcoming hub for the community.`,
    features: [
      {
        title: 'Independent & Passionate',
        text: 'Run by locals, for locals — Seaside Brew is a relaxed space where community and quality meet.',
      },
      {
        title: 'Brunch, Coffee, & Cakes',
        text: 'Whether it’s your morning flat white, a weekend eggs benedict or a sweet seaside treat — we’ve got something for every mood.',
      },
    ],
  },

  // Location / Contact section content
  location: {
    heading: 'Come Find Us',
    text: 'We are tucked just off the promenade — the perfect pitstop for coffee, brunch or a slice of cake by the sea.',
    address: [
      'Seaside Brew Café',
      '23 Ocean View Terrace, Brighton BN1 1AA, United Kingdom',
    ],
    openingHours: [
      'Monday–Sunday: 7:00 AM – 5:00 PM',
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=Seaside+Brew,+23+Ocean+View+Terrace,+Brighton,+UK&key=YOUR_API_KEY', // replace with real API key
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
    subheading: 'Real words from happy guests who’ve visited Seaside Brew.',
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