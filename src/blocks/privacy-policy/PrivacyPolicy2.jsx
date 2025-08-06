// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  PRIVACY POLICY 2 - DATA  ***************************/

const policyItems = [
  {
    heading: '1. Information We Collect',
    caption:
      'Personal Data: We may collect personally identifiable information, including your name, email address, mailing address, phone number, and payment details. Usage Data: This includes technical data such as your IP address, browser type, operating system, referring URLs, pages visited, and the dates and times of your visits. Cookies: We use cookies and similar tracking technologies to enhance your experience, remember preferences, and analyze service performance. You can adjust your browser settings to refuse cookies if you prefer.'
  },
  {
    heading: '2. How We Use Your Information',
    caption:
      'We may use your personal information to: Provide, operate, and maintain our services, process orders and transactions, improve and personalize user experience, communicate with you about updates, offers, and support, fulfill our legal and regulatory obligations.'
  },
  {
    heading: '3. Sharing Your Information',
    caption:
      'We do not sell your personal data. However, we may share your information with: Service Providers: Trusted third parties who assist us with payment processing, website hosting, analytics, and customer support. Legal Compliance: We may disclose your data if required to do so by law or in response to valid legal requests (e.g., court orders or subpoenas) or to protect our legal rights.'
  },
  {
    heading: '4. Data Security',
    caption:
      'We take reasonable administrative, technical, and physical measures to protect your information. However, no method of transmission or storage is 100% secure. You share information at your own risk.'
  },
  {
    heading: '5. Your Rights',
    caption:
      'You have rights under applicable privacy laws, which may include: Accessing your personal data, correcting inaccurate or incomplete data, requesting deletion of your data, objecting to or limiting data processing, to exercise these rights, contact us at paul@thepackageiseverything.com.'
  },
  {
    heading: '6. Data Retention',
    caption:
      'We retain your personal data only as long as necessary to fulfill the purposes for which it was collected, including satisfying legal, accounting, or reporting requirements.'
  },
  {
    heading: '7. Third-Party Links',
    caption:
      'Our services may contain links to external websites. We are not responsible for the privacy practices or content of those third-party sites. We encourage you to read their privacy policies.'
  },
  {
    heading: '8. Illustration Notice',
    caption:
      'The feature images in our templates are static, non-editable visuals provided solely for design purposes. If editable images are required, you must supply or create your own assets externally.'
  },
  {
    heading: '9. Refund Policy',
    caption:
      'All purchases are final. This product is a one-time purchase and is non-refundable. Please ensure the product meets your requirements before completing your purchase.'
  },
  {
    heading: '10. Contact Us',
    caption: 'If you have questions or concerns about this Privacy Policy, please contact us at paul@thepackageiseverything.com'
  }
];

/***************************  PRIVACY POLICY - 2 ***************************/

export default function PrivacyPolicy2() {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      {policyItems.map((item, index) => (
        <Stack key={index} sx={{ py: { xs: 1, sm: 1.5, md: 3 }, px: { md: 3 }, gap: 1, '&:first-of-type': { pt: { sm: 0 } } }}>
          <Typography variant="h4">{item.heading}</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {item.caption}
          </Typography>
        </Stack>
      ))}
    </ContainerWrapper>
  );
}
