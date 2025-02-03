"use client"
import { Box, Flex, Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, 
  useDisclosure,
  Button,
  Grid,
  SimpleGrid,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Link from 'next/link';

import {gaurav, maanas, deepak, instagram, linkedin, airtel,
  aquaguard,
  asianPaints,
  azentio,
  digbiHealth,
  dominos,
  dulux,
  lumen,
  marutiSuzuki,
  maxHealthcare,
  pvr,
  spinny,
  tataMotors,
  zee5,
  jll,
} from './../../assets/aboutUs/export.js';
import Image from "next/image"
import { FaPlay } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import {watcho} from './../../assets/clients/export.js';
const CardGrid = () => {
  const [images, setImages] = useState([gaurav, deepak, maanas]);
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
  const [hoveredCardId, setHoveredCardId] = useState(null)
  const [selectedCard, setSelectedCard] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const names = [
  {
    name: "Gaurav K Vats", 
    designation: "CMO",
    desc: <Text fontSize="15px" color="#000000" w="90%">Over 14 Years of experience in Performance & Digital Marketing which includes Search Engine Marketing, Facebook Ads & Display Ads. During my tenure, I have spent more than 500 Crores collectively on various Digital Marketing Platforms for my clients. <br/> <b>EX- GroupM & Publicis Group.</b></Text>,
    instagram: "https://www.instagram.com/gk_vats/",
    linkedin: "https://linkedin.com/in/digital-gk/",
    email: "gaurav.k@mediotix.com",
    specialist: "Digital Performance Marketing",
    qualification: "MBA in Sales & Marketing",
    experience: "14",
    brandImage: [
      <Image  alt="aquaguard" src={aquaguard} style={{objectFit: "contain", width: "70%", height: "70%"}} />,
      <Image alt="marutiSuzuki" src={marutiSuzuki} style={{objectFit: "contain", width: "70%", height: "70%"}}  />,
      <Image alt="dominos" src={dominos} style={{objectFit: "contain", width: "60%", height: "60%"}}  />,
      <Image alt="maxHealthacare" src={maxHealthcare} style={{objectFit: "contain", width: "50%", height: "50%"}}  />,
      <Image alt="dulux" src={dulux} style={{objectFit: "contain", width: "50%", height: "50%"}}  />,
    ],
    dataLayer: () => {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          'event': 'founder_profile_view',
          'founder_name': "Gaurav K Vats"
        });
      }
    },
    socialDataLayer: (socialName) => {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
        'event': 'founders_social_media_link_click',
        'founder_name': "Gaurav K Vats",
        'social_media': socialName,
        });
      }
    }
  }, 
  {
    name: "Deepak Arya", 
    designation: "COO",
    desc: <Text fontSize="15px"  color="#000000" w="90%">Delivering data-driven insights that help brands to boost their conversions, sales, and ROI across a wide range of industries, including entertainment, healthcare, lifestyle, business, technology, finance, and e-commerce, to convert data into valuable insights. <br/> <b>EX-GroupM (WPP) & EX Dentsu.</b></Text>,
    instagram: "https://www.instagram.com/apkaarya",
    linkedin: "https://www.linkedin.com/in/deepakkumararya/",
    email: "deepak.arya@mediotix.com",
    specialist: "Digital Analytics",
    qualification: "MBA in Data Analytics",
    experience: "15",
    brandImage: [
      <Image alt="tatamotors" src={tataMotors} style={{objectFit: "contain", width: "70%", height: "70%"}} />,
      <Image alt="asian paints" src={asianPaints} style={{objectFit: "contain", width: "70%", height: "70%"}}  />,
      <Image alt="zee5" src={zee5} style={{objectFit: "contain", width: "60%", height: "60%"}}  />,
      <Image alt="airtel" src={airtel} style={{objectFit: "contain", width: "50%", height: "50%"}}  />,
      <Image alt="azentio" src={azentio} style={{objectFit: "contain", width: "50%", height: "50%"}}  />,
    ],
    dataLayer: () => {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          'event': 'founder_profile_view',
          'founder_name': "Deepak Arya"
        });
      }
    },
    socialDataLayer: (socialName) => {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
        'event': 'founders_social_media_link_click',
        'founder_name': "Deepak Arya",
        'social_media': socialName,
        });
      }
    }
  },
  {
    name: "Maanash Saamal", 
    designation: "CEO",
    desc: <Text>Specialized in data analytics, product design, development, and marketing. Expert in turning data into actionable insights and crafting innovative solutions to drive growth. Skilled at combining technical expertise with strategic thinking for impactful products and marketing strategies.<br/> <b>EX- Microsoft.</b></Text>,
    linkedin: "https://www.linkedin.com/in/maanash/",
    email: "maanash.saamal@mediotix.com",
    specialist: "Data Science",
    qualification: "Doctorate in Data Science",
    experience: "12",
    brandImage: [
      <Image alt="spinny" src={spinny} style={{objectFit: "contain", width: "60%", height: "60%"}} />,
      <Image alt="digbihealth" src={digbiHealth} style={{objectFit: "contain", width: "70%", height: "70%"}} />,
      <Image alt="jll" src={jll} style={{objectFit: "contain", width: "60%", height: "40%", marginBottom: "20px", marginTop: "20px"}}  />,
      <Image alt="lumen" src={lumen} style={{objectFit: "contain", width: "50%", height: "50%"}}  />,
      <Image alt="watcho" src={watcho} style={{objectFit: "contain", width: "50%", height: "50%"}}  />,
    ],
    dataLayer: () => {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          'event': 'founder_profile_view',
          'founder_name': "Maanash Saamal"
        });
      }
    },
    socialDataLayer: (socialName) => {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
        'event': 'founders_social_media_link_click',
        'founder_name': "Maanash Saamal",
        'social_media': socialName,
        });
      }
    }
  }
  ]
  

  return (
    <Flex
      bg="white"
      width="100%"
      align="center"
      justify="center"
       className="font-nexa"
    >
      <Flex
        wrap="wrap"
        align="center"
        justify="center"
        w="100%"
        maxW="1200px"
        gap="20px"
        flexDir={isLargerThan900 ? "row" : "column" }
      >
        {images.map((src, index) => (
        <Box
         onClick={() => {onOpen(); setSelectedCard(index); names?.[index]?.dataLayer() }}
         key={index}
         flex="1 1 calc(20% - 10px)"
         h="400px"
         bg="white"
         backdropFilter="blur(4px)"
         boxShadow="md"
         borderRadius="10px"
         cursor="pointer"
         display="flex"
         alignItems="center"
         justifyContent="center"
         overflow="hidden"
         transition="0.3s all ease"
         onMouseEnter={() => setHoveredCardId(index)}
         onMouseLeave={() => setHoveredCardId(null)}
         _hover={{ flex: "2 1 calc(44% - 10px)"}}
         position="relative"
        >
            <Image
              src={src}
              alt={`Random ${index}`}
              style={{width: "100%", height: "100%", objectFit: "cover"}}
            />

{isLargerThan900 && <Flex
  transition="transform 0.3s ease, background 0.3s ease-in"
  style={{
    transform: `${hoveredCardId === index ? "translateX(-100px)" : "translateX(0px)"} rotate(-90deg)`,
    background: 'linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 80%)'
  }}
  borderRadius="24px"
  h="55px"
  w="250px"
  alignItems="center"
  px="20px"
  left="-70px"
  bottom="27%"
  position="absolute"
>
  <Text whiteSpace="nowrap" fontSize="25px" color='#FFFFFF'>{names?.[index]?.name}</Text>
</Flex>}

<Flex
  transition="transform 0.3s ease, background 0.3s ease-in"
  style={{
    transform: isLargerThan900 && `${hoveredCardId === index ? "translateX(0px)" : "translateX(500px)"} rotate(0deg)`,
    background: 'linear-gradient(180deg, rgba(33, 33, 33, 0.9) 0%, rgba(33, 33, 33, 0.9) 100%)'
  }}
  borderRadius="20px"
  h="55px"
  w="90%"
  flexDir="row"
  alignItems="center"
  justifyContent="space-between"
  pl="20px"
  left="20px"
  bottom="20px"
  position="absolute"
  overflow="hidden"
>
  <Flex flexDir="column" alignItems="start">
  <Text className="text-[clamp(14px,3vw,25px)]" whiteSpace="nowrap" lineHeight="1" color='#FFFFFF'>{names?.[index]?.name}</Text>
  <Text whiteSpace="nowrap"  className="text-[clamp(10px,3vw,13px)]" color='#FFFFFF'>{names?.[index]?.designation}</Text>
  </Flex>
  <Flex onClick={() => {onOpen(); setSelectedCard(index); names?.[index]?.dataLayer() }} h="100%" w="60px" alignItems="center" justifyContent="center" style={{background: 'linear-gradient(180deg, #FF7D78 0%, #FF9363 100%)'}}>
      <FaPlay color="white" />
  </Flex>
</Flex>

          </Box>
        ))}


     <Modal w="fit-content" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW="fit-content" >
          <ModalBody  className="font-nexa" p="0" minW="100%" maxW="70vw">
          <Flex
      direction="column"
  
      p={isLargerThan900 ? "40px" : "30px"}
      pb="5px"
      borderRadius="md"
      boxShadow="lg"
      bg="white"
      w="100%"
      mx="auto"
      position="relative"
    >
      {/* Content */}
      <Flex  mt={!isLargerThan900 && "20px"} gap={isLargerThan900 ? "70px" : "20px"} flexDir={isLargerThan900 ? "row" : "column" }>
        {/* Left Section */}
        <Box w="100%" maxW="400px" maxH="380px" borderRadius="10px" overflow="hidden"> 
           <Image  alt={images?.[selectedCard]} src={images?.[selectedCard]} style={{objectFit: "cover", width: "100%", height: "100%"}} />
        </Box>

        {/* Right Section */}
        <Flex
          direction="column"
          gap="5px"
          flex="2"
           
          color="#000000"
        >
          <Flex >
          <Text  fontSize="clamp(24px,3vw,48px)" fontWeight="900">
            {names?.[selectedCard]?.name}
          </Text>
          <ModalCloseButton />
          </Flex>
        
            {names?.[selectedCard]?.desc}
       

          {/* Social Icons */}
          <Flex gap={4} mt="20px">
            <Link href={names?.[selectedCard]?.linkedin}>
            <Flex onClick={() => names?.[selectedCard]?.socialDataLayer("linkedin")} cursor="pointer" alignItems="center" justify="center"  h="40px" w="40px" bg="white" borderRadius="full" style={{boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset"}}>
              <Image  alt="linkedin" style={{width: "25px", height: "25px"}} src={linkedin} />
            </Flex>
            </Link>
            {names?.[selectedCard]?.instagram && <Link href={names?.[selectedCard]?.instagram ?? ""}>
            <Flex onClick={() => names?.[selectedCard]?.socialDataLayer("instagram")} cursor="pointer" alignItems="center" justify="center"  h="40px" w="40px" bg="white" borderRadius="full" style={{boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset"}}>
              <Image alt="instagram" style={{width: "30px", height: "30px"}} src={instagram} />
            </Flex>
            </Link>}
          </Flex>

          {/* Info Grid */}
          <Grid
            templateColumns="repeat(2, 1fr)"
            mt="20px"
            gap="15px"
            border="1px solid #000000"
            p="15px"
            borderRadius="md"
            fontSize="13px"
          >
            <Flex gap="15px" borderRight="1px solid #000000" flexDir="column">
            <Box>
              <Text fontSize="14px" >Specialist</Text>
              <Text>{names?.[selectedCard]?.specialist}</Text>
            </Box>
            <Box >
              <Text fontSize="14px" >Email</Text>
              <Text>{names?.[selectedCard]?.email}</Text>
            </Box>
            </Flex>

            <Flex gap="15px" flexDir="column">
            <Box>
              <Text fontSize="14px" >Qualification</Text>
              <Text>{names?.[selectedCard]?.qualification}</Text>
            </Box>
            <Box >
              <Text fontSize="14px">Industry Experience</Text>
              <Text>{names?.[selectedCard]?.experience}</Text>
            </Box>
            </Flex>
          </Grid>
        </Flex>
      </Flex>

      {/* Footer logos */}
      <SimpleGrid spacing={1} columns={isLargerThan900 ? 5 : 2} justify="space-around" mt="20px" align="center">
        {names?.[selectedCard]?.brandImage?.map((item, index) => (
          !(!isLargerThan900 && index === 4) && <Flex alignItems="center" justifyContent="center" borderRadius="md">
              {item}
          </Flex>
        ))}
      </SimpleGrid>
    </Flex>
          </ModalBody>

        </ModalContent>
      </Modal>


      </Flex>
    </Flex>
  );
};

export default CardGrid;
