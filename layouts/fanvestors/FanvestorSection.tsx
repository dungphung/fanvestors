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

const CustomCircle = ({ number, isCenter }) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    borderRadius="50%"
    height={isCenter ? '125px' : '90px'}
    width={isCenter ? '125px' : '90px'}
    className="circleNumber2"
    filter="drop-shadow(0px 0px 5px #F5D800)"
  >
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="50%"
      height={isCenter ? '112px' : '81px'}
      width={isCenter ? '112px' : '81px'}
      className="circleNumber"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={isCenter ? '92px' : '67px'}
        width={isCenter ? '92px' : '67px'}
        borderRadius="50%"
        bg="white"
      >
        <Text
          fontWeight="900"
          fontSize={isCenter ? '65px' : '35px'}
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
  onHover,
  title = 'Fanvestors are those who not only love artists but also play the role of investors, financial partners and sales networks for them.',
}) => {
  return (
    <Flex
      flex={1}
      justifyContent="center"
      alignItems="center"
      spacing="16px"
      width={{
        base: '205px',
        sm: '100px',
        md: '100px',
      }}
    >
      <VStack
        px={{ base: '50px', md: '53px', lg: '25px' }}
        py={{ base: '53px', md: '25px', lg: '25px' }}
        bg={isCenter ? '#282402' : ''}
        mx="20px"
        className={isCenter ? 'box' : ''}
        borderRadius="12px"
        transition="all 250ms ease-in-out"
      >
        <CustomCircle number={number} isCenter={isCenter} />
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
  isCenter,
  onHover,
  title = 'Fanvestors are those who not only love artists but also play the role of investors, financial partners and sales networks for them.',
}) => {
  return (
    <Flex
      flex={1}
      justifyContent="center"
      alignItems="center"
      spacing="16px"
      onMouseEnter={() => {
        console.log('cal')

        if (onHover) {
          onHover(number - 1)
        }
      }}
      onMouseLeave={() => {
        if (onHover) {
          onHover(1)
        }
      }}
    >
      <VStack
        px={{ base: '53px', md: '53px', lg: '25px' }}
        py={{ base: '53px', md: '25px', lg: '25px' }}
        mx="20px"
        className={isCenter ? 'customGridInFanvestor2' : ''}
        maxW="246px"
        transition="all 250ms ease-in-out"
      >
        <CustomCircle number={number} isCenter={isCenter} />
        <Text
          fontSize="14px"
          lineHeight="16px"
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
  const [value, setValue] = useState(1)
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
    <Container
      maxW="container.xl"
      pb="53px"
      pt={{
        base: '36px',
        md: '128px',
      }}
    >
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
          <SimpleGrid columns={3} spacingX={0} mt="55px">
            <ItemFanvestorInGrid
              number={1}
              isCenter={value === 0}
              onHover={setValue}
              title="Fanvestors are those who not only love artists but also play the role of investors, financial partners and sales networks for them."
            />
            <ItemFanvestorInGrid
              number={2}
              isCenter={value === 1}
              onHover={setValue}
              title="A fan would become a fanvestor by owning FANPass or other investment/ purchase/ interaction activities on the platform."
            />
            <ItemFanvestorInGrid
              number={3}
              isCenter={value === 2}
              onHover={setValue}
              title="Fanvestors receive financial value on the principle of “Enjoy to earn”, helping them gain Active Income and attach to the Artist they love."
            />
          </SimpleGrid>
        ) : (
          <Box>
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
              centerPadding="0px"
              centerMode
              initialSlide={1}
              variableWidth
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
          </Box>
        )}
      </Box>
    </Container>
  )
}

export default FanvestorSection
