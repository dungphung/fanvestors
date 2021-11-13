import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  Image as CImage,
} from '@chakra-ui/react'
import Image from 'next/image'
import LineHeaderSection from 'components/LineHeaderSection'
import TitleSection from 'components/TitleSection'
import { Button } from '@chakra-ui/button'
import { useBreakpoint, useBreakpointValue } from '@chakra-ui/media-query'

const FanRelationshipItem = ({ title = '', description = '', src = '' }) => {
  return (
    <Flex
      p="20px"
      bg="rgba(0, 0, 0, 0.55)"
      borderRadius="12px"
      flexDir={['column', 'row']}
    >
      <Box>
        <CImage
          src={src}
          alt="img"
          width={{
            base: '100%',
            md: '200px',
            lg: '156px',
          }}
          height={{
            base: '100%',
            md: '200px',
            lg: '156px',
          }}
        />
      </Box>

      <Box flex={1} ml={[0, '24px']} mt={['24px', 0]}>
        <Text fontSize="25px" fontWeight="bold" lineHeight="29px">
          {title}
        </Text>
        <Text mt="14px" fontSize="16px" color="#B9B8B8" lineHeight="19px">
          {description}
        </Text>
      </Box>
    </Flex>
  )
}

const FanRelationship = () => {
  return (
    <Box bg="rgba(0, 0, 0, 0.35)" pb="46px">
      <Container maxW="container.lg">
        <Flex justify={['center', 'flex-start']}>
          <Box bg="#F5D800" width="15px" height="56px" />
        </Flex>
        <Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(7, 1fr)']}
          gap={10}
          mt="27px"
        >
          <GridItem colSpan={[1, 2]}>
            <Text
              fontWeight="bold"
              fontSize="30px"
              lineHeight="35px"
              color="#fff"
              textAlign={['center', 'left']}
            >
              Evolve your Fan-Relationship Here's how
            </Text>
          </GridItem>
          <GridItem colSpan={[1, 5]}>
            <FanRelationshipItem
              title="Fanpass offering"
              description="Launch your Fan Pass - in a quick and easy way - via FanPass Offering Launchpad.
Different sets of LIMITED VIP levels and EXCLUSIVE privileges
Approach the most engaging and investable fans "
              src="/images/partner/fan-relationship/fanpass-offering.png"
            />
            <Box mt="18px">
              <FanRelationshipItem
                title="NFT offering unique merchandise sale"
                description="An CREATIVE & ENDLESS way to widen your long term revenue streams.
Mint your limited edition NFTs collection: Pictures, Videos, Red Carpet Access and so on
Launch on FAM Central NFT Marketplace "
                src="/images/partner/fan-relationship/nft-offering.png"
              />
            </Box>
            <Box mt="18px">
              <FanRelationshipItem
                title="Fanvestor incentive system"
                description="With blockchain-powered solutions, Fan  interaction are scored for your own good
Effortlessly  create Missions for fans to Enjoy and Earn
Orient your community as per your preference and strategy
Connect with your fan in a NEW way like never before"
                src="/images/partner/fan-relationship/fanvestor.png"
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default FanRelationship
