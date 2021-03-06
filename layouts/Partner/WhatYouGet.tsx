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
    <Box
      mr={{ base: '30px', md: '30px' }}
      w={{ base: '205px', md: '100%', lg: '100%' }}
    >
      <VStack>
        <CImage
          src={src}
          width={{ base: '240px', md: '210px', lg: '240px' }}
          height={152}
          alt="icon"
          borderRadius="12px"
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
          <TitleSection
            title="What you get"
            textShadow="0px 0px 10px rgba(245, 216, 0, 0.65)"
          />
        </Box>

        <Box
          display={{
            base: 'none',
            md: 'block',
          }}
          mx={{
            md: '0px',
            lg: '80px',
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
          overflow="hidden"
          paddingBottom="40px"
        >
          <Slider
            responsive={responsive}
            arrows={false}
            appendDots={appendDots}
            afterChange={(value) => {
              setValue(Number(value))
            }}
            infinite={false}
            speed={500}
            swipe
            dots
            initialSlide={0}
            variableWidth
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
