import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Heading,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  let username = "";

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Flex gap={10}>
            <Heading as="h5" size={"sm"}>
              NexaCode Soft
              <br />
              <Text display={"Flex"} justifyContent={"flex-end"}>
                Solution
              </Text>
            </Heading>
            <Link to="/">
              <Text>Home</Text>
            </Link>

            <Link to="/aboutus">
              <Text>About us</Text>
            </Link>

            <Link to="/contactus">
              <Text>Contact us</Text>
            </Link>
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <HamburgerIcon boxSize="8" />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://i.postimg.cc/FKZRPB2F/logo.jpg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{username ? username : ""}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Sign Up</MenuItem>
                  <MenuItem>Login</MenuItem>
                  {/* <MenuItem>Logout</MenuItem> */}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
