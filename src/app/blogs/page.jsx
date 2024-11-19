'use client'
import React from "react";
import { Flex, SimpleGrid, Text, useMediaQuery, Box } from "@chakra-ui/react";
import CardComp from '../../components/BlogsCard/index.jsx';
import {blogs} from '../../components/BlogsData/index.jsx';
import Navbar from '../../components/Navbar/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import {v4 as uuidv4} from 'uuid';
import Head from 'next/head';



export default function Index() {
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");


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
    <Box
      className="font-nexa"
      fontSize={["clamp(13px, 1.5vw, 15px)"]}
      fontWeight="500"
      color="#263238"
      bg='white'

    >
      <Navbar />
      <Flex
        id="content"
        flexDir="column"
        w={isLargerThan900 ? "80%" : "95%"}
        mx="auto"
        pb="5rem"
      >
        <Flex position='relative' py="4rem" flexDir="column" textAlign="center">
        <div style={{zIndex: "0"}} className="hidden tablet:block absolute top-[20%] left-[-20%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div>
          <Text
            fontSize={["clamp(25px, 3vw, 48px)"]}
            fontWeight="900"
            color="#263238"
            as="h1"
          >
            Blogs
          </Text>
          <Text>
          Transform your data into actionable insights. Unlock growth and drive <br /> smarter decisions with powerful analytics solutions today!
          </Text>
        </Flex>
        <Flex position='relative' >
      <div style={{zIndex: "-1"}} className="hidden tablet:block absolute top-[10%] right-[-10%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div>
      <div style={{zIndex: "-1"}} className="hidden tablet:block absolute bottom-[0%] right-[-10%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div>

          <SimpleGrid
            mx="auto"
            columns={isLargerThan900 ? 3 : isLargerThan600 ? 2 : 1}
            spacing={40}
          >
            {blogs?.map((item) => (
              <React.Fragment key={uuidv4()}>
                <CardComp item={item} />
              </React.Fragment>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
      <Footer />
    </Box>
    </main>
    </>
  );
}
