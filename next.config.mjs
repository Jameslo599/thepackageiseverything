/** @type {import('next').NextConfig} */
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://vercel.live https://va.vercel-scripts.com https://*.clarity.ms https://phpstack-207002-5085356.cloudwaysapps.com https://player.vimeo.com;
  style-src 'self' 'unsafe-inline' https://phpstack-207002-5085356.cloudwaysapps.com https://fonts.googleapis.com;
  img-src 'self' blob: data: https://www.googletagmanager.com https://flagcdn.com https://*.openstreetmap.org https://*.clarity.ms https://*.bing.com https://phpstack-207002-5085356.cloudwaysapps.com https://i.vimeocdn.com;
  font-src 'self' https://*.gstatic.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  media-src 'self' https://*.cloudfront.net https://player.vimeo.com https://vod-progressive.akamaized.net;
  frame-src https://player.vimeo.com;
  connect-src 'self' https://www.googletagmanager.com https://raw.githubusercontent.com https://phpstack-207002-5085356.cloudwaysapps.com https://*.clarity.ms https://*.azurewebsites.net;
`;

const nextConfig = {
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}'
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}'
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '**'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, '')
          }
        ]
      }
    ];
  }
};

export default nextConfig;
