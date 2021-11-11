import { Box, Container, Flex, Text } from '@chakra-ui/layout'
import LineHeaderSection from 'components/LineHeaderSection'
import TitleSection from 'components/TitleSection'

const BecomeFanvestor = () => {
  return (
    <Container maxW="container.lg">
      <LineHeaderSection />
      <Box mt="37px">
        <TitleSection title="Partners" />
        <Text>
          Partners and FAM Central will work together to onboard artists and
          launch their FAN Pass
        </Text>
      </Box>
      <Flex></Flex>
    </Container>
  )
}

export default BecomeFanvestor
