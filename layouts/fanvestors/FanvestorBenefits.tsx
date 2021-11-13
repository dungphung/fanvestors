import { Box, Container, Flex, Text, Image } from '@chakra-ui/react'
import LineHeaderSection from 'components/LineHeaderSection'
import TitleSection from 'components/TitleSection'
import useWindowSize from 'hooks/useWindowSize'

// import Image from 'next/image'

const FanvestorBenefits = () => {
  return (
    <Box bg="rgba(0, 0, 0, 0.65)">
      <Container maxW="container.lg" pb="33px">
        <LineHeaderSection />
        <Box mt="16px">
          <TitleSection title="Fanvestor Benefits" />
        </Box>
        <Flex direction={['column', 'row']}>
          <Flex justify={['center', 'flex-start']} mt="23px">
            <Image
              src="/images/FullCircleFam.png"
              width={{
                base: '252px',
                md: '300px',
                lg: '427px',
              }}
              height={{
                base: '252px',
                md: '300px',
                lg: '427px',
              }}
              alt="full-logo"
            />
          </Flex>
          <Box
            flex={1}
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <Box bg="#F5D800" width="5px" height="86px" />
            <Box bg="#2C2C2C" px="35px" py="15px" borderRadius="12px">
              <Text fontSize="14px" lineHeight="16px">
                <span style={{ color: '#F5D800', fontWeight: 'bold' }}>
                  Certificate, called FAN PASS
                </span>{' '}
                - The authentication for FAN to actually take part in the world
                of FANVESTOR.{' '}
              </Text>
              <Text mt="16px" fontSize="14px" lineHeight="16px">
                <span style={{ color: '#F5D800', fontWeight: 'bold' }}>
                  Income Package:
                </span>{' '}
                The higher FAN Pass level, the larger the income package and the
                more earning opportunities.
              </Text>
              <Text mt="16px" fontSize="14px" lineHeight="16px">
                <span style={{ color: '#F5D800', fontWeight: 'bold' }}>
                  Enjoy to earn:
                </span>{' '}
                All engaging activities are scored and converted into assets and
                rewards thanks to blockchain technology
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default FanvestorBenefits
