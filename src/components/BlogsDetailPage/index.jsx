"use client";
import React from "react";
import { Flex, SimpleGrid, Text, useMediaQuery, Box,   
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList, } from "@chakra-ui/react";
import CardComp from "../BlogsCard/index.jsx";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "next/navigation";
import Footer from "../Footer/index.jsx";
import Navbar from "../Navbar/index.jsx";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import {blogs} from './../../utils/blogsData.js';


export default function Index({blog}) {
  const decodedBlogName = decodeURIComponent(blog);
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  const blogData = blogs?.filter((item) => item?.url === decodedBlogName)?.[0];

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

  const shareBlogsDataLayerPush = (socialMedia) => {
    
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          'event': 'share_blogs_on',
          'social_media': socialMedia
        });   
    };
  }
  
  
  const shareOnInstagram = () => {
    shareBlogsDataLayerPush("instagram");
    const url = "https://www.instagram.com/";
    window.open(url, "_blank");
  };

  const shareOnLinkedIn = () => {
    shareBlogsDataLayerPush("linkedin");
    const url = encodeURIComponent("https://mediotix.com"); // Replace with the page URL
    openPopup(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
  };
  
  const shareOnFacebookMessenger = () => {
    shareBlogsDataLayerPush('facebook')
    const url = encodeURIComponent("https://mediotix.com"); // Replace with the page URL
    openPopup(`https://www.facebook.com/dialog/send?link=${url}&app_id=YOUR_APP_ID&redirect_uri=${url}`);
  };

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
      >
        <Navbar />
        <Flex
          id="content"
          flexDir="column"
          mx="auto"
           paddingTop="70px"
        >
          <Flex w='100%' minH="400px" maxH="450px" position="relative" justifyContent="center" bg='white' color='white'>
            <Flex style={{ backgroundImage: 'linear-gradient(to right, #F06D5A 45%, #ffc3b7 100%)', minHeight:"100%", minWidth:"100%", position: "absolute"}} ></Flex>
         
            <Flex w={isLargerThan900 ? "80%" : "95%"} mx='auto' h="100%" position='absolute' zIndex={10}>
            <Flex  w={isLargerThan900 ? "50%" : "95%"} width="100%" justifyContent="center" gap="18px" flexDir='column'>
              <Text as="h1" fontSize={["clamp(20px, 3vw, 35px)"]} fontWeight="900">{blogData?.name}</Text>
              <Flex justifyContent="space-between" w="70%">
                <Text fontSize={["clamp(14px, 3vw, 18px)"]} fontWeight="400">Last Updated: {blogData?.dateCreated}</Text>
                <Text fontSize={["clamp(14px, 3vw, 18px)"]} fontWeight="400">Views: {blogData?.views}</Text>
                <Text fontSize={["clamp(14px, 3vw, 18px)"]} fontWeight="400">Category: {blogData?.category}</Text>
              </Flex>
              <Flex  mt="10px" alignItems="center" gap="30px" >
                <Text fontSize={["clamp(14px, 3vw, 18px)"]} fontWeight="900">Share Blogs on</Text>
                <Flex gap="20px">
               <Flex
                  cursor='pointer'
                  justifyContent="center"
                  alignItems="center"
                  style={{ borderRadius: "50px", height: "35px", width: "35px"}}
                  onClick={() => shareOnFacebookMessenger()}
                  aria-label="facebook"
                >
                  <FaFacebookF className="text-white"  style={{fontSize: "17px"}}  />
                </Flex>

                <Flex
                  cursor='pointer'
                  justifyContent="center"
                  alignItems="center"
                  style={{ borderRadius: "50px", height: "35px", width: "35px"}}
                  onClick={() => shareOnLinkedIn()}
                  aria-label="linkedin"
                >
                  <FaLinkedin className="text-white "  style={{fontSize: "20px"}} />
                </Flex>

                <Flex
                  cursor='pointer'
                  justifyContent="center"
                  alignItems="center"
                  style={{ borderRadius: "50px", height: "35px", width: "35px"}}
                  onClick={() => {shareOnInstagram()}}
                  
                  aria-label="instagram"
                >
                  <FaInstagram className="text-white" style={{fontSize: "20px"}} />
                </Flex>
               
            
              </Flex>
              </Flex>
            </Flex>
            </Flex>
          </Flex>
          <Flex py="80px" w={isLargerThan900 ? "80%" : "95%"} mx='auto' gap="20px" justifyContent='space-between' position='relative'>
            <Flex flexDir='column' w="65%" pr="20px" maxH="90vh" overflowY='scroll'>
            {blogData?.htmlString ? (
    <Flex dangerouslySetInnerHTML={{ __html: blogData.htmlString }} />
  ) : (
    <p>Content is unavailable.</p>
  )}
            </Flex>
            <Flex w="30%" flexDir='column'>
              <div>
               {/* <label for="name" class="block mb-2 text-sm font-medium tablet:text-white ">Full name</label> */}
               <input type="text" id="name" class="bg-white border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Search" />
              </div>
              <Text fontSize="18px" mt="22px" fontWeight="900">Categories</Text>
              <UnorderedList>
      <ListItem>Data analytics</ListItem>
      <ListItem>Artificial intelligence</ListItem>
      <ListItem>Trends</ListItem>
      <ListItem>Google analytics4</ListItem>
      <ListItem>Marketing</ListItem>
    </UnorderedList>

    <Text fontSize="18px" mt="22px" fontWeight="900">Popular Tags</Text>
               <Flex flexWrap="wrap" gap="8px" mt="5px">
                {blogData?.tags?.map((item, index) => (
                 <Flex key={index} px="30px" h="38px" borderRadius="10px" border="1px solid #bfbfbf" w="fit-content" justifyContent="center" alignItems="center">{item}</Flex>
                ))}
               </Flex>
               <Text fontSize="18px" fontWeight="900"  mt="30px">Share Blogs on</Text>
               <Flex className="flex gap-5 mt-[20px]">
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
               
            
              </Flex>
            </Flex>
            <div style={{zIndex: "-1"}} className="hidden tablet:block absolute top-[30%] right-[-30%]  w-80 h-80 bg-[#ffd2c9] rounded-full mix-blend-normal filter blur-[5rem]"></div>
          </Flex>
          <Flex bg="#EAF6FFCC" mt="80px">
            <Flex w={isLargerThan900 ? "80%" : "95%"} flexDir='column' minH="75vh" pb="50px" mx='auto' alignItems="center" >
              <Text fontSize={["clamp(20px, 3vw, 32px)"]} my="35px" alignSelf='start' fontWeight="900">Other Blogs</Text>
            <SimpleGrid
            mx="auto"
            columns={isLargerThan900 ? 3 : isLargerThan600 ? 2 : 1}
            spacing={40}
          >
            {blogs?.slice(0,3)?.map((item) => (
              <React.Fragment key={uuidv4()}>
                <CardComp item={item}  blogsReadMoreClickDataLayerPush={blogsReadMoreClickDataLayerPush} />
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
