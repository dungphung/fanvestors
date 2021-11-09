import { Box, Flex, HStack, SimpleGrid, Spacer } from '@chakra-ui/layout'
import { Container, Text } from '@chakra-ui/react'
import LineHeaderSection from 'components/LineHeaderSection'
import TitleSection from 'components/TitleSection'
import Image from 'next/image'

const Investor = () => {
  return (
    <HStack bg="#222222" px="30px" py="10px" borderRadius="6px" mb="12px">
      <Image
        src={require('/public/images/fan-img-small.png')}
        height="43px"
        width="43px"
        alt="fan"
      />
      <Text fontSize="16px" lineHeight="19px" color="#fff" fontWeight="500">
        Hoa Du Chan
      </Text>
      <Spacer />
      <Text fontSize="12px" lineHeight="14px" color="#AF87AB">
        Top Fans
      </Text>
      <Spacer />
      <Text fontSize="14px" lineHeight="16px" color="#F5D800" fontWeight="bold">
        ~$919,000
      </Text>
    </HStack>
  )
}

const TopFanvestor = () => {
  return (
    <Box
      mt="35px"
      bg="rgba(0, 0, 0, 0.65)"
      borderRadius="6px"
      w="184px"
      textAlign="center"
      // width="133px"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      style={{ padding: '18px 28px' }}
    >
      <Box
        height="133px"
        width="133px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{
          filter: 'drop-shadow(0px 0px 5px #F5D800)',
          borderRadius: '50%',
          width: 133,
          height: 133,
          border: '2px solid #F59300',
        }}
      >
        <Box
          height="122px"
          width="122px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ filter: 'drop-shadow(0px 0px 5px #F5D800)' }}
        >
          <div
            style={{
              border: '2px solid #F5D800',
              borderRadius: '50%',
              width: 100,
              height: 100,
            }}
          >
            <Image
              src={require('/public/images/investor-demo.png')}
              height="100px"
              width="100px"
              alt="fan-demo"
            />
          </div>
        </Box>
      </Box>

      <Text fontSize="18px" lineHeight="21px" fontWeight="500" mt="11px">
        ELLay King
      </Text>
      <Text
        fontSize="12px"
        lineHeight="14px"
        fontWeight="500"
        color="#AF87AB"
        mt="11px"
      >
        Top Fanvestor
      </Text>
      <Text
        fontSize="16px"
        lineHeight="19px"
        fontWeight="500"
        color="#F5D800"
        mt="11px"
      >
        ~$109,000
      </Text>
    </Box>
  )
}

const AllFanInvestor = () => {
  return (
    <Container maxW="container.lg">
      <Box my="56px">
        <Box mb="55px">
          <LineHeaderSection />
        </Box>
        <TitleSection title="Top 5 Fanvestor All Time" />
        <Text
          fontSize="14px"
          lineHeight="19px"
          color="white"
          textAlign="center"
          mt="6px"
        >
          Own FANPass and turn entertainement into your high earning career.
        </Text>

        <SimpleGrid columns={5}>
          {[1, 2, 3, 4, 5].map((item) => {
            return <TopFanvestor key={item} />
          })}
        </SimpleGrid>

        <Text
          mt="35px"
          fontWeight="500"
          fontSize="25px"
          lineHeight="29px"
          color="#F5D800"
          textAlign="center"
        >
          All Fanvestor
        </Text>
        <Box
          mt="25px"
          px="18px"
          py="48px"
          bg="rgba(72, 72, 72, 0.65)"
          borderRadius="6px"
        >
          <Flex mb="33px" justifyContent="flex-end">
            <Text fontWeight="500" fontSize="18px" lineHeight="21px">
              Choose
            </Text>
          </Flex>
          <Box
            px="14px"
            // py="45px"
            maxH="300px"
            overflowY="scroll"
            css={{
              '&::-webkit-scrollbar': {
                width: '2px',
              },
              '&::-webkit-scrollbar-track': {
                width: '2px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#C4C4C4',
                borderRadius: '24px',
              },
            }}
          >
            <Investor />
            <Investor />
            <Investor />
            <Investor />
            <Investor />
            <Investor />
            <Investor />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default AllFanInvestor
