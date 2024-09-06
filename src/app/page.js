import Image from "next/image";
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


  return (
    <main className="font-nexa">
      <Navbar />

      {/* section 1 */}
      <div className="flex items-center justify-center text-center h-[620px] relative">
        <div  style={{zIndex: "3"}}  className="absolute flex items-center justify-center w-full h-full">
          <Image src={sectionOneBanner} style={{objectFit: "cover", width: "100%", height: "100%"}}/>
        </div>
         <div style={{opacity: "0.6", zIndex: "5"}} className="absolute w-full h-full bg-black "></div>
         <div style={{zIndex: "5"}} className="flex flex-col gap-3 items-center h-fit text-white">
          <div className="flex flex-col items-center ">
           <div className="border-b-2 w-fit">
             <h3 className="font-medium ">Experience the Best Agency</h3>
           </div>
           <h2 className="text-5xl mt-[26px] font-medium font-nexa">Fueling Brand Growth with</h2>
           <h1 className="text-5xl font-black">Intelligent Marketing & AI Power Analytics</h1>
           <p className=" mt-[30px] font-light">Our AI-driven MarTech solutions help to provide actionable insights, optimize marketing <br/> campaigns, and drive business growth.</p>
          </div>
           <button className="naviteButton mt-[30px]">Lets Talk</button>
         </div>
      </div>

      {/* section 2 */}
      <div className="flex flex-col h-fit bg-white color-[#000000]" style={{zIndex: "10"}} >

         {/* section 1 */}
         <div className="w-[100%] flex justify-evenly mx-auto gap-[2%] translate-y-[-80px]"  style={{zIndex: "10"}}>
         <Marquee loop={0} autoFill={false} speed={40} pauseOnHover={true}>
          <div className="flex flex-col gap-2 justify-evenly ml-[50px] items-center max-h-[250px] min-h-[200px] h-[200px] max-w-[250px] min-w-[200px] w-[250px] bg-white border-[2px] border-[#FF7D78] p-[20px] rounded-[8px]">
            <Image src={pvr} alt="pvr"/>
            <p className="text-[20px] font-black">35%</p>
            {/* <p className="text-[20px] font-medium">Increase Leads</p> */}
            <div className="w-fit p-[5px] rounded-[5px] bg-[#FFCB05] text-[12px] ">Increase ticket bookings  </div>
          </div>

          <div className="flex flex-col gap-2 justify-evenly  ml-[50px] items-center max-h-[250px] min-h-[200px] h-[200px] w-[250px]  max-w-[250px] min-w-[200px] bg-white  border-[2px] border-[#004185] p-[20px] rounded-[8px]">
            <Image src={maxHealth} alt="maxHealth"/>
            <p className="text-[20px] font-black">150%</p>
            {/* <p className="text-[20px] font-medium">Increase Leads</p> */}
            <div className="w-fit p-[5px] rounded-[5px] text-white bg-[#004185] text-[12px] ">Increase in Doctor consultancy</div>
          </div>

          <div className="flex flex-col gap-2 justify-evenly ml-[50px]  items-center max-h-[250px] min-h-[200px]  h-[200px] w-[250px]   max-w-[250px] min-w-[200px] bg-white  border-[2px] border-[#000000] p-[20px] rounded-[8px]">
            <Image src={diceAcademy} alt="diceAcademy"/>
            <p className="text-[20px] font-black">500%</p>
            {/* <p className="text-[20px] font-medium">Increase Leads</p> */}
            <div className="w-fit p-[5px] text-white rounded-[5px] bg-[#000000] text-[12px] ">Boost in Admissions leads </div>
          </div>

          <div className="flex flex-col gap-2 justify-evenly ml-[50px]  items-center max-h-[250px] min-h-[200px]  h-[200px] w-[250px]  max-w-[250px] min-w-[200px] bg-white  border-[2px] border-[#FA5306] p-[20px] rounded-[8px]">
            <Image src={gsk} alt="gsk"/>
            <p className="text-[20px] font-black">120%</p>
            {/* <p className="text-[20px] font-medium">Increase Leads</p> */}
            <div className="w-fit p-[5px] rounded-[5px] text-white bg-[#FA5306] text-[12px] ">Return on Investment</div>
          </div>

          <div className="flex flex-col gap-2 justify-evenly ml-[50px]  items-center max-h-[250px] min-h-[200px]  h-[200px] w-[250px]  max-w-[250px] min-w-[200px] bg-white  border-[2px] border-[#E4235A] p-[20px] rounded-[8px]">
            <Image src={watcho} alt="watcho"/>
            <p className="text-[20px] font-black">48%</p>
            {/* <p className="text-[20px] font-medium">Increase Leads</p> */}
            <div className="w-fit p-[5px] rounded-[5px] text-white bg-[#E4235A] text-[12px] ">Increase in OTT Subcriptions</div>
          </div>

          <div className="flex flex-col gap-2 justify-evenly ml-[50px]  items-center max-h-[250px] min-h-[200px]  h-[200px] w-[250px]  max-w-[250px] min-w-[200px] bg-white  border-[2px] border-[#00AFCC] p-[20px] rounded-[8px]">
            <Image src={qubo} alt="quibo"/>
            <p className="text-[20px] font-black">72%</p>
            {/* <p className="text-[20px] font-medium">Increase Leads</p> */}
            <div className="w-fit p-[5px] rounded-[5px] text-white bg-[#00AFCC] text-[12px] ">Increase in Transactions</div>
          </div>
          </Marquee>
         </div>

         {/* section 2 */}
         <div className=" flex w-[85%] gap-[4%] py-[3%] mx-auto">
          <div className="w-[50%]">
            {/* <h2 style={{fontSize: "clamp(18px, 3vw, 35px)"}} className="font-medium">Take off your marketing funnel with</h2> */}
            <h2 style={{fontSize: "clamp(18px, 3vw, 35px)", lineHeight: "1.2"}} className="font-[900] bg-clip-text text-transparent bg-gradient-to-r from-[#FF9363] to-[#FF7D78] ">Transform Data Insights</h2>
            <h2 style={{fontSize: "clamp(18px, 3vw, 35px)", lineHeight: "1.2"}} className="font-[900] mb-[40px]">into Business Success</h2>
            <p style={{fontSize: "clamp(12px, 2vw, 15px)"}}>Mediotix is a leading MarTech agency with a global presence, serving clients worldwide through our large network of offices and strategic relationships. We believe in the power of data. Our team uses advanced analytics techniques to uncover actionable insights that drive successful marketing strategies. Our track record talks for itself. We've helped numerous businesses to achieve outstanding growth and success with our data-driven approach.</p>
            <button className="gradientButton mt-[50px]">Know More</button>
            {/* <p style={{fontSize: "clamp(12px, 2vw, 15px)"}}>MX360 is a comprehensive marketing solution that offers AI-based advanced reporting & insights, seamlessly integrated across multiple platforms. Together with a combination of media and reporting services we aim to provide tailored solutions for individual brand voices.</p> */}
          </div>
          <div className="w-[50%]">
            <Image src={sectionTwoImage} style={{objectFit: "contain"}} />
          </div>
         </div>

      </div>

      {/* section 3 */}
      <div className="bg-white">
        <div className="flex flex-col w-[85%] gap-[4%] pt-[3%] pb-[7%] mx-auto">
          <h2 style={{fontSize: "clamp(18px, 3vw, 35px)"}}  className="font-[900] text-center  text-[#FF7D78]" >What we do</h2>
          
          <div className="w-full flex gap-[4%] mt-8">

          <div className="w-[100%] p-[10px] border-[2px] border-[#FF9363] rounded-[5px] bg-white">
              <div className="h-[152px] p-[10px] flex flex-col justify-center rounded-[5px]" style={{background: "linear-gradient(180deg, rgba(255, 125, 120, 0.7) 0%, rgba(255, 147, 99, 0.7) 100%)"}}>
                 <Image src={whatWeDoOne} alt="solution"  className="ml-3"/>
                 <p className="font-bold text-[20px]">Solution</p>
              </div>
              <div className="flex flex-col py-[30px]">
              {whatWeDoSolutionsData?.map((item, index) => (
              <div className="flex flex-col">
              <div className=" px-[15px] py-[15px] hover:bg-[#fff2ec]  cursor-pointer">
                <div className="flex justify-between gap-3">
                  <h2 style={{fontSize: "clamp(12px, 2vw, 15px)"}} className="font-bold">{item.title}</h2>
                  <Link href={item.link}><FaArrowRightLong /></Link>
                </div>
                <p style={{fontSize: "clamp(12px, 2vw, 15px)"}}>{item?.desc}</p>
              </div>
              {whatWeDoSolutionsData?.length - 1 !== index && <div className="border-b-[2px] border-[#fff2ec] w-full"></div>}
              </div>
              ))}
              </div>
          </div>

          <div className="w-[100%] p-[10px] border-[2px] border-[#FF9363] rounded-[5px] bg-white">
              <div className="h-[152px] p-[10px] flex flex-col justify-center rounded-[5px]" style={{background: "linear-gradient(180deg, rgba(255, 125, 120, 0.7) 0%, rgba(255, 147, 99, 0.7) 100%)"}}>
                 <Image src={whatWeDoTwo} alt="solution"  className="ml-3"/>
                 <p className="font-bold text-[20px]">Marketing</p>
              </div>
              <div className="flex flex-col py-[30px]">
              {whatWeDoMarketingData?.map((item, index) => (
              <div className="flex flex-col">
              <div className=" px-[15px] py-[15px]  hover:bg-[#fff2ec] cursor-pointer">
                <div className="flex justify-between gap-3">
                  <h2 style={{fontSize: "clamp(12px, 2vw, 15px)"}} className="font-bold">{item.title}</h2>
                  <Link href={item.link}><FaArrowRightLong /></Link>
                </div>
                <p style={{fontSize: "clamp(12px, 2vw, 15px)"}}>{item?.desc}</p>
              </div>
              {whatWeDoMarketingData?.length - 1 !== index && <div className="border-b-[2px] border-[#fff2ec] w-full"></div>}
              </div>
              ))}
              </div>
          </div>

          <div className="w-[100%] p-[10px] border-[2px] border-[#FF9363] rounded-[5px] bg-white">
              <div className="h-[152px] p-[10px] flex flex-col justify-center rounded-[5px]" style={{background: "linear-gradient(180deg, rgba(255, 125, 120, 0.7) 0%, rgba(255, 147, 99, 0.7) 100%)"}}>
                 <Image src={whatWeDoThree} alt="solution"  className="ml-3"/>
                 <p className="font-bold text-[20px]">Architecture</p>
              </div>
              <div className="flex flex-col py-[30px]">
              {whatWeDoArchitectureData?.map((item, index) => (
              <div className="flex flex-col">
              <div className=" px-[15px] py-[15px]   hover:bg-[#fff2ec] cursor-pointer">
                <div className="flex justify-between gap-3">
                  <h2 style={{fontSize: "clamp(12px, 2vw, 15px)"}} className="font-bold">{item.title}</h2>
                  <Link href={item.link}><FaArrowRightLong /></Link>
                </div>
                <p style={{fontSize: "clamp(12px, 2vw, 15px)"}}>{item?.desc}</p>
              </div>
              {whatWeDoArchitectureData?.length - 1 !== index && <div className="border-b-[2px] border-[#fff2ec] w-full"></div>}
              </div>
              ))}
              </div>
          </div>
            
          </div>

        </div>
      </div>

       {/* section 4  */}
      <div className="bg-[#EAF6FF] ">
      <div className="flex flex-col gap-2 w-fit mx-auto">
      <Image src={mx360Logo} className="mx-auto pt-[50px]" style={{objectFit: "contain"}}/>
      <p className="text-end font-[900]">Digital Growth Pilot</p>
      </div>
      <div className=" flex w-[85%] gap-[4%] pt-[4%] pb-[7%] mx-auto bg-[#EAF6FF]">
          <div className="w-[50%]">
            <h2 style={{fontSize: "clamp(18px, 3vw, 35px)", lineHeight: "1.2"}}  className="font-[900] bg-clip-text text-transparent bg-gradient-to-r from-[#FF9363] to-[#FF7D78] ">Integrate, Automate and analyze </h2>
            <h2 style={{fontSize: "clamp(18px, 3vw, 35px)", lineHeight: "1.2"}} className="font-[900] mb-[30px]">all-in-one data-driven marketing solution.</h2>
            <p style={{fontSize: "clamp(12px, 2vw, 15px)"}}>MX360 is an all-in-one marketing powerhouse and Digital Growth Pilot that effortlessly delivers AI-powered enhanced reporting and insights across many platforms. We create customized solutions that resonate with each brand's voice by integrating media, SEO, hyperlocal strategies, and analytics reporting.</p>
            <button className="gradientButton mt-[50px]">Book a demo</button>
            {/* <p style={{fontSize: "clamp(12px, 2vw, 15px)"}}>MX360 is a comprehensive marketing solution that offers AI-based advanced reporting & insights, seamlessly integrated across multiple platforms. Together with a combination of media and reporting services we aim to provide tailored solutions for individual brand voices.</p> */}
          </div>
          <div className="w-[50%]">
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
      <div className="bg-white relative">
          <GetInTouchForm />
      </div>

      <Footer />

    </main>
  );
}
