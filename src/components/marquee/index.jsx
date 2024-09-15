"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cashKaro, diceAcademy, finolex, gsk, maxHealth, pvr, watcho, qubo} from './../../assets/clients/export.js';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';
import { useMediaQuery } from '@chakra-ui/react'

const Carousel = ({ props }) => {
  const [isLargerThan400] = useMediaQuery('(min-width: 400px)')
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')

  return (
      <Swiper
      modules={[Autoplay]}
      spaceBetween={10} // Adjust the spacing between slides if needed
      slidesPerView={isLargerThan1200 ? 4 : isLargerThan900 ? 3 : isLargerThan600 ? 3 : isLargerThan400 ? 2 : 1} // Show 4 slides at a time
      loop={true} // Enable looping
      autoplay={{
        delay: 2000, // 5 seconds delay
        disableOnInteraction: false,
      }}
    >
        <SwiperSlide>
          <div className="flex flex-col gap-2 justify-between tablet:justify-evenly tablet:ml-[50px] items-center  min-h-[150px] h-[150px] tablet:h-[200px]  bg-white border-[2px] border-[#FF7D78]  p-[10px] tablet:p-[20px] rounded-[8px]">
            <Image src={pvr} alt="pvr"/>
            <p className="text-[20px] font-black">35%</p>
            {/* <p className="text-[20px] font-medium">Increase Leads</p> */}
            <div className="w-fit p-[5px] rounded-[5px] bg-[#FFCB05] text-[12px] ">Increase ticket bookings  </div>
          </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className="flex flex-col gap-2 justify-between tablet:justify-evenly tablet:ml-[50px] items-center  min-h-[150px] h-[150px] tablet:h-[200px] bg-white  border-[2px] border-[#004185] p-[10px] tablet:p-[20px] rounded-[8px]">
            <Image src={maxHealth} alt="maxHealth"/>
            <p className="text-[20px] font-black">150%</p>
            {/* <p className="text-[20px] font-medium">Increase Leads</p> */}
            <div className="w-fit p-[5px] rounded-[5px] text-white bg-[#004185] text-[12px] ">Increase in Doctor consultancy</div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex flex-col gap-2 justify-between tablet:justify-evenly  tablet:ml-[50px]  items-center  min-h-[150px]  h-[150px] tablet:h-[200px] bg-white  border-[2px] border-[#000000] p-[10px] tablet:p-[20px] rounded-[8px]">
            <Image src={diceAcademy} alt="diceAcademy"/>
            <p className="text-[20px] font-black">500%</p>
            {/* <p className="text-[20px] font-medium">Increase Leads</p> */}
            <div className="w-fit p-[5px] text-white rounded-[5px] bg-[#000000] text-[12px] ">Boost in Admissions leads </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex flex-col gap-2 justify-between tablet:justify-evenly  tablet:ml-[50px]  items-center  min-h-[150px]  h-[150px] tablet:h-[200px] bg-white  border-[2px] border-[#FA5306] p-[10px] tablet:p-[20px] rounded-[8px]">
            <Image src={gsk} alt="gsk"/>
            <p className="text-[20px] font-black">120%</p>
            {/* <p className="text-[20px] font-medium">Increase Leads</p> */}
            <div className="w-fit p-[5px] rounded-[5px] text-white bg-[#FA5306] text-[12px] ">Return on Investment</div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex flex-col gap-2 justify-between tablet:justify-evenly tablet:ml-[50px]  items-center  min-h-[150px]  h-[150px] tablet:h-[200px] bg-white  border-[2px] border-[#E4235A] p-[10px] tablet:p-[20px] rounded-[8px]">
            <Image src={watcho} alt="watcho"/>
            <p className="text-[20px] font-black">48%</p>
            {/* <p className="text-[20px] font-medium">Increase Leads</p> */}
            <div className="w-fit p-[5px] rounded-[5px] text-white bg-[#E4235A] text-[12px] ">Increase in OTT Subcriptions</div>
          </div>
          </SwiperSlide>
          <SwiperSlide>

          <div className="flex flex-col gap-2 justify-between tablet:justify-evenly tablet:ml-[50px]  items-center  min-h-[150px]  h-[150px] tablet:h-[200px]  bg-white  border-[2px] border-[#00AFCC] p-[10px] tablet:p-[20px] rounded-[8px]">
            <Image src={qubo} alt="quibo"/>
            <p className="text-[20px] font-black">72%</p>
            {/* <p className="text-[20px] font-medium">Increase Leads</p> */}
            <div className="w-fit p-[5px] rounded-[5px] text-white bg-[#00AFCC] text-[12px] ">Increase in Transactions</div>
          </div>
        </SwiperSlide>
    
     </Swiper>
  );
};

export default Carousel;
