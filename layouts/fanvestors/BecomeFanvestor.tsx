import {
  Box,
  Container,
  Flex,
  Text,
  Grid,
  GridItem,
  Image,
  Stack,
  Center,
  Button,
} from '@chakra-ui/react'
import LineHeaderSection from 'components/LineHeaderSection'
import TitleSection from 'components/TitleSection'

const Item = ({
  image,
  title,
  description,
  width = '53px',
  mobileWidth = '68px',
}) => {
  return (
    <Stack direction="column" spacing="10px" alignItems="center" mt="10px">
      <Box h="90px" display="flex" justifyContent="center" alignItems="center">
        <Image
          src={image}
          width={{
            base: mobileWidth,
            md: width,
          }}
          alt="create-account"
        />
      </Box>
      <Text
        mt="20px"
        fontSize="25px"
        lineHeight="29px"
        fontWeight="bold"
        textAlign="center"
        color="white"
      >
        {title}
      </Text>
      <Text
        px={{ base: '0', md: '15px', lg: '0' }}
        textAlign="center"
        fontSize="16px"
        lineHeight="19px"
        maxW="259px"
        color="white"
      >
        {description}
      </Text>
    </Stack>
  )
}

const CustomGirdItemFirst = ({ children }) => {
  return (
    <GridItem
      colSpan={{
        base: 1,
        md: 1,
      }}
      p={{ base: '43px', md: '20px 10px' }}
      borderRadius="12px"
    >
      <Box
        className="customGridInFanvestor"
        w={{ base: '100%', md: '100%', lg: '334px' }}
        h={{ base: '100%', md: '100%', lg: '334px' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        max="334px"
        // maxH="334px"
        py={{ base: 0, md: '20px', lg: 0 }}
      >
        {children}
      </Box>
    </GridItem>
  )
}

const BecomeFanvestor = () => {
  return (
    <Container maxW="container.lg">
      <LineHeaderSection />
      <Box mt="37px">
        <TitleSection title="How to become a fanvestor" />
      </Box>
      <Center mt="45px" pb="45px">
        <Button
          color="#000"
          fontSize="16px"
          lineHeight="19px"
          fontWeight="bold"
          bg="#F5D800"
        >
          Join us as Fanvestor
        </Button>
      </Center>
      <Grid
        mt="37px"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        <CustomGirdItemFirst>
          <Item
            image="/images/fanvestor/become-fanvestor/create-account.png"
            title="1. Create Account"
            description="Register and create an account in seconds with your phone number and email."
          />
        </CustomGirdItemFirst>
        <CustomGirdItemFirst>
          <Item
            width="83px"
            mobileWidth="83px"
            height="83px"
            image="/images/fanvestor/become-fanvestor/get-fam-token.png"
            title="2. Get Fam Token"
            description="Fuel your account with $FAM by using payment gateway. You first need to verify your account (KYC)."
          />
        </CustomGirdItemFirst>
        <CustomGirdItemFirst>
          <Item
            width="65px"
            mobileWidth="72px"
            image="/images/fanvestor/become-fanvestor/buy-fan-pass.png"
            title="3. Buy Fan Pass"
            description="Get your Fan Pass during Fanpass Offering or via P2P Marketplace. Do not forget to top-up your wallet with the accepted coin to make purchase. Think of it like a currency exchange when you are flying abroad."
          />
        </CustomGirdItemFirst>
      </Grid>

      <Grid
        mt={{ base: 0, md: '30px' }}
        mx={{ base: 0, md: 0, lg: '150px' }}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        pb="45px"
      >
        <CustomGirdItemFirst>
          <Item
            width="82px"
            image="/images/fanvestor/become-fanvestor/be-active.png"
            title="4. Be Active And Earn FP"
            description="Take part in various in-app events that fanvestors can enjoy, engage and invest to earn much more income as well as digital assets.  "
          />
        </CustomGirdItemFirst>
        <CustomGirdItemFirst>
          <Item
            width="111px"
            image="/images/fanvestor/become-fanvestor/income.png"
            title="5. Maximise Your Incomes"
            description="Discover features and follow latest updates to claim your chance of amazing, valuable assets."
          />
        </CustomGirdItemFirst>
      </Grid>
    </Container>
  )
}

export default BecomeFanvestor
