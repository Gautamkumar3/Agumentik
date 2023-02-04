import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const Home = () => {
  return (
    <Flex w={"90%"} m="auto" align={"center"} gap="5%">
      <VStack spacing={4}>
        <Box color={"white"}>
          <a href="">
            {" "}
            <BsFacebook size={"22px"} />
          </a>
        </Box>
        <Box color={"white"}>
          <a href="">
            {" "}
            <AiFillInstagram size={"25px"} />
          </a>
        </Box>
        <Box color={"white"}>
          <a href="">
            {" "}
            <AiFillTwitterCircle size={"25px"} />
          </a>
        </Box>
        <Box color={"white"}>
          <a href="">
            <AiFillLinkedin size={"25px"} />
          </a>
        </Box>
      </VStack>
      <SimpleGrid columns={2} w="80%" m={"auto"} spacing={10}>
        <Flex w={"80%"} color="#fff" align={"center"}>
          <Box>
            <Heading my={5}>Create Your World with Modely</Heading>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              libero soluta sed velit non officiis fuga tempore corrupti totam
              eaque.
            </Text>
          </Box>
        </Flex>
        <Flex justify={"center"}>
          <Image
            maxH={"400px"}
            src="https://media.istockphoto.com/photos/view-of-earth-from-outer-space-with-north-america-visible-picture-id172923218?b=1&k=20&m=172923218&s=612x612&w=0&h=7lPrhiKVFRz7nw0ZKoV8hDv95VOLqyaX-yKO8fQcqL4="
          />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};

export default Home;
