"use client"
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import {publicReactionsOne, publicReactionsTwo, publicReactionsThree, publicReactionsFour} from './../../assets/home/export.js';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';


export default function Home() {

  return (
    <div className=" flex flex-col w-[95%] tablet:w-[85%] gap-[4%] pt-[7%] pb-[2%] mx-auto">
        <h4  style={{fontSize: "clamp(26px, 3vw, 40px)"}} className=" py-[20px] tablet:py-[2rem] text-[#000000] text-center mb-5 font-[900]">
           Public Reaction with Mediotix
        </h4>
        <div class=" grid-cols-4 gap-4 w-full hidden tablet:grid">
           <div className="hover:scale-105 transition-all"><Link href={""}><Image src={publicReactionsOne} alt="public reactions first banner" /></Link></div>
           <div className="hover:scale-105 transition-all"><Link href={"https://www.instagram.com/reel/C83vbyxtboA/?igsh=MTViaTEyNjYxcmpqcw=="}><Image src={publicReactionsTwo} alt="public reactions second banner" /></Link></div>
           <div className="hover:scale-105 transition-all"><Link href={"https://www.instagram.com/reel/C-Rrtlst2ap/?igsh=cGFhdWI0eDFkbGJ4"}><Image src={publicReactionsThree} alt="public reactions third banner" /></Link></div>
           <div className="hover:scale-105 transition-all"><Link href={"https://www.instagram.com/reel/C88unk-AWPE/?igsh=NmZrdWJzemRoenB2"}><Image src={publicReactionsFour} alt="public reactions fourth banner" /></Link></div>
         </div>
        <div class=" w-full block tablet:hidden">
         <Swiper
      // Configure Swiper options
      // modules={[Navigation, Pagination]}
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 3000, // 5000ms = 5 seconds
        disableOnInteraction: false,
      }}
    >

      <SwiperSlide>
        <div class="grid grid-cols-2 gap-4 w-full">
          <div className="hover:scale-105 transition-all"><Link href={""}><Image src={publicReactionsOne} alt="public reactions first banner" /></Link></div>
          <div className="hover:scale-105 transition-all"><Link href={"https://www.instagram.com/reel/C83vbyxtboA/?igsh=MTViaTEyNjYxcmpqcw=="}><Image src={publicReactionsTwo} alt="public reactions second banner" /></Link></div>
         </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="grid grid-cols-2 gap-4 w-full">
           <div className="hover:scale-105 transition-all"><Link href={"https://www.instagram.com/reel/C-Rrtlst2ap/?igsh=cGFhdWI0eDFkbGJ4"}><Image src={publicReactionsThree} alt="public reactions third banner" /></Link></div>
           <div className="hover:scale-105 transition-all"><Link href={"https://www.instagram.com/reel/C88unk-AWPE/?igsh=NmZrdWJzemRoenB2"}><Image src={publicReactionsFour} alt="public reactions fourth banner" /></Link></div>
         </div>
      </SwiperSlide>
         </Swiper>
        </div>
    </div>
  );
}
