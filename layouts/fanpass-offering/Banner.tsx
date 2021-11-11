import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/layout'
import IntroBg from 'public/images/fan-pass-offering/banner.png'
import Image from 'next/image'

const Banner = () => {
  return (
    <Box my="55px">
      <VStack>
        <Box
          backgroundImage={`url(${IntroBg.src})`}
          backgroundPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          h="401px"
          w="1046px"
        >
          <SimpleGrid columns={2}>
            <Box />
            <Box>
              <Box w="15px" height="55px" bg="#F5D800" />
              <Text
                mt="56px"
                fontWeight="bold"
                fontSize="30px"
                lineHeight="35px"
                textAlign="left"
              >
                Introducing FAN Pass
              </Text>
              <Text
                mt="20px"
                textAlign="left"
                maxW="336px"
                fontSize="14px"
                lineHeight="17px"
              >
                FAN PASS is a certificate for FAN, to empower FAN to become a
                FANVestor. FAN PASS is issued from Artist in limited quantity
                and for the purpose of creating FAN's autonomous reward
                mechanism, where FAN works on its own his love and affection
                while generating high income.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  )
}

export default Banner
