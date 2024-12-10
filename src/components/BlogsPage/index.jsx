'use client'
import React from "react";
import { Flex, SimpleGrid, Text, useMediaQuery, Box } from "@chakra-ui/react";
import CardComp from '../BlogsCard/index.jsx';
import Navbar from '../Navbar/index.jsx';
import Footer from '../Footer/index.jsx';
import {v4 as uuidv4} from 'uuid';
import {blogs} from './../../utils/blogsData.js';



export default function Index() {
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  const blogsReadMoreClickDataLayerPush = (blog) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        'event': 'other_blogs_read_more',
        'blogs': blog
      });  
  };
  }

  return (
    <Box
      className="font-nexa"
      fontSize={["clamp(13px, 1.5vw, 15px)"]}
      fontWeight="500"
      color="#263238"
      bg='white'

    >
      <Navbar />
      <Flex
        id="content"
        flexDir="column"
        w={isLargerThan900 ? "80%" : "95%"}
        mx="auto"
        pb="5rem"
        style={{paddingTop: "70px"}} 
      >
        <Flex position='relative' py="4rem" flexDir="column" textAlign="center">
        <div style={{zIndex: "0"}} className="hidden tablet:block absolute top-[20%] left-[-20%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div>
          <Text
            fontSize={["clamp(25px, 3vw, 48px)"]}
            fontWeight="900"
            color="#263238"
            as="h1"
          >
            Blogs
          </Text>
          <Text>
          Transform your data into actionable insights. Unlock growth and drive <br /> smarter decisions with powerful analytics solutions today!
          </Text>
        </Flex>
        <Flex position='relative' >
      <div style={{zIndex: "0"}} className="hidden tablet:block absolute top-[10%] right-[-10%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div>
      <div style={{zIndex: "0"}} className="hidden tablet:block absolute bottom-[0%] right-[-10%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div>

          <SimpleGrid
            mx="auto"
            columns={isLargerThan900 ? 3 : isLargerThan600 ? 2 : 1}
            spacing={40}
          >
            {blogs?.map((item) => (
              <React.Fragment key={uuidv4()}>
                <CardComp item={item} blogsReadMoreClickDataLayerPush={blogsReadMoreClickDataLayerPush} />
              </React.Fragment>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}
