import { Button } from '@chakra-ui/button'
import { Box, Container, SimpleGrid, Text, VStack } from '@chakra-ui/layout'
import FanPassOffering from 'public/images/fan-pass-offering/fanpass-offering.png'
import Image from 'next/image'
import LineHeaderSection from 'components/LineHeaderSection'

const HowToBuyFanPass = () => {
  return (
    <Box>
      <Container maxWidth="container.lg">
        <VStack>
          <LineHeaderSection />
        </VStack>
        <SimpleGrid columns={2} mt="20px" mb="75px">
          <Box mr="15px">
            <Image src={FanPassOffering} alt="fanpass-offering" />
          </Box>
          <Box ml="15px">
            <Text
              fontSize="30px"
              lineHeight="35px"
              fontWeight="bold"
              textAlign="left"
            >
              How to buy Fanpass
            </Text>
            <Text fontSize="14px" lineHeight="16px" mt="8px">
              Fanvestor Fan Pass are initially offered on Fan Pass Offering
              (FPO) - the exclusive launch platform for artist and project
              owners. During this FPO event, a limited number of Fan Pass are
              made available at a fixed price on Fanvestor webapp before they
              reach the marketplace.
            </Text>
            <Button
              fontSize="16px"
              lineHeight="19px"
              fontWeight="bold"
              color="#000"
              bg="#F5D800"
              borderRadius="4px"
              mt="12px"
            >
              Buy fanpass
            </Button>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default HowToBuyFanPass
