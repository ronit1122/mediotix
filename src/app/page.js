import Image from "next/image";
import Head from 'next/head';
import styles from "./page.module.css";
import Navbar from './../components/Navbar/index.jsx'
import { gauravKumar, publicReactionsFour, publicReactionsOne, publicReactionsThree, publicReactionsTwo, sectionOneBanner, sectionThreeImage, sectionTwoImage, whatWeDoOne, whatWeDoTwo, whatWeDoThree} from './../assets/home/export';
import { cashKaro, diceAcademy, finolex, gsk, maxHealth, pvr, watcho, qubo} from './../assets/clients/export';
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import {mx360Logo} from './../assets/companyLogo/export';
import CaseStudies from './../components/CaseStudies/index.jsx'
import Testimonial from './../components/Testimonial/index.jsx'
import Footer from './../components/Footer/index.jsx'
import PublicReactions from './../components/PublicReactions/index.jsx'
import GetInTouchForm from './../components/GetInTouchForm/index.jsx'
import Marquee from "react-fast-marquee";
import Accordion from './../components/Accordion/index.jsx'
import MarqueeComponent from './../components/marquee/index.jsx'
import LetsTalkButton from './../components/Buttons/letsTalkButton';
import BookADemoButton from './../components/Buttons/bookADemo';
import { Metadata } from 'next';

export const metadata = {
  title: 'Analytics & Digital Marketing Agency in Gurgaon, Delhi | Meditoix',
  description: 'An Award winning digital marketing & web analytics agency, Equipped with GAIQ Certified professionals. Specialized team for GTM, Google Data Studio, Funnel Optimization etc',
  alternates: {
    canonical: 'https://www.mediotix.com/',
  },
};

export default function Home() {

  const whatWeDoSolutionsData = [
    {
      title: "Measurement",
      desc: "Use accurate measurement to unlock actionable insights and ensure that your business decisions are always based on data.",
      link: "/",
    },
    {
      title: "GA4",
      desc: "Use Google Analytics 4 to track and analyze user behavior across your digital platforms for enhanced performance.",
      link: "/",
    },
    {
      title: "GTM360",
      desc: "streamlines tag management, resulting in seamless integration and efficient tracking of your marketing campaigns.",
      link: "/",
    },
    {
      title: "Advanced Funnel Optimization",
      desc: "Enhance your marketing funnel with data-driven insights and strategies to increase user journey efficiency and conversions at every step.",
      link: "/",
    },
    {
      title: "App Analytics",
      desc: "Monitor and enhance your app’s performance with comprehensive analytics, driving user engagement and retention.",
      link: "/",
    },
    {
      title: "Conversion Rate Optimization",
      desc: "Improve the percentage of visitors who complete desired actions on your website by analyzing user behaviour and making targeted changes.",
      link: "/",
    },
  ]

  const whatWeDoMarketingData = [
    {
      title: "Media Activation",
      desc: "Maximize your media investments with strategic activation, ensuring your campaigns reach the right audience at the right time.",
      link: "/",
    },
    {
      title: "DV 360",
      desc: "Utilize DV 360 for programmatic advertising, delivering targeted ads that boost conversions and ROI.",
      link: "/",
    },
    {
      title: "Affiliate Marketing",
      desc: "Expand your reach and sales with effective affiliate marketing techniques compatible with your company's specific needs.",
      link: "/",
    },
    {
      title: "Paid Social",
      desc: "Amplify your brand’s presence on social media with targeted paid campaigns that engage and convert.",
      link: "/",
    },
  ]

  const whatWeDoArchitectureData = [
    {
      title: "MX360",
      desc: "Integrate, Automate and analyze with MX360, All-in-one data-driven marketing solution.",
      link: "/",
    },
    {
      title: "Google Map Platform",
      desc: "Enhances your Hyperlocal-based services by delivering accurate and dependable mapping solutions.",
      link: "/",
    },
    {
      title: "Google Cloud Platform",
      desc: "Scale your business with the robust and secure infrastructure of Google Cloud Platform and Big Query.",
      link: "/",
    },
  ]



  const book_a_demo  = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'book_a_demo',
      });
    }
    console.log('Event pushed to dataLayer');
  };

  return (
    <main className="font-nexa">
      {/* <Head>
        <title>Mediotix MarTech Agency Contact Details | Phone & Address</title>
        <meta name="description" content="An Award winning digital marketing & web analytics agency, Equipped with GAIQ Certified professionals. Specialized team for GTM, Google Data Studio, Funnel Optimization etc" />
        <link rel="canonical" href="https://mediotix.com/" />
      </Head> */}
      <Navbar />

      {/* section 1 */}
      <div className="flex items-center justify-center text-center h-[370px] tablet:h-[620px] relative">
        <div  style={{zIndex: "3"}}  className="absolute flex items-center justify-center w-full h-full">
          <Image src={sectionOneBanner} style={{objectFit: "cover", width: "100%", height: "100%"}}/>
        </div>
         <div style={{opacity: "0.6", zIndex: "5"}} className="absolute w-full h-full bg-black "></div>
         <div style={{zIndex: "5"}} className="flex flex-col gap-3 items-center h-fit text-white">
          <div className="flex flex-col items-center ">
           <div className="border-b-2 w-fit mb-[26px]">
             <h3 className="font-medium text-[clamp(10px,3vw,14px)]">Experience the Best Agency</h3>
           </div>
           <h1 className="text-[clamp(20px,4vw,48px)] font-[800] tablet:leading-[1.1]">Fueling Brand Growth with <br/> Intelligent Marketing & AI Power Analytics</h1>
           {/* <h1 className="text-[clamp(20px,4vw,48px)] font-black tablet:leading-[0.5]"></h1> */}
           <p className=" mt-[40px] hidden tablet:block font-light">Our AI-driven MarTech solutions help to provide actionable insights, optimize marketing <br/> campaigns, and drive business growth.</p>
          </div>
           <LetsTalkButton />
         </div>
      </div>

      {/* section 2 */}
      <div className="flex flex-col h-fit bg-white color-[#000000]" style={{zIndex: "10"}} >

         {/* section 1 */}
         <div className=" w-[90%] tablet:w-[85%] mobile:w-[80%] flex justify-evenly mx-auto tablet:translate-y-[-80px] translate-y-[-50px]"  style={{zIndex: "10"}}>
          <MarqueeComponent />
         </div>

         {/* section 2 */}
         <div className=" flex w-[85%] gap-[4%] py-[3%] mx-auto">
          <div className="w-[100%] tablet:w-[50%]">
            {/* <h2 style={{fontSize: "clamp(18px, 3vw, 35px)"}} className="font-medium">Take off your marketing funnel with</h2> */}
            <h2 style={{fontSize: "clamp(22px, 3vw, 35px)", lineHeight: "1.3"}} className="font-[900] bg-clip-text text-transparent bg-gradient-to-r from-[#FF9363] to-[#FF7D78] ">Transform Data Insights</h2>
            <h2 style={{fontSize: "clamp(22px, 3vw, 35px)", lineHeight: "1.2"}} className="font-[900] mb-[10px] tablet:mb-[40px]">into Business Success</h2>
            <p style={{fontSize: "clamp(14px, 2vw, 15px)"}} >Mediotix is a leading MarTech agency with a global presence, serving clients worldwide through our large network of offices and strategic relationships. We believe in the power of data. Our team uses advanced analytics techniques to uncover actionable insights that drive successful marketing strategies. Our track record talks for itself. We've helped numerous businesses to achieve outstanding growth and success with our data-driven approach.</p>
            <button className="gradientButton mt-[10px] tablet:mt-[50px]">Know More</button>
            {/* <p style={{fontSize: "clamp(12px, 2vw, 15px)"}}>MX360 is a comprehensive marketing solution that offers AI-based advanced reporting & insights, seamlessly integrated across multiple platforms. Together with a combination of media and reporting services we aim to provide tailored solutions for individual brand voices.</p> */}
          </div>
          <div className="w-[50%] hidden tablet:block">
            <Image src={sectionTwoImage} style={{objectFit: "contain"}} />
          </div>
         </div>

      </div>

      {/* section 3 */}
      <div className="bg-white">
        <div className="flex flex-col w-[90%] gap-[4%] pt-[3%] pb-[7%] mx-auto tablet:w-[85%]">
          <h2 style={{fontSize: "clamp(22px, 3vw, 35px)"}}  className="font-[900] text-center  text-[#FF7D78]" >What We Do</h2>
          
          <div className="w-full flex flex-col gap-[10px] mt-8 tablet:flex-row ">

          <div className="w-[100%] min-h-full p-[10px] border-[2px] border-[#FF9363] rounded-[5px] bg-white">
              <div className="h-[152px] p-[10px] flex flex-col justify-center rounded-[5px]" style={{background: "linear-gradient(180deg, rgba(255, 125, 120, 0.7) 0%, rgba(255, 147, 99, 0.7) 100%)"}}>
                 <Image src={whatWeDoOne} alt="solution"  className="ml-3"/>
                 <p className="font-bold text-[20px]">Solution</p>
              </div>
              <div className="flex flex-col py-[30px]">
                <Accordion items={whatWeDoSolutionsData} />
              </div>
          </div>

          <div className="w-[100%] min-h-full p-[10px] border-[2px] border-[#FF9363] rounded-[5px] bg-white">
              <div className="h-[152px] p-[10px] flex flex-col justify-center rounded-[5px]" style={{background: "linear-gradient(180deg, rgba(255, 125, 120, 0.7) 0%, rgba(255, 147, 99, 0.7) 100%)"}}>
                 <Image src={whatWeDoTwo} alt="solution"  className="ml-3"/>
                 <p className="font-bold text-[20px]">Marketing</p>
              </div>
              <div className="flex flex-col h-full py-[30px]">
              <Accordion items={whatWeDoMarketingData} />
              </div>
          </div>

          <div className="w-[100%] min-h-full p-[10px] border-[2px] border-[#FF9363] rounded-[5px] bg-white">
              <div className="h-[152px] p-[10px] flex flex-col justify-center rounded-[5px]" style={{background: "linear-gradient(180deg, rgba(255, 125, 120, 0.7) 0%, rgba(255, 147, 99, 0.7) 100%)"}}>
                 <Image src={whatWeDoThree} alt="solution"  className="ml-3"/>
                 <p className="font-bold text-[20px]">Architecture</p>
              </div>
              <div className="flex flex-col py-[30px]">
              <Accordion items={whatWeDoArchitectureData} />
              </div>
          </div>
            
          </div>

        </div>
      </div>

       {/* section 4  */}
      <div className="bg-[#EAF6FF] ">
      <div className="flex flex-col gap-2 w-fit mx-auto">
      <Image src={mx360Logo} className="mx-auto pt-[40px] tablet:pt-[50px] w-[160px] tablet:w-[100%]" style={{objectFit: "contain"}}/>
      <p className="text-end font-[900]">Digital Growth Pilot</p>
      </div>
      <div className=" flex w-[95%] tablet:w-[85%] gap-[4%] pt-[30px] tablet:pt-[4%] pb-[7%] mx-auto bg-[#EAF6FF]">
          <div className=" w-[100%] tablet:w-[50%]">
            <h2 style={{fontSize: "clamp(22px, 3vw, 35px)", lineHeight: "1.3"}}  className="font-[900] bg-clip-text text-transparent bg-gradient-to-r from-[#FF9363] to-[#FF7D78] ">Integrate, Automate and Analyze </h2>
            <h2 style={{fontSize: "clamp(22px, 3vw, 35px)", lineHeight: "1.2"}} className="font-[900] mb-[10px] tablet:mb-[30px]" >All-In-One Data-Driven Marketing Solution.</h2>
            <div className="w-[100%] my-[20px] block tablet:hidden">
            <Image src={sectionThreeImage} style={{objectFit: "contain"}} />
            </div>
            <p style={{fontSize: "clamp(14px, 2vw, 15px)"}}>MX360 is an all-in-one marketing powerhouse and Digital Growth Pilot that effortlessly delivers AI-powered enhanced reporting and insights across many platforms. We create customized solutions that resonate with each brand's voice by integrating media, SEO, hyperlocal strategies, and analytics reporting.</p>
            <Link href="https://mx360.io" aria-label="mx360">
             <BookADemoButton />
            </Link>
            {/* <p style={{fontSize: "clamp(12px, 2vw, 15px)"}}>MX360 is a comprehensive marketing solution that offers AI-based advanced reporting & insights, seamlessly integrated across multiple platforms. Together with a combination of media and reporting services we aim to provide tailored solutions for individual brand voices.</p> */}
          </div>
          <div className="w-[50%] hidden tablet:block">
            <Image src={sectionThreeImage} style={{objectFit: "contain"}} />
          </div>
      </div>
      </div>


      {/* section 5 */}
      <div className="bg-white relative">
        <div style={{zIndex: "0"}} className=" absolute bottom-0 left-0  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[8rem]"></div>
        <div  style={{zIndex: "0"}} className=" absolute bottom-[30%] right-[-5%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[8rem]"></div>
         <div style={{zIndex: "10"}}>
          <CaseStudies />
         </div>
      </div>

      {/* section 6 */}
      <div className="bg-[#EAF6FF] ">
          <Testimonial />
      </div>

      {/* section 7 */}
      <div className="bg-white relative ">
      <div style={{zIndex: "0"}} className=" absolute top-[5%] left-0  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[8rem]"></div>
        <div style={{zIndex: "10"}} >
          <PublicReactions />
        </div>
      </div>

      {/* section 8 */}
      <div className="bg-white relative" id="contact-section">
          <GetInTouchForm />
      </div>

      <Footer />

    </main>
  );
}
