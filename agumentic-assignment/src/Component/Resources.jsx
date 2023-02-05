import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaCreativeCommonsNd } from "react-icons/fa";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";

const Resources = () => {
  return (
    <Box my={"5%"}>
      <Center>
        <Box mb={10}>
          <Center>
            <Box
              borderRadius={"50%"}
              bg=" rgba(119, 119, 170, 0.633)"
              p={3}
              w="fit-content"
              border={"2px solid blue"}
            >
              {" "}
              <FaCreativeCommonsNd color="#fff" size={"20px"} />
            </Box>
          </Center>

          <Heading my={3} color={"#fff"}>
            Resources
          </Heading>
        </Box>
      </Center>
      <SimpleGrid columns={2} spacing={10} w="80%" margin={"auto"}>
        <Box color={"#fff"}>
          <Text fontSize={"20px"}>
            <b>ASSET SHOP FEATURING</b>{" "}
          </Text>
          <SimpleGrid columns={2} spacing={5} py={5}>
            <Box
              textAlign={"center"}
              boxShadow="md"
              p="6"
              rounded="md"
              bg="#333"
            >
              <Center bg="#333">
                {" "}
                <Image bg="#333" w={"25px"} src={logo1} />
              </Center>

              <Text fontSize={"12px"} bg="#333" my={2} color="gray.300">
                Lorem ipsum dolor sit.
              </Text>
              <Text fontWeight={"bold"} bg="#333" my={1}>
                100+
              </Text>
            </Box>
            <Box
              textAlign={"center"}
              boxShadow="md"
              p="6"
              rounded="md"
              bg="#333"
            >
              <Center bg="#333">
                {" "}
                <Image bg="#333" w={"25px"} src={logo2} />
              </Center>

              <Text fontSize={"12px"} bg="#333" my={2} color="gray.300">
                Lorem ipsum .
              </Text>
              <Text fontWeight={"bold"} bg="#333" my={1}>
                12
              </Text>
            </Box>
            <Box
              textAlign={"center"}
              boxShadow="md"
              p="6"
              rounded="md"
              bg="#333"
            >
              <Center bg="#333">
                {" "}
                <Image bg="#333" w={"25px"} src={logo2} />
              </Center>

              <Text fontSize={"12px"} bg="#333" my={2} color="gray.300">
                ipsum dolo.
              </Text>
              <Text fontWeight={"bold"} bg="#333" my={1}>
                3
              </Text>
            </Box>
            <Box
              textAlign={"center"}
              boxShadow="md"
              p="6"
              rounded="md"
              bg="#333"
            >
              <Center bg="#333">
                {" "}
                <Image bg="#333" w={"25px"} src={logo1} />
              </Center>

              <Text fontSize={"12px"} bg="#333" my={2} color="gray.300">
                Lorem dolor sit.
              </Text>
              <Text fontWeight={"bold"} bg="#333" my={1}>
                2500+
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Flex justify={"center"} align="center">
          <Image
            maxH={"300px"}
            maxW="300px"
            borderRadius={"20px"}
            border="4px solid #fff"
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlJTIwaW1hZ2UlMjBpbnNpZGUlMjBoZXhhZ29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          />
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default Resources;
