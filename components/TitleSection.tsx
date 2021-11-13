import { Flex, Text } from '@chakra-ui/layout'

const TitleSection = ({ title }: { title: string }) => {
  return (
    <Flex justifyContent="center">
      <Text
        fontWeight="bold"
        fontSize="30px"
        lineHeight="35px"
        textAlign="center"
        color="#fff"
        maxW="450px"
      >
        {title}
      </Text>
    </Flex>
  )
}

export default TitleSection
