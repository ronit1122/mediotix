'use client'
import React, {useState, useRef, useEffect} from "react"
import Link from 'next/link'
import {mediotixLogo, mx360LogoWhite, mx360Logo} from './../../assets/companyLogo/export.js';
import Image from 'next/image';
import {v4 as uuidv4} from "uuid";
import { cashKaro, diceAcademy, finolex, gsk, maxHealth, digbiHealth, pvr, watcho, heroElectronix, reliance, spinny} from './../../assets/clients/export.js';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

import { ChakraProvider, Flex } from '@chakra-ui/react'
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
  video,
  L1,
  L2,
  R1,
  R2,
} from './../../assets/navbar/export.js';
import { digbiHealthBg } from "@/assets/caseStudies/export.js";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useDisclosure,
  IconButton,
  Box,
  Button,
  useMediaQuery,
  Tabs, TabList, TabPanels, Tab, TabPanel 
} from '@chakra-ui/react'
import { RxHamburgerMenu } from "react-icons/rx";
import MediotixLogoGif from './../../assets/navbar/mediotixLogo.gif';
import {contentPerformanceAnalysis, aiAwakens, essentialFeatures} from './../../assets/blogsPage/export.js';
import { cashkaroBg } from "@/assets/caseStudiesPage/export.js";

export default function Navbar() {
  const [openNavbar, setOpenNavbar] = React.useState(false);
  const firstField = React.useRef();
  const [hoveredTab, setHoveredTab] = useState(null)
  const timeoutRef = useRef(null);
  const menuPanelRef = useRef(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [isLargerThan900] = useMediaQuery('(max-width: 900px)')
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


  let handleMediotix_aboutUs_click = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        'event': 'top_navi_about_us'
      })
    }
  };

  const navbarLinksData = [
    { 
      name: "Solutions",
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
      takeTo: "/about-us",
      hover: () => _handleTabsHover("aboutUs"),
      dataLayer: handleMediotix_aboutUs_click,
    },
    // {
    //   name: <Image  src={mx360LogoWhite} />,
    //   takeTo: "https://mx360.io",
    //   hover: () => _handleTabsHover("mx360"),
    // },
    // {
    //   name: "Contact Us",
    //   takeTo: "/contact-us",
    //   hover: () => _handleTabsHover("contactUs"),
    // },
  ];


  const handlemediotix_logo_click = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'mediotix_logo_click',
      });
    }
  };

  const handletop_navi_contact_us  = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'top_navi_contact_us',
      });
    }
  };

  const handletop_navi_mx360_click  = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'top_navi_mx360_click',
      });
    }
  };


  return (
    <ChakraProvider>
<div  className=" h-[70px] tablet:h-[70px] w-full relative" style={{boxShadow: "0px 4px 7px 5px #00000033", position: "fixed", zIndex: 999}}>
  <div style={{zIndex: 500}} className="flex items-center h-full  relative">
    {/* Logo Section */}
    <div className="bg-white h-full w-[30%] flex items-center justify-center absolute tablet:w-[35%]" style={{clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)"}}>
     <Link onClick={() => handlemediotix_logo_click()} href={"/"} style={{display: "flex", justifyContent: "center"}}>
       <Image src={MediotixLogoGif} style={{objectFit: "contain", marginRight: "13%"}} className="w-[70%] tablet:max-w-[45%] ml-[10px] tablet:ml-[0px]" alt="mediotix"/>
     </Link>
    </div>

    {/* Navigation Links */}
    <div style={{background: "linear-gradient(#EA875B, #FF7F76)"}} className="w-full h-full">
    <div className="items-center mobile:gap-4 tablet:gap-6 desktop:gap-10 w-full h-full justify-end tablet:px-[2%] desktop:px-[10%] hidden tablet:flex">
    {navbarLinksData?.map((item, index) => (
    <Link 
        key={index}  // Consider using item.id if available
        onMouseEnter={item.hover}
        href={"/about-us"}
        onClick={() => item.dataLayer && item.dataLayer()}
        className='text-white bg-gradient-to-b from-[#EA875B] to-[#FF7F76] font-semibold h-fit p-[10px] rounded-[5px] flex items-center'>
        {item?.name}
    </Link>
    ))}
    <Link 
        onClick={() => handletop_navi_contact_us()}
        href={'/contact-us'}
        className='text-white bg-gradient-to-b from-[#EA875B] to-[#FF7F76] font-semibold h-fit p-[10px] rounded-[5px] flex items-center'>
        Contact Us
    </Link>
    <Link 
        onClick={() => handletop_navi_mx360_click()}
        href={"https://mx360.io"}
        className="relative inline-flex items-center justify-center p-4 px-6 py-2 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-[10px] shadow-md group">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[#FF7F76] duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="white" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-white bg-white transition-all duration-300 transform group-hover:translate-x-full ease">
            <Image  src={mx360Logo} className="w-[90px]" />
        </span>
        <span className="relative invisible">Button Text</span>
    </Link>

    </div>
    <div  className='flex h-full items-center justify-end tablet:hidden ' >
    <IconButton ref={btnRef} color='white'  onClick={onOpen} mr="6px"  isRound={true} variant='solid' colorScheme='whiteAlpha' aria-label='Done' fontSize='20px' icon={<RxHamburgerMenu />}>
    </IconButton>
    </div>
    </div>
    
  </div>

  <div ref={menuPanelRef} onMouseLeave={() => handleMouseLeave()} className=" flex justify-start min-h-[500px] bg-red-500 w-full absolute top-[-800px] transition-all duration-700 left-0" style={{zIndex: 480, background: "linear-gradient(180deg, #FF9363 0%, #FF7D78 100%)" }}>
     <div className="w-[100%] mt-[150px] mx-auto">
        {hoveredTab === "solution" && <SolutionsMenuData />}
        {hoveredTab === "resources" && <ResourcesMenuData />}
        {hoveredTab === "aboutUs" && <AboutUsMenuData />}
     </div>
  </div>

  <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent fontSize="14px"  className="font-poppins">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody p="10px">
            <Accordion allowToggle> 
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="14px" as='span' flex='1' textAlign='left'>
           Solutions
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel  pb={4}>
       <SolutionsMenuData />
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="14px"  as='span' flex='1' textAlign='left'>
           Resources
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} padding="0 !important">
        <ResourcesMenuData />
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="14px"  as='span' flex='1' textAlign='left'>
          About Us
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <AboutUsMenuData />
    </AccordionPanel>
  </AccordionItem>
            </Accordion>
          </DrawerBody>

          <DrawerFooter p="10px !important">
          <Link 
        href={"/contact-us"}>
         <Button fontSize="14px"  colorScheme='gray' variant='ghost'>
    Contact us
  </Button>
    </Link>
            <Button fontSize="14px"  variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

  
</div>
</ChakraProvider>

  );
}

const SolutionsMenuData = () => {
  const [selectedMenu, setSelectedMenu] = useState("Measurement")
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')

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
          icon: <Image src={gtm360} alt="gtm 360" />
        },
        {
          name: "Adobe Analytics",
          icon: <Image src={adobeAnalytics} alt="adobe analytics" />
        },
        {
          name: "App Analytics",
          icon: <Image src={appAnalytics} alt="app analytics" />
        },
        {
          name: "E-commerce Analytics",
          icon: <Image src={ecommerceAnalytics} alt="ecommerce analytics" />
        },
      ]
    },
    {
      name: "Marketing",
      takeTo: "/",
      hover: () => _handleTabsHover("Marketing"),
      childs: [
        {
          name: "Media Activation ",
          icon: <Image src={mediaActivation} alt="media activation" />
        },
        {
          name: "DV360",
          icon: <Image src={dv360} alt="dv360" />
        },
        {
          name: "Performance Marketing",
          icon: <Image src={affiliateMarketing} alt="performance marketing" />
        },
        {
          name: "Hyper Local",
          icon: <Image src={paidAds} alt="hyper local" />
        },
        {
          name: "CRO",
          icon: <Image src={paidAds} alt="cro " />
        },
      ]
    },
    {
      name: "Tech",
      takeTo: "/",
      hover: () => _handleTabsHover("Tech"),
      childs: [
        {
          name: "MX360",
          icon: <Image src={mx360} alt="mx360 logo" />
        },
        {
          name: "Google Maps Platform (GMP)",
          icon: <Image src={googleMapsPlatform} alt="google maps platform logo" />
        },
        {
          name: "Google Cloud Platform (GCP)",
          icon: <Image src={googleCloudPlatform} alt="google cloud platform" />
        },
        {
          name: "Power BI & Looker Studio",
          icon: <Image src={powerBi} alt="power bi" />
        },
      ]
    },
    {
      name: "Creative",
      takeTo: "/",
      hover: () => _handleTabsHover("Creative"),
      childs: [
        {
          name: "DCO",
          icon: <Image src={content} alt="dco" />
        },
        {
          name: "Social Communication",
          icon: <Image src={social} alt="social communication" />
        },
        {
          name: "Digital Content",
          icon: <Image src={nativeContent} alt="digital content" />
        },
        {
          name: "Video Production",
          icon: <Image src={video} alt="video production" />
        },
      ]
    },
  ];

  const top_navi_solution_click = (navigation) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      dataLayer.push({
        'event': 'top_navi_solution_click',
        'var_top_navi_solution': navigation
       });
      }
  };


  return (
    <div className=" w-full tablet:w-[600px] tablet:ml-[15%] relative ">
      <div className="flex flex-col justify-between">
        <div className="h-fit w-full bg-white grid grid-cols-2 gap-2 tablet:flex justify-between items-center tablet:px-[20px] tablet:py-[10px] rounded-[10px]">
          {menuData?.map(item => (
            <div onClick={() => {setSelectedMenu(item?.name); top_navi_solution_click(item?.name)}} className={` w-full tablet:w-[120px] h-[40px] flex items-center justify-center text-center rounded-[5px] cursor-pointer ${selectedMenu === item?.name ? 'text-white bg-gradient-to-b from-[#FF9363] to-[#FF7D78]' : 'text-black bg-white hover:bg-slate-100'}`} >{item?.name}</div>
          ))}
        </div>
        <div className="tablet:p-[30px] mt-[15px] tablet:mt-[0px] flex flex-col gap-4">
        {menuData?.filter(item => item?.name === selectedMenu)?.[0]?.childs?.map(item => (
          <div  className="flex gap-3 cursor-pointer tablet:text-white">
              <div style={{background: !isLargerThan900 && "linear-gradient(#EA875B, #FF7F76)"}}  className="w-[30px] h-[30px] rounded-full tablet:rounded-none flex justify-center">
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
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')


  const caseStudyDataLayerPush = (caseStudyName) => {
    
      if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            'event': 'top_navi_case_studies_click',
            'case_studies': caseStudyName
        });
    };

  }

  const blogsDataLayerPush = (blogName) => {
    
      if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            'event': 'top_navi_blogs_click',
            'blogs': blogName
        });
    };

  }
  const menuItems = {
    caseStudy: [
      {
        icon: <Image src={pvr} className="object-contain"  alt="pvr" />,
        desc: "Smart tagging drives 25% cost reduction, boosting PVR Cinemas' digital strategy and partnership growth",
        takeTo: "/case-studies/pvr-cinemas",
        dataLayer: () => caseStudyDataLayerPush("PVR")
      },
      {
        icon: <Image src={maxHealth} className="object-contain" alt="max health" />,
        desc: "Max Healthcare's targeted strategy doubled conversions in just three months, enhancing patient engagement and care.",
        takeTo: "/case-studies/max-healthcare",
        dataLayer: () => caseStudyDataLayerPush("Max Healthcare")

      },
      {
        icon: <Image src={finolex} className="object-contain" alt="finolex" />,
        desc: "Unique SEO Strategy that Achieved 90% Boost in Keyword Visibility & Performance",
        takeTo: "/case-studies/finolex-pipes-and-fitting",
        dataLayer: () => caseStudyDataLayerPush("Finolex pipes & fitting")

      },
      {
        icon: <Image src={gsk} className="object-contain" alt="gsk" />,
        desc: "Increased ROAS by 40% through optimized ad strategies and data-driven insights for GSK.",
        takeTo: "/case-studies/gsk",
        dataLayer: () => caseStudyDataLayerPush("GSK")

      }
       
    ],
    blogs: [
      {
        icon: <Image src={L1} className="object-cover" alt="data visualization" />,
        desc: "Read Today's Monday Analytics Insight on Data Visualization: Turning Numbers into Actionable Insights",
        takeTo: "/blogs/data-visualization-for-actionable-insights",
        dataLayer: () => blogsDataLayerPush("Read Today's Monday Analytics Insight on Data Visualization: Turning Numbers into Actionable Insights")
      },
      {
        icon: <Image src={R1} className="object-cover" alt="ga4 referral traffic" />,
        desc: "Read Today's Newsletter on How to Optimize Your Referral Traffic in GA4 for Better Insights.",
        takeTo: "/blogs/ga4-referral-traffic-optimization",
        dataLayer: () => blogsDataLayerPush("Read Today's Newsletter on How to Optimize Your Referral Traffic in GA4 for Better Insights.")
      },
      {
        icon: <Image src={essentialFeatures} className="object-cover" alt="essential features" />,
        desc: "Essential Features of GMB to Dominate Hyperlocal Markets",
        takeTo: "/blogs/features-of-gmb-to-dominate-hyperlocal-markets",
        dataLayer: () => blogsDataLayerPush("Content Performance Analysis: Measuring What Matters Most")
      },
      {
        icon: <Image src={aiAwakens} className="object-cover" alt="ai awakens" />,
        desc: "AI Awakens: Redefining Marketing Analytics for the Digital Era",
        takeTo: "/blogs/how-ai-redefines-marketing-analytics",
        dataLayer: () => blogsDataLayerPush("AI Awakens: Redefining Marketing Analytics for the Digital Era")
      }
    ]
  }

  const top_navi_resources_click = (navigation) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      dataLayer.push({
        'event': 'top_navi_resources_click',
        'var_top_navi_resources': navigation
      });
      }
  };

  const viewAllCaseStudiesDataLayerPush = () => {
    
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          'event': 'top_navi_view_all_case_studies'
        })
          
  };
  }

  const viewAllBlogsDataLayerPush = () => {
    
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
         'event': 'top_navi_view_all_blogs'
        })
          
  };
  }



  return (
    <div className="w-[100%] tablet:w-[80%] mx-auto  relative ">
      <div className="flex flex-col tablet:flex-row justify-between items-center">
        <div className="w-full tablet:h-[250px] tablet:w-[350px] flex flex-row tablet:flex-col bg-white gap-2 items-center p-[10px] rounded-[10px]">
         <button className={` rounded-[10px] w-full text-start p-[10px] ${selectedMenu === "caseStudy" ? 'text-white bg-[#FF7A7A]' : 'bg-white text-black'}`} onClick={() =>{ setSelectedMenu("caseStudy"); top_navi_resources_click("Case study")}}>Case Study</button>
         <button  className={` rounded-[10px] w-full text-start p-[10px] ${selectedMenu === "blogs" ? 'text-white bg-[#FF7A7A]' : 'bg-white text-black'}`} onClick={() => {setSelectedMenu("blogs"); top_navi_resources_click("Blogs")}}>Blogs</button>
        </div>
        <div className="w-full">
        <div className="p-[5px] tablet:px-[30px] pt-[0]  w-full grid grid-cols-1 tablet:grid-cols-2 gap-3 ">
        {menuItems?.[selectedMenu]?.map(item => (
           <Link onClick={item?.dataLayer} href={item?.takeTo}>
            <div className="  tablet:text-white cursor-pointer tablet:bg-none p-[10px] tablet:p-[5px] bg-[#f4f4f5] tablet:bg-white tablet:bg-opacity-0 tablet:hover:bg-opacity-20  rounded-md flex flex-col tablet:flex-row gap-2">
              <div style={{width: (selectedMenu === 'caseStudy' && !isLargerThan900) && "100px"}} className={` h-fit tablet:bg-white min-w-[100px] tablet:w-[100px] tablet:h-[70px] rounded-[5px] ${selectedMenu === "caseStudy" && "p-[10px]"} overflow-hidden flex justify-center`}>
                  {item?.icon}
              </div>
              <div>
              <p className="text-[clamp(12px,3vw,14px)]">{item?.desc}</p>
              </div>
            </div>
           </Link>
        ))}
        </div>
        <Link onClick={() => selectedMenu === 'caseStudy' ? viewAllCaseStudiesDataLayerPush() : viewAllBlogsDataLayerPush()} href={selectedMenu === 'caseStudy' ? "/case-studies" : "/blogs"}>
         <div onClick={() => {}} className="flex gap-1 pl-[30px] mt-[5px] mb-[10px] text-black tablet:text-white items-center hover:underline cursor-pointer">
          <p className="font-[500] text-[13px] text-black tablet:text-white">View All {selectedMenu === 'caseStudy' ? 'Case Studies' : "Blogs"}</p>
            <IoIosArrowRoundForward  style={{color: isLargerThan900 ? "white" : "black", fontSize: "25px"}}/>
         </div>
        </Link>
        </div>
      </div>
    </div>
  )
}

const AboutUsMenuData = () => {
  const [selectedMenu, setSelectedMenu] = useState("caseStudy")
  const [isLargerThan900] = useMediaQuery('(max-width: 900px)')

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

  const top_navi_view_all_clients = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      dataLayer.push({
        'event': 'top_navi_view_all_clients'
      });
      }
  };

  const readMoreAboutMediotix = () => {
    
    if (typeof window !== 'undefined' &&  window.dataLayer) {
        window.dataLayer.push({
          'event': 'read_more_about_mediotix'
        });
    };
  }




  return (
    <div className=" w-[100%] tablet:w-[80%] mx-auto relative ">
      <div className="flex flex-col tablet:flex-row gap-6">
        <div className=" tablet:w-[500px] flex flex-col  gap-2  text-start tablet:text-white">
           <p className="font-semibold mb-4">About Mediotix</p>
           <p className="text-[clamp(12px,3vw,14px)]">Mediotix is a leading MarTech agency with a global presence, serving clients worldwide through our large network of offices and strategic relationships. We believe in the power of data. Our team uses advanced analytics techniques to uncover actionable insights that drive successful marketing strategies. Our track record talks for itself.</p>
           <Link href={'/about-us'} onClick={readMoreAboutMediotix}>
             <div className="flex flex-row gap-[5px] items-center mt-[13px] hover:underline">
               <p className="text-[10px] font-[700]  cursor-pointer">Read More About Mediotix</p>
               <IoIosArrowRoundForward className="text-[20px]"/>
             </div>
           </Link>
        </div>
        <div className="tablet:text-white">
        <p className="font-semibold mb-4">About Clients</p>
        <div className=" w-full grid grid-cols-2 tablet:grid-cols-4 gap-3">
          <div className="bg-white w-[100px] h-[60px] rounded-[5px] p-[10px] flex justify-center">
            <Image src={pvr} className="object-contain" alt="pvr" />
          </div>
          <div className="bg-white  w-[100px] h-[60px]  rounded-[5px] p-[10px]  flex justify-center">
            <Image src={maxHealth} className="object-contain" alt="maxhealth"  />
          </div>
          <div className="bg-white  w-[100px] h-[60px]  rounded-[5px] p-[10px]  flex justify-center">
            <Image src={gsk} className="object-contain"  alt="gsk" />
          </div>
          <div className="bg-white  w-[100px] h-[60px]  rounded-[5px] p-[10px]  flex justify-center">
            <Image src={heroElectronix} className="object-contain"  alt="heroelectronix" />
          </div>
          <div className="bg-white  w-[100px] h-[60px]  rounded-[5px] p-[10px]  flex justify-center">
            <Image src={finolex} className="object-contain"  alt="finolex" />
          </div>
          <div className="bg-white  w-[100px] h-[60px]  rounded-[5px] flex justify-center">
            <Image src={reliance} className="object-contain"  alt="reliance" />
          </div>
          <div className="bg-white  w-[100px] h-[60px]  rounded-[5px] flex justify-center">
            <Image src={spinny} className="object-contain"  alt="spinny" />
          </div>
          <div className="bg-white  w-[100px] h-[60px]  rounded-[5px] p-[10px]  flex justify-center">
            <Image src={watcho} className="object-contain"  alt="watcho" />
          </div>
 
        </div>
        <Link href={"/case-studies"}>
        <div onClick={() => top_navi_view_all_clients()} className="flex gap-1 items-center mt-4 hover:underline cursor-pointer">
          <p className="text-[10px] font-[700] ">View All Clients</p>
          <IoIosArrowRoundForward />
        </div>
        </Link>
        </div>

      </div>

    </div>
  )
}
