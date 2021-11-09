import { Text } from '@chakra-ui/layout'

const TitleSection = ({ title }: { title: string }) => {
  return (
    <Text
      fontWeight="bold"
      fontSize="30px"
      lineHeight="35px"
      textAlign="center"
      color="#fff"
    >
      {title}
    </Text>
  )
}

export default TitleSection
