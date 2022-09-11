import type { NextPage } from 'next'
import Head from 'next/head'
import BannerHome from '../components/banner/bannerHome'
import { WhatIsThisProject } from '../components/home'
import RoadMap from '../components/home/roadMap'
import TryDemo from '../components/home/tryDemo'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Your Things</title>
        <meta name="description" content="" />
        <link rel="icon" href="/img/logo/logo_star.png" />
      </Head>
      <BannerHome />
      <WhatIsThisProject />
      <TryDemo />
      <RoadMap />
    </div>
  )
}

export default Home
