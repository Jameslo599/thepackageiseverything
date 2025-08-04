// @mui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import branding from '@/branding.json';
import { MegaMenuType } from '@/enum';
import { ADMIN_PATH, DOCS_URL, PAGE_PATH, PRIVIEW_PATH } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

/***************************  MEGAMENU 4 - FOOTER  ***************************/

function footerData() {
  return (
    <Stack sx={{ alignItems: 'flex-start', gap: 3, height: 1, justifyContent: 'center' }}>
      <Stack sx={{ gap: 1 }}>
        <Stack sx={{ alignItems: 'flex-start', gap: 1.5 }}>
          <Chip
            label={<Typography variant="subtitle2">Infinite possibilities</Typography>}
            size="small"
            sx={{ bgcolor: 'background.default', '& .MuiChip-label': { px: 1.5, py: 0.5 }, '& .MuiChip-icon': { ml: 1.25 } }}
          />
          <Typography variant="h5">We can take your project from an idea to the marketplace.</Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          We can package anything and everything, while completely satisfying our clients, markets, people, and the planet.
        </Typography>
      </Stack>
    </Stack>
  );
}

/***************************  MEGAMENU 5 - BANNER  ***************************/

function bannerData() {
  return (
    <Stack sx={{ alignItems: 'flex-start', gap: 3, height: 1, justifyContent: 'center' }}>
      <Stack sx={{ gap: 1 }}>
        <Stack sx={{ alignItems: 'flex-start', gap: 1.5 }}>
          <Chip
            label={<Typography variant="subtitle2">Get it right the first time</Typography>}
            size="small"
            sx={{ bgcolor: 'background.default', '& .MuiChip-label': { px: 1.5, py: 0.5 }, '& .MuiChip-icon': { ml: 1.25 } }}
          />
          <Typography variant="h5">The Right Package Makes All the Difference</Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Choosing the perfect packaging solution is essential not only for your product’s success but also for creating an exceptional
          experience for your customers. Discover how we empower you to achieve both.
        </Typography>
      </Stack>
    </Stack>
  );
}

/***************************  NAVBAR - MEGAMENU PAGES  ***************************/

export const pagesMegamenu = {
  id: 'pages',
  title: 'Markets',
  megaMenu: {
    type: MegaMenuType.MEGAMENU4,
    toggleBtn: { children: 'Markets' },
    popperWidth: { xs: 860, lg: 1160, xl: 1496 },
    menuItems: [
      { title: 'Beverage', image: '/assets/images/graphics/default/beverage.webp', link: { href: PAGE_PATH.aboutPage, ...linkProps } },
      { title: 'Food', image: '/assets/images/graphics/default/food.webp', link: { href: PAGE_PATH.aboutPage, ...linkProps } },
      {
        title: 'Food Service',
        image: '/assets/images/graphics/default/food-serv.webp',
        link: { href: PAGE_PATH.careerPage, ...linkProps }
      },
      {
        title: 'Home & Garden',
        image: '/assets/images/graphics/default/gardening.webp',
        link: { href: PAGE_PATH.privacyPolicyPage, ...linkProps }
      },
      {
        title: 'Personal Care',
        image: '/assets/images/graphics/default/personal.webp',
        link: { href: PAGE_PATH.contactPage, ...linkProps }
      },
      {
        title: 'Healthcare & Pharmaceutical',
        image: '/assets/images/graphics/default/pharma.webp',
        link: { href: PAGE_PATH.faqPage, ...linkProps }
      },
      { title: 'Pet Care', image: '/assets/images/graphics/default/dog.webp', link: { href: PAGE_PATH.pricingPage, ...linkProps } },
      { title: 'Beauty', image: '/assets/images/graphics/default/beauty.webp', link: { href: PAGE_PATH.pricingPage, ...linkProps } },
      { title: 'E-Commerce', image: '/assets/images/graphics/default/ecomm.webp', link: { href: PAGE_PATH.pricingPage, ...linkProps } },
      { title: 'Signage', image: '/assets/images/graphics/default/sign.webp', link: { href: PAGE_PATH.pricingPage, ...linkProps } },
      {
        title: 'Retail & Consumer Goods',
        image: '/assets/images/graphics/default/commercial.webp',
        link: { href: PAGE_PATH.pricingPage, ...linkProps }
      },
      {
        title: 'Contract Manufacturing & Packaging',
        image: '/assets/images/graphics/default/contract.webp',
        link: { href: PAGE_PATH.pricingPage, ...linkProps }
      }
    ],
    footerData: footerData()
  }
};

/***************************  NAVBAR - MEGAMENU PAGES  ***************************/

export const solutionsMegamenu = {
  id: 'pages',
  title: 'Solutions',
  megaMenu: {
    type: MegaMenuType.MEGAMENU5,
    toggleBtn: { children: 'Solutions' },
    popperWidth: 860,
    menuItems: [
      {
        title: 'Our Services',
        itemsList: [
          { title: 'CAD & Engineering', link: { href: PAGE_PATH.aboutPage, ...linkProps } },
          { title: 'Die-Cutting, Folding & Gluing', link: { href: PAGE_PATH.careerPage, ...linkProps } },
          { title: 'Color Printing', link: { href: PAGE_PATH.privacyPolicyPage, ...linkProps } },
          { title: 'Private Label & Custom Packaging', link: { href: PAGE_PATH.contactPage, ...linkProps } },
          { title: 'Contract Blister Cards & Packaging', link: { href: PAGE_PATH.faqPage, ...linkProps } },
          { title: 'Graphic Design', link: { href: PAGE_PATH.pricingPage, ...linkProps } },
          { title: 'Fulfillment', link: { href: PAGE_PATH.pricingPage, ...linkProps } }
        ]
      }
    ],
    bannerData: bannerData()
  }
};
