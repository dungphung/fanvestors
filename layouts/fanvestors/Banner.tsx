import { Box, Container, SimpleGrid, Text } from '@chakra-ui/layout'
import IntroBg from 'public/images/fanvestor/banner.png'
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
      h={'calc(100vh * 1/2)'}
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
              Where fans become fanvestors
            </Text>
          </Box>
          <Box
            display="flex"
            h="100%"
            flex="1"
            justifyContent="flex-end"
            alignItems="flex-end"
            flexDir="column"
          ></Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default IntroFanInvestor
