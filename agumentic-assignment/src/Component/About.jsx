import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaDiceD6 } from "react-icons/fa";
import "../Styles/styles.css";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";

const About = () => {
  return (
    <Box my={"5%"}>
      <Center>
        <Box>
          <Center>
            <Box
              borderRadius={"50%"}
              bg=" rgba(119, 119, 170, 0.633)"
              p={3}
              w="fit-content"
              border={"2px solid blue"}
            >
              {" "}
              <FaDiceD6 color="#fff" size={"20px"} />
            </Box>
          </Center>

          <Heading my={3} color={"#fff"} mb={8}>
            About
          </Heading>
        </Box>
      </Center>
      <SimpleGrid
        columns={2}
        bg="#414a4c"
        w={"80%"}
        m="auto"
        p={5}
        color={"white"}
        borderRadius="10px"
      >
        <Box bg="#414a4c" p={12} textAlign="center">
          <Center bg="#414a4c">
            {" "}
            <Image bg="#414a4c" w={"70px"} src={logo1} mb={4} />
          </Center>
          <Text bg="#414a4c" fontWeight="bold" fontSize={"20px"} my={2}>
            CUSTOM MODELS
          </Text>
          <Text bg="#414a4c">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            aliquam, distinctio iste tenetur doloribus non maxime! Eius quidem
            expedita adipisci.
          </Text>
          <Button colorScheme={"blue"} my={4}>
            Get a Quote
          </Button>
        </Box>
        <Box bg="#414a4c" p={12} textAlign="center" borderLeft={"3px solid"}>
          <Center bg="#414a4c">
            {" "}
            <Image bg="#414a4c" w={"70px"} src={logo2} mb={4} />
          </Center>
          <Text bg="#414a4c" fontWeight="bold" fontSize={"20px"} my={2}>
            READY TO USE ASSETS{" "}
          </Text>
          <Text bg="#414a4c">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            aliquam, distinctio iste tenetur doloribus non maxime! Eius quidem
            expedita adipisci.
          </Text>
          <Button colorScheme={"whatsapp"} my={4}>
            Visit Store
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default About;
