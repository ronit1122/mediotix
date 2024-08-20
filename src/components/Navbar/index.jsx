'use client'
import React, {useState, useRef, useEffect} from "react"
import { Box, Flex, Text, Link, Spacer } from "@chakra-ui/react";
import {mediotixLogo} from './../../assets/companyLogo/export.js';
import Image from 'next/image';
import {v4 as uuidv4} from "uuid";
import {googleAnalytics} from './../../assets/navbar/export.js';


export default function Navbar() {
  const [openNavbar, setOpenNavbar] = React.useState(false);
  const firstField = React.useRef();
  const [hoveredTab, setHoveredTab] = useState(null)
  const timeoutRef = useRef(null);
  const menuPanelRef = useRef(null)

  const _handleTabsHover = (tab) => {

    // Clear any existing timeout
    // if (timeoutRef.current) {
    //     clearTimeout(timeoutRef.current);
    // }
     menuPanelRef.current.style.transform = "translateY(800px)"
     setHoveredTab(tab)

  }



  const handleMouseLeave = () => {
    // Clear any existing timeout
    menuPanelRef.current.style.transform = "translateY(-800px)"
    setHoveredTab(null)

    // if (timeoutRef.current) {
    //   clearTimeout(timeoutRef.current);
      
    // }

    // Set a new timeout to call _handleTabsHover after 1 second
    // timeoutRef.current = setTimeout(() => {
    //   _handleTabsHover(null);
    // }, 100);
  };


  console.log(hoveredTab, "hoveredTab")
  const navbarLinksData = [
    { 
      name: "Solution",
      takeTo: "/",
      hover: () => _handleTabsHover("solution"),
    },
    {
      name: "Resources",
      takeTo: "/",
      hover: () => _handleTabsHover("resources"),
    },
    {
      name: "About Us",
      takeTo: "/",
      hover: () => _handleTabsHover("aboutUs"),
    },
    {
      name: "MX360",
      takeTo: "/",
      hover: () => _handleTabsHover("mx360"),
    },
    {
      name: "Contact Us",
      takeTo: "/",
      hover: () => _handleTabsHover("contactUs"),
    },
  ];

  return (
<div className=" h-[90px] w-full relative">
  <div style={{zIndex: 500}} className="flex items-center h-full  relative">
    {/* Logo Section */}
    <div className="bg-white h-full w-[30%] flex items-center justify-center absolute" style={{clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)"}}>
     <Image src={mediotixLogo} style={{objectFit: "contain", marginRight: "10%"}} alt="mediotix"/>
    </div>

    {/* Navigation Links */}
    <div style={{background: "linear-gradient(#EA875B, #FF7F76)"}} className="flex items-center gap-16 w-full h-full justify-end px-[10%]">
      {navbarLinksData?.map(item => (
        <Link 
         key={uuidv4()}
         onMouseEnter={item.hover}

        //  onMouseLeave={() => handleMouseLeave()}
        //  color={ location.pathname === item.takeTo ? "#ff7400" : "#263238" }
         href={item?.takeTo} className={`${item?.name === "Contact Us" ? 'text-[#FF9363]' : 'text-white'} ${item?.name === "Contact Us" ? 'bg-white' : 'bg-gradient-to-b from-[#EA875B] to-[#FF7F76]'} font-semibold  h-fit p-[10px] rounded-[5px] flex items-center`}>
           {item?.name}
        </Link>
      ))}
      {/* <Link href="#" className="text-white h-full flex items-center font-semibold">
        Resources
      </Link>
      <Link href="#" className="text-white h-full flex items-center font-semibold">
        About Us
      </Link>
      <Link href="#" className="text-white h-full flex items-center font-semibold">
        MX360
      </Link>
      <Link href="#" className="text-white h-full flex items-center font-semibold">
        Contact Us
      </Link> */}
    </div>
  </div>
  <div ref={menuPanelRef} onMouseLeave={() => handleMouseLeave()} className=" flex justify-start min-h-[600px] bg-red-500 w-full absolute top-[-800px] transition-all duration-700 left-0" style={{zIndex: 480, background: "linear-gradient(180deg, #FF9363 0%, #FF7D78 100%)" }}>
     <div className="w-[70%] mt-[150px] mx-auto">
        <SolutionsMenuData />
     </div>
  </div>
</div>

  );
}

const SolutionsMenuData = () => {
  const [selectedMenu, setSelectedMenu] = useState("Measurement")
  const menuData = [
    { 
      name: "Measurement",
      takeTo: "/",
      hover: () => _handleTabsHover("Measurement"),
      childs: [
        {
          name: "GA4",
          icon: <Image src={googleAnalytics} alt="google analytics" />
        },
        {
          name: "GTM 360",
          icon: <Image src={googleAnalytics} alt="google analytics" />
        },
        {
          name: "Adobe Analytics",
          icon: <Image src={googleAnalytics} alt="google analytics" />
        },
        {
          name: "App Analytics",
          icon: <Image src={googleAnalytics} alt="google analytics" />
        },
        {
          name: "E-commerce Analytics",
          icon: <Image src={googleAnalytics} alt="google analytics" />
        },
      ]
    },
    {
      name: "Marketing",
      takeTo: "/",
      hover: () => _handleTabsHover("Marketing"),
      childs: [
        {
          name: "Media activation ",
          icon: <Image src={googleAnalytics} alt="google analytics" />
        },
        {
          name: "DV360",
          icon: <Image src={googleAnalytics} alt="google analytics" />
        },
        {
          name: "Affiliate Marketing",
          icon: <Image src={googleAnalytics} alt="google analytics" />
        },
        {
          name: "Paid social",
          icon: <Image src={googleAnalytics} alt="google analytics" />
        },
      ]
    },
    {
      name: "Tech",
      takeTo: "/",
      hover: () => _handleTabsHover("Tech"),
      childs: [
        {
          name: "Mx360",
          icon: <Image src={googleAnalytics} alt="google analytics" />
        },
        {
          name: "Google Maps platform (GMP)",
          icon: <Image src={googleAnalytics} alt="google analytics" />
        },
        {
          name: "Google cloud platform (GCP)",
          icon: <Image src={googleAnalytics} alt="google analytics" />
        },
        {
          name: "Power BI & Look out and studio (JCP)",
          icon: <Image src={googleAnalytics} alt="google analytics" />
        },
      ]
    },
    {
      name: "Creative",
      takeTo: "/",
      hover: () => _handleTabsHover("Creative"),
      childs: [
        {
          name: "Content",
          icon: <Image src={googleAnalytics} alt="google analytics" />
        },
        {
          name: "Social",
          icon: <Image src={googleAnalytics} alt="google analytics" />
        },
        {
          name: "Native content",
          icon: <Image src={googleAnalytics} alt="google analytics" />
        },
        {
          name: "Video",
          icon: <Image src={googleAnalytics} alt="google analytics" />
        },
      ]
    },
  ];

  return (
    <div className=" w-[600px] relative ">
      <div className="flex flex-col justify-between">
        <div className="h-fit bg-white flex justify-between items-center px-[20px] py-[10px] rounded-[10px]">
          {menuData?.map(item => (
            <div onClick={() => setSelectedMenu(item?.name)} className={`w-[120px] h-[40px] flex items-center justify-center text-center rounded-[5px] cursor-pointer ${selectedMenu === item?.name ? 'text-white bg-gradient-to-b from-[#FF9363] to-[#FF7D78]' : 'text-black bg-white hover:bg-slate-100'}`} >{item?.name}</div>
          ))}
        </div>
        <div className="p-[30px] flex flex-col gap-4">
        {menuData?.filter(item => item?.name === selectedMenu)?.[0]?.childs?.map(item => (
          <div className="flex gap-3 text-white">
              {item?.icon}
              {item?.name}
            </div>
        ))}
        </div>
      </div>

    </div>
  )
}
