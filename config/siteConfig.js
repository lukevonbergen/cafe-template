// config/siteConfig.js

export const siteConfig = {
  siteName: 'Wheldrakes',

  brand: {
    primary: '#4b2e2e',
    secondary: '#f9f7f4',
    accent: '#e0a96d',
    text: '#4b2e2e',
  },

  banner: {
    show: true,
    message: 'This is a test message',
    cta: {
      label: 'Coffee',
      href: '/coffee',
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
    copyright: 'Wheldrakes Café',
    nav: [
      { label: 'Menu', href: '/menu' },
      { label: 'About', href: '/about' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
    social: {
      instagram: 'https://www.instagram.com/wheldrakes_cafe/',
      facebook: 'https://www.facebook.com/freshdailybakes/',
      tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g186346-d8368163-Reviews-Wheldrakes-York_North_Yorkshire_England.html',
    },
  },

  hero: {
    heading: 'The best breakfast, coffee, and cakes in the heart of York',
    subheading: 'Handcrafted daily by our family-run team — Wheldrakes is your cosy spot for brunch, scones, and a proper cup of coffee.',
    ctaPrimary: { label: 'See Our Menu', href: '/menu' },
    ctaSecondary: { label: 'View Gallery', href: '/gallery' },
    image: 'https://images.pexels.com/photos/1510684/pexels-photo-1510684.jpeg',
    tagline: 'Fresh Daily Bakes • York',
    values: [
      { icon: 'Coffee', label: 'Artisan Coffee' },
      { icon: 'Users', label: 'Family-Run' },
      { icon: 'Heart', label: 'Locally Loved' },
    ],
  },

  about: {
    heading: 'A Local Favourite, Baked Fresh Daily',
    subheading: `Tucked away in the heart of York, Wheldrakes is a warm and welcoming café built on simple things done exceptionally well — fresh food, quality coffee, and a team that truly cares. Whether you're joining us for breakfast, lunch, or just a slice of cake, you're always in good hands.`,
    features: [
      {
        title: 'Independent & Family-Run',
        text: 'We’re a small, family-led team with a passion for hospitality. Every plate and every coffee reflects our care and commitment to doing things right.',
      },
      {
        title: 'From Brunch to Cake',
        text: 'From fluffy pancakes to freshly baked scones and rich flat whites — our menu is curated with quality and comfort in mind, served all day long.',
      },
    ],
  },

  location: {
    heading: 'How to Find Us',
    text: 'We’re located just a stone’s throw from York Minster — perfect for breakfast, coffee, or cake after a wander through the Shambles.',
    address: [
      '5C Goodramgate',
      'York YO1 7LJ, United Kingdom',
    ],
    openingHours: [
      'Thursday–Monday: 8:30 AM – 3:30 PM',
      'Tuesday & Wednesday: Closed',
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=5C+Goodramgate+York+YO1+7LJ,+United+Kingdom&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
  },

  gallery: {
    images: [
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/f7/16/dc/easter-2022.jpg?w=1000&h=-1&s=1', alt: 'Placeholder image 1' },
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/f7/16/a8/happy-easter-2022.jpg?w=1000&h=-1&s=1', alt: 'Placeholder image 2' },
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b7/4f/6a/wheldrakes.jpg?w=1000&h=-1&s=1', alt: 'Placeholder image 3' },
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/65/bb/02/wheldrakes.jpg?w=1000&h=-1&s=1', alt: 'Placeholder image 4' },
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b7/4f/71/wheldrakes.jpg?w=1000&h=-1&s=1', alt: 'Placeholder image 5' },
      { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/9c/5f/d6/wheldrakes.jpg?w=1000&h=-1&s=1', alt: 'Placeholder image 6' },
    ],
  },
};
