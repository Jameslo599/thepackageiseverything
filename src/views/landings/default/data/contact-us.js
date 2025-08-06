// @project
import branding from '@/branding.json';

export const contactUS = {
  heading: 'We’d love to hear from you',
  caption:
    'Your vision could spark the next innovation. Whether it’s a problem you want to solve or a product you believe in—let’s make it happen.',
  list: [
    {
      icon: 'tabler-phone',
      title: 'Contact Sales',
      content: 'Speak to someone from our sales team',
      link: { children: 'Contact Sales', href: branding.company.socialLink.support, target: '_blank', rel: 'noopener noreferrer' }
    },
    {
      icon: 'tabler-help-circle',
      title: 'Have a Question?',
      content: 'See our frequently asked questions',
      link: { children: 'Get Answers', href: '/faq' }
    },
    {
      icon: 'tabler-folder-check',
      title: 'Press & Media',
      content: 'Connect with us on social media',
      link: { children: 'Connect With Us', href: branding.company.socialLink.linkedin, target: '_blank', rel: 'noopener noreferrer' }
    }
  ]
};
