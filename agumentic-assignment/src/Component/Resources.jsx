import { Box, Center, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { FaCreativeCommonsNd } from "react-icons/fa";

const Resources = () => {
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
              <FaCreativeCommonsNd color="#fff" size={"20px"} />
            </Box>
          </Center>

          <Heading my={3} color={"#fff"} mb={8}>
            Resources
          </Heading>
        </Box>
      </Center>
      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <Text>ASSET SHOP FEATURING</Text>
          <SimpleGrid columns={2} spacing={5}></SimpleGrid>
        </Box>

        <Box>
          <Image
            maxH={"250px"}
            maxW="250px"
            borderRadius={"20px"}
            border="4px solid #fff"
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlJTIwaW1hZ2UlMjBpbnNpZGUlMjBoZXhhZ29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Resources;
