"use client";
  import {v4 as uuidv4} from "uuid";
  import React, {useState} from "react";
  import { cashKaro, diceAcademy, finolex, gsk, maxHealth, pvr, watcho} from './../../assets/clients/export.js';
  import testimonialOne from './../../assets/home/testimonialOne.png';
  import { useRouter } from 'next/navigation';
  import Image from "next/image";
  import {diceAcademyBg, digbiHealthBg, homeDelhiBg, maxHealthBg, gskBg, pvr1Bg, prv2Bg, quboBg, relianceBg, cashKaroBg, watchoBg, finolexBg} from './../../assets/caseStudies/export.js';
  import { useMediaQuery } from '@chakra-ui/react'

  export default function Third() {
    const [isSmallerThan800] = useMediaQuery('(max-width: 900px)')
    const router = useRouter();

    const [currentTab, setCurrentTab] = useState(1);


    const tabsList = [
      {
        name: "Finolex Case Study",
        src: finolex,
        tagline: "Unique SEO Strategy that Achieved 90% Boost in Keyword Visibility & Performance",
        imgAltText: "icon of finolex",
        bgAltText: "A set of image of clapper board,Camera, reel, popcorn",
        bg: finolexBg,
        route: "/case-studies",
        id: 1,
        width: "120px",
      },
      {
        name: "GSK Case Study",
        tagline: "A Well-informed Data-driven Strategy that Boosted Sign-ups by 200%",
        imgAltText: "icon of watcho",
        bgAltText: "image of microscope plate",
        src: watcho,
        bg: watchoBg,
        id: 2,
        route: "/case-studies",
        width: "120px",
      },
      {
        name: "Cashkaro",
        src: cashKaro,
        tagline:  "The Story of How a Marketing Strategy Helped in Growth of Conversions by 700%",
        imgAltText: "icon of cashkaro",
        bgAltText: "A Set of image of Laptop, Headphone, Penstand, Calculator, Magnifying glass, Notebooks",
        bg: cashKaroBg,
        id: 3,
        route: "/case-studies",
        width: "120px",
      },

      {
        name: "Max Healthcare Case Study",
        tagline:  "Know how 85% Increment happened in Conversion Rate within 3 months",
        imgAltText: "icon of pvr ",
        bgAltText: "image of statoscope",
        src: pvr,
        id: 4,
        bg: pvr1Bg,
        route: "/case-studies",
        width: isSmallerThan800 ? "35px" : "60px",
      },

      {
        name: "Qubo Case Study",
        src: maxHealth,
        tagline: "150% Increased Conversions Rate within 6 months by Optimizing Conversion Funnel",
        imgAltText: "icon of max health",
        bgAltText: "image of Go Pro Camera ",
        bg: maxHealthBg,
        id: 5,
        route: "/case-studies",
        width:  isSmallerThan800 ? "70px" :"100px",
      },
    ];
  
    return (
      <div className="flex flex-col pb-[8%] w-[95%] tablet:w-[85%] mx-auto rounded-[30px] text-[clamp(14px,1.5vw,16px)] font-medium">
  
          <h2 style={{fontSize: "clamp(26px, 3vw, 40px)"}}  className="py-[30px]  tablet:pt-[5rem] tablet:pb-[2rem] text-[#FF7D78] text-center font-[900]">
            Case Studies
          </h2>
        
        <div className="tablet:mt-[2rem] relative">
          <div className="flex gap-[20px] tablet:gap-12 mb-[20px]">
            {tabsList.map((item) => (
              <button
                className="w-full text-[14px] font-semibold cursor-pointer focus:outline-none active:bg-none justify-center"
                style={{borderBottom: item?.id === currentTab ? "4px solid #FF9462" : "4px solid transparent"}}
                key={uuidv4()}
                aria-label={item?.name}
                value={item}
                onClick={() => setCurrentTab(item?.id)}
              >
                <Image
                  className="mx-auto"
                  // width={item.width}
                  style={{width: item?.width}}
                  src={item.src}
                  alt={item?.imgAltText}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
          {/* <div className="mt-[5px] h-[3px] bg-[#FF9462] rounded-[1px]"></div> */}
          <div>
            {tabsList?.map((item) => (
               item?.id === currentTab && <div key={uuidv4()}>
                <div className="relative flex justify-center items-center h-[450px] tablet:h-[600px] ">
                  <Image
                    className="w-full h-full object-cover rounded-[50px]"
                    src={item.bg}
                    alt={item?.bgAltText}
                    loading="lazy"
                  />
                  <div className="absolute w-full h-full bg-transparent">
                    <div className={`grid w-full h-full grid-cols-1 tablet:grid-cols-2 px-[20px] pb-[20px] tablet:px-[5rem] items-end tablet:items-center`}>
                    
                     
                        <div className="order-2">
                          <div className={`rounded-[25px] tablet:rounded-[10px] p-[2rem] tablet:p-[3rem] text-[#546E7A] flex flex-col bg-[rgba(255,255,255,0.4)]`}>
                            <p className="text-[clamp(16px,3vw,22px)] leading-[110%] font-bold text-[#263238]">
                              {item.tagline}
                            </p>
                            <button
                              
                              className="mt-[2rem] w-[10rem] text-white naviteButton"
                              onClick={() => {
                                router.push(item.route);
                              }}
                            >
                              Read Now
                            </button>
                          </div>
                        </div>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    );
  }
  