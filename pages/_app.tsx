import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import HeaderSection from 'layouts/HeaderSection'
import FooterSection from 'layouts/FooterSection'

const theme = extendTheme({
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'Roboto',
  },
  shadows: {
    outline: 'none',
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <HeaderSection />
      <Component {...pageProps} />
      <FooterSection />
    </ChakraProvider>
  )
}

export default MyApp
