import { Box } from '@chakra-ui/layout'
import Banner from './Banner'
import FeatureFanPass from './FeatureFanPass'
import HowToBuyFanPass from './HowToBuyFanPass'

const FanPassOffering = () => {
  return (
    <Box bgImage="url('/images/full-bg.png')">
      <Banner />
      <FeatureFanPass />
      <HowToBuyFanPass />
    </Box>
  )
}

export default FanPassOffering
