import { Box, Center, Container, SimpleGrid, Text } from '@chakra-ui/layout'
import HasaFandom from 'components/svgs/partners/artis/HasaFandom'
import Enjoy from 'components/svgs/partners/artis/Enjoy'
import OpenMind from 'components/svgs/partners/artis/OpenMind'
import WantExtraIncome from 'components/svgs/partners/artis/WantExtraIncome'

import Image from 'next/image'
import LineHeaderSection from 'components/LineHeaderSection'
import TitleSection from 'components/TitleSection'
import { Button } from '@chakra-ui/button'

const ArtistItem = ({ title = 'Has a Fandom', Icon }) => {
  return (
    <Box mr="30px">
      <Box
        bg="#141414"
        borderRadius="12px"
        w="205px"
        h="223px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Icon />
      </Box>
      <Text
        mt="25px"
        fontSize="25px"
        fontWeight="bold"
        lineHeight="29px"
        textAlign="center"
      >
        {title}
      </Text>
    </Box>
  )
}

const Artist = () => {
  return (
    <Box bg="rgba(0, 0, 0, 0.35)" pb="46px">
      <Container maxW="container.lg">
        <LineHeaderSection />
        <Box mt="37px">
          <TitleSection title="Fanvestors income packages" />
        </Box>
        <SimpleGrid columns={4} mt="56px">
          <ArtistItem title="Has a Fandom" Icon={HasaFandom} />
          <ArtistItem title="Want extra income" Icon={WantExtraIncome} />
          <ArtistItem title="Open mind" Icon={OpenMind} />
          <ArtistItem title="Enjoy new Experiment" Icon={Enjoy} />
        </SimpleGrid>

        <Center mt="36px">
          <Button bg="#F5D800" fontSize="16px" lineHeight="19px" color="#000">
            Register to launch your own Fanpass
          </Button>
        </Center>
      </Container>
    </Box>
  )
}

export default Artist
