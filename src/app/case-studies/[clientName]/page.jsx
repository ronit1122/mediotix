import CaseStudyDetails from '../../../components/CaseStudiesDetailPage/index.jsx';
import {cases} from './../../../utils/caseStudiesData.js';
import Head from 'next/head';
import { notFound } from 'next/navigation'; 

export async function generateMetadata({ params }) {
    const { clientName } = params;
    const caseStudyData = cases?.filter((item) => item?.route === decodeURIComponent(clientName))?.[0];

    const title = `${caseStudyData?.metaTitle}`;
    const description = `${caseStudyData?.metaDescription}`;
  
    if (!caseStudyData) {
       notFound(); // Redirect to the not-found page
    }
        
    return {
      title,
      description,
      alternates: {
        canonical: `${caseStudyData?.canonical}`,
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
  
  export default function CaseStudyPage({ params }) {
    const { clientName } = params;
    const caseStudyData = cases?.filter((item) => item?.route === decodeURIComponent(clientName))?.[0];

    console.log(caseStudyData?.canonical, "caseStudyData?.canonical")

    
    return (
      <main>
        {caseStudyData?.organizationSchema && <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyData?.organizationSchema) }}
        />}
        {/* Inject Article Schema */}
        {caseStudyData?.articleSchema && <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyData?.articleSchema) }}
        />}
        {/* Inject Breadcrumb Schema */}
        {caseStudyData?.breadcrumbSchema && <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyData?.breadcrumbSchema) }}
        />}
        {/* Inject website Schema */}
        {caseStudyData?.websiteSchema && <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyData?.websiteSchema) }}
        />}
        <CaseStudyDetails clientName={clientName} />
      </main>
    
    );
  }
  