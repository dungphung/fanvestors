import { Box, Container, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import LineHeaderSection from 'components/LineHeaderSection'
import TitleSection from 'components/TitleSection'
import LineArrow from 'components/svgs/LineArrow'
import Image from 'next/image'

const DistinguishesFanvestors = () => {
  return (
    <Box>
      <Container maxW="container.lg">
        <LineHeaderSection />
        <Box my="37px">
          <TitleSection title="What distinguishes fanvestors from fans?" />
        </Box>
        <Flex justify="center">
          <Image
            src="/images/full-logo.png"
            alt="FullLogoImg"
            height={67}
            width={265}
          />
        </Flex>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(9, 1fr)',
            lg: 'repeat(8, 1fr)',
          }}
          mt="67px"
        >
          <GridItem colSpan={{ base: 1, md: 3, lg: 3 }}>
            <Flex justifyContent={{ base: 'center' }}>
              <Box bg="rgba(0, 0, 0, 0.35)" borderRadius="12px" p="20px 30px">
                <Box textAlign="right">
                  <Box
                    bg="#6F6100"
                    display="inline-block"
                    py="5px"
                    px="25px"
                    borderRadius="12px"
                  >
                    <Text
                      fontSize="32px"
                      lineHeight="37px"
                      letterSpacing="0.125em"
                      transform="rotate(0.05deg)"
                      textShadow="0px 0px 6px rgba(245, 216, 0, 0.85)"
                    >
                      FAN
                    </Text>
                  </Box>
                </Box>

                <Box borderRight="2px solid #F5D800" pr="10px" mt="20px">
                  <Text textAlign="right">
                    Devotee of unconditional support
                  </Text>
                  <Text textAlign="right">A spectator and admirer</Text>
                  <Text textAlign="right">A form of leisure</Text>
                </Box>
              </Box>
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 3, lg: 2 }}>
            <Flex
              flex="1"
              justifyContent="center"
              alignItems="center"
              flexDir="column"
              h={{ base: '220px', md: '100%' }}
              transform={{ base: 'rotate(90deg)', md: 'rotate(0deg)' }}
            >
              <Text fontSize="32px" lineHeight="100%" letterSpacing="0.09em">
                FANPASS
              </Text>
              <LineArrow />
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 3, lg: 3 }}>
            <Flex justifyContent={{ base: 'center' }}>
              <Box
                bg="rgba(0, 0, 0, 0.75)"
                textShadow="0px 0px 10px rgba(245, 216, 0, 0.65)"
                borderRadius="12px"
                p="30px"
                border="1px solid rgba(177, 145, 34, 1)"
                // display="inline-block"
              >
                <Box
                  display="inline-block"
                  transform="rotate(-7.31deg)"
                  bg="#F5D800"
                  borderRadius="8px"
                  px="25px"
                >
                  <Text
                    fontSize="32px"
                    color="#000"
                    fontWeight="500"
                    textShadow="0px 0px 6px rgba(245, 216, 0, 0.85)"
                  >
                    fanvestor
                  </Text>
                </Box>
                <Box w="138px" bg="#F5D800" h="2px" mt="28px" />
                <Box mt="20px" borderLeft="2px solid #F5D800" pl="10px">
                  <Text fontSize="14px" color="#f0f0f0">
                    The source of win-win investment
                  </Text>
                  <Text fontSize="14px" color="#f0f0f0">
                    A companion, partner and investor
                  </Text>
                  <Text fontSize="14px" color="#f0f0f0">
                    A recognised profession
                  </Text>
                </Box>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
        <Flex mt="72px" pb="37px" flexDir={{ base: 'column', md: 'row' }}>
          <Box flex={1} mr="15px" order={{ base: 2, md: 1 }} mt={['10px', 0]}>
            <Text fontSize="18px" textAlign={['left', 'right']}>
              FAN PASS is a certificate for FAN, to empower
            </Text>
            <Text fontSize="18px" textAlign={['left', 'right']}>
              FAN to become a Fanvestor.
            </Text>
            <Text fontSize="18px" textAlign={['left', 'right']}>
              FAN PASS is issued from Artist in limited quantity and for the
              purpose of creating FAN's autonomous reward mechanism, where FAN
              works on its own love and affection while generating high income.
            </Text>
          </Box>
          <Box flex={1} ml="15px" order={{ base: 1, md: 2 }}>
            <Image
              src="/images/FanPassCard.png"
              width={315}
              height={170}
              alt="fanpass-card"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default DistinguishesFanvestors
