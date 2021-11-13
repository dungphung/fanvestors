import { useState, useCallback, useRef } from 'react'
import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Button,
  Image,
} from '@chakra-ui/react'
import LineHeaderSection from 'components/LineHeaderSection'
import TitleSection from 'components/TitleSection'

import Slider, { Settings } from 'react-slick'
import { responsive, responsive2 } from 'utils'

const PartnerBenefitItem = ({ title = '', description = '', src = '' }) => {
  return (
    <Box
      mr="27px"
      px={{
        base: '15px',
        md: 0,
      }}
    >
      <Box>
        <Image
          src={src}
          alt="img"
          width={{
            base: '100%',
            md: '184px',
          }}
        />
      </Box>

      <Box flex={1} mt="24px">
        <Text
          fontSize="25px"
          fontWeight="bold"
          lineHeight="29px"
          wordBreak="break-word"
        >
          {title}
        </Text>
        <Text
          mt="14px"
          fontSize="14px"
          fontWeight="300"
          color="#A8A8A8"
          lineHeight="16px"
          wordBreak="break-word"
          width={{
            base: '144px',
            md: 'auto',
          }}
        >
          {description}
        </Text>
      </Box>
    </Box>
  )
}

const PartnerBenefits = () => {
  const [value, setValue] = useState(0)
  const refSlider = useRef<Settings>(null)

  const appendDots = useCallback(
    (dots) => (
      <VStack
        style={{
          bottom: '-60px',
        }}
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
    <Box pb="84px">
      <Container maxW="container.lg">
        <Flex justify={['center', 'left']}>
          <Box bg="#F5D800" width="15px" height="56px" />
        </Flex>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(7, 1fr)',
          }}
          gap={10}
          mt="27px"
          overflow="hidden"
        >
          <GridItem
            colSpan={{
              base: 1,
              md: 2,
            }}
          >
            <VStack>
              <Text
                fontWeight="bold"
                fontSize="30px"
                lineHeight="35px"
                color="#fff"
              >
                Partner benefits
              </Text>
              <Text
                fontSize="14px"
                lineHeight="16px"
                mt="7px"
                maxW={['266px', 'auto']}
                textAlign={['center', 'left']}
              >
                Partners and FAM Central will work together to onboard artists
                and launch their FAN Pass
              </Text>
            </VStack>
          </GridItem>
          <GridItem
            colSpan={{
              base: 1,
              md: 5,
            }}
          >
            <Box display={{ base: 'none', md: 'block' }}>
              <Grid templateColumns="repeat(3, 1fr)" mt="27px">
                <GridItem colSpan={1}>
                  <PartnerBenefitItem
                    src="/images/partner/partner-benefit/profit.png"
                    title="Profit Sharing"
                    description="Mô tả để tạm Nhận được các chính sách tốt khi mua FAN Token và các sản phẩm từ FAM Central"
                  />
                </GridItem>
                <GridItem colSpan={1}>
                  <PartnerBenefitItem
                    src="/images/offfer-banner.png"
                    title="Customised Offers "
                    description="Nhận được các chính sách tốt khi mua FAN Token và các sản phẩm từ FAM Central"
                  />
                </GridItem>
                <GridItem colSpan={1}>
                  <PartnerBenefitItem
                    src="/images/exclusive-banner.png"
                    title="Exclusive Privileges"
                    description="Nhận được các chính sách tốt khi mua FAN Token và các sản phẩm từ FAM Central"
                  />
                </GridItem>
              </Grid>
            </Box>
          </GridItem>
        </Grid>
        <Box
          display={{
            base: 'block',
            md: 'none',
          }}
        >
          <Slider
            dots
            arrows={false}
            appendDots={appendDots}
            afterChange={(value) => {
              setValue(Number(value))
            }}
            speed={500}
            swipe
            infinite={false}
            responsive={responsive2}
          >
            <PartnerBenefitItem
              src="/images/partner/partner-benefit/profit.png"
              title="Profit Sharing"
              description="Mô tả để tạm Nhận được các chính sách tốt khi mua FAN Token và các sản phẩm từ FAM Central"
            />
            <PartnerBenefitItem
              src="/images/offfer-banner.png"
              title="Customised Offers "
              description="Nhận được các chính sách tốt khi mua FAN Token và các sản phẩm từ FAM Central"
            />
            <PartnerBenefitItem
              src="/images/exclusive-banner.png"
              title="Exclusive Privileges"
              description="Nhận được các chính sách tốt khi mua FAN Token và các sản phẩm từ FAM Central"
            />
          </Slider>
        </Box>
      </Container>
    </Box>
  )
}

export default PartnerBenefits
