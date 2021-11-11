import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FanInvestorIncomePackgage from 'layouts/info/FanInvestorIncomePackage'
import FanBecomeFanInvestor from 'layouts/info/FanBecomeFanInvestor'
import AllFanInvestor from 'layouts/info/AllFanInvestor'
import IntroFanInvestor from 'layouts/info/IntroFanInvestor'
import styles from '../styles/Home.module.css'
import Fanvestors from 'layouts/fanvestors'
import FanPassOffering from 'layouts/fanpass-offering'
import Partners from 'layouts/Partner'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Partners />
    </div>
  )
}

export default Home
