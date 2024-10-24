"use client";
import React from "react";
import { Flex, SimpleGrid, Text, useMediaQuery, Box,   
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList, } from "@chakra-ui/react";
import CardComp from "./../../../components/CaseStudiesCard/index.jsx";
import { cases } from "./../../../components/CaseStudiesData/index.jsx";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "next/navigation";
import Footer from "./../../../components/Footer/index.jsx";
import Navbar from "./../../../components/Navbar/index.jsx";
import Image from "next/image"
import diceBanner from './../../../assets/caseStudiesPage/diceBanner.png';
import DownloadForm from './../../../components/DownloadCaseStudyForm/index.jsx';


export default function Index() {
  const { clientName } = useParams();
  const decodedClientName = decodeURIComponent(clientName);
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  const caseStudyData = cases?.filter((item) => item?.name === decodedClientName)?.[0];
  console.log(caseStudyData, decodedClientName, "caseStudyData");

  return (
    <>
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
        >
          <Flex w='100%' minH="400px" position="relative" justifyContent="center" bg='white' color='white'>
            <Flex style={{ backgroundImage: 'linear-gradient(to right, #F06D5A 55%, rgba(255, 125, 120, 0) 100%)', minHeight:"100%", minWidth:"100%", position: "absolute"}} ></Flex>
            <Image src={diceBanner} style={{width: "100%", height: "100%", objectFit: "cover"}} />
            <Flex w={isLargerThan900 ? "80%" : "95%"} mx='auto' h="100%" position='absolute' zIndex={10}>
            <Flex  w={isLargerThan900 ? "50%" : "95%"}  justifyContent="center"  gap="18px" flexDir='column'>
              <Image src={caseStudyData?.logo} style={{w: "200px"}} />
              <Text fontSize={["clamp(20px, 3vw, 35px)"]} fontWeight="900">About {caseStudyData?.name}</Text>
              <Text fontSize={["clamp(14px, 3vw, 18px)"]} fontWeight="400">About {caseStudyData?.desc}</Text>
            </Flex>
            </Flex>
          </Flex>
          <Flex w={isLargerThan900 ? "80%" : "95%"} my="80px" mx='auto'>
            <SimpleGrid columns={3} spacing={30} className="w-full">
             {caseStudyData?.outcomes?.map((item, index) => (
              <Flex className="rounded-[10px] px-[10px] border-[4px] min-h-[240px] border-[#FF7D78] flex flex-col items-center justify-center gap-[20]">
                <Text
                  className="text-[64px] font-[900] bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(to bottom, #FF7D78, #FF9363)"}}
                >
                 {item.value}
                </Text>
                <Text fontSize={["clamp(18px, 3vw, 24px)"]} className='font-[400]'>{item.desc}</Text>
              </Flex>
             ))}
            </SimpleGrid>
          </Flex>
          <Flex  w={isLargerThan900 ? "80%" : "95%"} mx='auto' gap="20px">
            <Flex flexDir='column' w="60%">
            <Text fontSize={["clamp(20px, 3vw, 32px)"]} fontWeight="900">Challenges</Text>
            <UnorderedList my="24px">
              {caseStudyData?.challenges?.map(item => (
                <ListItem  fontSize={["clamp(13px, 3vw, 18px)"]} >{item}</ListItem>
              ))}
            </UnorderedList>
            <Text fontSize={["clamp(20px, 3vw, 32px)"]} fontWeight="900">Approach</Text>
            <UnorderedList my="24px">
            {caseStudyData?.approach?.map(item => (
                <ListItem  fontSize={["clamp(13px, 3vw, 18px)"]} >{item}</ListItem>
              ))}
            </UnorderedList>
            </Flex>
            <Flex w="40%" flexDir='column'>
               <DownloadForm />
               <Text fontSize="18px" fontWeight="900">Share Case Study on</Text>
            </Flex>
          </Flex>
          <Flex bg="#EAF6FFCC" mt="80px">
            <Flex w={isLargerThan900 ? "80%" : "95%"} flexDir='column' minH="75vh" mx='auto' alignItems="center" >
              <Text fontSize={["clamp(20px, 3vw, 32px)"]} my="35px" alignSelf='start' fontWeight="900">Other Case Studies</Text>
            <SimpleGrid
            mx="auto"
            columns={isLargerThan900 ? 3 : isLargerThan600 ? 2 : 1}
            spacing={40}
          >
            {cases?.slice(0,3)?.map((item) => (
              <React.Fragment key={uuidv4()}>
                <CardComp item={item} />
              </React.Fragment>
            ))}
            </SimpleGrid>
            </Flex>
          </Flex>
        </Flex>
        <Footer />
      </Box>
    </>
  );
}
