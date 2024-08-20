"use client"
import React, { useState, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import {gauravKumar} from './../../assets/home/export.js';
import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";

const Carousel = ({ props }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const count = carouselInfo?.length - 1;

  function next() {
    setImgIndex(count > imgIndex ? imgIndex + 1 : 0);
  }

  function prev() {
    setImgIndex(imgIndex === 0 ? count : imgIndex - 1);
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
    <div className="w-[85%] mx-auto min-h-[30rem] pb-[12%] flex flex-col  justify-between gap-4 relative text-[clamp(13px,1.5vw,15px)] font-medium">
      {/* <!--Carousel items--> */}
      <div className="flex justify-between">
        <h2 className="pt-[5rem] pb-[2rem] text-[#000000] text-[40px] font-bold">
            Testimonials
       </h2>
       <div className="flex items-center gap-2">
        <button
          aria-label="previous"
          className="w-10 h-10 rounded-full flex justify-center items-center text-white bg-[#F1856E] bg-none"
          onClick={prev}
        >

          <IoChevronBackOutline />
        </button>
        <div className="flex justify-center  items-center p-5 w-4"></div>
        <button
          aria-label="next"
          className="w-10 h-10 rounded-full flex justify-center items-center text-white bg-[#F1856E] bg-none"
          onClick={next}
        >
          <IoChevronForward />
        </button>
      </div>
      </div>



       <div className="flex gap-[4%]">


      <div className="flex flex-col bg-white  items-start justify-between min-h-[350px] h-[100%] max-h-[350px] p-[30px]  text-[#263238]"  style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
     
          <p className="text-[clamp(13px, 3vw, 16px)] pt-8 font-semibold">
            {carouselInfo[imgIndex].statement}
          </p>

          <div className="flex gap-5 items-center" >
            <Image
              className="w-16 h-16 object-cover aspect-square rounded-full"
              loading="lazy"
              src={carouselInfo[imgIndex].img}
              alt="Wild Landscape"
            />
            <div className="flex flex-col ">
            <p className="text-base font-bold">{carouselInfo[imgIndex].name}</p>
            <p className="text-base">{carouselInfo[imgIndex].profile}</p>
            </div>
          </div>
      </div>


      <div className="flex flex-col bg-white items-start justify-between min-h-[350px] h-[100%] max-h-[350px] p-[30px]  text-[#263238]"  style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
       
          <p className="text-[clamp(13px, 3vw, 16px)] pt-8 font-semibold">
            {carouselInfo[imgIndex].statement}
          </p>

          <div className="flex gap-6 items-center">
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
          </div>
      </div>
      </div>

    </div>
  );
};

export default Carousel;


const carouselInfo = [
    {
      name: "Vishal Trivedi",
      profile: "Max Healthcare",
      img: gauravKumar,
      imgAltText: "Vishal Trivedi",
      statement:
        "We saw a transformative shift in our marketing reports and are able to strategize even better than before. All thanks to that magical tool for delivering accurate insights that empowered our data-driven decisions eventually resulting in substantial ROI growth.",
    },
    {
      name: "Hammad Alam",
      profile: "Azentio",
      imgAltText: "Hammad Alam",
      img: gauravKumar,
      statement:
        "MX360 is without a doubt the best reporting tool we have found so far. The way it captures data and makes it so visually appealing and easy to understand in one place for me and my team is truly commendable. We’ll be profesionally associated for life.",
    },
    {
      name: "Anurag Gaggar",
      profile: "Spinny",
      imgAltText: "Anurag Gaggar",
      img: gauravKumar,
      statement:
        "We have been able to improve our conversion funnels and strategies based on reports and insights provided by them, leading to 5X growth in end results. Also, their user-friendly interface is easy to use and understand without any dependency on tech experts. I would highly recommend this tool for businesses of all sizes.",
    },
    {
      name: "Harsh Mehta",
      profile: "GSK",
      imgAltText: "Harsh Mehta",
      img: gauravKumar,
      statement:
        "Such a powerful tool it is. MX360 stands out with its exceptional data visualization, bringing our marketing data to life and enhancing our decision-making process. Our ROI has seen remarkable improvements since adopting this analytics powerhouse, giving us a clear competitive advantage.",
    },
    {
      name: "Nishant Kumar",
      profile: "PVR",
      imgAltText: "Nishant Kumar",
      img: gauravKumar,
      statement:
        "Working with Mediotix has been a pleasure. Their team consistently demonstrates a high level of professionalism and expertise. Their dedication to delivering results is evident in the remarkable increase in our online visibility and engagement. Their insights and strategic approach have been instrumental in our success, and we highly recommend their services.",
    },
    {
      name: "Saurabhjyot Singh",
      profile: "Hero Electronix",
      imgAltText: "Saurabhjyot Singh",
      img: gauravKumar,
      statement:
        "The analytics services provided by Mediotix have been transformative for our business growth. They've delivered precise insights that guide our strategies, resulting in remarkable achievements. With their expertise, we've achieved a 50% increase in ROI and a deeper understanding of our audience. Their analytics prowess is invaluable to our success.",
    },
    {
      name: "Dipu Pandey",
      profile: "Dice",
      imgAltText: "Dipu Pandey",
      img: gauravKumar,
      statement:
        "The PPC and ad services provided by our marketing agency – Mediotix have been a game-changer for us. Their strategic campaigns and meticulous optimization have led to impressive results. Our ROI has soared by 65%, and our online visibility has never been better. With their expertise, we're confidently scaling our digital advertising efforts for even greater success.",
    },
    {
      name: "Jayan Matthew",
      profile: "Get Vital",
      imgAltText: "Jayan Matthew",
      img: gauravKumar,
      statement:
        "The expertise and dedication of the Mediotix team during our GA4 migration were outstanding. They ensured a fast and accurate data migration process, conducting rigorous audits to guarantee precision. Their assistance allowed us to confidently master the GA4 platform, saving us valuable time. Moreover, their prompt availability and expertise in handling our intricate reporting needs have been exceptional.",
    },
  ];