import { Box, Container, Grid, GridItem, Text } from '@chakra-ui/layout'

const IntroFanInvestor = () => {
  return (
    <Box
      bg={{
        base: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 46.49%, rgba(0, 0, 0, 0.35) 99.5%), url(/images/fanvestors-mobile.png)',
        md: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 46.49%, rgba(0, 0, 0, 0.35) 99.5%), url(/images/fanvestors-mobile.png)',
        lg: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 46.49%, rgba(0, 0, 0, 0.35) 99.5%), url(/images/fanvestor/banner.png)',
      }}
      backgroundPosition="center center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h={['390px', 'calc(100vh * 1/2)']}
      w="100vw"
    >
      <Container maxW="container.xl" h="100%">
        <Grid columns={2} h="100%">
          <GridItem>
            <Box
              display="flex"
              h="100%"
              flex={{ base: 1, md: 2, lg: 1 }}
              justifyContent={['flex-end', 'center']}
              alignItems="flex-start"
              flexDir="column"
            >
              <Text
                fontSize={['30px', '55px']}
                lineHeight={['35px', '64px']}
                color="#F5D800"
                fontWeight="bold"
                mb={['44px', '0']}
                maxW="614px"
                textTransform="uppercase"
              >
                Where fans become fanvestors
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default IntroFanInvestor
