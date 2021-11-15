import { Flex, Text } from '@chakra-ui/layout'

const TitleSection = ({ title, ...rest }: { title: string }) => {
  return (
    <Flex justifyContent="center">
      <Text
        fontWeight="bold"
        fontSize="30px"
        lineHeight="35px"
        textAlign="center"
        color="#fff"
        maxW="450px"
        {...rest}
      >
        {title}
      </Text>
    </Flex>
  )
}

export default TitleSection
