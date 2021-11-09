import { Box, Container, Flex, Text } from '@chakra-ui/layout'
import LineHeaderSection from 'components/LineHeaderSection'
import TitleSection from 'components/TitleSection'
import EngageToEarn from 'public/images/fanvestor/engage-to-earn.svg'
import EnjoyToEarn from 'public/images/fanvestor/enjoy-to-earn.svg'
import InvestToEarn from 'public/images/fanvestor/invest-to-earn.svg'
import Image from 'next/image'

const FanvestorIncomePackages = () => {
  return (
    <Box bg="rgba(0, 0, 0, 0.65)" pb="106px">
      <Container maxW="container.lg">
        <LineHeaderSection />
        <Box mt="37px">
          <TitleSection title="Fanvestors income packages" />
        </Box>
        <Flex mt="70px">
          <Flex
            flex={1}
            justifyContent="center"
            alignItems="flex-end"
            direction="column"
          >
            <Image
              src={EngageToEarn}
              alt="EngageToEarn"
              //   height={300}
              width={337}
            />
          </Flex>
          <Flex
            flex={1}
            justifyContent="center"
            alignItems="flex-start"
            direction="column"
          >
            <Text
              fontSize="25px"
              lineHeight="29px"
              color="#F5D800"
              fontWeight="bold"
            >
              ENGAGE TO EARN
            </Text>
            <Text fontSize="16px" lineHeight="19px" color="#9B9B9B">
              by turning your engagement in to rewards
            </Text>
            <Text fontSize="16px" lineHeight="19px" mt="18px">
              Fanvestor platform has everything you need to score and,
              simultaneously convert your daily interaction with artist into
              rewards . The more you active, the more FP you can get to claim
              exclusive rewards.
            </Text>
          </Flex>
        </Flex>

        <Flex mt="40px">
          <Flex
            flex={1}
            justifyContent="center"
            alignItems="flex-start"
            direction="column"
          >
            <Text
              fontSize="25px"
              lineHeight="29px"
              color="#F5D800"
              fontWeight="bold"
            >
              ENJOY TO EARN
            </Text>
            <Text fontSize="16px" lineHeight="19px" color="#9B9B9B">
              Make money from entertainment finance features
            </Text>
            <Text fontSize="16px" lineHeight="19px" mt="18px">
              Explore more fun games and features on Fanvestor platform. You
              could be choosing from Hunting FP to Marketplace Trading, and even
              get joyful surprise via NFT Blindbox or Lottery.
            </Text>
          </Flex>
          <Flex
            flex={1}
            justifyContent="center"
            alignItems="flex-start"
            direction="column"
          >
            <Image src={EnjoyToEarn} alt="EngageToEarn" width={337} />
          </Flex>
        </Flex>

        <Flex mt="40px">
          <Flex
            flex={1}
            justifyContent="center"
            alignItems="flex-end"
            direction="column"
            paddingRight="20px"
          >
            <Image src={InvestToEarn} alt="EngageToEarn" width={337} />
          </Flex>
          <Flex
            flex={1}
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Text
              fontSize="25px"
              lineHeight="29px"
              color="#F5D800"
              fontWeight="bold"
            >
              INVEST TO EARN
            </Text>
            <Text fontSize="16px" lineHeight="19px" color="#9B9B9B">
              With various project crowdfunding
            </Text>
            <Text fontSize="16px" lineHeight="19px" mt="18px">
              Devote financial support for your favorite artists in
              entertainment projects and earn profits. From blockbuster movie
              productions to indie songs, all you need is just 1 FAN Pass to
              start.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default FanvestorIncomePackages
