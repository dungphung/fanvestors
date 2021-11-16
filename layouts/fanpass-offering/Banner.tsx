import {
  Box,
  SimpleGrid,
  Text,
  VStack,
  Image as CImage,
  Grid,
  GridItem,
} from '@chakra-ui/react'

import Image from 'next/image'

const Banner = () => {
  return (
    <>
      <Box
        py="55px"
        mx={{
          md: '40px',
          lg: '160px',
          '2xl': '320px',
        }}
      >
        <Box
          w="15px"
          height={{
            base: '55px',
            md: '35px',
            lg: '55px',
          }}
          bg="#F5D800"
        />
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          mt={{
            base: '56px',
            md: '46px',
          }}
          display={{
            base: 'none',
            md: 'grid',
          }}
        >
          <GridItem
            colSpan={{
              base: 1,
              md: 1,
            }}
          >
            <Box>
              <Text
                fontWeight="bold"
                fontSize={{
                  base: '30px',
                  md: '25px',
                  lg: '30px',
                }}
                lineHeight="35px"
                textAlign="left"
                color="white"
              >
                Introducing FAN Pass
              </Text>
              <Text
                mb="15px"
                mt="20px"
                textAlign="left"
                maxW="336px"
                fontSize={{
                  base: '16px',
                }}
                lineHeight="17px"
                maxWidth={{
                  base: '336px',
                  md: '250xp',
                  lg: '336px',
                }}
                color="white"
              >
                FAN PASS is a certificate for FAN, to empower FAN to become a
                FANVestor. FAN PASS is issued from Artist in limited quantity
                and for the purpose of creating FAN's autonomous reward
                mechanism, where FAN works on its own his love and affection
                while generating high income.
              </Text>
            </Box>
          </GridItem>

          <GridItem
            colSpan={{
              base: 1,
              md: 2,
            }}
            ml="46px"
          >
            <CImage src="/images/offering-banner.png" />
          </GridItem>
        </Grid>
        {/* <Box
          w="100%"
          display={{
            base: 'none',
            md: 'block',
          }}
          backgroundImage={``}
          backgroundPosition="center center"
          bgRepeat="no-repeat"
          bgSize={{
            base: 'contain',
            md: 'cover',
            lg: 'cover',
          }}
          border="1px solid #F5D800"
          borderRadius="6px"
        >
          <SimpleGrid columns={2}>
            <Box />

          </SimpleGrid>
        </Box>
 */}
        <Box
          display={{
            base: 'block',
            md: 'none',
          }}
        >
          <SimpleGrid columns={1}>
            <VStack mx="26px">
              <Box>
                <CImage src="/images/bg-fanpass-mobile.png" />
              </Box>
            </VStack>
            <Box>
              <VStack>
                <Text
                  mt={{
                    base: '56px',
                    md: '46px',
                  }}
                  fontWeight="bold"
                  fontSize={{
                    base: '30px',
                    md: '25px',
                    lg: '30px',
                  }}
                  lineHeight="35px"
                  textAlign="center"
                  color="white"
                >
                  Introducing FAN Pass
                </Text>
                <Text
                  mt="20px"
                  textAlign="center"
                  maxW="336px"
                  fontSize={{
                    base: '14px',
                    md: '12px',
                    lg: '14px',
                  }}
                  lineHeight="17px"
                  maxWidth={{
                    base: '336px',
                    md: '250xp',
                    lg: '336px',
                  }}
                  color="white"
                >
                  FAN PASS is a certificate for FAN, to empower FAN to become a
                  FANVestor. FAN PASS is issued from Artist in limited quantity
                  and for the purpose of creating FAN's autonomous reward
                  mechanism, where FAN works on its own his love and affection
                  while generating high income.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  )
}

export default Banner
