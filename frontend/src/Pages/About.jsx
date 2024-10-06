import React from 'react';
import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

const About = () => {
  return (
    <Stack
    bg={useColorModeValue('gray.50', 'gray.800')}
    py={16}
    px={8}
    spacing={{ base: 8, md: 10 }}
    align={'center'}
    direction={'column'}>
    <Text fontSize={{ base: 'xl', md: '2xl' }} textAlign={'center'} maxW={'3xl'}>
    As a co-founder, I have successfully delivered more than 20 innovative products, from concept to launch, driving technical excellence and ensuring market readiness. My hands-on approach in both development and strategy has been key to fostering a culture of innovation and delivering impactful solutions that meet customer needs.
    </Text>
    <Box textAlign={'center'}>
      <Avatar
        src={
          'https://i.postimg.cc/dVGBrM4D/photo.jpg'
        }
        mb={2}
      />

      <Text fontWeight={600}>Sonu Kumar</Text>
      <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
        Co Founder
      </Text>
    </Box>
  </Stack>
  )
}

export default About
