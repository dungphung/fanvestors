import { Box, VStack, Text } from '@chakra-ui/layout'

const LookingToConnect = () => {
  return (
    <Box bg="rgba(0, 0, 0, 0.35)">
      <VStack py="60px" px={['20px', 0]}>
        <Box
          display="inline-block"
          bg="linear-gradient(94.21deg, #B19122 16.18%, #F4C31C 100%)"
          border="1px solid #FFFDF4"
          borderRadius="15px"
          boxShadow="0px 0px 20px rgba(245, 216, 0, 0.45)"
        >
          <Box
            bg="rgba(0, 0, 0, 0.35)"
            px={['32px', '77px']}
            py={['26px', '37px']}
            borderRadius="15px"
          >
            <VStack display={['block', 'flex']}>
              <Text fontSize="30px" lineHeight="35px" fontWeight="bold">
                LOOKING TO CONNECT YOUR ARTISTS?
              </Text>
              <Text
                maxW="379px"
                mt="15px"
                fontSize="16px"
                lineHeight="19px"
                color="#F1F1F1"
                textAlign={['left', 'center']}
              >
                If you're interested in partnering with FAM Central, send us an
                email to get started.
              </Text>
              <Text
                mt="11px"
                fontSize="16px"
                lineHeight="19px"
                textDecorationLine="underline"
                fontWeight="500"
                color="#000000"
              >
                partner@fanvestor.asia
              </Text>
            </VStack>
          </Box>
        </Box>
      </VStack>
    </Box>
  )
}

export default LookingToConnect
