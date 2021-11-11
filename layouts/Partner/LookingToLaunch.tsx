import { Box, VStack, Text } from '@chakra-ui/layout'

const LookingToLaunch = () => {
  return (
    <Box>
      <VStack py="60px" px={['20px', 0]}>
        <Box
          display="inline-block"
          bg="linear-gradient(90deg, rgba(96, 79, 22, 0.05) 0%, rgba(145, 116, 17, 0.05) 39.48%)"
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
              <Text
                bgGradient="linear-gradient(90deg, #B19122 0%, #E8BA1D 31.28%, #F4C31C 58.37%, #E8BA1D 73.89%, #B19122 98.31%)"
                bgClip="text"
                fontSize="30px"
                lineHeight="35px"
                fontWeight="bold"
              >
                LOOKING TO LAUNCH YOUR FANPASS?
              </Text>
              <Text
                maxW="379px"
                mt="15px"
                fontSize="16px"
                lineHeight="19px"
                color="#9F9F9F"
                textAlign={['left', 'center']}
              >
                If you're interested in partnering with FAM Central, send us an
                email to get started.
              </Text>
              <Text
                mt={['13px', '11px']}
                fontSize="16px"
                lineHeight="19px"
                textDecorationLine="underline"
                fontWeight="500"
              >
                artist@fanvestor.asia
              </Text>
            </VStack>
          </Box>
        </Box>
      </VStack>
    </Box>
  )
}

export default LookingToLaunch
