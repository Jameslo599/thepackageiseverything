'use client';

// @next
import NextLink from 'next/link';

// @mui
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import branding from '@/branding.json';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { Copyright, FollowUS, Sitemap } from '@/components/footer';
import LogoSection from '@/components/logo';
import SvgIcon from '@/components/SvgIcon';

import { CopyrightType } from '@/enum';
import { DOCS_URL, FREEBIES_URL } from '@/path';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types

/***************************  FOOTER - 7 DATA  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
const data = [
  {
    id: 'company',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Company',
    menu: [
      {
        label: 'What We Do',
        link: {
          href: '#',
          ...linkProps
        }
      },
      {
        label: 'About Us',
        link: { href: '#', ...linkProps }
      },
      {
        label: 'Contact Us',
        link: { href: '/contact', ...linkProps }
      }
    ]
  },
  {
    id: 'support',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Support',
    menu: [
      {
        label: 'FAQ',
        link: { href: '/faq', ...linkProps }
      },
      {
        label: 'Support',
        link: { href: branding.company.socialLink.support, ...linkProps }
      }
    ]
  },
  {
    id: 'resources',
    grid: { size: { xs: 12, sm: 'auto' } },
    title: 'Resources',
    menu: [
      {
        label: 'Privacy Policy',
        link: { href: '/privacy-policy', ...linkProps }
      },
      {
        label: 'Refund Policy',
        link: { href: '#', ...linkProps }
      }
    ]
  }
];

const iconProps = { color: 'text.secondary' };

const usefulLinks = [
  {
    title: branding.brandName,
    href: null
  },
  {
    title: '(972) 632-2100',
    href: 'tel:9726322100'
  },
  {
    title: '2100 Couch Dr, McKinney, TX 75069',
    href: 'https://share.google/EmvRg0sfcs43JWzPp'
  }
];

/***************************  FOOTER - 7  ***************************/

export default function Footer7() {
  const logoFollowContent = (
    <Stack sx={{ alignItems: 'flex-start', gap: { xs: 1.5, sm: 3 } }}>
      <LogoSection />
      <Typography variant="body2" sx={{ maxWidth: { sm: 280 } }}>
        We’re a global leader in renewable packaging, biomaterials, and wood-based construction solutions — and one of the largest private
        forest owners in the world. By accelerating the shift toward a circular bioeconomy, we’re helping create smarter, more sustainable
        choices for society.
      </Typography>
    </Stack>
  );

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack id="footer-7" role="contentinfo" rel="noopener noreferrer" aria-label="Footer 7" sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}
        >
          <Grid container spacing={{ xs: 4, md: 3 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack direction={{ sm: 'row', md: 'column' }} sx={{ gap: 3, justifyContent: 'space-between', height: 1 }}>
                {logoFollowContent}
                <Stack>
                  {usefulLinks.map((item, index) => (
                    <Stack direction="row" sx={{ alignItems: 'center' }} key={index}>
                      {item.icon}
                      <Link
                        variant="body2"
                        color="text.secondary"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Useful Links"
                      >
                        {item.title}
                      </Link>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Sitemap list={data} isMenuDesign />
            </Grid>
          </Grid>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}
        >
          <GraphicsCard sx={{ borderRadius: { xs: 6, sm: 8 } }}>
            <Stack
              direction={{ sm: 'row' }}
              sx={{
                alignItems: 'center',
                justifyContent: { xs: 'center', sm: 'space-between' },
                gap: 1.5,
                py: { xs: 2, sm: 1.5 },
                px: { xs: 2, sm: 3 }
              }}
            >
              <Copyright type={CopyrightType.TYPE3} />
              <FollowUS heading={false} color="grey.100" />
            </Stack>
          </GraphicsCard>
        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}
