// @project
import SvgIcon from '@/components/SvgIcon';
import { DOCS_URL } from '@/path';

export const integration = {
  headLine: 'The Complete Package',
  captionLine:
    "We've spent thousands of hours researching and procuring the best technology and team to provide every service you can imagine. We are truly a one-stop shop.",
  primaryBtn: {
    children: 'Learn More',
    startIcon: <SvgIcon name="tabler-package" color="background.default" />,
    href: DOCS_URL,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  tagList: [
    { label: 'CAD & Engineering' },
    { label: 'Die-Cutting' },
    { label: 'Folding' },
    { label: 'Gluing' },
    { label: 'Color Printing' },
    { label: 'Private Label' },
    { label: 'Custom Packaging' },
    { label: 'Contract Blister Cards' },
    { label: 'Graphic Design' },
    { label: 'Fulfillment' },
    { label: 'All Packaging' }
  ]
};
