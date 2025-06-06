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

export default function CardComp({ item, blogsReadMoreClickDataLayerPush}) {
  const {
    name,
    desc,
    tagline,
    img,
    views,
    imgAlt,
    dateCreated,
    logo,
    url,
  } = item;
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");



  return (
  <Link style={{zIndex: "5"}}  href={`/blogs/${url}`} >
    <Flex
    h="100%"
    onClick={() => blogsReadMoreClickDataLayerPush && blogsReadMoreClickDataLayerPush(name)}
      classname="font-poppins"
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
          <Image   style={{objectFit: "cover"}} src={img} loading='lazy' alt={imgAlt}/>
        </Flex>
        <Stack mt="6" spacing="3" p='20px'>
          <Flex mb="13px">
            <Text mr="8px">{dateCreated}</Text> | <Text ml="8px">{views} views</Text>
          </Flex>
          <Heading size="md" fontWeight="700">{name}</Heading>
          <Text>{desc}</Text>
        </Stack>
      </Flex>
      <Flex p="20px">
      <button style={{fontSize:"15px"}} className="naviteButton">
        Read More
      </button>
      </Flex>
    </Flex>
  </Link>
  );
}
