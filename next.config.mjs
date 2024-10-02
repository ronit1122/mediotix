/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/performance-dashboards',
          destination: '/',
          permanent: true,
        },
        {
          source: '/ab-testing',
          destination: '/',
          permanent: true,
        },
        {
          source: '/digital-analytics',
          destination: '/',
          permanent: true,
        },
        {
          source: '/case-study/reduced-checkout-abandonment-rate',
          destination: '/',
          permanent: true,
        },
        {
          source: '/testimonial/digital-consultant',
          destination: '/',
          permanent: true,
        },
        {
          source: '/case-study/increased-leads-form-conversions',
          destination: '/',
          permanent: true,
        },
        {
          source: '/case-study/gtm-implementation',
          destination: '/',
          permanent: true,
        },
        {
          source: '/google-data-studio',
          destination: '/',
          permanent: true,
        },
        {
          source: '/case-study',
          destination: '/',
          permanent: true,
        },
        {
          source: '/google-tag-manager',
          destination: '/',
          permanent: true,
        },
        {
          source: '/about-us',
          destination: '/',
          permanent: true,
        },
        {
          source: '/testimonial/testimonial-1',
          destination: '/',
          permanent: true,
        },
        {
          source: '/testimonial/seo',
          destination: '/',
          permanent: true,
        },
        {
          source: '/programmatic',
          destination: '/',
          permanent: true,
        },
        {
          source: '/app-analytics',
          destination: '/',
          permanent: true,
        },
        {
          source: '/case-study/seo-case-study',
          destination: '/',
          permanent: true,
        },
        {
          source: '/testimonial/paid-search-ads',
          destination: '/',
          permanent: true,
        },
        {
          source: '/voice-search-optimization',
          destination: '/',
          permanent: true,
        },
        {
          source: '/app-store-optimization',
          destination: '/',
          permanent: true,
        },
        {
          source: '/testimonial/google-tag-manager',
          destination: '/',
          permanent: true,
        },
        {
          source: '/blog',
          destination: '/',
          permanent: true,
        },
        {
          source: '/case-study/increased-engagement-conversions',
          destination: '/',
          permanent: true,
        },
        {
          source: '/enhanced-ecommerce',
          destination: '/',
          permanent: true,
        },
        {
          source: '/search-engine-optimization',
          destination: '/',
          permanent: true,
        },
        {
          source: '/testimonial/google-analytics-conversion-rate',
          destination: '/',
          permanent: true,
        },
        {
          source: '/video-optimization',
          destination: '/',
          permanent: true,
        },
        {
          source: '/google-my-business-listing',
          destination: '/',
          permanent: true,
        },
        {
          source: '/search-engine-marketing',
          destination: '/',
          permanent: true,
        },
        {
          source: '/funnel-optimization',
          destination: '/',
          permanent: true,
        },
        {
          source: '/testimonials',
          destination: '/',
          permanent: true,
        },
        {
          source: '/ga4.mediotix.com',
          destination: '/',
          permanent: true,
        },
        {
          source: '/ga4.mediotix.com/privacy-policy.html',
          destination: '/',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  