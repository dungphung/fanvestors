import { Box, Container, Flex, Text, Image } from '@chakra-ui/react'
import LineHeaderSection from 'components/LineHeaderSection'
import TitleSection from 'components/TitleSection'

const FanvestorIncomePackages = () => {
  return (
    <Box bg="rgba(0, 0, 0, 0.65)" pb="106px">
      <Container maxW="container.lg">
        <LineHeaderSection />
        <Box mt="37px">
          <TitleSection title="Fanvestors income packages" />
        </Box>
        <Flex flexDir="column" alignItems="center">
          <Flex mt="70px" direction={['column', 'row']} maxW="679px">
            <Flex
              flex={1}
              justifyContent="center"
              alignItems={['center', 'center']}
              direction="column"
            >
              <Image
                src="/images/fanvestor/engage-to-earn.svg"
                alt="EngageToEarn"
                //   height={300}
                // width={124}
                // height={124}
                width={['200px', '277px']}
                height={['200px', '213px']}
              />
            </Flex>
            <Flex
              flex={1}
              justifyContent="center"
              alignItems={['center', 'flex-start']}
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
              <Text
                fontSize="16px"
                lineHeight="19px"
                mt="18px"
                textAlign={['center', 'left']}
                color="white"
              >
                Fanvestor platform has everything you need to score and,
                simultaneously convert your daily interaction with artist into
                rewards . The more you active, the more FP you can get to claim
                exclusive rewards.
              </Text>
            </Flex>
          </Flex>

          <Flex mt="40px" direction={['column', 'row']} maxW="679px">
            <Flex
              order={[2, 1]}
              flex={1}
              justifyContent="center"
              alignItems={['center', 'flex-start']}
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
              <Text
                fontSize="16px"
                lineHeight="19px"
                mt="18px"
                textAlign={['center', 'left']}
                color="white"
              >
                Explore more fun games and features on Fanvestor platform. You
                could be choosing from Hunting FP to Marketplace Trading, and
                even get joyful surprise via NFT Blindbox or Lottery.
              </Text>
            </Flex>
            <Flex
              order={[1, 2]}
              flex={1}
              justifyContent="center"
              alignItems={['center', 'flex-start']}
              direction="column"
            >
              <Image
                src="/images/fanvestor/enjoy-to-earn.svg"
                alt="EngageToEarn"
                // width={124}
                // height={124}
                width={['200px', '309px']}
                height={['200px', '177px']}
              />
            </Flex>
          </Flex>

          <Flex mt="40px" direction={['column', 'row']} maxW="679px">
            <Flex
              flex={1}
              justifyContent="center"
              alignItems={['center', 'flex-end']}
              direction="column"
              paddingRight="20px"
            >
              <Image
                src="/images/fanvestor/invest-to-earn.svg"
                alt="EngageToEarn"
                // width={124}
                // height={124}
                width={['200px', '334px']}
                height={['200px', '182px']}
              />
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
              <Text
                fontSize="16px"
                lineHeight="19px"
                mt="18px"
                textAlign={['center', 'left']}
                color="white"
              >
                Devote financial support for your favorite artists in
                entertainment projects and earn profits. From blockbuster movie
                productions to indie songs, all you need is just 1 FAN Pass to
                start.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default FanvestorIncomePackages
