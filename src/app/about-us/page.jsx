"use client"
import Image from "next/image";
import Head from 'next/head';
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from '../../components/Navbar/index.jsx'
import { gauravKumar, publicReactionsFour, publicReactionsOne, publicReactionsThree, publicReactionsTwo, sectionOneBanner, sectionThreeImage, sectionTwoImage, whatWeDoOne, whatWeDoTwo } from '../../assets/home/export.js';
import { cashKaro, diceAcademy, finolex, gsk, maxHealth, pvr, watcho} from '../../assets/clients/export.js';
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import {mx360Logo} from '../../assets/companyLogo/export.js';
import CaseStudies from '../../components/CaseStudies/index.jsx'
import Testimonial from '../../components/Testimonial/index.jsx'
import Footer from '../../components/Footer/index.jsx'
import PublicReactions from '../../components/PublicReactions/index.jsx'
import ContactUsForm from '../../components/ContactUsForm/index.jsx';
import HeadBanner from './../../assets/contactUs/headBanner.png';
import worldMap from './../../assets/contactUs/worldMap.svg';
import {
  approach,
  deepak,
  excellence,
  gaurav,
  integrity,
  lightbulb,
  maanas,
  mission,
  strategy,
  successStory,
} from './../../assets/aboutUs/export.js';
import WorkWithUsForm from './../../components/workWithUsForm/index.jsx';
import FounderFootprints from './../../components/founderFootprints/index.jsx';

export default function ContactUs() {


  return (
    <ChakraProvider>
    <main className="font-nexa">
      <Navbar />

      {/* section 1 */}
      <div style={{paddingTop: "70px"}}  className="flex items-center justify-center text-center bg-[#feeae9] h-[320px] tablet:h-[450px] relative">
        <div style={{zIndex: "0"}} className="hidden tablet:block absolute bottom-[40%] right-[30%]  w-80 h-80 bg-[#fec1bf] rounded-full mix-blend-normal filter blur-[5rem]"></div>
        <div style={{zIndex: "0"}} className="hidden tablet:block absolute bottom-[0%] right-[15%]  w-80 h-80 bg-[#fec1bf] rounded-full mix-blend-normal filter blur-[5rem]"></div>
       
         <div style={{zIndex: "5"}} className="flex flex-col gap-3 items-center justify-between text-[#212121v]">
          <div className="flex flex-col items-center gap-3">
           {/* <div className="border-b-2 w-fit">
             <h3 className="font-medium ">Experience the Best Agency</h3>
           </div> */}
           {/* <h2 className="text-5xl font-medium font-nexa">Fueling Brand Growth with</h2> */}
           <h1 className="text-[clamp(25px,3vw,48px)]  font-black">About Us</h1>
           <p className="font-[400] text-[clamp(13px,3vw,18px)]">Welcome to Mediotix, your trusted AI-powered MarTech solutions partner focusing on <br /> digital growth with data-driven actionable insights.</p>
          </div>
           {/* <button className="naviteButton">Lets Talk</button> */}
         </div>
      </div>


       {/* section 2  */}
        <div className=" flex w-[85%] gap-[4%] py-[150px] mx-auto bg-white">
                <div className="w-[100%] tablet:w-[50%]">
                  <h2 style={{fontSize: "clamp(22px, 3vw, 35px)", lineHeight: "1.2"}} className="font-[900] mb-[10px] tablet:mb-[40px]">Rely on Experts for Value Driven Marketing Solutions.</h2>
                  <p style={{fontSize: "clamp(14px, 2vw, 15px)"}} >Mediotix is a leading marketing technology agency with an international footprint. Serving clients globally through our extensive network of offices and strategic partnerships. Our team uses the exclusive "MX360" all-in-one data measurement tool to derive actionable insights that assist many companies in achieving remarkable progress and success. Our AI-driven growth pilot solutions provide valuable data, enhance advertising campaigns, and accelerate business growth.</p>
                  <button className="naviteButton mt-[30px]">Contact Us</button>
                  {/* <p style={{fontSize: "clamp(12px, 2vw, 15px)"}}>MX360 is a comprehensive marketing solution that offers AI-based advanced reporting & insights, seamlessly integrated across multiple platforms. Together with a combination of media and reporting services we aim to provide tailored solutions for individual brand voices.</p> */}
                </div>
                <div className="w-[50%] flex flex-col gap-[20px]">
                    

        <div   className="flex items-center justify-start p-[15px] text-start bg-[#feeae9] minH-[135px] overflow-hidden rounded-[21px] relative">
        <div style={{zIndex: "0"}} className="hidden tablet:block absolute bottom-[40%] right-[30%]  w-20 h-20 bg-[#fec1bf] rounded-full mix-blend-normal filter blur-[1.5rem]"></div>
        <div style={{zIndex: "0"}} className="hidden tablet:block absolute bottom-[0%] right-[15%]  w-20 h-20 bg-[#fec1bf] rounded-full mix-blend-normal filter blur-[1.5rem]"></div>
       
         <div style={{zIndex: "5"}} className="flex flex-row gap-3 items-center justify-between text-[#212121v]">
           <div className="w-[80px] h-[80px] flex items-center justify-center mr-[20px]">
                <Image src={lightbulb} style={{ objectFit: "contain", marginLeft: "20px" }} />
           </div>

          <div className="flex flex-col items-start gap-3">
           <h1 className="text-[clamp(14px,3vw,18px)]  font-black">Our Vision</h1>
           <p className="font-[400] text-[clamp(13px,3vw,14px)]">Leading digital marketing through AI, technology, and data-driven insights to enhance customer connections.</p>
          </div>
         </div>
        </div>

        <div className="flex items-center justify-start p-[15px] text-start bg-[#feeae9] minH-[135px] overflow-hidden rounded-[21px] relative">
        <div style={{zIndex: "0"}} className="hidden tablet:block absolute bottom-[40%] right-[30%]  w-20 h-20 bg-[#fec1bf] rounded-full mix-blend-normal filter blur-[1.5rem]"></div>
        <div style={{zIndex: "0"}} className="hidden tablet:block absolute bottom-[0%] right-[15%]  w-20 h-20 bg-[#fec1bf] rounded-full mix-blend-normal filter blur-[1.5rem]"></div>
       
         <div style={{zIndex: "5"}} className="flex flex-row gap-3 items-center justify-between text-[#212121v]">
           <div className="w-[80px] h-[80px] flex items-center justify-center mr-[20px]">
                <Image src={mission} style={{ objectFit: "contain", marginLeft: "20px" }} />
           </div>

          <div className="flex flex-col items-start gap-3">
           <h1 className="text-[clamp(14px,3vw,18px)]  font-black">Our Mission</h1>
           <p className="font-[400] text-[clamp(13px,3vw,14px)]">Delivering advanced marketing technology and analytics to drive growth, engagement, and innovation.</p>
          </div>
         </div>
        </div>

        <div   className="flex items-center justify-start p-[15px] text-start bg-[#feeae9] minH-[135px] overflow-hidden rounded-[21px] relative">
        <div style={{zIndex: "0"}} className="hidden tablet:block absolute bottom-[40%] right-[30%]  w-20 h-20 bg-[#fec1bf] rounded-full mix-blend-normal filter blur-[1.5rem]"></div>
        <div style={{zIndex: "0"}} className="hidden tablet:block absolute bottom-[0%] right-[15%]  w-20 h-20 bg-[#fec1bf] rounded-full mix-blend-normal filter blur-[1.5rem]"></div>
       
         <div style={{zIndex: "5"}} className="flex flex-row gap-3 items-center justify-between text-[#212121v]">
           <div className="w-[80px] h-[80px] flex items-center justify-center mr-[20px]">
                <Image src={strategy} style={{ objectFit: "contain", marginLeft: "20px" }} />
           </div>

          <div className="flex flex-col items-start gap-3">
           <h1 className="text-[clamp(14px,3vw,18px)]  font-black">Our Strategy</h1>
           <p className="font-[400] text-[clamp(13px,3vw,14px)]">Investing in Technology and Innovation to stay ahead of industry trends and provide unique value to clients.</p>
          </div>
         </div>
        </div>


                </div>
        </div>

     {/* section 3 */}
      <div className="bg-[#EAF6FF] py-[70px] ">
      <div className="flex flex-col items-center justify-center gap-2 w-fit mx-auto">
      <p className="text-end text-[14px]">Digital Growth Pilot</p>
      <h2 style={{fontSize: "clamp(22px, 3vw, 48px)", lineHeight: "1.2"}} className="font-[900] mb-[10px] tablet:mb-[40px]">Success Story of our company</h2>
      </div>
      <div className=" flex flex-row justify-center  w-[95%] tablet:w-[85%] gap-[4%] pt-[30px] tablet:pt-[4%] pb-[7%] mx-auto bg-[#EAF6FF]">
            <Image src={successStory} style={{objectFit: "contain"}} />
      </div>
      </div>

              {/* section 4 */}
      <div className="w-[95%] tablet:w-[85%]  py-[5%] mx-auto ">
      <div style={{width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center", gap: "20px"}}>
        <div style={{width: "30%"}}>
          <h2 style={{fontSize: "clamp(22px, 3vw, 48px)", lineHeight: "1.2"}} className="font-[900] mb-[10px] tablet:mb-[40px]">Founder Footprints</h2>
          <p style={{fontSize: "clamp(14px, 2vw, 15px)"}} >Mediotix is a leading MarTech agency with a global presence and a proven track record; we're your trusted partner for all your digital needs. delivering cutting-edge solutions to clients worldwide.</p>
        </div>
        <div style={{width: "60%",  display: "flex", justifyContent: "flex-end"}}>
         <FounderFootprints />
        </div>
      </div>
      </div>

     {/* section 5 */}
      <div className="bg-[#EAF6FF] py-[3%] ">
      <div className="w-[95%] tablet:w-[85%] flex flex-col text-center items-center justify-center gap-2  mx-auto">
        <h2 style={{fontSize: "clamp(22px, 3vw, 48px)", lineHeight: "1.2"}} className="font-[900] mb-[10px] tablet:mb-[35px]">Our Values</h2>
        <p className="text-center text-[14px]">At Mediotix, our values are the compass that guides us in everything we do. We are dedicated to unwavering ethical standards, taking responsibility for our clients' success, and embracing adaptability in an ever-changing landscape. These values define our culture and have guided us towards success!</p>
      </div>
      <div className="grid grid-cols-2 gap-4 w-[95%] tablet:w-[85%]  pt-[30px] tablet:pt-[4%] pb-[2%] mx-auto bg-[#EAF6FF]">


      <div className="flex items-center justify-start p-[15px] text-start bg-[#ffffff] border-[1px] border-[#00000040] minH-[135px] overflow-hidden rounded-[21px] relative">
       
         <div style={{zIndex: "5"}} className="flex flex-row gap-3 items-center justify-between text-[#212121v]">
           <div className="w-[80px] h-[80px] p-[10px] flex items-center justify-center mr-[20px]">
                <Image src={mission} style={{ objectFit: "contain", marginLeft: "20px" }} />
           </div>

          <div className="flex flex-col items-start gap-3">
           <h1 className="text-[clamp(14px,3vw,18px)]  font-black">Approach</h1>
           <p className="font-[400] text-[clamp(13px,3vw,14px)]">We base our decisions and strategies on strong data and analytics insights. </p>
          </div>
         </div>
      </div>

      <div className="flex items-center justify-start p-[15px] text-start bg-[#ffffff] border-[1px] border-[#00000040] minH-[135px] overflow-hidden rounded-[21px] relative">
       
         <div style={{zIndex: "5"}} className="flex flex-row gap-3 items-center justify-between text-[#212121v]">
           <div className="w-[80px] h-[80px] flex items-center justify-center mr-[20px]">
                <Image src={lightbulb} style={{ objectFit: "contain", marginLeft: "20px" }} />
           </div>

          <div className="flex flex-col items-start gap-3">
           <h1 className="text-[clamp(14px,3vw,18px)]  font-black">Innovation</h1>
           <p className="font-[400] text-[clamp(13px,3vw,14px)]">To provide the most advanced solutions, always push the limits of data and technology.</p>
          </div>
         </div>
      </div>

      <div className="flex items-center justify-start p-[15px] text-start bg-[#ffffff] border-[1px] border-[#00000040] minH-[135px] overflow-hidden rounded-[21px] relative">
       
         <div style={{zIndex: "5"}} className="flex flex-row gap-3 items-center justify-between text-[#212121v]">
           <div className="w-[80px] h-[80px] p-[10px] flex items-center justify-center mr-[20px]">
                <Image src={integrity} style={{ objectFit: "contain", marginLeft: "20px" }} />
           </div>

          <div className="flex flex-col items-start gap-3">
           <h1 className="text-[clamp(14px,3vw,18px)]  font-black">Integrity</h1>
           <p className="font-[400] text-[clamp(13px,3vw,14px)]">Maintain the highest levels of honesty and transparency in all of our dealings.</p>
          </div>
         </div>
      </div>

      <div className="flex items-center justify-start p-[15px] text-start bg-[#ffffff] border-[1px] border-[#00000040] minH-[135px] overflow-hidden rounded-[21px] relative">
       
         <div style={{zIndex: "5"}} className="flex flex-row gap-3 items-center justify-between text-[#212121v]">
           <div className="w-[80px] h-[80px] flex items-center justify-center mr-[20px]">
                <Image src={excellence} style={{ objectFit: "contain", marginLeft: "20px" }} />
           </div>

          <div className="flex flex-col items-start gap-3">
           <h1 className="text-[clamp(14px,3vw,18px)]  font-black">Excellence</h1>
           <p className="font-[400] text-[clamp(13px,3vw,14px)]">Commit to excellence in every aspect of our work, from strategy to execution.</p>
          </div>
         </div>
      </div>

      </div>
      </div>


     {/* section 6 */}
      <div className="bg-white py-[70px] relative">
      <div className="w-[95%] tablet:w-[85%] flex flex-col text-center items-center justify-center gap-2  mx-auto">
        <h2 style={{fontSize: "clamp(22px, 3vw, 48px)", lineHeight: "1.2"}} className="font-[900] mb-[10px] tablet:mb-[35px]">Our Presence</h2>
      </div>
        <div style={{zIndex: "0"}} className="hidden tablet:block absolute bottom-[50%] right-[-10%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div>
        <div style={{zIndex: "0"}} className="hidden tablet:block absolute bottom-[0%] left-[-10%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div>


      <div className="grid grid-cols-3 gap-[30px] w-[95%] tablet:w-[85%]  pt-[30px] tablet:pt-[2%] pb-[4%] mx-auto bg-white">

        <div  style={{zIndex: "1"}} className=" overflow-hidden shadow-lg bg-white border-[1px] border-[#00000040]">

  <div className="w-full h-[190px] bg-gray-200">
           <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d870.8307539786832!2d77.05125026624508!3d28.43659134187296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d191172e5422d%3A0xdf0acbbafc3d160c!2sOahfeo%20Workspaces%20-%20Frappe%20-%20Best%20Coworking%20Space%20Gurugram%20Sector%2046%20%7C%20Private%20Office%20on%20Rent%20%7C%20Virtual%20Office!5e0!3m2!1sen!2sin!4v1725026872968!5m2!1sen!2sin"

              style={{ border: 0, width: "100%", height: "100%"}} // Corrected: style should be an object
              allowFullScreen // Corrected: React uses camelCase for attributes
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
  </div>

  <div className="p-6 text-[14px] text-[#000000]">
    <h3 className="text-[24px] font-[900] text-[#212121]">India - Gurgaon</h3>
    <p className="mt-[20px]">Gurgaon (Head office)</p>
    <p className="mt-[8px]">Mediotix Agency</p>
    <p className=" mt-[16px]">
      1094P, Oahfeo Frappe, Sector 46<br />
      Gurgaon, Haryana - 122001
    </p>
  </div>
        </div>

        <div  style={{zIndex: "1"}} className=" overflow-hidden shadow-lg bg-white border-[1px] border-[#00000040]">

  <div className="w-full h-[190px] bg-gray-200">
        
            <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.4614044841283!2d-123.13531372347973!3d49.28660207139339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867229c3d21c6b%3A0xfbacb87c93f9323f!2s1414%20Barclay%20St%20%231101%2C%20Vancouver%2C%20BC%20V6G%201J4%2C%20Canada!5e0!3m2!1sen!2sin!4v1734612996857!5m2!1sen!2sin" 
              style={{ border: 0, width: "100%", height: "100%"}} 
             allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>

  <div className="p-6 text-[14px] text-[#000000]">
    <h3 className="text-[24px] font-[900] text-[#212121]">Canada - Vancouver</h3>
    <p className="mt-[20px]">Vancouver ( Branch office)</p>
    <p className="mt-[8px]">Mediotix Agency</p>
    <p className=" mt-[16px]">1101-1414 Barclay Street, Vancouver, British Columbia, Canada, V6G1J4</p>
  </div>
        </div>

        <div  style={{zIndex: "1"}} className=" overflow-hidden shadow-lg bg-white border-[1px] border-[#00000040]">

  <div className="w-full h-[190px] bg-gray-200">
            <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.1770037728757!2d-97.6592396243859!3d30.54430277467562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d16b5595f353%3A0xb3a0fc360ae152d7!2s3200%20College%20Park%20Dr%20%23111%2C%20Round%20Rock%2C%20TX%2078665%2C%20USA!5e0!3m2!1sen!2sin!4v1734613139422!5m2!1sen!2sin" 
            allowfullscreen style={{ border: 0, width: "100%", height: "100%"}}  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>

  <div className="p-6 text-[14px] text-[#000000]">
    <h3 className="text-[24px] font-[900] text-[#212121]">US - Texas</h3>
    <p className="mt-[20px]">Texasn ( Branch office)</p>
    <p className="mt-[8px]">Mediotix Agency</p>
    <p className=" mt-[16px]">3200 College Pk Dr, Unit 111, <br/> Round Rock, TX, 78665</p>
  </div>
        </div>


      </div>
      </div>

        {/* section 7 */}
      <div className="bg-[#EAF6FF] ">
          <Testimonial />
      </div>

      {/* section 8 */}
      <div className="bg-white relative overflow-hidden" id="contact-section">
          <WorkWithUsForm />
      </div>



      <Footer />

    </main>
    </ChakraProvider>
  );
}
