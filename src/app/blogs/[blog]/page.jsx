import { blogs } from "../../../utils/blogsData.js";
import BlogsDetailPage from './../../../components/BlogsDetailPage/index.jsx';
import { notFound } from 'next/navigation'; 

export async function generateMetadata({ params }) {
    const {blog} = params;

    const blogData = blogs?.filter((item) => item?.url === decodeURIComponent(blog))?.[0];

    const title = `${blogData?.metaTitle}`;
    const description = `${blogData?.metaDesc}`;

    console.log(blogData, "blogData------------------------------------------------------------------------------------------------------------------------------------------------------------------")

    if (!blogData) {
      notFound(); // Redirect to the not-found page
    }

    return {
      title,
      description,
      alternates: {
        canonical: `${blogData?.canonical}`,
      },
      robots: {
        index: true,
        follow: true,
      },
      meta: [
        { name: 'robots', content: 'index, follow' },
      ],
    };
  }

export default function Index({params}) {
  const { blog } = params;

  const blogData = blogs?.filter((item) => item?.url === decodeURIComponent(blog))?.[0];
  
  console.log(blogData, "blogData------------------------------------------------------------------------------------------------------------------------------------------------------------------")
  
  return (
      <main>
      {blogData?.organizationSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogData.organizationSchema) }}
        />
      )}
      {blogData?.articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogData.articleSchema) }}
        />
      )}
      {blogData?.breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogData.breadcrumbSchema) }}
        />
      )}
      {blogData?.websiteSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogData.websiteSchema) }}
        />
      )}
      {blogData?.blogPostingSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogData.blogPostingSchema) }}
        />
      )}
         <BlogsDetailPage blog={blog}/>
      </main>
  );
}
