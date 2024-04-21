import React from "react";
import {
  Box,
  Button,
  Flex,
  Link,
  Heading,
  Spacer,
  Center,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <Box bg="#EEEEE" boxShadow="md">
        <Flex alignItems="center" justifyContent="center" p={4}>
          {/* LOGO */}
          <Image src={logo} width={20} />
          <Spacer />

          {/* NAVIGATION */}
          <Box
            id="nav_item"
            p={2}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Box>
          <Box
            id="nav_item"
            p={2}
            onClick={() => {
              navigate("/page");
            }}
          >
            Page
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
