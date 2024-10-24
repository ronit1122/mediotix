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
  } = item;
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");




  return (
  <Link href={`/case-studies/${name}`}>
    <Flex
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
        <Flex h="180px" cursor='pointer'>
          <Image borderRadius="20px" objectFit="cover" src={img} loading='lazy' alt={imgAlt}/>
        </Flex>
        <Stack mt="6" spacing="3" p='20px'>
          <Heading size="md" fontWeight="900">{name}</Heading>
          <Text>{tagline}</Text>
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
