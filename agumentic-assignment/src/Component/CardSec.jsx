import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const CardSec = () => {
  return (
    <Box w={"80%"} m="auto" my={"5%"}>
      <Text my={5} color={"#fff"}>
        BROWSE THROUGH ASSET PACKS
      </Text>
      <SimpleGrid columns={[1, 3]} spacing={10}>
        <Box
          p={5}
          color={"#fff"}
          height={"200px"}
          borderRadius="15px"
          background="url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60) center/cover no-repeat"
        >
          <HStack bg="transparent" spacing={10}>
            <Box bg="transparent" fontSize={"20px"} fontWeight="bold">
              <Text bg="transparent">Landscape</Text>
              <Text bg="transparent"> Pack</Text>
            </Box>

            <Box bg="transparent">
              <Text bg="transparent" fontWeight={"bold"}>
                {" "}
                25
              </Text>
              <Text fontSize={"12px"} bg="transparent">
                Styles
              </Text>
            </Box>
            <Box bg="transparent">
              <Text bg="transparent" fontWeight={"bold"}>
                4
              </Text>
              <Text bg="transparent" fontSize={"12px"}>
                Section
              </Text>
            </Box>
          </HStack>
          <Flex bg={"transparent"} justify="right" mt={"20%"}>
            <Badge colorScheme={"blue"} p={2}>
              Bestseller
            </Badge>
          </Flex>
        </Box>
        <Box
          textAlign={"left"}
          p={5}
          color={"#fff"}
          height={"200px"}
          borderRadius="15px"
          background="url(https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60) center/cover no-repeat"
        >
          <Box bg="transparent" spacing={3}>
            <Box bg="transparent" fontSize={"25px"} fontWeight="bold">
              <Text bg="transparent">RGP ITEMS</Text>
              <Text bg="transparent"> EXPANDED</Text>
              <Text bg="transparent">PACK</Text>
            </Box>
            <HStack bg={"transparent"} my={2}>
              <Badge colorScheme={"gray"} py={1} px={3}>
                Lorem
              </Badge>
              <Badge colorScheme={"gray"} py={1} px={3}>
                ipsum
              </Badge>
            </HStack>
          </Box>
        </Box>
        <Box
          textAlign={"left"}
          p={5}
          color={"#fff"}
          height={"200px"}
          borderRadius="15px"
          background="url(https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60) center/cover no-repeat"
        >
          <Box bg="transparent" spacing={3}>
            <Box bg="transparent" fontSize={"25px"} fontWeight="bold">
              <Text bg="transparent">RGP ITEMS</Text>
              <Text bg="transparent"> EXPANDED</Text>
              <Text bg="transparent">PACK</Text>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
      <Flex justify={"center"} my={5}>
        <Button colorScheme={"whatsapp"}>BROWSE ALL</Button>
      </Flex>
    </Box>
  );
};

export default CardSec;
