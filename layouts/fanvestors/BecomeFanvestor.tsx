import { Box, Container, Flex } from '@chakra-ui/layout'
import LineHeaderSection from 'components/LineHeaderSection'
import TitleSection from 'components/TitleSection'

const BecomeFanvestor = () => {
  return (
    <Container maxW="container.lg">
      <LineHeaderSection />
      <Box mt="37px">
        <TitleSection title="Fanvestors income packages" />
      </Box>
      <Flex></Flex>
    </Container>
  )
}

export default BecomeFanvestor
