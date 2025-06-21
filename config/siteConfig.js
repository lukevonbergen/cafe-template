// config/siteConfig.js

export const siteConfig = {
  // Site Name
  siteName: 'The Front Room',

  // Metadata used across Next.js pages
  metadata: {
    base: {
      title: 'The Front Room – Coffee Lounge in High Wycombe',
      description:
        'The Front Room is an award-winning independent coffee lounge in High Wycombe offering specialty coffee, cocktails, brunch and community events in a plant-filled, dog-friendly space.',
      icons: {
        icon: '/favicon.ico',
      },
    },
    about: {
      title: 'About | The Front Room',
      description:
        'Learn about The Front Room in High Wycombe – our passion for plants, sustainability, inclusivity and great coffee.',
    },
    contact: {
      title: 'Contact Us | The Front Room',
      description:
        'Get in touch with The Front Room or find us in the heart of High Wycombe.',
    },
    gallery: {
      title: 'Gallery | The Front Room',
      description:
        'Explore our cosy lounge, vibrant events and lush plant décor.',
    },
  },

  // Font settings (used for global Tailwind utility control)
  fonts: {
    base: `'Urbanist', sans-serif`,
    heading: `'Shrikhand', cursive`,
    baseClass: 'font-urbanist',
    headingClass: 'font-shrikhand',
    google: {
      base: 'Urbanist',
      heading: 'Shrikhand',
      accent: 'Urbanist',
    },
  },

  // Brand Colours (used in components as visual identity)
  brand: {
    primary: '[#5E3023]',           // Used for headings (deep coastal blue)
    secondary: 'bg-[#C08552]',      // Section backgrounds (soft seafoam)
    accent: 'bg-[#78ADA5]',         // CTAs, buttons (bright ocean blue)
    textDark: 'text-[#362415]',    // Strong default text
    textLight: 'text-[#F3E9DC]',      // Light-on-dark contrast
    muted: 'text-gray-500',       // Used for captions, footers
  },

  // Class tokens mapped to Tailwind utility classes
  styles: {
    bgLight: 'bg-[#F3E9DC]',              // Background for Hero, About, etc.
    bgPrimary: 'bg-[#78ADA5]',          
    highlightColour: 'text-[#78ADA5]',         // Highlight colour for the hero word
    textPrimary: 'text-[#5E3023]',        // Used in headings and CTAs
    textMuted: 'text-gray-600',         // For footer/subtle copy
    textSubtle: 'text-[#362415]',        // For general body content
    borderLight: 'border-gray-200',     // Gallery, About, etc.
    borderDark: 'border-gray-400',      // Stronger dividers
  },

  // Banner strip at the top of the page
  banner: {
    show: true,
    message: 'Award-winning coffee lounge and events space in High Wycombe.',
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

  hero: {
    image: 'https://images.pexels.com/photos/3262277/pexels-photo-3262277.jpeg',
    imageAlt: 'Close-up espresso machine',
    heading: 'LIFE BEGINS AFTER',
    highlightWord: 'FLAVOUR',
    blurb: 'Elevate your daily ritual with coffee that’s more than a drink — it’s a connection to nature, tradition, and the people who make it extraordinary.',
    hours: {
      weekdays: {
        label: 'MON – THURS',
        time: '09.00–21.00',
      },
      weekends: {
        label: 'FRI – SUN',
        time: '09.00–23.00',
      },
    },
  },


  // About Us content
  about: {
    heading: 'A Space to Feel Good',
    subheading: `We’re a community-centred, eco-conscious lounge with a passion for coffee, plants, folk, dogs and local makers. Inclusive and quirky: queer-friendly, body-positive, neurodivergent safe space.`,
    features: [
      {
        title: 'Sustainably Minded',
        text: 'We source locally and keep things green—from our décor to our packaging.',
      },
      {
        title: 'Events & Workshops',
        text: 'Join us for sushi-making, life drawing, terrarium nights and more in our flexible space.',
      },
    ],
  },

  // Location / Contact section content
  location: {
    heading: 'Visit Us',
    text: 'Find us on Castle Street for specialty coffee, brunch and events in a dog-friendly, plant-filled lounge.',
    address: [
      'The Front Room',
      '9 Castle Street, High Wycombe HP13 6RZ, United Kingdom',
    ],
    openingHours: [
      'Monday–Sunday: 8:00 AM – 7:30 PM',
    ],
    mapEmbedUrl:
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.1234567890123!2d-0.7412345678901234!3d51.62912345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48768f1234567890%3A0xabcdef1234567890!2sThe%20Front%20Room!5e0!3m2!1sen!2suk!4v171XXXXX1234567890!5m2!1sen!2suk'
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
    subheading: 'Feedback from folks who love our cosy lounge.',
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

  // ➕ NEW: Hours & Location strip (used in HoursLocationBar.jsx)
  hoursLocation: {
    hours: 'Mon–Sun: 8 AM – 4 PM',
    address: '173 High Street, Berkhamsted HP4 3HB',
    email: 'hello@thejestercafe.co.uk',
  },

  // ➕ NEW: Intro features section (used in IntroFeatureSection.jsx)
  intro: {
    title: 'Enjoy the Rich and Robust Flavours',
    description: 'Locally roasted coffee, supporting both your taste buds and the local community.',
    features: [
      { title: 'Premium Quality', text: 'Small-batch roasted beans, expertly brewed by trained baristas.' },
      { title: 'Cozy Atmosphere', text: 'Relax with comfy seating, free Wi-Fi, and the scent of fresh pastries.' },
      { title: 'Community Focused', text: 'Local suppliers, inclusive vibes, and regular community events.' },
    ],
  },

  // ➕ NEW: Menu highlight section (used in MenuHighlightSection.jsx)
  menuHighlights: {
    title: 'Explore Our Favourites',
    items: [
      {
        label: 'Espresso-Based',
        image: 'https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg',
      },
      {
        label: 'Brewed Coffee',
        image: 'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg',
      },
      {
        label: 'Tea Selection',
        image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg',
      },
      {
        label: 'Pastries & Cakes',
        image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
      },
    ],
    cta: {
      label: 'See Full Menu',
      href: '/menu',
    },
  },
};