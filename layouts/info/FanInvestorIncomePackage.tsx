import { ReactElement } from 'react'
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  VStack,
  Center,
  Button,
  Container,
} from '@chakra-ui/react'
import EngageToEarnIcon from 'components/svgs/EngageToEarnIcon'
import EnjoyToEarnIcon from 'components/svgs/EnjoyToEarnIcon'
import InvestorToEarnIcon from 'components/svgs/InvestorToEarnIcon'
import LineHeaderSection from 'components/LineHeaderSection'
import TitleSection from 'components/TitleSection'

interface PackageProps {
  title: string
  text: string
  icon: ReactElement
  descriptions: { id: number; description: string }[]
}

const Package = ({ title, text, icon, descriptions }: PackageProps) => {
  return (
    <Center>
      <VStack maxW="201px">
        <Flex height="140px" justifyContent="center" alignItems="center">
          {icon}
        </Flex>
        <Text
          color="#F5D800"
          fontSize="20px"
          lineHeight="23px"
          fontWeight={500}
          style={{ marginTop: 26 }}
        >
          {title}
        </Text>
        <Text
          fontSize="12px"
          lineHeight="14px"
          color="#A5A5A5"
          textAlign="center"
          style={{ marginTop: 11 }}
        >
          {text}
        </Text>
        <Box
          borderLeftWidth="6px"
          borderLeftColor="#F5D800"
          borderLeftStyle="solid"
          paddingLeft="10px"
          mx="10px"
        >
          {descriptions.map((item) => {
            return (
              <Text
                fontSize="12px"
                lineHeight="18px"
                fontWeight="500"
                key={item.id}
              >
                {item.description}
              </Text>
            )
          })}
        </Box>
      </VStack>
    </Center>
  )
}

export default function FanInvestorIncomePackgage() {
  return (
    <Container maxW="container.xl">
      <Box my="56px">
        <Box mb="55px">
          <LineHeaderSection />
        </Box>
        <TitleSection title="Fanvestor Income Packages" />

        <SimpleGrid columns={{ base: 1, md: 3 }} mt="45px">
          <Package
            icon={<InvestorToEarnIcon />}
            title="Invest to Earn"
            text={'Access Artist’s project pools to invest and earn profits.'}
            descriptions={[
              {
                id: 1,
                description: 'Invest in NFT',
              },
              {
                id: 2,
                description: 'Invest in Project',
              },
              {
                id: 3,
                description: 'Shared opportunities',
              },
            ]}
          />

          <Package
            icon={<EnjoyToEarnIcon />}
            title="Enjoy to Earn"
            text={
              'Score and convert your entertainment activities into income benefits'
            }
            descriptions={[
              {
                id: 1,
                description: 'GameFi (blindbox, lottery)',
              },
              {
                id: 2,
                description: 'Trading on Marketplace',
              },
              {
                id: 3,
                description: 'Brand campaign ',
              },
              {
                id: 4,
                description: 'Cashback',
              },
            ]}
          />
          <Package
            icon={<EngageToEarnIcon />}
            title="Engage to Earn"
            text={'Complete Daily Missions to get rewards'}
            descriptions={[
              {
                id: 1,
                description: 'Invite user',
              },
              {
                id: 2,
                description: 'Like/ Share/ Voting ',
              },
              {
                id: 3,
                description: 'View/ Engagement',
              },
            ]}
          />
        </SimpleGrid>
        <Center mt="45px">
          <Button
            color="#000"
            fontSize="16px"
            lineHeight="19px"
            fontWeight="bold"
            bg="#F5D800"
          >
            Become Fanvestor Now
          </Button>
        </Center>
      </Box>
    </Container>
  )
}
