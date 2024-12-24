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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
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
  zee5
} from './../../assets/aboutUs/export.js';
import Image from "next/image"
import { FaPlay } from "react-icons/fa";


const CardGrid = () => {
  const [images, setImages] = useState([gaurav, deepak, maanas]);
  const [hoveredCardId, setHoveredCardId] = useState(null)
  const [selectedCard, setSelectedCard] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const names = [
  {
    name: "Gaurav K Vats", 
    designation: "CMO",
    desc: "Delivering data-driven insights that help brands to boost their conversions, sales, and ROI across a wide range of industries, including entertainment, healthcare, lifestyle, business, technology, finance, and e-commerce, to convert data into valuable insights. | EX-GroupM (WPP) & EX Dentsu.",
    instagram: "",
    linkedin: "",
    email: "gaurav.k@mediotix.com",
    specialist: "Digital Analytics",
    qualification: "MBA",
    experience: "14",
    brandImage: [
      <Image src={aquaguard} style={{objectFit: "contain", width: "70%", height: "70%"}} />,
      <Image src={marutiSuzuki} style={{objectFit: "contain", width: "70%", height: "70%"}}  />,
      <Image src={dominos} style={{objectFit: "contain", width: "60%", height: "60%"}}  />,
      <Image src={maxHealthcare} style={{objectFit: "contain", width: "50%", height: "50%"}}  />,
      <Image src={dulux} style={{objectFit: "contain", width: "50%", height: "50%"}}  />,
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
    desc: "Over 14 Years of experience in Performance & Digital Marketing which includes Search Engine Marketing, Facebook Ads & Display Ads. During my tenure, I have spent more than 500 Crores collectively on various Digital Marketing Platforms for my clients.",
    instagram: "",
    linkedin: "",
    email: "deepak.arya@mediotix.com",
    specialist: "Digital Performance Marketing",
    qualification: "MBA",
    experience: "14",
    brandImage: [
      <Image src={tataMotors} style={{objectFit: "contain", width: "70%", height: "70%"}} />,
      <Image src={asianPaints} style={{objectFit: "contain", width: "70%", height: "70%"}}  />,
      <Image src={zee5} style={{objectFit: "contain", width: "60%", height: "60%"}}  />,
      <Image src={airtel} style={{objectFit: "contain", width: "50%", height: "50%"}}  />,
      <Image src={azentio} style={{objectFit: "contain", width: "50%", height: "50%"}}  />,
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
    name: "Maansh Sambhal", 
    designation: "COO",
    desc: "Specialized in data analytics, product design, development, and marketing. Expert in turning data into actionable insights and crafting innovative solutions to drive growth. Skilled at combining technical expertise with strategic thinking for impactful products and marketing strategies.",
    instagram: "",
    linkedin: "",
    email: "maanash.saamal@mediotix.com",
    specialist: "Digital Analytics",
    qualification: "MBA",
    experience: "14",
    brandImage: [
      <Image src={spinny} style={{objectFit: "contain", width: "60%", height: "60%"}} />,
      <Image src={digbiHealth} style={{objectFit: "contain", width: "70%", height: "70%"}} />,
      <Image src={pvr} style={{objectFit: "contain", width: "60%", height: "60%"}}  />,
      <Image src={lumen} style={{objectFit: "contain", width: "50%", height: "50%"}}  />,
      <Image src={dulux} style={{objectFit: "contain", width: "50%", height: "50%"}}  />,
    ],
    dataLayer: () => {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          'event': 'founder_profile_view',
          'founder_name': "Maansh Sambhal"
        });
      }
    },
    socialDataLayer: (socialName) => {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
        'event': 'founders_social_media_link_click',
        'founder_name': "Maansh Sambhal",
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
    >
      <Flex
        wrap="wrap"
        align="center"
        justify="center"
        w="100%"
        maxW="1200px"
        gap="20px"
      >
        {images.map((src, index) => (
        <Box
         key={index}
         flex="1 1 calc(20% - 10px)"
         h="400px"
         bg="white"
        //  bg="rgba(255, 255, 255, 0.25)"
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

<Flex
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
</Flex>

<Flex
  transition="transform 0.3s ease, background 0.3s ease-in"
  style={{
    transform: `${hoveredCardId === index ? "translateX(0px)" : "translateX(500px)"} rotate(0deg)`,
    background: 'linear-gradient(180deg, rgba(33, 33, 33, 0.9) 0%, rgba(33, 33, 33, 0.9) 100%)'
  }}
  borderRadius="20px"
  h="55px"
  w="80%"
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
  <Text whiteSpace="nowrap" lineHeight="1" fontSize="25px" color='#FFFFFF'>{names?.[index]?.name}</Text>
  <Text ml="5px" whiteSpace="nowrap" fontSize="13px" color='#FFFFFF'>{names?.[index]?.designation}</Text>
  </Flex>
  <Flex onClick={() => {onOpen(); setSelectedCard(index); names?.[index]?.dataLayer() }} h="100%" w="60px" alignItems="center" justifyContent="center" style={{background: 'linear-gradient(180deg, #FF7D78 0%, #FF9363 100%)'}}>
      <FaPlay color="white" />
  </Flex>
</Flex>

          </Box>
        ))}


     <Modal w="fit-content" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW="fit-content">
          <ModalBody p="0" w="60vw">
          <Flex
      direction="column"
      p={8}
      borderRadius="md"
      boxShadow="lg"
      bg="white"
      w="100%"
      mx="auto"
      position="relative"
    >
      {/* Content */}
      <Flex gap={8}>
        {/* Left Section */}
        <Box w="400px" h="380px">
           <Image src={images?.[selectedCard]} style={{objectFit: "cover", width: "100%", height: "100%"}} />
        </Box>

        {/* Right Section */}
        <Flex
          direction="column"
          gap="5px"
          flex="2"
        >
          <Text fontSize="clamp(25px,3vw,48px)" fontWeight="bold">
            {names?.[selectedCard]?.name}
          </Text>
          <Text fontSize="13px" color="gray.600" w="90%">
            {names?.[selectedCard]?.desc}
          </Text>

          {/* Social Icons */}
          <Flex gap={4} mt="20px">
            <Flex onClick={() => names?.[selectedCard]?.socialDataLayer("linkedin")} cursor="pointer" alignItems="center" justify="center"  h="40px" w="40px" bg="white" borderRadius="full" style={{boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset"}}>
              <Image style={{width: "25px", height: "25px"}} src={linkedin} />
            </Flex>
            <Flex onClick={() => names?.[selectedCard]?.socialDataLayer("instagram")} cursor="pointer" alignItems="center" justify="center"  h="40px" w="40px" bg="white" borderRadius="full" style={{boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset"}}>
              <Image style={{width: "30px", height: "30px"}} src={instagram} />
            </Flex>
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
            <Box>
              <Text fontSize="14px" >Qualification</Text>
              <Text>{names?.[selectedCard]?.qualification}</Text>
            </Box>
            </Flex>
            <Flex gap="15px" flexDir="column">
            <Box >
              <Text fontSize="14px" >Email</Text>
              <Text>{names?.[selectedCard]?.email}</Text>
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
      <SimpleGrid spacing={1} columns={5} justify="space-around" mt="20px" align="center">
        {names?.[selectedCard]?.brandImage?.map((item, index) => (
          <Flex alignItems="center" justifyContent="center" borderRadius="md">
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
