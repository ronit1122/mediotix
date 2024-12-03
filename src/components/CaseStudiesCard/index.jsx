"use client"
import React from "react";
import {
  Flex,
  Text,
  Button,
  Heading,
  Stack,
  useMediaQuery,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import {v4 as uuidv4} from 'uuid';
import Link from "next/link"
import Image from "next/image"

export default function CardComp({ item }) {
  const {
    name,
    desc,
    tagline,
    img,
    imgAlt,
    logoAlt,
    challenges,
    approach,
    outcomes,
    logo,
    solution,
    vertical,
    primeTg,
    route,
    readOtherCaseStudiesDataLayerPush,
  } = item;
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
  <Link onClick={() => readOtherCaseStudiesDataLayerPush && readOtherCaseStudiesDataLayerPush()} href={`/case-studies/${route}`} >
    <Flex
    h="100%"
      classname="font-nexa"
      fontSize={["clamp(12px, 1.5vw, 15px)"]}
      color="#000000"
      borderRadius="12px"
      border="1px solid #000000CC"
      overflow='hidden'
      flexDir="column"
      justify="space-between"
      w="100%"
      bg="white"
    >
      <Flex flexDir="column" >
        <Flex h="180px" cursor='pointer' position='relative'>
          <Image  objectFit="cover" src={img} loading='lazy' alt={imgAlt}/>
          <Image src={logo} style={{position: "absolute", objectFit: "contain", bottom: "10px", right: "10px"}} />
        </Flex>
        <Stack mt="6" spacing="3" p='20px'>
          <Text fontSize="18px" fontWeight="900">{name}</Text>
           {tagline}
        </Stack>
      </Flex>
      <Flex p="20px">
      <button onClick={() => readOtherCaseStudiesDataLayerPush &&  readOtherCaseStudiesDataLayerPush()} style={{fontSize:"15px"}} className="naviteButton">
        Read More
      </button>
      </Flex>
    </Flex>
  </Link>
  );
}
