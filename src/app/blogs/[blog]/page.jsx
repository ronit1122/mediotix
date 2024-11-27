import React from "react";
import { blogs } from "../../../utils/blogsData.js";
import Head from 'next/head';
import BlogsDetailPage from './../../../components/BlogsDetailPage/index.jsx';


export async function generateMetadata({ params }) {
    const {blog} = params;

    const blogData = blogs?.filter((item) => item?.url === decodeURIComponent(blog))?.[0];

    const title = `${blogData?.metaTitle}`;
    const description = `${blogData?.metaDesc}`;
  
    return {
      title,
      description,
      alternates: {
        canonical: `${blogData?.canonical}`,
      },
      meta: [
        { name: 'robots', content: 'index, follow' },
      ],
    };
  }

export default function Index({params}) {
  const { blog } = params;

  const blogData = blogs?.filter((item) => item?.url === decodeURIComponent(blog))?.[0];
  
  
  return (
    <>
      <Head>
       {/* Injecting JSON-LD */}
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogData?.organizationSchema) }}
        />
        {/* Inject Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogData?.articleSchema) }}
        />
        {/* Inject Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogData?.breadcrumbSchema) }}
        />
      </Head>
      <main>
         <BlogsDetailPage />
      </main>
    </>
  );
}
