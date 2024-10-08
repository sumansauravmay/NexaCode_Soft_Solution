import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";


const Carreer = () => {
  return (
    <>
     <Helmet>
        <title>Carreers</title>
        <meta name="carreer" content="Carreer component" />
      </Helmet>

   
    <Box textAlign="center" py={10} px={6}>
    <Heading
      display="inline-block"
      as="h2"
      size="2xl"
      bgGradient="linear(to-r, teal.400, teal.600)"
      backgroundClip="text">
      Sorry!
    </Heading>
    <Text fontSize="18px" mt={3} mb={2}>
    Currently, there is no opening
    </Text>
  
<Link to='/'>
    <Button
      colorScheme="teal"
      bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
      color="white"
      variant="solid">
      Go to Home
    </Button>
    </Link>
  </Box>
  </>
  )
}

export default Carreer
