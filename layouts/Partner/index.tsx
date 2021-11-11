import { Box } from '@chakra-ui/layout'
import Intro from './Intro'
import Artist from './Artist'
import WhatYouGet from './WhatYouGet'
import FanRelationship from './FanRelationship'
import LookingToLaunch from './LookingToLaunch'
import LookingToConnect from './LookingToConnect'
import PartnerBenefits from './PartnerBenefits'
import Partners from './Partners'

const Partner = () => {
  return (
    <Box
      bgImage="url('/images/full-bg.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Intro />
      <Artist />
      <WhatYouGet />
      <FanRelationship />
      <LookingToLaunch />
      <Partners />
      <PartnerBenefits />
      <LookingToConnect />
    </Box>
  )
}

export default Partner
