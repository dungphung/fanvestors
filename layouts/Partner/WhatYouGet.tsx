import { Box, Container, SimpleGrid, Text, VStack } from '@chakra-ui/layout'
import LineHeaderSection from 'components/LineHeaderSection'
import TitleSection from 'components/TitleSection'
import Image from 'next/image'

const WhatYouGetItem = ({
  title = 'Has a Fandom',
  description = '',
  src = '',
}) => {
  return (
    <Box mr="30px">
      <VStack>
        <Image src={src} width={231} height={152} alt="icon" />
      </VStack>
      <VStack maxW="231px">
        <Text
          mt="25px"
          maxW="231px"
          fontSize="25px"
          fontWeight="bold"
          lineHeight="29px"
          textAlign="center"
        >
          {title}
        </Text>
        <Text
          maxW="231px"
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
  return (
    <Box>
      <Container maxW="container.lg" pb="46px">
        <LineHeaderSection />
        <Box mt="37px">
          <TitleSection title="Fanvestors income packages" />
        </Box>
        <SimpleGrid columns={3} mt="56px">
          <WhatYouGetItem
            description="New creative world. For limitless creative expression. NFT digital items are taking the world of art by storm."
            title="Has a Fandom"
            src="/images/partner/what-you-get/creativity-first.png"
          />
          <WhatYouGetItem
            description="More digital collectibles out for trade. As an new, meaningful means of engagement. "
            title="Want extra income"
            src="/images/partner/what-you-get/engaging.png"
          />
          <WhatYouGetItem
            description="Revolutionized and recurring revenue stream. Remove barriers to global market & multi currency trade. "
            title="Open mind"
            src="/images/partner/what-you-get/earning.png"
          />
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default WhatYouGet
