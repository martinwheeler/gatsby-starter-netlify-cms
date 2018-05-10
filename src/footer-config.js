import { SVG } from 'theme';

export const MENU_CONFIG = [
  {
    isHeading: true,
    name: 'Our Story',
    Icon: SVG.Story,
    href: '/story'
  },
  {
    isHeading: true,
    name: 'Contact Us',
    Icon: SVG.Contact,
    href: '/contact'
  },
  {
    isHeading: true,
    name: 'Subscribe',
    Icon: SVG.Subscribe,
    href: '/subscribe'
  }
];

const OLD_CONFIG = [
  {
    name: 'Official Things',
    menuItems: [
      {
        name: 'Careers',
        href: '/careers'
      },
      {
        name: 'Feedback',
        href: '/feedback'
      },
      {
        name: 'Privacy Policy',
        href: '/privacy-policy'
      },
      {
        name: 'Terms of Service',
        href: '/terms-of-service'
      },
    ]
  },
  {
    name: 'Tips & Tricks',
    menuItems: [
      {
        name: 'Photography',
        href: '/photography'
      },
      {
        name: 'How it Works',
        href: '/how-it-works'
      },
      {
        name: 'FAQs',
        href: '/faq'
      },
      {
        name: 'Blog',
        href: 'https://blog.lana.global'
      },
    ]
  },
  {
    name: 'About Lána',
    menuItems: [
      {
        name: 'Our Story',
        href: '/our-story'
      },
      {
        name: 'Why Lána',
        href: '/why-lana'
      },
      {
        name: 'Impact & Sustainability',
        href: '/impact-sustainability'
      },
      {
        name: 'Maternity',
        href: '/maternity'
      },
      {
        name: 'Media/Press',
        href: '/media-press'
      },
      {
        name: 'Contact Us',
        href: '/contact-us'
      },
    ]
  }

];
