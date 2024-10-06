import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  IconButton,
  useColorModeValue,
  Avatar,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { FaMobileAlt } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { Link } from "react-router-dom";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Link to={"/"}>
                <Flex>
                  <Avatar
                    size={"sm"}
                    src={"https://i.postimg.cc/FKZRPB2F/logo.jpg"}
                  />
                  <Heading size={10}>Nexacode Soft solution</Heading>
                </Flex>
              </Link>
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={"/aboutus"}>
              About us
            </Box>
            <Box as="a" href={"/"}>
              Blog
            </Box>
            <Box as="a" href={"/contactus"}>
              Contact us
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>

            <Box as="a" href={"/"}>
              Terms of Service
            </Box>
            <Box as="a" href={"/"}>
              Legal
            </Box>
            <Box as="a" href={"/"}>
              Privacy Policy
            </Box>
          </Stack>

          <Stack>
            <ListHeader>Stay up to date</ListHeader>
            <Stack align={"flex-end"}>
              <Stack direction={"row"}>
                <Text fontSize={"2xl"} fontWeight={600}>
                  sonu@nexacodesoftsolution.com
                </Text>
                <IconButton
                  bg={useColorModeValue("green.400", "green.800")}
                  color={useColorModeValue("white", "gray.800")}
                  _hover={{
                    bg: "green.600",
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>

              <Stack direction={"row"}>
                <Text fontSize={"2xl"} fontWeight={600}>
                  (+91) 7908627407
                </Text>
                <IconButton
                  bg={useColorModeValue("green.400", "green.800")}
                  color={useColorModeValue("white", "gray.800")}
                  _hover={{
                    bg: "green.600",
                  }}
                  aria-label="Subscribe"
                  icon={<FaMobileAlt />}
                />
              </Stack>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
