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
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

const Team = () => {
  return (
    <Box w={"80%"} m="auto">
      <Box>
        <Center>
          <Box
            borderRadius={"50%"}
            bg=" rgba(119, 119, 170, 0.633)"
            p={3}
            w="fit-content"
            border={"2px solid blue"}
          >
            <BsFillPeopleFill color="#fff" size={"20px"} />
          </Box>
        </Center>

        <Heading textAlign={"center"} my={3} color={"#fff"} mb={8}>
          Meet Our Team
        </Heading>
      </Box>
      <SimpleGrid columns={[1, 3]} spacing={10}>
        <Box
          border={"2px dotted blue"}
          textAlign="center"
          py={5}
          borderTopLeftRadius="2px"
          borderTopRightRadius={"15px"}
          borderBottomLeftRadius="15px"
          borderBottomRightRadius={"5px"}
        >
          <Flex justify={"space-between"} align="center">
            <Box color={"white"} p={2} bg="#0A66C2" borderRightRadius={"10px"}>
              <a href="">
                <AiFillLinkedin size={"15px"} />
              </a>
            </Box>
            <Image
              border={"2px dotted #fff"}
              borderRadius="50%"
              h={"50px"}
              w="50px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOr3cDHrDjizSMpE4E4zRDzGsV6F7EmO867A&usqp=CAU"
            />
            <Box color={"white"} p={2} bg="#0A66C2" borderLeftRadius={"10px"}>
              <a href="">
                <CgWebsite size={"15px"} />
              </a>
            </Box>
          </Flex>
          <Text color={"#fff"} fontWeight="bold" my={3}>
            Sachin Tendulkar
          </Text>
          <Text color={"gray.300"} fontSize="12px">
            Best Player
          </Text>
        </Box>
        <Box
          border={"2px dotted blue"}
          textAlign="center"
          py={5}
          borderTopLeftRadius="2px"
          borderTopRightRadius={"15px"}
          borderBottomLeftRadius="15px"
          borderBottomRightRadius={"5px"}
        >
          <Flex justify={"space-between"} align="center">
            <Box color={"white"} p={2} bg="#0A66C2" borderRightRadius={"10px"}>
              <a href="">
                <AiFillLinkedin size={"15px"} />
              </a>
            </Box>
            <Image
              border={"2px dotted #fff"}
              borderRadius="50%"
              h={"50px"}
              w="50px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOr3cDHrDjizSMpE4E4zRDzGsV6F7EmO867A&usqp=CAU"
            />
            <Box color={"white"} p={2} bg="#0A66C2" borderLeftRadius={"10px"}>
              <a href="">
                <CgWebsite size={"15px"} />
              </a>
            </Box>
          </Flex>
          <Text color={"#fff"} fontWeight="bold" my={3}>
            Sachin Tendulkar
          </Text>
          <Text color={"gray.300"} fontSize="12px">
            Best Player
          </Text>
        </Box>
        <Box
          border={"2px dotted blue"}
          textAlign="center"
          py={5}
          borderTopLeftRadius="2px"
          borderTopRightRadius={"15px"}
          borderBottomLeftRadius="15px"
          borderBottomRightRadius={"5px"}
        >
          <Flex justify={"space-between"} align="center">
            <Box color={"white"} p={2} bg="#0A66C2" borderRightRadius={"10px"}>
              <a href="">
                <AiFillLinkedin size={"15px"} />
              </a>
            </Box>
            <Image
              border={"2px dotted #fff"}
              borderRadius="50%"
              h={"50px"}
              w="50px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOr3cDHrDjizSMpE4E4zRDzGsV6F7EmO867A&usqp=CAU"
            />
            <Box color={"white"} p={2} bg="#0A66C2" borderLeftRadius={"10px"}>
              <a href="">
                <CgWebsite size={"15px"} />
              </a>
            </Box>
          </Flex>
          <Text color={"#fff"} fontWeight="bold" my={3}>
            Sachin Tendulkar
          </Text>
          <Text color={"gray.300"} fontSize="12px">
            Best Player
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Team;
