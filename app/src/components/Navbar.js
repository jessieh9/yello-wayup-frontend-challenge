import React from "react";
import {
  Box,
  Button,
  Flex,
  // Link,
  // Heading,
  Spacer,
  // Center,
  // Image,
  Popover,
  PopoverTrigger,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import Page from "../pages/Page";

// import { SignoutButton } from "../components/SignoutButton";

function Navbar() {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const navigate = useNavigate();

  return (
    <>
      <Box top="0" left="0" right="0" zIndex="999" bg="#EEEEE" boxShadow="md">
        <Flex p={4}>
          <Spacer />
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                onClick={() => {
                  navigate("/page");
                }}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                Home
              </Box>
            </PopoverTrigger>
          </Popover>
        
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
