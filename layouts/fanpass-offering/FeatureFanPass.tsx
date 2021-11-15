import { useState, useCallback, useRef } from 'react'

import { Container, Grid, GridItem, HStack, VStack } from '@chakra-ui/layout'
import LineHeaderSection from 'components/LineHeaderSection'
import Slider, { Settings } from 'react-slick'
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react'

const responsive = [
  {
    breakpoint: 1990,
    settings: {
      rows: 1,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
    },
  },
  {
    breakpoint: 1500,
    settings: {
      rows: 1,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
    },
  },
  {
    breakpoint: 1280,
    settings: {
      rows: 1,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      rows: 1,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
    },
  },
  {
    breakpoint: 780,
    settings: {
      rows: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
    },
  },
  {
    breakpoint: 100,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 2,
    },
  },
]

const data = []

const FeatureFanPassItem = ({ isHidden }) => {
  return (
    <Box mr="30px" position="relative">
      {isHidden && (
        <Box
          position="absolute"
          rounded={'md'}
          left={0}
          right={0}
          top={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.65)"
          border="1px solid #1F1B03"
          zIndex="10"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Text
              fontWeight="bold"
              lineHeight="29px"
              fontSize="25px"
              color="#F5D800"
            >
              [COMING SOON]
            </Text>
          </Box>
        </Box>
      )}
      <Center>
        <Box
          maxW={'248px'}
          w={'248px'}
          bg="#171717"
          rounded={'md'}
          overflow={'hidden'}
          borderRadius="12px"
          filter={isHidden ? 'blur(8px)' : 'none'}
          border="1px solid #F5D800"
        >
          <Image
            h={'120px'}
            w={'full'}
            src={'/images/fan-pass-offering/user-banner-demo-1.png'}
            objectFit={'cover'}
            alt="avatar"
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={'/images/fan-pass-offering/user-demo-1.png'}
              alt={'Author'}
              css={{
                border: '2px solid #F59300',
              }}
            />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading
                fontSize="20px"
                lineHeight="23px"
                fontWeight="bold"
                color="white"
              >
                Johnny Tri Nguyen
              </Heading>
              <Text mt="4px" color="#707070" fontSize="14px" lineHeight="16px">
                Fanpass Offering
              </Text>
            </Stack>

            <Stack direction={'row'} justify={'center'} spacing={4} px="20px">
              <Box flex={1}>
                <Text
                  fontSize="16px"
                  lineHeight="19px"
                  fontWeight="bold"
                  color="#F5D800"
                >
                  FPO Start Date
                </Text>
              </Box>

              <Text fontSize="14px" lineHeight="16px" color="#A5A5A5">
                TBD
              </Text>
            </Stack>
            <Stack direction={'row'} justify={'center'} spacing={4} px="20px">
              <Box flex={1}>
                <Text
                  fontSize="16px"
                  lineHeight="19px"
                  fontWeight="bold"
                  color="#F5D800"
                >
                  Opening Price
                </Text>
              </Box>

              <Text fontSize="14px" lineHeight="16px" color="#A5A5A5">
                TBD
              </Text>
            </Stack>

            <Button
              w={'full'}
              mt={8}
              bg="#F5D800"
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              fontSize="16px"
              lineHeight="19px"
              fontWeight="bold"
              color="#000"
            >
              Upcoming
            </Button>
          </Box>
        </Box>
      </Center>
    </Box>
  )
}

const FeatureFanPass = () => {
  const [value, setValue] = useState(0)
  const refSlider = useRef(null)

  const appendDots = useCallback(
    (dots) => (
      <VStack
      // style={{
      //   bottom: '-60px',
      //   zIndex: 100,
      //   left: '0px !important',
      //   position: 'absolute',
      // }}
      >
        <HStack>
          {dots?.map((_, index) => {
            return (
              <Box
                key={index}
                onClick={() => {
                  refSlider.current?.slickGoTo(index)
                }}
                width="11px"
                height="11px"
                bg={value === index ? '#F5D800' : '#4B4B4B'}
                marginLeft={index !== 0 ? 12 : 0}
              />
            )
          })}
        </HStack>
      </VStack>
    ),
    [value],
  )

  return (
    <Box bg="rgba(0, 0, 0, 0.65)" pb="101px">
      <Container maxW="container.lg">
        <LineHeaderSection />
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          gap={10}
          mt="38px"
        >
          <GridItem
            colSpan={{
              base: 1,
              md: 1,
            }}
          >
            <Box
              maxW={{
                base: '90vw',
                md: '235px',
              }}
            >
              <Text
                fontSize="30px"
                lineHeight="35px"
                fontWeight="bold"
                textAlign={['center', 'right']}
                mt="20px"
                color="white"
              >
                Feature Fan Pass
              </Text>
              <Text
                fontSize="14px"
                lineHeight="16px"
                mt="8px"
                textAlign={['center', 'right']}
                color="white"
              >
                Find the top FAN Pass on Fanvestor platform. Get Fan Pass and
                enjoy your extraordinary income packages.{' '}
              </Text>
            </Box>
          </GridItem>
          <GridItem
            colSpan={{
              base: 1,
              md: 2,
            }}
            overflow="hidden"
          >
            <Box width="100%" paddingBottom="45px">
              <Slider
                responsive={responsive}
                dots
                infinite={false}
                arrows={false}
                appendDots={appendDots}
                afterChange={(value) => {
                  setValue(Number(value))
                }}
                speed={500}
                swipe
              >
                <FeatureFanPassItem />
                <FeatureFanPassItem isHidden />
                <FeatureFanPassItem isHidden />
                <FeatureFanPassItem isHidden />
              </Slider>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default FeatureFanPass
