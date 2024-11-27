
import React from "react";
import Head from 'next/head';
import BlogsPage from './../../components/BlogsPage/index.jsx';


export const metadata = {
  title: 'Mediotix Blog - Data Analytics, Marketing Insights & Trends',
  description: 'Explore the Mediotix blog for expert insights on data analytics, marketing strategies, AI innovations, & the latest industry trends',
  alternates: {
    canonical: 'https://www.mediotix.com/blogs/',
  },
};


export default function Index() {


  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://www.mediotix.com/blogs",
    "name": "Blogs | Mediotix",
    "description": "Explore the latest blogs on data analytics, marketing, AI, Google Analytics, and more. Discover actionable insights and strategies to optimize business performance.",
    "mainEntityOfPage": "https://www.mediotix.com/blogs",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.mediotix.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blogs",
          "item": "https://www.mediotix.com/blogs"
        }
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mediotix",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mediotix.com/_next/static/media/mediotixLogoWhite.48d1f3e1.svg"
      },
      "url": "https://www.mediotix.com"
    },
    "article": {
      "@type": "BlogPosting",
      "headline": "Transform Your Data Into Actionable Insights",
      "url": "https://www.mediotix.com/blogs",
      "datePublished": "2024-01-01",
      "dateModified": "2024-01-01",
      "author": {
        "@type": "Person",
        "name": "Mediotix Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Mediotix",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.mediotix.com/_next/static/media/mediotixLogoWhite.48d1f3e1.svg"
        }
      },
      "mainEntityOfPage": "https://www.mediotix.com/blogs"
    },
    "blogPosts": [
      {
        "@type": "BlogPosting",
        "url": "https://www.mediotix.com/blogs/quantifying-success",
        "headline": "Quantifying Success: The Power of Digital Analytics in Marketing",
        "datePublished": "2024-03-04",
        "description": "Discover how digital analytics drives data-driven decisions, optimizes strategies, and maximizes ROI in marketing.",
        "author": {
          "@type": "Person",
          "name": "Mediotix Team"
        }
      },
      {
        "@type": "BlogPosting",
        "url": "https://www.mediotix.com/blogs/retention-roadmap",
        "headline": "Retention Roadmap: Tracking User Trends with GA4",
        "datePublished": "2024-05-13",
        "description": "Use GA4 to map user behavior trends, enhance retention, and drive growth with data-driven insights.",
        "author": {
          "@type": "Person",
          "name": "Mediotix Team"
        }
      },
      {
        "@type": "BlogPosting",
        "url": "https://www.mediotix.com/blogs/power-of-bigquery",
        "headline": "The Power of BigQuery Integration in Google Analytics 4",
        "datePublished": "2023-09-25",
        "description": "Unlock advanced insights with BigQuery integration in GA4 for deeper data analysis and improved decision-making.",
        "author": {
          "@type": "Person",
          "name": "Mediotix Team"
        }
      },
      {
        "@type": "BlogPosting",
        "url": "https://www.mediotix.com/blogs/firebase-google-analytics",
        "headline": "Firebase & Google Analytics: Powering Mobile App Insights",
        "datePublished": "2023-10-09",
        "description": "Unlock mobile app success with Firebase + Google Analytics for powerful insights and optimized user experiences.",
        "author": {
          "@type": "Person",
          "name": "Mediotix Team"
        }
      },
      {
        "@type": "BlogPosting",
        "url": "https://www.mediotix.com/blogs/ai-awakens",
        "headline": "AI Awakens: Redefining Marketing Analytics for the Digital Era",
        "datePublished": "2024-03-11",
        "description": "Discover how AI transforms marketing analytics with real-time insights, predictive strategies, and ethical practices.",
        "author": {
          "@type": "Person",
          "name": "Mediotix Team"
        }
      },
      {
        "@type": "BlogPosting",
        "url": "https://www.mediotix.com/blogs/top-data-analytics-tools",
        "headline": "Top Data Analytics Tools and Software for 2024",
        "datePublished": "2024-09-02",
        "description": "Explore the top data analytics tools for 2024, including Tableau, Power BI, Looker, Qlik Sense, and SAS Analytics.",
        "author": {
          "@type": "Person",
          "name": "Mediotix Team"
        }
      },
      {
        "@type": "BlogPosting",
        "url": "https://www.mediotix.com/blogs/content-performance-analysis",
        "headline": "Content Performance Analysis: Measuring What Matters Most",
        "datePublished": "2024-06-17",
        "description": "Measure key content metrics to boost engagement and conversions. Learn how content analysis drives results effectively.",
        "author": {
          "@type": "Person",
          "name": "Mediotix Team"
        }
      },
      {
        "@type": "BlogPosting",
        "url": "https://www.mediotix.com/blogs/optimizing-your-referral-traffic",
        "headline": "Optimizing Your Referral Traffic in GA4 for Better Insights",
        "datePublished": "2024-07-30",
        "description": "Optimize referral traffic with GA4. Analyze key metrics, gain insights, and implement strategies to boost conversions.",
        "author": {
          "@type": "Person",
          "name": "Mediotix Team"
        }
      },
      {
        "@type": "BlogPosting",
        "url": "https://www.mediotix.com/blogs/data-visualization",
        "headline": "Data Visualization: Turning Numbers into Actionable Insights",
        "datePublished": "2024-08-05",
        "description": "Businesses need data visualization to turn complex data into understandable, actionable insights for meaningful decisions.",
        "author": {
          "@type": "Person",
          "name": "Mediotix Team"
        }
      }
    ]
  }

  return (
    <>
      <Head>
        {/* Injecting JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <main>
        <BlogsPage />
      </main>
    </>
  );
}
