import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/layout'

import Image from 'next/image'
import { Button } from '@chakra-ui/button'

const Intro = () => {
  return (
    <Box>
      <Container maxW="container.lg">
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' }}
          gap={10}
        >
          <GridItem colSpan={[1, 3]}></GridItem>
          <GridItem colSpan={[1, 2]}>
            <Flex justify={['center', 'flex-start']}>
              <Box bg="#F5D800" width="15px" height="56px" />
            </Flex>
          </GridItem>
        </Grid>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' }}
          gap={10}
          mt="44px"
        >
          <GridItem colSpan={[1, 3]}>
            <Box display={['block', 'none']}>
              <Text
                fontWeight="500"
                color="#737373"
                fontSize="20px"
                lineHeight="23px"
                letterSpacing="0.11em"
                textAlign={['center', 'left']}
              >
                For Artist
              </Text>
              <Flex justify={['center', 'flex-start']} mt="7px">
                <Text
                  fontWeight="bold"
                  fontSize="30px"
                  lineHeight="35px"
                  color="#fff"
                  textAlign={['center', 'left']}
                  width="235px"
                >
                  LAUNCH YOUR FANPASS
                </Text>
              </Flex>

              <Box textAlign={['center', 'left']}>
                <Button
                  fontSize="16px"
                  lineHeight="19px"
                  fontWeight="bold"
                  color="#000"
                  bg="#F5D800"
                  borderRadius="4px"
                  mt="12px"
                >
                  Learn More
                </Button>
              </Box>
            </Box>
            <Box display={['none', 'block']}>
              <Image
                width={602}
                height={302}
                src="/images/partner/intro/intro-2.png"
                alt="IntroImg"
              />
            </Box>
          </GridItem>
          <GridItem colSpan={[1, 2]}>
            <Box display={['block', 'none']}>
              <Image
                width={602}
                height={302}
                src="/images/partner/intro/intro-2.png"
                alt="IntroImg"
              />
            </Box>
            <Box display={['none', 'block']}>
              <Text
                fontWeight="500"
                color="#737373"
                fontSize="20px"
                lineHeight="23px"
                letterSpacing="0.11em"
              >
                For Artist
              </Text>

              <Text
                fontWeight="bold"
                fontSize="30px"
                lineHeight="35px"
                color="#fff"
              >
                LAUNCH YOUR FANPASS
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
                Learn More
              </Button>
            </Box>
          </GridItem>
        </Grid>

        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' }}
          gap={10}
          mt="52px"
          mb="71px"
        >
          <GridItem colSpan={[1, 2]}>
            <Text
              fontWeight="500"
              color="#737373"
              fontSize="20px"
              lineHeight="23px"
              letterSpacing="0.11em"
              textAlign={['center', 'left']}
            >
              For Partner
            </Text>
            <Flex justify={['center', 'flex-start']} mt="7px">
              <Text
                fontWeight="bold"
                fontSize="30px"
                lineHeight="35px"
                color="#fff"
                textAlign={['center', 'left']}
                width={['329px', 'auto']}
              >
                CONNECT ARTISTS, EARN EXTRA REVENUE
              </Text>
            </Flex>

            <Box textAlign={['center', 'left']}>
              <Button
                fontSize="16px"
                lineHeight="19px"
                fontWeight="bold"
                color="#000"
                bg="#F5D800"
                borderRadius="4px"
                mt="12px"
              >
                Learn More
              </Button>
            </Box>
          </GridItem>
          <GridItem colSpan={[1, 3]}>
            <Image
              width={602}
              height={302}
              src="/images/partner/intro/intro.png"
              alt="IntroImg"
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default Intro
