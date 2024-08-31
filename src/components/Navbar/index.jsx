'use client'
import React, {useState, useRef, useEffect} from "react"
import Link from 'next/link'
import {mediotixLogo, mx360LogoWhite} from './../../assets/companyLogo/export.js';
import Image from 'next/image';
import {v4 as uuidv4} from "uuid";
import { cashKaro, diceAcademy, finolex, gsk, maxHealth, digbiHealth, pvr, watcho, heroElectronix, reliance, spinny} from './../../assets/clients/export.js';
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  adobeAnalytics,
  affiliateMarketing,
  appAnalytics,
  content,
  dv360,
  ecommerceAnalytics,
  googleAnalytics,
  googleCloudPlatform,
  googleMapsPlatform,
  gtm360,
  mediaActivation,
  mx360,
  nativeContent,
  paidAds,
  powerBi,
  social,
  video
} from './../../assets/navbar/export.js';
import { digbiHealthBg } from "@/assets/caseStudies/export.js";
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


    if(tab === "mx360" || tab === "contactUs") {
      menuPanelRef.current.style.transform = "translateY(-800px)"
      return;
    }
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
      name: <Image  src={mx360LogoWhite} />,
      takeTo: "https://mx360.io",
      hover: () => _handleTabsHover("mx360"),
    },
    {
      name: "Contact Us",
      takeTo: "/contactUs",
      hover: () => _handleTabsHover("contactUs"),
    },
  ];

  return (
<div className=" h-[70px] w-full relative">
  <div style={{zIndex: 500}} className="flex items-center h-full  relative">
    {/* Logo Section */}
    <div className="bg-white h-full w-[30%] flex items-center justify-center absolute" style={{clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)"}}>
     <Link href={"/"}>
       <Image src={mediotixLogo} style={{objectFit: "contain", marginRight: "10%"}} alt="mediotix"/>
     </Link>
    </div>

    {/* Navigation Links */}
    <div style={{background: "linear-gradient(#EA875B, #FF7F76)"}} className="flex items-center gap-12 w-full h-full justify-end px-[10%]">
    {navbarLinksData?.map((item, index) => (
    item?.name !== "Contact Us" ? 
    <Link 
        key={index}  // Consider using item.id if available
        onMouseEnter={item.hover}
        href={item?.takeTo}
        className='text-white bg-gradient-to-b from-[#EA875B] to-[#FF7F76] font-semibold h-fit p-[10px] rounded-[5px] flex items-center'>
        {item?.name}
    </Link>
    :
    <Link 
        key={index}  // Consider using item.id if available
        href={item?.takeTo}
        className="relative inline-flex items-center justify-center p-4 px-6 py-2 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-[10px] shadow-md group">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[#FF7F76] duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
            Contact us
        </span>
        <span className="relative invisible">Button Text</span>
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
  <div ref={menuPanelRef} onMouseLeave={() => handleMouseLeave()} className=" flex justify-start min-h-[500px] bg-red-500 w-full absolute top-[-800px] transition-all duration-700 left-0" style={{zIndex: 480, background: "linear-gradient(180deg, #FF9363 0%, #FF7D78 100%)" }}>
     <div className="w-[100%] mt-[150px] mx-auto">
        {hoveredTab === "solution" && <SolutionsMenuData />}
        {hoveredTab === "resources" && <ResourcesMenuData />}
        {hoveredTab === "aboutUs" && <AboutUsMenuData />}
        {/* {hoveredTab === "solution" && <SolutionsMenuData />} */}
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
          icon: <Image src={gtm360} alt="google analytics" />
        },
        {
          name: "Adobe Analytics",
          icon: <Image src={adobeAnalytics} alt="google analytics" />
        },
        {
          name: "App Analytics",
          icon: <Image src={appAnalytics} alt="google analytics" />
        },
        {
          name: "E-commerce Analytics",
          icon: <Image src={ecommerceAnalytics} alt="google analytics" />
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
          icon: <Image src={mediaActivation} alt="google analytics" />
        },
        {
          name: "DV360",
          icon: <Image src={dv360} alt="google analytics" />
        },
        {
          name: "Affiliate Marketing",
          icon: <Image src={affiliateMarketing} alt="google analytics" />
        },
        {
          name: "Paid social",
          icon: <Image src={paidAds} alt="google analytics" />
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
          icon: <Image src={mx360} alt="google analytics" />
        },
        {
          name: "Google Maps platform (GMP)",
          icon: <Image src={googleMapsPlatform} alt="google analytics" />
        },
        {
          name: "Google cloud platform (GCP)",
          icon: <Image src={googleCloudPlatform} alt="google analytics" />
        },
        {
          name: "Power BI & Look out and studio (JCP)",
          icon: <Image src={powerBi} alt="google analytics" />
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
          icon: <Image src={content} alt="google analytics" />
        },
        {
          name: "Social",
          icon: <Image src={social} alt="google analytics" />
        },
        {
          name: "Native content",
          icon: <Image src={nativeContent} alt="google analytics" />
        },
        {
          name: "Video",
          icon: <Image src={video} alt="google analytics" />
        },
      ]
    },
  ];

  return (
    <div className=" w-[600px] ml-[15%] relative ">
      <div className="flex flex-col justify-between">
        <div className="h-fit bg-white flex justify-between items-center px-[20px] py-[10px] rounded-[10px]">
          {menuData?.map(item => (
            <div onClick={() => setSelectedMenu(item?.name)} className={`w-[120px] h-[40px] flex items-center justify-center text-center rounded-[5px] cursor-pointer ${selectedMenu === item?.name ? 'text-white bg-gradient-to-b from-[#FF9363] to-[#FF7D78]' : 'text-black bg-white hover:bg-slate-100'}`} >{item?.name}</div>
          ))}
        </div>
        <div className="p-[30px] flex flex-col gap-4">
        {menuData?.filter(item => item?.name === selectedMenu)?.[0]?.childs?.map(item => (
          <div className="flex gap-3 text-white">
              <div className="w-[30px] flex justify-center">
                {item?.icon}
              </div>
              {item?.name}
            </div>
        ))}
        </div>
      </div>

    </div>
  )
}

const ResourcesMenuData = () => {
  const [selectedMenu, setSelectedMenu] = useState("caseStudy")
  const menuItems = {
    caseStudy: [
      {
        icon: <Image src={pvr} className="object-contain" />,
        desc: "PVR: Smart tagging drives 25% cost reduction, boosting PVR Cinemas' digital strategy and partnership growth",
      },
      {
        icon: <Image src={maxHealth} className="object-contain" />,
        desc: "Max Healthcare: Max Healthcare's targeted strategy doubled conversions in just three months, enhancing patient engagement and care."
      },
      {
        icon: <Image src={digbiHealth} className="object-contain" />,
        desc: "Digbi Health : Digbi Health's seamless GA4 transition enhanced conversion funnel tracking, empowering data-driven decisions and ROI precision."
      },
      {
        icon: <Image src={gsk} className="object-contain" />,
        desc: "gsk: Increased ROAS by 40% through optimized ad strategies and data-driven insights for GSK."
      }
       
    ],
    blogs: [
      {
        icon: "",
        desc: "Read Today's Monday Analytics Insight on Data Visualization: Turning Numbers into Actionable Insights"
      },
      {
        icon: "",
        desc: "Read Today's Newsletter on How to Optimize Your Referral Traffic in GA4 for Better Insights."
      },
      {
        icon: "",
        desc: "Explore How Big Data is Shaping the Future of Marketing Trends with 'Monday Analytics Insights."
      },
      {
        icon: "",
        desc: "Know full potential of your data with the latest Monday Analytics Insight!"
      }
    ]
  }

  return (
    <div className=" w-[80%] mx-auto  relative ">
      <div className="flex justify-between">
        <div className="h-[200px] w-[300px] flex flex-col bg-white gap-2 items-center p-[10px] rounded-[10px]">
         <button className={` rounded-[10px] w-full text-start p-[10px] ${selectedMenu === "caseStudy" ? 'text-white bg-[#FF7A7A]' : 'bg-white text-black'}`} onClick={() => setSelectedMenu("caseStudy")}>Case study</button>
         <button  className={` rounded-[10px] w-full text-start p-[10px] ${selectedMenu === "blogs" ? 'text-white bg-[#FF7A7A]' : 'bg-white text-black'}`} onClick={() => setSelectedMenu("blogs")}>Blogs</button>
        </div>
        <div className="p-[30px] pt-[0]  w-full grid grid-cols-2 gap-4">
        {menuItems?.[selectedMenu]?.map(item => (
            <div className="text-white flex gap-2">
              <div className="bg-white min-w-[100px] w-[100px] h-[70px] rounded-[5px] p-[10px] flex justify-center">
                  {item?.icon}
              </div>
              <div>
              <p>{item?.desc}</p>
              </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}

const AboutUsMenuData = () => {
  const [selectedMenu, setSelectedMenu] = useState("caseStudy")

  const menuItems = {
    caseStudy: [
      {
        icon: "",
        desc: "PVR: Smart tagging drives 25% cost reduction, boosting PVR Cinemas' digital strategy and partnership growth",
      },
      {
        icon: "",
        desc: "Max Healthcare: Max Healthcare's targeted strategy doubled conversions in just three months, enhancing patient engagement and care."
      },
      {
        icon: "",
        desc: "Digbi Health : Digbi Health's seamless GA4 transition enhanced conversion funnel tracking, empowering data-driven decisions and ROI precision."
      },
      {
        icon: "",
        desc: "gsk: Increased ROAS by 40% through optimized ad strategies and data-driven insights for GSK."
      }
       
    ],
    blogs: [
      {
        icon: "",
        desc: "Read Today's Monday Analytics Insight on Data Visualization: Turning Numbers into Actionable Insights"
      },
      {
        icon: "",
        desc: "Read Today's Newsletter on How to Optimize Your Referral Traffic in GA4 for Better Insights."
      },
      {
        icon: "",
        desc: "Explore How Big Data is Shaping the Future of Marketing Trends with 'Monday Analytics Insights."
      },
      {
        icon: "",
        desc: "Know full potential of your data with the latest Monday Analytics Insight!"
      }
    ]
  }

  return (
    <div className=" w-[80%] mx-auto relative ">
      <div className="flex gap-6">
        <div className=" w-[500px] flex flex-col  gap-2  text-start text-white">
           <p className="font-semibold mb-4">About Mediotix</p>
           <p>Mediotix is a leading MarTech agency with a global presence, serving clients worldwide through our large network of offices and strategic relationships. We believe in the power of data. Our team uses advanced analytics techniques to uncover actionable insights that drive successful marketing strategies. Our track record talks for itself. We've helped numerous businesses to achieve outstanding growth and success with our data-driven approach.</p>
        </div>
        <div className="text-white">
        <p className="font-semibold mb-4">About Clients</p>
        <div className=" w-full grid grid-cols-4 gap-3">
          <div className="bg-white w-[100px] h-[60px] rounded-[5px] p-[10px] flex justify-center">
            <Image src={pvr} className="object-contain" />
          </div>
          <div className="bg-white  w-[100px] h-[60px]  rounded-[5px] p-[10px]  flex justify-center">
            <Image src={maxHealth} className="object-contain"  />
          </div>
          <div className="bg-white  w-[100px] h-[60px]  rounded-[5px] p-[10px]  flex justify-center">
            <Image src={gsk} className="object-contain"  />
          </div>
          <div className="bg-white  w-[100px] h-[60px]  rounded-[5px] p-[10px]  flex justify-center">
            <Image src={heroElectronix} className="object-contain"  />
          </div>
          <div className="bg-white  w-[100px] h-[60px]  rounded-[5px] p-[10px]  flex justify-center">
            <Image src={finolex} className="object-contain"  />
          </div>
          <div className="bg-white  w-[100px] h-[60px]  rounded-[5px] flex justify-center">
            <Image src={reliance} className="object-contain"  />
          </div>
          <div className="bg-white  w-[100px] h-[60px]  rounded-[5px] flex justify-center">
            <Image src={spinny} className="object-contain"  />
          </div>
          <div className="bg-white  w-[100px] h-[60px]  rounded-[5px] p-[10px]  flex justify-center">
            <Image src={watcho} className="object-contain"  />
          </div>
 
        </div>
        <div className="flex gap-1 items-center mt-4 hover:underline cursor-pointer">
          <p className="font-light text-[13px] ">View all Clients</p>
          <IoIosArrowRoundForward />
        </div>
        </div>

      </div>

    </div>
  )
}
