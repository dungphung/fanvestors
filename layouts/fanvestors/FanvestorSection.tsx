import { useState, useCallback, useRef } from 'react'

import {
  Box,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Image as CImage,
} from '@chakra-ui/react'
import Fanvestor_1 from 'public/svgs/fanvestors/fanvestor-1.svg'
import Image from 'next/image'
import Fanvestor1 from 'components/svgs/Fanvestor1'
import Slider, { Settings } from 'react-slick'
import useWindowSize from 'hooks/useWindowSize'
import { responsive } from 'utils'

const CustomCircle = ({ number }) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    borderRadius="50%"
    height="125px"
    width="125px"
    className="circleNumber2"
    filter="drop-shadow(0px 0px 5px #F5D800)"
  >
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="50%"
      height="112px"
      width="112px"
      className="circleNumber"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="92px"
        width="92px"
        borderRadius="50%"
        bg="white"
      >
        <Text
          fontWeight="900"
          fontSize="65px"
          lineHeight="76px"
          color="#3C3C3C"
        >
          {number}
        </Text>
      </Box>
    </Box>
  </Box>
)

const ItemFanvestor = ({
  number = 1,
  isCenter = false,
  isRight = false,
  title = 'Fanvestors are those who not only love artists but also play the role of investors, financial partners and sales networks for them.',
}) => {
  return (
    <Flex flex={1} justifyContent="center" alignItems="center" spacing="16px">
      <VStack
        px={{ base: '53px', md: '53px', lg: '25px' }}
        py={{ base: '53px', md: '25px', lg: '25px' }}
        bg={isCenter ? '#282402' : ''}
        mx="20px"
        className={isCenter ? 'box' : ''}
        // maxW="246px"
        transition="all 250ms ease-in-out"
      >
        <CustomCircle number={number} />
        <Text
          fontSize="12px"
          lineHeight="14px"
          textAlign="center"
          color="white"
          maxW="200px"
        >
          {title}
        </Text>
      </VStack>
    </Flex>
  )
}

const ItemFanvestorInGrid = ({
  number = 1,
  isCenter = false,
  isRight = false,
  title = 'Fanvestors are those who not only love artists but also play the role of investors, financial partners and sales networks for them.',
}) => {
  return (
    <Flex flex={1} justifyContent="center" alignItems="center" spacing="16px">
      <VStack
        px={{ base: '53px', md: '53px', lg: '25px' }}
        py={{ base: '53px', md: '25px', lg: '25px' }}
        mx="20px"
        className="customGridInFanvestor"
        maxW="246px"
        transition="all 250ms ease-in-out"
      >
        <CustomCircle number={number} />
        <Text
          fontSize="12px"
          lineHeight="14px"
          textAlign="center"
          color="white"
          maxW="200px"
        >
          {title}
        </Text>
      </VStack>
    </Flex>
  )
}

const FanvestorSection = () => {
  const { width } = useWindowSize()
  const [value, setValue] = useState(0)
  const refSlider = useRef<Settings>(null)
  const appendDots = useCallback(
    (dots) => (
      <VStack>
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
    <Container maxW="container.xl" pb="53px" pt="128px">
      <Box>
        <VStack mb="20px">
          <CImage src="/images/Fanvestor.png" width="292px" alt="fanvestor" />
          <Text
            fontSize="16px"
            lineHeight="19px"
            textAlign="center"
            maxW="772px"
            color="white"
          >
            For the first time, fans could become investors, partners and
            companions with their favorite artists. By playing a proactive role
            and devoting investments in various terms of time, efforts and
            finance, Fanvestors are now empowered to create new values, new
            assets, new incomes.
          </Text>
        </VStack>

        {width >= 768 ? (
          <SimpleGrid columns={3} mt="55px">
            <ItemFanvestorInGrid
              number={1}
              title="Fanvestors are those who not only love artists but also play the role of investors, financial partners and sales networks for them."
            />
            <ItemFanvestorInGrid
              number={2}
              title="A fan would become a fanvestor by owning FANPass or other investment/ purchase/ interaction activities on the platform."
            />
            <ItemFanvestorInGrid
              number={3}
              title="Fanvestors receive financial value on the principle of “Enjoy to earn”, helping them gain Active Income and attach to the Artist they love."
            />
          </SimpleGrid>
        ) : (
          <Slider
            responsive={responsive}
            dots
            className="slider variable-width"
            arrows={false}
            appendDots={appendDots}
            afterChange={(value) => {
              setValue(Number(value))
            }}
            speed={500}
            swipe
            infinite={false}
          >
            <ItemFanvestor
              isCenter={value === 0}
              number={1}
              title="Fanvestors are those who not only love artists but also play the role of investors, financial partners and sales networks for them."
            />
            <ItemFanvestor
              isCenter={value === 1}
              number={2}
              title="A fan would become a fanvestor by owning FANPass or other investment/ purchase/ interaction activities on the platform."
            />
            <ItemFanvestor
              isCenter={value === 2}
              number={3}
              title="Fanvestors receive financial value on the principle of “Enjoy to earn”, helping them gain Active Income and attach to the Artist they love."
            />
          </Slider>
        )}
      </Box>
    </Container>
  )
}

export default FanvestorSection
