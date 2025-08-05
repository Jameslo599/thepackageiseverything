// @next
import NextLink from 'next/link';

// @mui
import branding from '@/branding.json';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const cta4 = {
  headLine: "Why We're the Best for any Project.",
  primaryBtn: {
    children: 'Read Our story',
    href: 'https://blog.saasable.io/a-decade-of-expertise-the-phoenixcoded-story-and-why-you-should-trust-us',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '250+ Client Reviews (5 out of 5)'
  },
  list: [
    { primary: '25+ Years Packaging Excellence' },
    { primary: '5k+ Satisfied Customers' },
    { primary: 'Global Reach, Local support' },
    { primary: 'Scalable Production Capabilities' },
    { primary: 'Cutting-Edge Printing Technology' },
    { primary: '100% Custom Packaging Solutions' }
  ],
  clientContent: 'Learn More'
};

function DescriptionLine() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      Have questions? Our community is here to help. Learn more about{' '}
      <Link component={NextLink} variant="caption2" color="primary" href={branding.company.socialLink.discord} underline="hover">
        our community
      </Link>
    </Typography>
  );
}

export const cta5 = {
  label: 'Join the Community',
  heading: 'Connect with us on Discord',
  caption: 'Get support, share insights, and grow together.',
  primaryBtn: {
    children: 'Join Discord Community',
    href: branding.company.socialLink.discord,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  description: <DescriptionLine />,
  saleData: { count: 8, defaultUnit: 'k+', caption: 'Trusted by professionals worldwide' },
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '250k+ Reviews (4.65 out of 5)'
  }
};

export const cta10 = {
  heading: "Couldn't find the perfect role for you?",
  caption: 'No worries – we encourage you to apply anyway! Your unique skills and talents might be just what we need.',
  primaryBtn: { children: 'Send Your Resume', href: '#' },
  secondaryBtn: { children: 'Contact Us', href: '/contact' },
  image: { light: '/assets/images/graphics/ai/graphics15-light.svg', dark: '/assets/images/graphics/ai/graphics15-dark.svg' },
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '10k+ Reviews (4.5 out of 5)'
  }
};
