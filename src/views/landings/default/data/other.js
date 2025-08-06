// @asssets
const imagePrefix = '/assets/images/presentation';

// @project
import branding from '@/branding.json';

export const other = {
  heading: `${branding.brandName} in Every Industry`,
  description: 'From Mom and Pop stores to Fortune 500 companies, we create value for anyone, anywhere.',
  primaryBtn: { children: 'Explore all Markets', href: '#' },
  sections: [
    {
      animationDelay: 0.2,
      title: 'Beverage',
      image: { light: `${imagePrefix}/beverage2.webp`, dark: `${imagePrefix}/beverage2.webp` },
      link: '#'
    },
    {
      animationDelay: 0.3,
      title: 'Food',
      image: { light: `${imagePrefix}/food2.webp`, dark: `${imagePrefix}/food2.webp` },
      link: '#'
    },
    {
      animationDelay: 0.4,
      title: 'Food Service',
      image: { light: `${imagePrefix}/food-service2.webp`, dark: `${imagePrefix}/food-service2.webp` },
      link: '#'
    },
    {
      animationDelay: 0.2,
      title: 'Home & Garden',
      image: { light: `${imagePrefix}/garden2.webp`, dark: `${imagePrefix}/garden2.webp` },
      link: '#'
    },
    {
      animationDelay: 0.3,
      title: 'Personal Care',
      image: { light: `${imagePrefix}/personal2.webp`, dark: `${imagePrefix}/personal2.webp` },
      link: '#'
    },
    {
      animationDelay: 0.4,
      title: 'Healthcare & Pharmaceutical',
      image: { light: `${imagePrefix}/health2.webp`, dark: `${imagePrefix}/health2.webp` },
      link: '#'
    },
    {
      animationDelay: 0.4,
      title: 'Pet Care',
      image: { light: `${imagePrefix}/pet2.webp`, dark: `${imagePrefix}/pet2.webp` },
      link: '#'
    },
    {
      animationDelay: 0.4,
      title: 'Beauty',
      image: { light: `${imagePrefix}/beauty2.webp`, dark: `${imagePrefix}/beauty2.webp` },
      link: '#'
    },
    {
      animationDelay: 0.4,
      title: 'E-Commerce',
      image: { light: `${imagePrefix}/ecomm2.webp`, dark: `${imagePrefix}/ecomm2.webp` },
      link: '#'
    },
    {
      animationDelay: 0.4,
      title: 'Signage',
      image: { light: `${imagePrefix}/sign2.webp`, dark: `${imagePrefix}/sign2.webp` },
      link: '#'
    },
    {
      animationDelay: 0.4,
      title: 'Retail & Consumer Goods',
      image: { light: `${imagePrefix}/retail2.webp`, dark: `${imagePrefix}/retail2.webp` },
      link: '#'
    },
    {
      animationDelay: 0.4,
      title: 'Contract Manufacturing',
      image: { light: `${imagePrefix}/manu2.webp`, dark: `${imagePrefix}/manu2.webp` },
      link: '#'
    }
  ]
};

export const other3 = {
  heading: 'Join a Winning Team',
  caption: 'Be a part of a winning culture that fosters collaboration, creativity, and success in every career path',
  other: [
    {
      title: 'Product Design',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    },
    {
      title: 'Front-End Developer',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    },
    {
      title: 'Back-End Developer',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    },
    {
      title: 'Scrum Master',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    }
  ]
};
