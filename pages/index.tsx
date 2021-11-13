import type { NextPage } from 'next'

import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'

const Home: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    router.replace('/fanvestors')
  }, [router])

  return null
}

export default Home
