"use client";
  import {v4 as uuidv4} from "uuid";
  import React, {useState} from "react";
  import { cashKaro, diceAcademy, finolex, gsk, maxHealth, pvr, watcho} from './../../assets/clients/export.js';
  import Fade from "react-reveal/Fade";
  import testimonialOne from './../../assets/home/testimonialOne.png';
  import { useRouter } from 'next/navigation';
  import Image from "next/image";


  export default function Third() {

    const router = useRouter();

    const [currentTab, setCurrentTab] = useState(1);


    const tabsList = [
      {
        name: "Max Healthcare Case Study",
        tagline:  "Know how 85% Increment happened in Conversion Rate within 3 months",
        imgAltText: "icon of Max ",
        bgAltText: "image of statoscope",
        src: pvr,
        id: 1,
        bg: testimonialOne,
        route: "/case-studies",
        width: "100px",
      },
      {
        name: "GSK Case Study",
        tagline: "A Well-informed Data-driven Strategy that Boosted Sign-ups by 200%",
        imgAltText: "icon of Gsk",
        bgAltText: "image of microscope plate",
        src: watcho,
        bg: testimonialOne,
        id: 2,
        route: "/case-studies",
        width: "100px",
      },
      {
        name: "PVR SEO Case Study",
        src: finolex,
        tagline: "Unique SEO Strategy that Achieved 90% Boost in Keyword Visibility & Performance",
        imgAltText: "icon of PVR",
        bgAltText: "A set of image of clapper board,Camera, reel, popcorn",
        bg: testimonialOne,
        route: "/case-studies",
        id: 3,
        width: "80px",
      },
      {
        name: "Qubo Case Study",
        src: maxHealth,
        tagline: "150% Increased Conversions Rate within 6 months by Optimizing Conversion Funnel",
        imgAltText: "icon of Qubo",
        bgAltText: "image of Go Pro Camera ",
        bg: testimonialOne,
        id: 4,
        route: "/case-studies",
        width: "120px",
      },
      {
        name: "Dice Case Study",
        src: cashKaro,
        tagline:  "The Story of How a Marketing Strategy Helped in Growth of Conversions by 700%",
        imgAltText: "icon of Dice",
        bgAltText: "A Set of image of Laptop, Headphone, Penstand, Calculator, Magnifying glass, Notebooks",
        bg: testimonialOne,
        id: 5,
        route: "/case-studies",
        width: "100px",
      },
    ];
  
  
    return (
      <div className="flex flex-col pb-[12%] w-[85%] mx-auto rounded-[30px] text-[clamp(13px,1.5vw,15px)] font-medium">
        <Fade bottom distance="30px" delay={300}>
          <h2 className="pt-[5rem] pb-[2rem] text-[#FF7D78] text-center text-[40px] font-bold">
            Case Studies
          </h2>
        </Fade>
        
        <div className="mt-[2rem] relative">
          <div className="flex">
            {tabsList.map((item) => (
              <button
                className="w-full text-[14px] font-semibold cursor-pointer focus:outline-none active:bg-none"
                key={uuidv4()}
                aria-label={item?.name}
                value={item}
                onClick={() => setCurrentTab(item?.id)}
              >
                <Image
                  className="mx-[10px]"
                  width={item.width}
                  src={item.src}
                  alt={item?.imgAltText}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
          <div className="mt-[5px] h-[3px] bg-[#FF9462] rounded-[1px]"></div>
          <div>
            {tabsList?.map((item) => (
               item?.id === currentTab && <div key={uuidv4()}>
                <div className="relative flex justify-center items-center h-[550px] rounded-b-[40px]">
                  <Image
                    className="w-full h-full object-cover rounded-b-[40px]"
                    src={item.bg}
                    alt={item?.bgAltText}
                    loading="lazy"
                  />
                  <div className="absolute w-full h-full bg-transparent">
                    <div className={`grid w-full h-full grid-cols-2 px-[5rem] items-center`}>
                    
                      <Fade bottom distance="30px" delay={300}>
                        <div className="order-2">
                          <div className={`rounded-[10px] p-[3rem] text-[#546E7A] flex flex-col bg-[rgba(255,255,255,0.4)]`}>
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
                      </Fade>
                      {/* <Fade bottom distance="30px" delay={300}>
                        <div className="order-1"></div>
                      </Fade> */}
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
  