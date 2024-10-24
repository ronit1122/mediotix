'use client'
import React from "react";
import { Flex, SimpleGrid, Text, useMediaQuery, Box } from "@chakra-ui/react";
import CardComp from './../../components/CaseStudiesCard/index.jsx';
import {cases} from './../../components/CaseStudiesData/index.jsx';
import Navbar from './../../components/Navbar/index.jsx';
import Footer from './../../components/Footer/index.jsx';
import {v4 as uuidv4} from 'uuid';



export default function Index() {
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

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
        w={isLargerThan900 ? "80%" : "95%"}
        mx="auto"
        pb="5rem"
      >
        <Flex py="4rem" flexDir="column" textAlign="center">
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
        <Flex>
          <SimpleGrid
            mx="auto"
            columns={isLargerThan900 ? 3 : isLargerThan600 ? 2 : 1}
            spacing={40}
          >
            {cases?.map((item) => (
              <React.Fragment key={uuidv4()}>
                <CardComp item={item} />
              </React.Fragment>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
      <Footer />
    </Box>
    </>
  );
}
