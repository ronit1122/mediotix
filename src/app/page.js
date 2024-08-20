import Image from "next/image";
import styles from "./page.module.css";
import Navbar from './../components/Navbar/index.jsx'
import { gauravKumar, publicReactionsFour, publicReactionsOne, publicReactionsThree, publicReactionsTwo, sectionOneBanner, sectionThreeImage, sectionTwoImage, whatWeDoOne, whatWeDoTwo } from './../assets/home/export';
import { cashKaro, diceAcademy, finolex, gsk, maxHealth, pvr, watcho} from './../assets/clients/export';
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import {mx360Logo} from './../assets/companyLogo/export';
import CaseStudies from './../components/CaseStudies/index.jsx'
import Testimonial from './../components/Testimonial/index.jsx'
import Footer from './../components/Footer/index.jsx'
import PublicReactions from './../components/PublicReactions/index.jsx'
import GetInTouchForm from './../components/GetInTouchForm/index.jsx'

export default function Home() {

  const whatWeDoSolutionsData = [
    {
      title: "Measurement",
      desc: "Ensuring higher returns on every marketing effort and resource leveraged.",
      link: "/",
    },
    {
      title: "GA4",
      desc: "Ensuring higher returns on every marketing effort and resource leveraged.",
      link: "/",
    },
    {
      title: "GTM360",
      desc: "Ensuring higher returns on every marketing effort and resource leveraged.",
      link: "/",
    },
    {
      title: "Adobe Analytics",
      desc: "Ensuring higher returns on every marketing effort and resource leveraged.",
      link: "/",
    },
    {
      title: "App Analytics",
      desc: "Ensuring higher returns on every marketing effort and resource leveraged.",
      link: "/",
    },
    {
      title: "E-commerce Analytics",
      desc: "Ensuring higher returns on every marketing effort and resource leveraged.",
      link: "/",
    },
  ]

  const whatWeDoMarketingData = [
    {
      title: "Media Activation",
      desc: "Ensuring higher returns on every marketing effort and resource leveraged.",
      link: "/",
    },
    {
      title: "DV 360",
      desc: "Ensuring higher returns on every marketing effort and resource leveraged.",
      link: "/",
    },
    {
      title: "Affiliate Marketing",
      desc: "Ensuring higher returns on every marketing effort and resource leveraged.",
      link: "/",
    },
    {
      title: "Paid Social",
      desc: "Ensuring higher returns on every marketing effort and resource leveraged.",
      link: "/",
    },
  ]

  const whatWeDoArchitectureData = [
    {
      title: "MX360",
      desc: "Ensuring higher returns on every marketing effort and resource leveraged.",
      link: "/",
    },
    {
      title: "Google Map Platform",
      desc: "Ensuring higher returns on every marketing effort and resource leveraged.",
      link: "/",
    },
    {
      title: "Google Cloud Platform",
      desc: "Ensuring higher returns on every marketing effort and resource leveraged.",
      link: "/",
    },
  ]


  return (
    <main className="font-nexa">
      <Navbar />

      {/* section 1 */}
      <div className="flex items-center justify-center text-center h-[700px] relative">
        <div  style={{zIndex: "3"}}  className="absolute flex items-center justify-center w-full h-full">
          <Image src={sectionOneBanner} style={{objectFit: "cover", width: "100%", height: "100%", opacity: "0.5"}}/>
        </div>
         <div style={{zIndex: "5"}} className="flex flex-col gap-3 items-center h-[50%] justify-between text-white">
          <div className="flex flex-col items-center gap-3">
           <div className="border-b-2 w-fit">
             <h3 className="font-medium ">Experience the Best Agency</h3>
           </div>
           <h2 className="text-5xl font-medium font-nexa">Fueling Brand Growth with</h2>
           <h1 className="text-5xl font-black">Intelligent Marketing & AI Power Analytics</h1>
          </div>
           <button className="naviteButton">Lets Talk</button>
         </div>
      </div>

      {/* section 2 */}
      <div className="flex flex-col h-fit bg-white color-[#000000]" style={{zIndex: "10"}} >

         {/* section 1 */}
         <div className="w-[85%] flex justify-evenly mx-auto gap-[2%] translate-y-[-80px]"  style={{zIndex: "10"}}>

          <div className="flex flex-col gap-2 justify-evenly w-[100%] items-center max-h-[250px] min-h-[200px] bg-white border-[2px] border-[#FF7D78] p-[20px] rounded-[8px]">
            <Image src={pvr} alt="pvr"/>
            <p className="text-[20px] font-black">20%</p>
            <p className="text-[20px] font-medium">Increase Leads</p>
            <div className="w-fit p-[5px] rounded-[5px] bg-[#FFCB05] text-[12px] ">conversion rate optimization</div>
          </div>

          <div className="flex flex-col gap-2 justify-evenly w-[100%] items-center max-h-[250px] min-h-[200px] bg-white  border-[2px] border-[#004185] p-[20px] rounded-[8px]">
            <Image src={maxHealth} alt="maxHealth"/>
            <p className="text-[20px] font-black">20%</p>
            <p className="text-[20px] font-medium">Increase Leads</p>
            <div className="w-fit p-[5px] rounded-[5px] text-white bg-[#004185] text-[12px] ">conversion rate optimization</div>
          </div>

          <div className="flex flex-col gap-2 justify-evenly w-[100%] items-center max-h-[250px] min-h-[200px] bg-white  border-[2px] border-[#000000] p-[20px] rounded-[8px]">
            <Image src={diceAcademy} alt="diceAcademy"/>
            <p className="text-[20px] font-black">20%</p>
            <p className="text-[20px] font-medium">Increase Leads</p>
            <div className="w-fit p-[5px] text-white rounded-[5px] bg-[#000000] text-[12px] ">conversion rate optimization</div>
          </div>

          <div className="flex flex-col gap-2 justify-evenly w-[100%] items-center max-h-[250px] min-h-[200px] bg-white  border-[2px] border-[#FA5306] p-[20px] rounded-[8px]">
            <Image src={gsk} alt="gsk"/>
            <p className="text-[20px] font-black">20%</p>
            <p className="text-[20px] font-medium">Increase Leads</p>
            <div className="w-fit p-[5px] rounded-[5px] text-white bg-[#FA5306] text-[12px] ">conversion rate optimization</div>
          </div>

         </div>

         {/* section 2 */}
         <div className=" flex w-[85%] gap-[4%] py-[7%] mx-auto">
          <div className="w-[50%]">
            <h2 style={{fontSize: "clamp(18px, 3vw, 35px)"}} className="font-medium">Take off your marketing funnel with</h2>
            <h2 style={{fontSize: "clamp(18px, 3vw, 35px)"}}  className="font-black text-[#FF7D78] mb-4">"Digital Growth Pilot"</h2>
            <p style={{fontSize: "clamp(12px, 2vw, 15px)"}}>We are a full-service digital marketing agency providing unparalleled experience in the digital realm. With a combined legacy of 15 years in performance marketing, analytics, and conversion funnels, our motive is to help businesses reach new heights of success through effective media management and insightful reporting services. Our extensive portfolio and blend of creative minds in the team speak volumes about our dedication to drive growth for our esteemed clients.</p>
            <br />
            <p style={{fontSize: "clamp(12px, 2vw, 15px)"}}>MX360 is a comprehensive marketing solution that offers AI-based advanced reporting & insights, seamlessly integrated across multiple platforms. Together with a combination of media and reporting services we aim to provide tailored solutions for individual brand voices.</p>
          </div>
          <div className="w-[50%]">
            <Image src={sectionTwoImage} style={{objectFit: "contain"}} />
          </div>
         </div>

      </div>

      {/* section 3 */}
      <div className="bg-white">
      <div className="flex flex-col w-[85%] gap-[4%] py-[7%] mx-auto">
          <h2 style={{fontSize: "clamp(18px, 3vw, 30px)"}} className="font-bold text-center text-[#FF7D78]" >What we do</h2>
          
          <div className="w-full flex gap-[4%] mt-8">

          <div className="w-[100%] p-[5px] border-[5px] border-[#FF9363] rounded-[10px] bg-[#feefef]">
              <div className="h-[130px] p-[10px] flex flex-col justify-between rounded-[5px]" style={{background: "linear-gradient(180deg, rgba(255, 125, 120, 0.7) 0%, rgba(255, 147, 99, 0.7) 100%)"}}>
                 <Image src={whatWeDoOne} alt="solution"  className="ml-3"/>
                 <p className="font-bold text-[20px]">Solution</p>
              </div>
              {whatWeDoSolutionsData?.map(item => (
              <div className="mt-3 px-[15px] py-[5px] hover:bg-[#ffdbdb] rounded-[5px] cursor-pointer">
                <div className="flex justify-between gap-3">
                  <h2 style={{fontSize: "clamp(12px, 2vw, 15px)"}} className="font-bold">{item.title}</h2>
                  <Link href={item.link}><FaArrowRightLong /></Link>
                </div>
                <p style={{fontSize: "clamp(12px, 2vw, 15px)"}}>{item?.desc}</p>
              </div>
              ))}
          </div>

          <div className="w-[100%] p-[5px] border-[5px] border-[#FF9363] rounded-[10px] bg-[#feefef]">
              <div className="h-[130px] p-[10px] flex flex-col justify-between rounded-[5px]" style={{background: "linear-gradient(180deg, rgba(255, 125, 120, 0.7) 0%, rgba(255, 147, 99, 0.7) 100%)"}}>
                 <Image src={whatWeDoTwo} alt="solution"  className="ml-3"/>
                 <p className="font-bold text-[20px]">Marketing</p>
              </div>
              {whatWeDoMarketingData?.map(item => (
              <div className="mt-3 px-[15px] py-[5px]  hover:bg-[#ffdbdb]  rounded-[5px]  cursor-pointer">
                <div className="flex justify-between gap-3">
                  <h2 style={{fontSize: "clamp(12px, 2vw, 15px)"}} className="font-bold">{item.title}</h2>
                  <Link href={item.link}><FaArrowRightLong /></Link>
                </div>
                <p style={{fontSize: "clamp(12px, 2vw, 15px)"}}>{item?.desc}</p>
              </div>
              ))}
          </div>

          <div className="w-[100%] p-[5px] border-[5px] border-[#FF9363] rounded-[10px] bg-[#feefef]">
              <div className="h-[130px] p-[10px] flex flex-col justify-between rounded-[5px]" style={{background: "linear-gradient(180deg, rgba(255, 125, 120, 0.7) 0%, rgba(255, 147, 99, 0.7) 100%)"}}>
                 <Image src={whatWeDoOne} alt="solution"  className="ml-3"/>
                 <p className="font-bold text-[20px]">Architecture</p>
              </div>
              {whatWeDoArchitectureData?.map(item => (
              <div className="mt-3 px-[15px] py-[5px]   hover:bg-[#ffdbdb] rounded-[5px]  cursor-pointer">
                <div className="flex justify-between gap-3">
                  <h2 style={{fontSize: "clamp(12px, 2vw, 15px)"}} className="font-bold">{item.title}</h2>
                  <Link href={item.link}><FaArrowRightLong /></Link>
                </div>
                <p style={{fontSize: "clamp(12px, 2vw, 15px)"}}>{item?.desc}</p>
              </div>
              ))}
          </div>
            
          </div>

      </div>
      </div>
      {/* section 4 */}
      <div className="bg-white ">
          <CaseStudies />
      </div>

      {/* section 5 */}
      <div className="bg-[#EAF6FF] ">
          <Testimonial />
      </div>

      {/* section 6 */}
      <div className="bg-white ">
          <PublicReactions />
      </div>

      {/* section 6 */}
      <div className="bg-white ">
          <GetInTouchForm />
      </div>

      <Footer />

    </main>
  );
}
