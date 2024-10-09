import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import {
  Box,
  Flex,
  Button,
  Stack,
  Collapse,
  useColorMode,useColorModeValue,
  Avatar,IconButton
} from "@chakra-ui/react";
import {
  CloseIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box position="fixed" top={0} left={0} right={0} zIndex={10}>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <NavLink smooth to="/#">
            <Avatar src="https://i.postimg.cc/FKZRPB2F/logo.jpg" alt="image" />
            </NavLink>
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <Stack direction={"row"} spacing={4}>
                <NavLink smooth to="/#">Home</NavLink>
                <NavLink smooth to="/#aboutus">About Us</NavLink>
                <NavLink smooth to="/#contactus">Contact Us</NavLink>
                <NavLink smooth to="/carreers">Carreers</NavLink>
              </Stack>
            </Flex>
          </Flex>

          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          {/* Mobile Navigation */}
          <Stack direction={"column"}>
                <NavLink smooth to="/#">Home</NavLink>
                <NavLink smooth to="/#aboutus">About Us</NavLink>
                <NavLink smooth to="/#contactus">Contact Us</NavLink>
                <NavLink smooth to="/carreers">Carreers</NavLink>
              </Stack>
        </Collapse>
      </Box>
    </>
  );
};

export default Navbar;


