// config/siteConfig.js

export const siteConfig = {
  // 🏷️ Site Name
  siteName: 'Wheldrakes York',

 // Metadata used across Next.js pages
  metadata: {
    base: {
      title: 'Wheldrakes – Independent Café in York',
      description:
        'Wheldrakes is a cosy, family-run café in the heart of York offering brunch, cakes, hot drinks and a warm welcome – no bookings, just turn up.',
      icons: {
        icon: '/favicon.ico',
      },
    },
    about: {
      title: 'About | Wheldrakes',
      description:
        'Discover more about Wheldrakes – a warm, independent café near Monk Bar in York, known for its food, service and relaxing vibe.',
    },
    contact: {
      title: 'Contact Us | Wheldrakes',
      description:
        'Get in touch or visit Wheldrakes on Goodramgate in York. We’re open Thursday to Monday for brunch and drinks.',
    },
    gallery: {
      title: 'Gallery | Wheldrakes',
      description:
        'See inside Wheldrakes café – a cosy, friendly space serving great coffee, cakes and brunch in York.',
    },
  },

  // 🔤 Font choices (loaded via Google Fonts)
  fonts: {
    base: `'Urbanist', sans-serif`,         // Clean, modern sans-serif for body text
    heading: `'Shrikhand', cursive`,        // Handwritten-style font for titles
    baseClass: 'font-urbanist',             // Tailwind class token for body font
    headingClass: 'font-shrikhand',         // Tailwind class token for headings
    google: {
      base: 'Urbanist',
      heading: 'Shrikhand',
      accent: 'Urbanist',
    },
  },

  // 🎨 Brand Colours (used throughout the site)
  brand: {
    primary: '[#5E3023]',           // Dark brown – used for headings and hero highlights
    secondary: 'bg-[#C08552]',      // Warm tan – background for accent sections
    accent: 'bg-[#78ADA5]',         // Seafoam green – used for buttons and CTAs
    textDark: 'text-[#362415]',     // Very dark brown – default body text on light backgrounds
    textLight: 'text-[#F3E9DC]',    // Cream – used for text on dark backgrounds
    muted: 'text-gray-500',         // Grey – for captions, secondary text
  },

  // 🧩 Class-based style tokens for easier utility reuse
  styles: {
    bgLight: 'bg-[#F3E9DC]',        // Pale cream background (used in About/Location sections)
    bgPrimary: 'bg-[#78ADA5]',      // Accent background – seafoam (used in strips/banners)
    highlightColour: 'text-[#78ADA5]',  // Same seafoam – used to highlight hero word
    textPrimary: 'text-[#5E3023]',  // Brand heading colour – dark brown
    textMuted: 'text-gray-600',     // Neutral grey text
    textSubtle: 'text-[#362415]',   // Slightly softened dark brown – for paragraph content
    borderLight: 'border-gray-200', // Soft borders (section dividers etc.)
    borderDark: 'border-gray-400',  // Stronger borders (e.g. around cards or footer)
  },

  // 📣 Optional top banner strip
  banner: {
    show: true,
    message: 'Cosy café near Monk Bar. Walk-ins only.',
    cta: {
      label: 'View Our Menu',
      href: '/menu',
    },
  },

  // 🧭 Main navigation bar links
  nav: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
  },

  // 🦶 Footer content and social links
  footer: {
    copyright: 'Wheldrakes York',
    nav: [
      { label: 'Menu', href: '/menu' },
      { label: 'About', href: '/about' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
    social: {
      instagram: 'https://instagram.com/wheldrakes_cafe',
      facebook: 'https://facebook.com/wheldrakes',
      tripadvisor: 'https://www.tripadvisor.co.uk/Restaurant_Review-g186346-d7394137-Reviews-Wheldrakes-York_North_Yorkshire_England.html',
      linkedin: '',       // Add if applicable
      tiktok: '',         // Add if applicable
      youtube: '',        // Add if applicable
      twitter: 'https://twitter.com/wheldrakescafe',
    },
  },

  // 🦸 Hero section config (image, headline, hours)
  hero: {
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9e/b1/e0/photo1jpg.jpg?w=1000&h=-1&s=1',
    imageAlt: 'Wheldrakes Cafe & Coffee',
    heading: 'ALWAYS FRESH, ALWAYS',
    highlightWord: 'WELCOMING',
    blurb: 'A cosy independent café in York. Fresh cakes, brilliant brunch, and a no-bookings policy that keeps things simple.',
    hours: {
      weekdays: {
        label: 'THURS – MON',
        time: '08.30–15.30',
      },
      weekends: {
        label: 'TUES & WEDS',
        time: 'Closed',
      },
    },
  },

  // 🧾 About Us content
  about: {
    heading: 'A Warm Welcome Awaits',
    subheading: `We’re a small, family-run café offering house-blend coffee, homemade cakes and a homely setting – right in the heart of York.`,
    features: [
      {
        title: 'Fresh & Homemade',
        text: 'Our cakes, brunches and drinks are made fresh every day on-site.',
      },
      {
        title: 'Cosy & Relaxed',
        text: 'A no-reservations policy and friendly staff keep things laid-back and welcoming.',
      },
    ],
  },

  // 🗺️ Contact & Location section
  location: {
    heading: 'Find Us',
    text: 'Pop in for brunch, cake or a cup of our famous coffee. We’re just inside the city walls near Monk Bar.',
    address: [
      'Wheldrakes Café',
      '5C Goodramgate, York YO1 7LJ, United Kingdom',
    ],
    openingHours: [
      'Thursday–Monday: 8:30 AM – 3:30 PM',
      'Closed Tuesdays & Wednesdays',
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d937.997835447967!2d-1.0796764707748137!3d53.9624694620838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487931a5aefbc941%3A0x247e4a034f68dee!2sWheldrakes!5e0!3m2!1sen!2suk!4v1750584802375!5m2!1sen!2suk',
  },

  // 🖼️ Gallery grid
  gallery: {
    images: [
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/7c/0d/86/our-window-display.jpg?w=1000&h=-1&s=1', alt: 'Coffee and croissant on a table' },
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/66/2a/72/full-english.jpg?w=1000&h=-1&s=1', alt: 'Barista making espresso' },
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/f7/16/dc/easter-2022.jpg?w=1000&h=-1&s=1', alt: 'Café brunch setting' },
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b7/4f/6d/wheldrakes.jpg?w=1000&h=-1&s=1', alt: 'Latte art in coffee cup' },
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b7/4f/71/wheldrakes.jpg?w=1000&h=-1&s=1', alt: 'Cafe interior with tables' },
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/ba/00/a7/photo1jpg.jpg?w=1000&h=-1&s=1', alt: 'Selection of cakes on counter' },
    ],
  },

  // ⭐ Testimonials section
  testimonials: {
    heading: 'Loved by Locals & Visitors',
    subheading: 'See why people keep coming back to Wheldrakes.',
    entries: [
      {
        quote: "The friendliest welcome and the most delicious brunch I've had in York. No fuss – just good food and people.",
        name: "Amy L.",
        title: "TripAdvisor",
      },
      {
        quote: "Cosy little gem near the city walls. Walked in on a whim and loved everything from the coffee to the vibe.",
        name: "Ben T.",
        title: "Google Review",
      },
      {
        quote: "Homemade cakes that taste just like they should. Will definitely return next time I’m in town.",
        name: "Sophie G.",
        title: "Facebook",
      },
    ]
  },

  // ⏰ Strip with hours and location (shown on most pages)
  hoursLocation: {
    hours: 'Thurs–Mon: 8:30 AM – 3:30 PM',
    address: '5C Goodramgate, York YO1 7LJ',
    email: 'hello@wheldrakes.co.uk', // Can add contact email here
  },

  // 📢 Features section near top of homepage
  intro: {
    title: 'A True Taste of York',
    description: 'We serve freshly made food, house blend coffee, and real hot chocolate – right in the heart of the city.',
    features: [
      { title: 'No Bookings, Just Brunch', text: 'Walk-ins only. Good vibes always.' },
      { title: 'Locally Loved', text: '5-star rated by over a thousand happy customers.' },
      { title: 'Independent & Family-Run', text: 'Run with care, love and attention – from our family to yours.' },
    ],
  },

  // 🍳 Optional section to highlight menu categories
  menuHighlights: {
    title: 'What We’re Known For',
    items: [
      {
        label: 'Full English',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/aa/cd/94/photo0jpg.jpg?w=1000&h=-1&s=1',
      },
      {
        label: 'Real Hot Chocolate',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/c9/50/4e/wheldrakes.jpg?w=800&h=-1&s=1',
      },
      {
        label: 'Brunch',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/66/2a/71/flatbreads-are-back.jpg?w=1000&h=-1&s=1',
      },
      {
        label: 'House Blend Coffee',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b7/4f/71/wheldrakes.jpg?w=1000&h=-1&s=1',
      },
    ],
    cta: {
      label: 'Browse Full Menu',
      href: '/menu',
    },
  },

  contact: {
    intro: {
      heading: 'We’d Love to Hear from You',
      blurb: 'Whether you’re booking a table, asking about allergens or just saying hello — we’re always here.',
    },
    details: {
      description: 'Pop in for brunch, cake or a cup of our famous coffee. We’re just inside the city walls near Monk Bar.',
      address: '5C Goodramgate, York YO1 7LJ, United Kingdom',
      phone: '+441904123456',
      phoneDisplay: '07940 210670',
      email: 'hello@wheldrakes.co.uk',
      image: {
        src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9e/b1/e0/photo1jpg.jpg?w=1000&h=-1&s=1',
        alt: 'Friendly café interior',
      },
    },
    formspreeId: 'mrbkanyw',
    form: {
      heading: 'Send Us a Message',
      fields: {
        name: {
          label: 'Name',
          placeholder: 'Your full name',
        },
        email: {
          label: 'Email',
          placeholder: 'you@example.com',
        },
        message: {
          label: 'Message',
          placeholder: 'What would you like to ask or tell us?',
        },
      },
      button: 'Send Message',
    },
  },
};
