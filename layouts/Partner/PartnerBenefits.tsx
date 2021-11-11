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
} from '@chakra-ui/layout'
import Image from 'next/image'
import LineHeaderSection from 'components/LineHeaderSection'
import TitleSection from 'components/TitleSection'
import { Button } from '@chakra-ui/button'

const PartnerBenefitItem = ({ title = '', description = '', src = '' }) => {
  return (
    <Box>
      <Box>
        <Image
          src="/images/partner/partner-benefit/profit.png"
          alt="img"
          width={184}
          height={130}
        />
      </Box>

      <Box flex={1} width={184}>
        <Text fontSize="25px" fontWeight="bold" lineHeight="29px">
          {title}
        </Text>
        <Text
          mt="14px"
          fontSize="14px"
          fontWeight="300"
          color="#A8A8A8"
          lineHeight="16px"
        >
          {description}
        </Text>
      </Box>
    </Box>
  )
}

const PartnerBenefits = () => {
  return (
    <Box pb="46px" overflow="hidden">
      <Container maxW="container.lg">
        <Flex justify={['center', 'left']}>
          <Box bg="#F5D800" width="15px" height="56px" />
        </Flex>
        <Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(7, 1fr)']}
          gap={10}
          mt="27px"
          overflow="hidden"
        >
          <GridItem colSpan={[1, 2]}>
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
          <GridItem colSpan={[1, 5]}>
            <Grid templateColumns="repeat(3, 1fr)" gap={10} mt="27px">
              <GridItem colSpan={1}>
                <PartnerBenefitItem
                  title="Profit Sharing"
                  description="Mô tả để tạm Nhận được các chính sách tốt khi mua FAN Token và các sản phẩm từ FAM Central"
                />
              </GridItem>
              <GridItem colSpan={1}>
                <PartnerBenefitItem
                  title="Customised Offers "
                  description="Nhận được các chính sách tốt khi mua FAN Token và các sản phẩm từ FAM Central"
                />
              </GridItem>
              <GridItem colSpan={1}>
                <PartnerBenefitItem
                  title="Exclusive Privileges"
                  description="Nhận được các chính sách tốt khi mua FAN Token và các sản phẩm từ FAM Central"
                />
              </GridItem>
            </Grid>
            {/* <PartnerBenefitItem
              title="Fanpass offering"
              description="Launch your Fan Pass - in a quick and easy way - via FanPass Offering Launchpad.
  Different sets of LIMITED VIP levels and EXCLUSIVE privileges
  Approach the most engaging and investable fans "
              src="/images/partner/fan-relationship/fanpass-offering.png"
            />
            <Box mt="18px">
              <PartnerBenefitItem
                title="NFT offering unique merchandise sale"
                description="An CREATIVE & ENDLESS way to widen your long term revenue streams.
  Mint your limited edition NFTs collection: Pictures, Videos, Red Carpet Access and so on
  Launch on FAM Central NFT Marketplace "
                src="/images/partner/fan-relationship/nft-offering.png"
              />
            </Box>
            <Box mt="18px">
              <PartnerBenefitItem
                title="Fanvestor incentive system"
                description="With blockchain-powered solutions, Fan  interaction are scored for your own good
  Effortlessly  create Missions for fans to Enjoy and Earn
  Orient your community as per your preference and strategy
  Connect with your fan in a NEW way like never before"
                src="/images/partner/fan-relationship/fanvestor.png"
              />
            </Box> */}
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default PartnerBenefits
