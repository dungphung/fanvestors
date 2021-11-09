import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/layout'
import Fanvestor_1 from 'public/svgs/fanvestors/fanvestor-1.svg'
import Image from 'next/image'
import Fanvestor1 from 'components/svgs/Fanvestor1'

const ItemFanvestor = ({
  isCenter = false,
  isRight = false,
  title = 'Fanvestors are those who not only love artists but also play the role of investors, financial partners and sales networks for them.',
}) => {
  if (isCenter) {
    return (
      <Flex flex={1} justifyContent="center" alignItems="center">
        <VStack
          px="25px"
          py="53px"
          bg="#282402"
          mx="20px"
          className="box"
          maxW="246px"
        >
          <Fanvestor1 />
          <Text
            fontSize="12px"
            lineHeight="14px"
            textAlign="center"
            color="white"
            maxW="200px"
          >
            {title}
          </Text>
        </VStack>
      </Flex>
    )
  }

  if (isRight) {
    return (
      <Flex flex={1} justifyContent="flex-start" alignItems="center">
        <VStack px="25px" py="70px" maxW="246px">
          <Fanvestor1 />
          <Text
            fontSize="12px"
            lineHeight="14px"
            textAlign="center"
            color="white"
            maxW="200px"
          >
            {title}
          </Text>
        </VStack>
      </Flex>
    )
  }

  return (
    <Flex flex={1} justifyContent="flex-end" alignItems="center">
      <VStack px="25px" py="70px" maxW="246px">
        <Fanvestor1 />
        <Text
          fontSize="12px"
          lineHeight="14px"
          textAlign="center"
          color="white"
          maxW="200px"
        >
          {title}
        </Text>
      </VStack>
    </Flex>
  )
}

const FanvestorSection = () => {
  return (
    <Container maxW="container.xl" pb="53px" pt="128px">
      <Box>
        <VStack>
          <Text
            fontWeight="900"
            fontSize="45px"
            lineHeight="53px"
            letterSpacing="0.075em"
            textTransform="uppercase"
          >
            Fanvestor
          </Text>
          <Text
            fontSize="16px"
            lineHeight="19px"
            textAlign="center"
            maxW="772px"
          >
            For the first time, fans could become investors, partners and
            companions with their favorite artists. By playing a proactive role
            and devoting investments in various terms of time, efforts and
            finance, Fanvestors are now empowered to create new values, new
            assets, new incomes.
          </Text>
        </VStack>

        <SimpleGrid columns={3} mt="55px">
          <ItemFanvestor />
          <ItemFanvestor isCenter />
          <ItemFanvestor isRight />
        </SimpleGrid>
      </Box>
    </Container>
  )
}

export default FanvestorSection
