import { Box, Container, Flex, Text } from '@chakra-ui/layout'

const data = []

const FeatureFanPassItem = () => {
  return <Box></Box>
}

const FeatureFanPass = () => {
  return (
    <Box>
      <Container maxW="container.lg">
        <Flex>
          <Box maxW="235px">
            <Text
              fontSize="30px"
              lineHeight="35px"
              fontWeight="bold"
              textAlign="left"
            >
              Feature Fan Pass
            </Text>
            <Text fontSize="14px" lineHeight="16px" mt="8px" textAlign="right">
              Find the top FAN Pass on Fanvestor platform. Get Fan Pass and
              enjoy your extraordinary income packages.{' '}
            </Text>
          </Box>
          <Box flex={1}></Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default FeatureFanPass
