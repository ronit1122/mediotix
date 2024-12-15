"use client";
import React from "react";
import { Flex, SimpleGrid, Text, useMediaQuery, Box,   
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList, } from "@chakra-ui/react";
import CardComp from "../CaseStudiesCard/index.jsx";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "next/navigation";
import Footer from "../Footer/index.jsx";
import Navbar from "../Navbar/index.jsx";
import Image from "next/image"
import DownloadForm from '../DownloadCaseStudyForm/index.jsx';
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { cases } from './../../utils/caseStudiesData.js';

export default function Index({clientName}) {
  const decodedClientName = decodeURIComponent(clientName);
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
  const caseStudyData = cases?.filter((item) => item?.route === decodedClientName)?.[0];

  const openPopup = (url) => {
    const width = 600;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
  
    window.open(
      url,
      "_blank",
      `width=${width},height=${height},top=${top},left=${left},toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes`
    );
  };

  
  const shareCaseStudiesDataLayerPush = (socialMedia) => {
    
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          'event': 'share_case_study_on',
          'social_media': socialMedia,
        });   
    };
  }
  
  const readOtherCaseStudiesDataLayerPush = (caseStudyName) => {
    
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          'event': 'other_case_studies_read_more',
          'case_studies': caseStudyName
        });  
    };
  }

  const shareOnInstagram = () => {
    shareCaseStudiesDataLayerPush("instagram");
    const url = "https://www.instagram.com/";
    window.open(url, "_blank");
  };

  const shareOnLinkedIn = () => {
    shareCaseStudiesDataLayerPush("linkedin");
    const url = encodeURIComponent("https://mediotix.com"); // Replace with the page URL
    openPopup(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
  };
  
  const shareOnFacebookMessenger = () => {
    shareCaseStudiesDataLayerPush("facebook");
    const url = encodeURIComponent("https://mediotix.com"); // Replace with the page URL
    openPopup(`https://www.facebook.com/dialog/send?link=${url}&app_id=YOUR_APP_ID&redirect_uri=${url}`);
  };
  
  
  return (
   
      <Box
        className="font-nexa"
        fontSize={["clamp(13px, 1.5vw, 15px)"]}
        fontWeight="500"
        color="#263238"
      >
        <Navbar />
        <Flex
          id="content"
          flexDir="column"
          mx="auto"
           paddingTop="70px"
         
        >
          <Flex w='100%' minH="400px" maxH="450px" position="relative" justifyContent="center" bg='white' color='white'>
            <Flex style={{ backgroundImage: 'linear-gradient(to right, #F06D5A 54%, rgba(255, 125, 120, 0) 100%)', minHeight:"100%", minWidth:"100%", position: "absolute"}} ></Flex>
            <Image src={caseStudyData?.img} style={{ objectFit: "cover", marginLeft: "auto"}} />
            <Flex w={isLargerThan900 ? "80%" : "95%"} mx='auto' h="100%" position='absolute' zIndex={10}>
            <Flex  w={isLargerThan900 ? "50%" : "95%"}  justifyContent="center"  gap="18px" flexDir='column'>
              <Image src={caseStudyData?.logo} />
              <h1 style={{fontSize: "clamp(20px, 3vw, 35px)", fontWeight: 900}}>About {caseStudyData?.name}</h1>
              <Text fontSize={["clamp(14px, 3vw, 18px)"]} fontWeight="400">{caseStudyData?.desc}</Text>
            </Flex>
            </Flex>
          </Flex>

          <Flex w={isLargerThan900 ? "80%" : "95%"} my={isLargerThan900 ? "80px" : "40px"} mx='auto' position='relative'>
            <div style={{zIndex: "-1"}} className="hidden tablet:block absolute top-[-50%] right-[-30%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div>
            <SimpleGrid columns={isLargerThan500 ? 3 : 1} spacing={isLargerThan500 ? 30 : 10} className="w-full">
             {caseStudyData?.outcomes?.map((item, index) => (
              <Flex key={index} zIndex="5" bg="white" className="rounded-[10px] px-[10px] border-[4px] h-[150px] tablet:min-h-[240px] border-[#FF7D78] flex flex-col items-center justify-center gap-[20]">
                <Text
                  fontSize={["clamp(30px, 4vw, 64px)"]} 
                  className=" font-[900] bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(to bottom, #FF7D78, #FF9363)"}}
                >
                 {item.value}
                </Text>
                <Text fontSize={["clamp(13px, 2vw, 24px)"]} textAlign='center' className='font-[400]'>{item.desc}</Text>
              </Flex>
             ))}
            </SimpleGrid>
          </Flex>

          <Flex  w={isLargerThan900 ? "80%" : "95%"} flexDir={isLargerThan700 ? "row" : "column"} mx='auto' gap="20px" position='relative'>
            <Flex flexDir='column' w={isLargerThan700 ? "60%" : "100%"}>
            <Text fontSize={["clamp(20px, 3vw, 32px)"]} fontWeight="900">Challenges</Text>
            <UnorderedList my="24px">
              {caseStudyData?.challenges?.map((item, index) => (
                <ListItem key={index} fontSize={["clamp(13px, 3vw, 18px) !important"]} >{item}</ListItem>
              ))}
            </UnorderedList>
            <Text fontSize={["clamp(20px, 3vw, 32px)"]} fontWeight="900">Approach</Text>
            <UnorderedList my="24px">
            {caseStudyData?.approach?.map((item, index) => (
                <ListItem key={index} fontSize={["clamp(13px, 3vw, 18px) !important"]} >{item}</ListItem>
              ))}
            </UnorderedList>
            </Flex>
            <Flex w={isLargerThan700 ? "40%" : "100%"} flexDir='column'>
               <DownloadForm clientName={clientName} />
               <Text fontSize="18px" fontWeight="900">Share Case Study on</Text>
               <div className="flex gap-5 mt-[20px]">
               <Flex
                  cursor='pointer'
                  justifyContent="center"
                  alignItems="center"
                  style={{background: "linear-gradient(180deg, #FF9363 0%, #FF7D78 100%) ", borderRadius: "50px", height: "35px", width: "35px"}}
                  onClick={() => shareOnFacebookMessenger()}
                  aria-label="facebook"
                >
                  <FaFacebookF className="text-white text-xl" />
                </Flex>

                <Flex
                  cursor='pointer'
                  justifyContent="center"
                  alignItems="center"
                  style={{background: "linear-gradient(180deg, #FF9363 0%, #FF7D78 100%) ", borderRadius: "50px", height: "35px", width: "35px"}}
                  onClick={() => shareOnLinkedIn()}
                  aria-label="linkedin"
                >
                  <FaLinkedin className="text-white text-xl" />
                </Flex>

                <Flex
                  cursor='pointer'
                  justifyContent="center"
                  alignItems="center"
                  style={{background: "linear-gradient(180deg, #FF9363 0%, #FF7D78 100%) ", borderRadius: "50px", height: "35px", width: "35px"}}
                  onClick={() => {shareOnInstagram()}}
                  
                  aria-label="instagram"
                >
                  <FaInstagram className="text-white text-xl" />
                </Flex>
               
            
              </div>
            </Flex>
            <div style={{zIndex: "-1"}} className="hidden tablet:block absolute top-[30%] right-[-30%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div>
          </Flex>

          <Flex bg="#EAF6FFCC" mt="80px" pb={"50px" }>
            <Flex w={isLargerThan900 ? "80%" : "95%"} flexDir='column' minH="75vh" mx='auto' alignItems="center" >
              <Text fontSize={["clamp(20px, 3vw, 32px)"]} my="35px" alignSelf='start' fontWeight="900">Other Case Studies</Text>
            <SimpleGrid
            mx="auto"
            columns={isLargerThan900 ? 3 : isLargerThan600 ? 2 : 1}
            spacing={40}
          >
            {cases?.slice(0,3)?.map((item) => (
              <React.Fragment key={uuidv4()}>
                <CardComp item={item} readOtherCaseStudiesDataLayerPush={readOtherCaseStudiesDataLayerPush}  />
              </React.Fragment>
            ))}
            </SimpleGrid>
            </Flex>
          </Flex>
        </Flex>
        <Footer />
      </Box>
  
  );
}
