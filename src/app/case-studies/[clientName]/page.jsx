import CaseStudyDetails from '../../../components/CaseStudiesDetailPage/index.jsx';
import {cases} from './../../../utils/caseStudiesData.js';
import Head from 'next/head';


export async function generateMetadata({ params }) {
    const { clientName } = params;
    const caseStudyData = cases?.filter((item) => item?.route === decodeURIComponent(clientName))?.[0];

    const title = `${caseStudyData?.metaTitle}`;
    const description = `${caseStudyData?.metaDescription}`;
  
    console.log(caseStudyData?.canonical, "caseStudyData?.canonical")
    return {
      title,
      description,
      alternates: {
        canonical: `${caseStudyData?.canonical}`,
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
      <>
      <Head>
       {/* Injecting JSON-LD */}
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyData?.organizationSchema) }}
        />
        {/* Inject Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyData?.articleSchema) }}
        />
        {/* Inject Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyData?.breadcrumbSchema) }}
        />
        {/* Inject website Schema */}
        {caseStudyData?.websiteSchema && <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyData?.websiteSchema) }}
        />}
      </Head>
      <main>
        <CaseStudyDetails clientName={clientName} />
      </main>
      </>
    );
  }
  