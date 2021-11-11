import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  VStack,
  Text,
} from '@chakra-ui/layout'
import LineHeaderSection from 'components/LineHeaderSection'
import TitleSection from 'components/TitleSection'
import ActivityIcon from 'components/svgs/partners/Acitivy'
import CooperateIcon from 'components/svgs/partners/Cooperate'

import EarnIcon from 'components/svgs/partners/Earn'

const PartnersItem = ({ Icon, title = '', isCenter = false }) => {
  return (
    <Box
      display="block"
      bg={isCenter ? '#282402' : 'transparent'}
      py="30px"
      borderRadius="12px"
      border={`1px solid ${isCenter ? '#F5D800' : 'transparent'}`}
    >
      <VStack>
        <Icon />
        <Text
          fontSize="18px"
          textAlign="center"
          textTransform="capitalize"
          lineHeight="21px"
          fontWeight="bold"
          maxW={['285px', '230px']}
        >
          {title}
        </Text>
      </VStack>
    </Box>
  )
}

const Partners = () => {
  return (
    <Box bg="rgba(0, 0, 0, 0.35)">
      <Container maxW="container.lg">
        <LineHeaderSection />
        <Box mt="37px">
          <TitleSection title="Partners" />
        </Box>
        <VStack>
          <Text
            fontSize="14px"
            lineHeight="16px"
            mt="7px"
            maxW="260px"
            textAlign="center"
          >
            Partners and FAM Central will work together to onboard artists and
            launch their FAN Pass
          </Text>
        </VStack>
        <SimpleGrid columns={[1, 3]} spacingX={10} mt="43px" pb="121px">
          <PartnersItem
            Icon={ActivityIcon}
            title="Actively engage with
artists to launch FAN Pass"
          />
          <PartnersItem
            isCenter
            Icon={EarnIcon}
            title="Help to create opportunities for Fanvestors to enjoy & earn"
          />
          <PartnersItem
            Icon={CooperateIcon}
            title="Cooperate to Operate for your artists "
          />
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Partners
