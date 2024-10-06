import React from 'react';
import { Avatar, Box, Stack, Text, useColorModeValue, Heading, useBreakpointValue, Center } from '@chakra-ui/react';

const Founder = () => {
  return (
    <>
     <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
        <Center>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: useBreakpointValue({ base: '20%', md: '30%' }),
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'green.400',
              zIndex: -1,
            }}>
            Founders'
          </Text>
          <Text color={'green.400'} ml={2} as={'span'}>
          Word
          </Text>{' '}
          </Center>
        </Heading>
    <Stack
    bg={useColorModeValue('gray.50', 'gray.800')}
    py={16}
    px={8}
    spacing={{ base: 8, md: 10 }}
    align={'center'}
    direction={'column'}>
    <Text fontSize={{ base: 'xl', md: '2xl' }} textAlign={'center'} maxW={'3xl'}>
    We have successfully delivered more than 20 innovative products, from concept to launch, driving technical excellence and ensuring market readiness. Our hands-on approach in both development and strategy has been key to fostering a culture of innovation and delivering impactful solutions that meet customer needs.
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
  </>
  )
}

export default Founder
