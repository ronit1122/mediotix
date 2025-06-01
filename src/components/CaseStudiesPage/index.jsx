'use client'
import React, {useState} from "react";
import { Flex, SimpleGrid, Text, useMediaQuery, Box, IconButton, Button} from "@chakra-ui/react";
import CardComp from '../CaseStudiesCard/index.jsx';
import {cases} from './../../utils/caseStudiesData.js';
import Navbar from '../Navbar/index.jsx';
import Footer from '../Footer/index.jsx';
import {v4 as uuidv4} from 'uuid';


export default function Index() {
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [selectedPage, setSelectedPage ] = useState(0)


  const paginationList = [
    {
      name: 1,
      value: 0
    },
    {
      name: 2,
      value: 9
    },
  ]

    
  const readMoreCaseStudiesDataLayerPush = (caseStudyName) => {
    
    if (typeof window !== 'undefined' &&  window.dataLayer) {
        window.dataLayer.push({
          'event': 'case_studies_read_more',
          'case_studies': caseStudyName,
        });
    };
  }

  return (
    <>
    <Box
      className="font-poppins"
      fontSize={["clamp(13px, 1.5vw, 15px)"]}
      fontWeight="500"
      color="#263238"

    >
      <Navbar />
      <Flex
        id="content"
        flexDir="column"
        w={isLargerThan900 ? "80%" : "90%"}
        mx="auto"
        pb="5rem"
        style={{paddingTop: "70px"}} 
      >
        <Flex position='relative' py="100px" flexDir="column" textAlign="center">
        <div style={{zIndex: "0"}} className="hidden tablet:block absolute top-[20%] left-[-20%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div>
          <Text
            fontSize={["clamp(25px, 3vw, 48px)"]}
            fontWeight="900"
            color="#263238"
            as="h1"
          >
            Case Studies
          </Text>
          <Text>
             Here’s a glimpse into the potential outcomes we have carefully curated for our cherished clients. Your brand <br /> can be the next success story to be highlighted on this wall because we believe the best is yet to come.
          </Text>
        </Flex>
        <Flex position='relative' >
      <div style={{zIndex: "-1"}} className="hidden tablet:block absolute top-[10%] right-[-10%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div>
      <div style={{zIndex: "-1"}} className="hidden tablet:block absolute bottom-[0%] right-[-10%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div>

          <SimpleGrid
            mx="auto"
            columns={isLargerThan900 ? 3 : isLargerThan600 ? 2 : 1}
            spacing={40}
          >
            {cases?.slice(selectedPage, selectedPage + 9)?.map((item) => (
              <React.Fragment key={uuidv4()}>
                  <CardComp item={item} readOtherCaseStudiesDataLayerPush={readMoreCaseStudiesDataLayerPush} />
              </React.Fragment>
            ))}
          </SimpleGrid>
        </Flex>

        <Flex  h="50px" mt="40px" justifyContent="center" alignItems="center">
            {paginationList?.map((item, index) => (
               <Button w="35px" h="35px" borderRadius="50px" color={selectedPage === item?.value ? "white" : "black"} bg={selectedPage === item?.value ? "#FF7D78" : "transparent"} onClick={() => setSelectedPage(item?.value)} >{item?.name}</Button>
            ))}
        </Flex>
      </Flex>
      <Footer />
    </Box>
    </>
  );
}
