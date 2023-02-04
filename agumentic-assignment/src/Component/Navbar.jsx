import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <Box w={"80%"} m="auto">
      <Flex justify={"space-between"} h="20vh" align={"center"}>
        <Box>
          <Image
            h={"40px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbRadpwbwK4NV05E2RzQOPoRQdAfZeKspBZA&usqp=CAU"
          />
        </Box>
        <Flex color={"white"} gap="30px" fontSize={"20px"}>
          <Text>Resources</Text>
          <Text>About</Text>
          <Text>Pricing</Text>
          <Text>Contact</Text>
          <Text>Shop</Text>
        </Flex>
        <Flex align={"center"} gap="25px">
          <InputGroup bg={"#333"} borderRadius="15px" border={"none"}>
            <Input placeholder="Search..." />
            <InputRightElement
              bg={"#333"}
              borderRadius="15px"
              children={<SearchIcon color="green.500" bg={"#333"} />}
            />
          </InputGroup>
          <Box borderRadius={"50%"} bg="#333" p={3}>
            <BsFillCartFill color="#fff" size={"20px"} />
          </Box>
          <Button colorScheme={"blue"} px={8}>
            SIGN IN
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
