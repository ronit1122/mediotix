import Image from "next/image";
import Head from 'next/head';
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

export const metadata = {
  title: 'Mediotix MarTech Agency Contact Details | Phone & Address',
  description: 'Contact Mediotix for any analytics or digital marketing related requests. Our Branches are located in Gurgaon, New Delhi, Mumbai, Hyderabad in India',
  alternates: {
    canonical: 'https://www.mediotix.com/contact-us/',
  },
};
export default function ContactUs() {


  return (
    <main className="font-nexa">
      <Navbar />

      {/* section 1 */}
      <div className="flex items-center justify-center text-center h-[350px] tablet:h-[500px] relative">
        <div  style={{zIndex: "3"}}  className="absolute flex items-center justify-center w-full h-full">
          <Image src={HeadBanner} style={{objectFit: "cover", width: "100%", height: "100%"}}/>
        </div>
         <div style={{opacity: "0.6", zIndex: "5"}} className="absolute w-full h-full bg-black "></div>
         <div style={{zIndex: "5"}} className="flex flex-col gap-3 items-center justify-between text-white">
          <div className="flex flex-col items-center gap-3">
           {/* <div className="border-b-2 w-fit">
             <h3 className="font-medium ">Experience the Best Agency</h3>
           </div> */}
           {/* <h2 className="text-5xl font-medium font-nexa">Fueling Brand Growth with</h2> */}
           <h1 className="text-[clamp(25px,3vw,40px)]  font-black">Contact Us</h1>
           <p className="font-light text-[clamp(13px,3vw,15px)]">Connect with us today to unlock data-driven insights and boost your <br /> business with advanced analytics solutions.</p>
          </div>
           {/* <button className="naviteButton">Lets Talk</button> */}
         </div>
      </div>


      {/* section 8 */}
      <div className="bg-white relative flex flex-col gap-6  pt-[20px] tablet:pt-[100px]">
           <div className=" mx-auto text-center">
              <h2 className=" text-[#FF7D78] text-[clamp(25px,3vw,40px)] font-[900]">
                  Get in Touch
              </h2>
              <p className="">Reach out with your queries, We’re here to help!</p>
           </div>
          <ContactUsForm />
      </div>

      <div className="bg-white relative flex flex-col gap-6 py-[50px] pb-[60px]">
      <div style={{zIndex: "0"}} className="hidden tablet:block absolute bottom-[50%] right-[-10%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div>
      {/* <div style={{zIndex: "0"}} className=" absolute top-[0%] left-[-10%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div> */}
           <div className=" mx-auto text-center mb-[20px]">
              <h2 className=" text-[#FF7D78] text-[clamp(25px,3vw,40px)] font-[900]">
                 Our Presence
              </h2>
           </div>
           <div className="mx-auto">
           <Image src={worldMap} />
           </div>

      </div>

      <Footer />

    </main>
  );
}
