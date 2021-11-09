import { Box, Container, SimpleGrid, Text } from '@chakra-ui/layout'
import IntroBg from 'public/images/intro-bg.png'
import HandImg from 'public/images/hand.png'
import Image from 'next/image'
import { Button } from '@chakra-ui/button'
const IntroFanInvestor = () => {
  return (
    <Box
      backgroundImage={`url(${IntroBg.src})`}
      backgroundPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h={'calc(100vh * 2/3)'}
      w="100vw"
    >
      <Container maxW="container.xl" h="100%">
        <SimpleGrid columns={2} h="100%">
          <Box
            display="flex"
            h="100%"
            flex="1"
            justifyContent="center"
            alignItems="flex-start"
            flexDir="column"
          >
            <Text
              fontSize="55px"
              lineHeight="64px"
              color="#F5D800"
              fontWeight="bold"
            >
              WHERE FANS BECOME FANVESTORS
            </Text>
            <Text mt="15px" fontSize="20px" lineHeight="23px" fontWeight="500">
              Support your favorite artists, score special rewards and enjoy to
              earn with unlimited opportunities .
            </Text>
            <Button
              mt="15px"
              fontSize="18px"
              color="#000"
              fontWeight="bold"
              lineHeight="21px"
              bg="#F5D800"
              px="35px"
              py="20px"
            >
              Register Now
            </Button>
          </Box>
          <Box
            display="flex"
            h="100%"
            flex="1"
            justifyContent="flex-end"
            alignItems="flex-end"
            flexDir="column"
          >
            <Image src={HandImg} height="600px" width="500px" alt="hand" />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default IntroFanInvestor
