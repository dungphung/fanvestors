import { useState, useCallback, useRef } from 'react'

import {
  Box,
  Container,
  SimpleGrid,
  Text,
  HStack,
  VStack,
  Image as CImage,
} from '@chakra-ui/react'
import LineHeaderSection from 'components/LineHeaderSection'
import TitleSection from 'components/TitleSection'
import Image from 'next/image'
import Slider, { Settings } from 'react-slick'
import { responsive } from 'utils'

const WhatYouGetItem = ({
  title = 'Has a Fandom',
  description = '',
  src = '',
}) => {
  return (
    <Box mr={{ base: '', md: '30px' }} mx={{ base: '30px', md: 0 }}>
      <VStack>
        <CImage
          src={src}
          width={{ base: '100%', md: '231px' }}
          height={152}
          alt="icon"
        />
      </VStack>
      <VStack maxW={{ base: '', md: '' }}>
        <Text
          mt="25px"
          maxW={{ base: '', md: '231px' }}
          fontSize="25px"
          fontWeight="bold"
          lineHeight="29px"
          textAlign="center"
          color="white"
        >
          {title}
        </Text>
        <Text
          maxW={{ base: '', md: '231px' }}
          color="#848484"
          fontWeight="500"
          fontSize="18px"
          lineHeight="114.19%"
          textAlign="center"
        >
          {description}
        </Text>
      </VStack>
    </Box>
  )
}

const WhatYouGet = () => {
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
    <Box>
      <Container maxW="container.lg" pb="46px">
        <LineHeaderSection />
        <Box my="37px">
          <TitleSection title="Fanvestors income packages" />
        </Box>

        <Box
          display={{
            base: 'none',
            md: 'block',
          }}
        >
          <SimpleGrid columns={3}>
            <WhatYouGetItem
              description="New creative world. For limitless creative expression. NFT digital items are taking the world of art by storm."
              title="Creativity first"
              src="/images/partner/what-you-get/creativity-first.png"
            />
            <WhatYouGetItem
              description="More digital collectibles out for trade. As an new, meaningful means of engagement. "
              title="Engaging"
              src="/images/partner/what-you-get/engaging.png"
            />
            <WhatYouGetItem
              description="Revolutionized and recurring revenue stream. Remove barriers to global market & multi currency trade. "
              title="Earning"
              src="/images/partner/what-you-get/earning.png"
            />
          </SimpleGrid>
        </Box>
        <Box
          display={{
            base: 'block',
            md: 'none',
          }}
        >
          <Slider
            dots
            className="slider variable-width"
            arrows={false}
            appendDots={appendDots}
            afterChange={(value) => {
              setValue(Number(value))
            }}
            infinite={false}
            speed={500}
            swipe
            initialSlide={0}
            responsive={responsive}
          >
            <WhatYouGetItem
              description="New creative world. For limitless creative expression. NFT digital items are taking the world of art by storm."
              title="Creativity first"
              src="/images/partner/what-you-get/creativity-first.png"
            />
            <WhatYouGetItem
              description="More digital collectibles out for trade. As an new, meaningful means of engagement. "
              title="Engaging"
              src="/images/partner/what-you-get/engaging.png"
            />
            <WhatYouGetItem
              description="Revolutionized and recurring revenue stream. Remove barriers to global market & multi currency trade. "
              title="Earning"
              src="/images/partner/what-you-get/earning.png"
            />
          </Slider>
        </Box>
      </Container>
    </Box>
  )
}

export default WhatYouGet
