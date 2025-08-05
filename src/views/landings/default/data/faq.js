// @project
import branding from '@/branding.json';

export const faq = {
  heading: 'Frequently Asked Questions',
  caption: `Answers to common questions about ${branding.brandName}.`,
  defaultExpanded: 'Fees & Charges',
  faqList: [
    {
      question: `What range of products does ${branding.brandName} offer?`,
      answer: `We provide everything you need to keep your business running — from everyday essentials like pencils, copy paper, and office furniture to shipping boxes and custom retail displays.
      Each product has unique packaging needs. That might mean a simple stock box with bubble wrap, or a fully customized solution like a fabricated polyethylene foam insert or foam-in-place protection. For retail-ready items, it could be as straightforward as a stock box with branded tissue paper. Whatever the requirement, we’ve got you covered from end to end.`,
      category: 'General'
    },
    {
      question: `Does ${branding.brandName} make their own boxes?`,
      answer: `We’re often asked whether we manufacture our own boxes — and the answer is no. But that’s actually a big advantage for our customers.

      Because we’re not tied to a single production facility, we work with a wide network of trusted suppliers. That gives us the flexibility to source the best possible packaging solution for each specific application — at the right price, with the right lead time, and tailored to your unique needs. Our priority isn’t selling you our box — it’s finding your best-fit box.`,
      category: 'General'
    },
    {
      question: `Is going through ${branding.brandName} more expensive than from the supplier?`,
      answer: `Our high-volume partnerships with suppliers allow us to secure discounted rates, helping us offer competitive prices directly in the marketplace.`,
      category: 'General'
    },
    {
      question: `
    What is your typical turn-around time?`,
      answer:
        'Turnaround time for stock items is typically two days. If you need it sooner, we offer will-call pickup from our warehouse, and courier delivery may also be available. For custom items, lead time is usually a couple of weeks after specifications and pricing have been confirmed.',
      category: 'General'
    },
    {
      question: `Will ${branding.brandName} ship your order to you?`,
      answer: 'Yes',
      category: 'Support & Updates'
    },
    {
      question: `How does ${branding.brandName} handle custom orders?`,
      answer:
        'If a customer has a prototype, it’s incredibly helpful for us to evaluate how the product needs to be packed. We look at who the end user is, how the item will ship, and whether there are any special requirements or certifications we need to meet. For sensitive products, we may recommend custom foam inserts, while others might only need roll foam or bubble wrap. We’ll also consider quantity—whether a standard stock box will do for a small run, or if a custom box is necessary for larger or more specific needs. From there, we determine the ideal design and materials, then provide a sample and pricing for the customer’s review.',
      category: 'Orders'
    },
    {
      question: `Can I set-up recurring orders?`,
      answer:
        "Many of our customers rely on a consistent list of everyday packaging essentials — shipping boxes, poly bags, tape, bubble wrap, packing peanuts — all the standard supplies you'd expect to find in a warehouse. In fact, several of our customers place the same recurring order each week, making the process seamless and predictable.",
      category: 'Orders'
    }
  ],
  getInTouch: {
    link: { children: 'Get in Touch', href: '/contact', target: '_blank', rel: 'noopener noreferrer' }
  },
  categories: ['General', 'Orders', 'Support & Updates'],
  activeCategory: 'General'
};
