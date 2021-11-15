import { useState, useCallback, useRef } from 'react'

import {
  Box,
  Center,
  Container,
  Text,
  HStack,
  VStack,
  SimpleGrid,
} from '@chakra-ui/layout'
import HasaFandom from 'components/svgs/partners/artis/HasaFandom'
import Enjoy from 'components/svgs/partners/artis/Enjoy'
import OpenMind from 'components/svgs/partners/artis/OpenMind'
import WantExtraIncome from 'components/svgs/partners/artis/WantExtraIncome'
import LineHeaderSection from 'components/LineHeaderSection'

import { Button } from '@chakra-ui/button'
import Slider, { Settings } from 'react-slick'

import TitleSection from 'components/TitleSection'

const responsive = [
  {
    breakpoint: 1990,
    settings: {
      rows: 1,
      slidesToShow: 4,
      slidesToScroll: 4,
      variableWidth: true,
    },
  },
  {
    breakpoint: 1500,
    settings: {
      rows: 1,
      slidesToShow: 4,
      slidesToScroll: 4,
      variableWidth: true,
    },
  },
  {
    breakpoint: 1280,
    settings: {
      rows: 1,
      slidesToShow: 4,
      slidesToScroll: 2,
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
    breakpoint: 728,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
]

const ArtistItem = ({ title = 'Has a Fandom', Icon }) => {
  return (
    <Box
      mr={{ base: 0, md: '30px' }}
      pr={{ base: '30px', md: 0 }}
      w={{ base: '100%', md: '205px', lg: '100%' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Box
        bg="#141414"
        borderRadius="12px"
        w={{ base: '100%', md: '205px', lg: '' }}
        h="223px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Icon />
      </Box>
      <Text
        w="205px"
        mt="25px"
        fontSize="25px"
        fontWeight="bold"
        lineHeight="29px"
        textAlign="center"
        color="white"
      >
        {title}
      </Text>
    </Box>
  )
}

const Artist = () => {
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
    <Box bg="rgba(0, 0, 0, 0.35)" pb="46px">
      <Container maxW="container.lg">
        <LineHeaderSection />
        <Box mt="37px">
          <TitleSection title="Artist" />
        </Box>

        <Text
          mt="7"
          fontSize="16px"
          lineHeight="19px"
          color="white"
          textAlign="center"
        >
          Join us Artist if this is you
        </Text>

        <Box
          display={{
            base: 'none',
            lg: 'block',
          }}
          mt="55px"
        >
          <SimpleGrid columns={4}>
            <ArtistItem title="Has a Fandom" Icon={HasaFandom} />
            <ArtistItem title="Want extra income" Icon={WantExtraIncome} />
            <ArtistItem title="Open mind" Icon={OpenMind} />
            <ArtistItem title="Enjoy new Experiment" Icon={Enjoy} />
          </SimpleGrid>
        </Box>

        <Box
          display={{
            base: 'block',
            lg: 'none',
          }}
          mt="55px"
        >
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
            initialSlide={0}
            variableWidth
            centerPadding="10px"
          >
            <ArtistItem title="Has a Fandom" Icon={HasaFandom} />
            <ArtistItem title="Want extra income" Icon={WantExtraIncome} />
            <ArtistItem title="Open mind" Icon={OpenMind} />
            <ArtistItem title="Enjoy new Experiment" Icon={Enjoy} />
          </Slider>
        </Box>

        <Center mt={{ base: '76px', md: '76px', lg: '90px' }}>
          <Button bg="#F5D800" fontSize="16px" lineHeight="19px" color="#000">
            Register to launch your own Fanpass
          </Button>
        </Center>
      </Container>
    </Box>
  )
}

export default Artist
