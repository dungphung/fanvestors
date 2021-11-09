import { Button } from '@chakra-ui/button'
import {
  Box,
  Text,
  Container,
  SimpleGrid,
  Flex,
  Spacer,
  Divider,
} from '@chakra-ui/layout'
import LineHeaderSection from 'components/LineHeaderSection'
import TitleSection from 'components/TitleSection'
import CardDemo from 'public/images/card-demo.png'
import Image from 'next/image'

const TopFan = () => {
  return (
    <Box bg="#393A3C" p="30px">
      <SimpleGrid columns={2}>
        <Box
          bgImage={`url(${CardDemo.src})`}
          bgSize="contain"
          bgRepeat="no-repeat"
          bgPos="center"
          h="263px"
          w="100%"
        />
        <Flex flexDir="column">
          <Box>
            <Text>Lalisa Manobal</Text>
            <Text>
              The most powerful FAN Pass from LISA with exclusive voting rights,
              unlock limited edition NFTs and win unique fan experiences.
            </Text>
          </Box>
          <Spacer />
          <Box>
            <Divider maxW="calc(100%/3)" />
            <Text mt="6px" fontSize="14px" lineHeight="16px" fontWeight="bold">
              From $999.00
            </Text>
            <Text fontSize="16px" lineHeight="19px" color="#A5A5A5" mt="5px">
              299/100,000 sold
            </Text>
            <Button
              mt="18px"
              fontSize="16px"
              lineHeight="19px"
              fontWeight="bold"
              color="#000"
              bg="#F5D800"
              px="44px"
            >
              See more
            </Button>
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  )
}

const FanBecomeFanInvestor = () => {
  return (
    <Container maxW="container.xl">
      <Box my="56px">
        <Box mb="55px">
          <LineHeaderSection />
        </Box>
        <TitleSection title="Get FAN PASS to make FAN become FANVESTOR" />

        <Text fontSize="14px" lineHeight="20px" textAlign="center" mt="11px">
          Fan Pass is the investment certification which help fan get in
          business with your idol and get exclusive right to enjoy their
          creative. Enjoy to earn.
        </Text>
        <Text
          mt="37px"
          fontSize="24px"
          lineHeight="28px"
          textAlign="center"
          color="#F5D800"
          fontWeight="bold"
        >
          Top Fan Pass
        </Text>

        <Box mt="27px">
          <TopFan />
        </Box>
        <Box mt="27px">
          <TopFan />
        </Box>
        <Box mt="27px">
          <TopFan />
        </Box>
      </Box>
    </Container>
  )
}

export default FanBecomeFanInvestor
