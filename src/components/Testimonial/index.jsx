"use client"
import React, { useState, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import {gauravKumar} from './../../assets/home/export.js';
import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import { cashKaro, diceAcademy, finolex, gsk, maxHealth, pvr, watcho, heroElectronix, reliance, spinny, digbiHealth} from './../../assets/clients/export.js';
import {  AiFillStar } from "react-icons/ai";
import {
  Azentio_HammadAlam,
  DiceAcademy_DipuPandey,
  GetVital_JayanMatthew,
  GSK_HarshMehta,
  MaxHealthcare_VishalTrivedi,
  PVR_NishantKumar,
  QuboHeroElectronix_SaurabhjyotSingh,
  Spinny_AnuragGaggar,
} from './../../assets/testimony/export.js';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';


const Carousel = ({ props }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const count = carouselInfo?.length - 1;

  function next() {
    setImgIndex(count > imgIndex ? imgIndex + 1 : 0);
  }

  function prev() {
    setImgIndex(imgIndex === 0 ? count : imgIndex - 1);
  }


  function giveRating(rating) {
    // Perform a task four times
    let arr = [];
    for (let i = 0; i < rating; i++) {
      arr.push(<AiFillStar color="#F0C427" fontSize='18px' />);
    }
    // for (let i = 0; i < 5 - rating; i++) {
    //   arr.push(<AiFillStar color="#CDCDCD" fontSize='20px' />);
    // }
    return arr;
  }


  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [imgIndex, carouselInfo]);

  return (
    <div className="w-[90%] mx-auto min-h-[30rem] py-[40px] tablet:pb-[10%] flex flex-col  justify-between gap-4 relative text-[clamp(13px,1.5vw,15px)] font-medium">
      {/* <!--Carousel items--> */}
      <div className= " tablet:ml-[5%] w-full flex justify-center tablet:justify-start items-center">
        <h2  style={{fontSize: "clamp(26px, 3vw, 40px)"}} className="py-[10px] tablet:py-[30px] text-[#000000] font-[900]">
            Testimonials
       </h2>
      </div>



      <div className=" justify-between gap-12 hidden tablet:flex">
      <div className="h-fit my-auto">
      <button
          aria-label="previous"
          className="w-10 h-10 rounded-full flex justify-center items-center text-white bg-[#F1856E] bg-none"
          onClick={prev}
          >

          <IoChevronBackOutline />
      </button>
      </div>
      <div className="flex flex-col bg-white  items-start justify-between min-h-[350px] rounded-[8px] w-[50%] h-[100%] max-h-[350px] p-[30px] border-[2px] border-[#c0c0c0] text-[#263238]"  style={{boxShadow: ""}}>
     
          <p className="text-[clamp(13px, 3vw, 16px)] pt-8 font-semibold">
            {carouselInfo[imgIndex - 1 < 0 ? 4 : imgIndex - 1].statement}
          </p>

          <div className="flex gap-1 items-center " >
            <div className="w-[120px] h-[100px] relative">
              <div className="w-[100px] h-[100px] flex justify-center items-center">
              <Image
              className="object-cover aspect-square rounded-full w-full h-full"
              loading="lazy"
              src={carouselInfo[imgIndex - 1 < 0 ? 4 : imgIndex - 1].img}
              alt="Wild Landscape"
              />
              </div>
              <div className="absolute bottom-0 right-0  w-[50px] h-[50px] flex justify-center items-center rounded-full bg-white ">
                {carouselInfo[imgIndex - 1 < 0 ? 4 : imgIndex - 1]?.brandLogo}
              </div>
            </div>
            <div className="flex flex-col ">
            <div className=" flex ">
               {giveRating(carouselInfo[imgIndex - 1 < 0 ? 4 : imgIndex - 1]?.rating)?.map((item) => (
                 <>{item}</>
               ))}
            </div>
            <p className="text-base font-[900] text-[#FA5306]">{carouselInfo[imgIndex - 1 < 0 ? 4 : imgIndex - 1].name}</p>
            <p className="text-base">{carouselInfo[imgIndex - 1 < 0 ? 4 : imgIndex - 1].profile}</p>
            </div>
          </div>
      </div>

      <div className="flex flex-col bg-white items-start justify-between min-h-[350px]  rounded-[8px] w-[50%] h-[100%] max-h-[350px] p-[30px] border-[2px] border-[#c0c0c0] text-[#263238]"  style={{boxShadow: ""}}>
       
          <p className="text-[clamp(13px, 3vw, 16px)] pt-8 font-semibold">
            {carouselInfo[imgIndex].statement}
          </p>

          <div className="flex gap-1 items-center " >
            <div className="w-[120px] h-[100px] relative">
              <div className="w-[100px] h-[100px] flex justify-center items-center">
              <Image
              className="object-cover aspect-square rounded-full w-full h-full"
              loading="lazy"
              src={carouselInfo[imgIndex].img}
              alt="Wild Landscape"
              />
              </div>
              <div className="absolute bottom-0 right-0  w-[50px] h-[50px] flex justify-center items-center rounded-full bg-white ">
                {carouselInfo[imgIndex]?.brandLogo}
              </div>
            </div>
            <div className="flex flex-col ">
            <div className=" flex ">
               {giveRating(carouselInfo[imgIndex]?.rating)?.map((item) => (
                 <>{item}</>
               ))}
            </div>
            <p className="text-base font-[900] text-[#FA5306]">{carouselInfo[imgIndex].name}</p>
            <p className="text-base">{carouselInfo[imgIndex].profile}</p>
            </div>
          </div>

          {/* <div className="flex gap-6 items-center">
            <Image
              className="w-16 h-16 object-cover aspect-square rounded-full"
              loading="lazy"
              src={carouselInfo[imgIndex].img}
              alt="Wild Landscape"
            />
            <div className="flex flex-col">
              <p className="text-base font-bold">{carouselInfo[imgIndex].name}</p>
              <p className="text-base">{carouselInfo[imgIndex].profile}</p>
            </div>
          </div> */}
      </div>

      <div className="h-fit my-auto">
      <button
          aria-label="next"
          className="w-10 h-10 rounded-full flex justify-center items-center text-white bg-[#F1856E] bg-none"
          onClick={next}
        >
          <IoChevronForward />
      </button>
      </div>

      </div>

      <div className=" justify-between gap-12 flex tablet:hidden">

      <Swiper
      // Configure Swiper options
      // modules={[Navigation, Pagination]}
      modules={[Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 3000, // 5000ms = 5 seconds
        disableOnInteraction: false,
      }}
    >
      {carouselInfo?.map((item, index) => (
        <SwiperSlide>
        <div className="flex flex-col bg-white  items-start justify-between min-h-[350px] rounded-[8px] w-full h-[100%] max-h-[500px] p-[20px] border-[2px] border-[#c0c0c0] text-[#263238]"  style={{boxShadow: ""}}>
       
       <p className="text-[clamp(14px, 3vw, 16px)] pt-0 pb-10 tablet:pb-0 tablet:pt-8 font-semibold">
         {item.statement}
       </p>
  
       <div className="flex gap-1 items-center " >
         <div className="w-[120px] h-[100px] relative">
           <div className="w-[100px] h-[100px] flex justify-center items-center">
           <Image
           className="object-cover aspect-square rounded-full w-full h-full"
           loading="lazy"
           src={item.img}
           alt="Wild Landscape"
           />
           </div>
           <div className="absolute bottom-0 right-0  w-[50px] h-[50px] flex justify-center items-center rounded-full bg-white ">
             {item?.brandLogo}
           </div>
         </div>
         <div className="flex flex-col ">
         <div className=" flex ">
            {giveRating(item?.rating)?.map((item) => (
              <>{item}</>
            ))}
         </div>
         <p className="text-base font-[900] text-[#FA5306]">{item.name}</p>
         <p className="text-base">{item.profile}</p>
         </div>
       </div>
   </div>
        </SwiperSlide>
      ))}
     </Swiper>

      </div>

    </div>
  );
};

export default Carousel;


const carouselInfo = [
    {
      name: "Vishal",
      profile: "Max Healthcare",
      img: MaxHealthcare_VishalTrivedi,
      imgAltText: "Vishal",
      statement: "We saw a transformative shift in our marketing reports and are able to strategize even better than before. All thanks to that magical tool for delivering accurate insights that empowered our data-driven decisions eventually resulting in substantial ROI growth.",
      rating: 5,
      brandLogo: <Image src={maxHealth} className="object-cover w-[30px]" />,
    },
    {
      name: "Nishant Kumar ",
      profile: "PVR INOX",
      imgAltText: "Nishant Kumar ",
      img: PVR_NishantKumar,
      statement: "Working with Mediotix has been a pleasure. Their team consistently demonstrates a high level of professionalism and expertise. Their dedication to delivering results is evident in the remarkable increase in our online visibility and engagement. Their insights and strategic approach have been instrumental in our success, and we highly recommend their services.",
      rating: 5,
      brandLogo: <Image src={pvr}className="object-cover w-[30px]" />,
    },
    {
      name: "Saurabhjyot Singh",
      profile: "Hero Electronix",
      imgAltText: "Saurabhjyot Singh",
      img: QuboHeroElectronix_SaurabhjyotSingh,
      statement: "We have been able to improve our conversion funnels and strategies based on reports and insights provided by them, leading to 5X growth in end results. Also, their user-friendly interface is easy to use and understand without any dependency on tech experts. I would highly recommend this tool for businesses of all sizes.",
      rating: 4,
      brandLogo: <Image src={heroElectronix}className="object-cover w-[30px]" />,
    },
    {
      name: "Harsh Mehta",
      profile: "GSK",
      imgAltText: "Harsh Mehta",
      img: GSK_HarshMehta,
      statement: "“Their team is knowledgeable, responsive and committed to support our initiatives, making them invaluable partners, Mediotix has been involved in helping us build an incredible lead generating machine by funnel optimization & quick conversions”",
      rating: 5,
      brandLogo: <Image src={gsk}className="object-cover w-[30px]" />,
    },
    {
      name: "Dipu Pandey",
      profile: "Dice Academy",
      imgAltText: "Dipu Pandey",
      img: DiceAcademy_DipuPandey,
      statement: "The PPC and ad services provided by our marketing agency – Mediotix have been a game-changer for us. Their strategic campaigns and meticulous optimization have led to impressive results. Our ROI has soared by 65%, and our online visibility has never been better. With their expertise, we're confidently scaling our digital advertising efforts for even greater success.",
      rating: 5,
      brandLogo: <Image src={diceAcademy}className="object-cover w-[30px]" />,
    },
  ];