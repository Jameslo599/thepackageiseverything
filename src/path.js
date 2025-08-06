function path(urlChunks) {
  return urlChunks.join('/');
}

export const SECTION_PATH = '/sections';
export const MARKET_PATH = '/sections/markets';
export const ADMIN_PATH = '#';
export const BUY_NOW_URL = '/contact';
export const FREEBIES_URL = '#';
export const DOCS_URL = '#';
const BLOCK_PATH = '/blocks';

export const LANDING_PATH = {
  default: '/'
};

export const PAGE_PATH = {
  about: path([SECTION_PATH, 'about']),
  comingSoon: path([SECTION_PATH, 'coming-soon']),
  error404: path([SECTION_PATH, 'error404']),
  error500: path([SECTION_PATH, 'error500']),
  underMaintenance: path([MARKET_PATH, 'under-maintenance']),

  // pages path
  // aboutPage: '/about',
  // careerPage: '/career',
  contactPage: '/contact',
  faqPage: '/faq',
  privacyPolicyPage: '/privacy-policy',
  termsConditionPage: '/terms-condition'
};

export const PRIVIEW_PATH = {
  comingSoon: path([BLOCK_PATH, 'coming-soon']),
  error404: path([BLOCK_PATH, 'error404']),
  error500: path([BLOCK_PATH, 'error500']),
  underMaintenance: path([BLOCK_PATH, 'under-maintenance'])
};
