import React from 'react'

import { Box } from '@chakra-ui/layout'
import SEO from 'components/Seo'

const WrapperPages: React.FC = ({ children }) => {
  return (
    <>
      <SEO title="Famvestor" description="Fanvestor" img="/thumnaild.png" />
      <Box
        bgImage={{
          base: "url('/images/bg-mobile.png')",
          md: "url('/images/full-bg.png')",
        }}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center center"
        overflow="hidden"
        mt={{
          base: 0,
          lg: 32,
        }}
      >
        {children}
      </Box>
    </>
  )
}

export default WrapperPages
