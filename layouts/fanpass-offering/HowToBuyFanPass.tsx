import { Box, Container, Flex, Text, VStack, Button } from '@chakra-ui/react'
import Image from 'next/image'
import LineHeaderSection from 'components/LineHeaderSection'

const HowToBuyFanPass = () => {
  return (
    <Box>
      <Container maxWidth="container.lg">
        <VStack>
          <LineHeaderSection />
        </VStack>
        <Flex mt="20px" pb="75px" flexDir={['column', 'row']}>
          <Box flex={1} mr={[0, '15px']} order={[2, 1]} mt={['33px', '0']}>
            <Flex justify={['center', 'flex-start']}>
              <Image
                src="/images/fan-pass-offering/fanpass-offering.png"
                width={340}
                height={174}
                alt="fanpass-offering"
              />
            </Flex>
          </Box>
          <Box flex={1} ml={[0, '15px']} order={[1, 2]}>
            <Text
              fontSize="30px"
              lineHeight="35px"
              fontWeight="bold"
              textAlign={['center', 'left']}
            >
              How to buy Fanpass
            </Text>
            <Text
              fontSize="14px"
              lineHeight="16px"
              mt="8px"
              textAlign={['center', 'left']}
            >
              Fanvestor Fan Pass are initially offered on Fan Pass Offering
              (FPO) - the exclusive launch platform for artist and project
              owners. During this FPO event, a limited number of Fan Pass are
              made available at a fixed price on Fanvestor webapp before they
              reach the marketplace.
            </Text>
            <Flex justify={['center', 'flex-start']}>
              <Button
                fontSize="16px"
                lineHeight="19px"
                fontWeight="bold"
                color="#000"
                bg="#F5D800"
                mt="12px"
                rounded={'md'}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                Buy fanpass
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default HowToBuyFanPass
