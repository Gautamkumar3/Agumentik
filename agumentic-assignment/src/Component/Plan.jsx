import { Box, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillCartFill } from "react-icons/bs";

const Plan = () => {
  return (
    <Box w="80%" m="auto" my={"5%"}>
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
              <BsFillCartFill color="#fff" size={"20px"} />
            </Box>
          </Center>

          <Heading my={3} color={"#fff"} mb={8}>
            Get Yourself a 3D Models
          </Heading>
        </Box>
      </Center>
      <SimpleGrid columns={3} p={5} bg="#414a4c">
        <Box bg="#414a4c" borderRight={"2px solid gray"} p={5}>
          <Text bg="#414a4c" color={"#fff"} fontSize="18px" fontWeight="bold">
            FREE PLAN
          </Text>
          <Text my={3} bg="#414a4c" color={"gray.300"}>
            ✔️ Lorem, ipsum dolor.
          </Text>
        </Box>
        <Box bg="#414a4c" borderRight={"2px solid gray"} p={5}>
          <Text bg="#414a4c" color={"#fff"} fontSize="18px" fontWeight="bold">
            BEGINING PLAN
          </Text>
          <Text my={3} bg="#414a4c" color={"gray.300"}>
            ✔️ Lorem, ipsum dolor.
          </Text>
          <Text my={3} bg="#414a4c" color={"gray.300"}>
            ✔️ Lorem, ipsum dolor.
          </Text>
          <Text my={3} bg="#414a4c" color={"gray.300"}>
            ✔️ Lorem, ipsum dolor.
          </Text>
          <Text my={3} bg="#414a4c" color={"gray.300"}>
            ✔️ Lorem, ipsum dolor.
          </Text>
          <Text my={3} bg="#414a4c" color={"gray.300"}>
            ✔️ Lorem, ipsum dolor.
          </Text>
        </Box>
        <Box bg="#414a4c"  p={5}>
          <Text bg="#414a4c" color={"#fff"} fontSize="18px" fontWeight="bold">
            PREMIUM PLAN
          </Text>
          <Text my={3} bg="#414a4c" color={"gray.300"}>
            ✔️ Lorem, ipsum dolor.
          </Text>
          <Text my={3} bg="#414a4c" color={"gray.300"}>
            ✔️ Lorem, ipsum dolor.
          </Text>
          <Text my={3} bg="#414a4c" color={"gray.300"}>
            ✔️ Lorem, ipsum dolor.
          </Text>
          <Text my={3} bg="#414a4c" color={"gray.300"}>
            ✔️ Lorem, ipsum dolor.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Plan;
