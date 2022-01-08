import type { NextPage } from 'next'
import Head from 'next/head'
import Carousel from '../components/Carousel'
import Header from '../components/Header'

import { Container } from '../styles/styles'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Art || Page</title>
      </Head>
      <Container>
        <Header/>
        <Carousel/>
      </Container>
    </>
  )
}

export default Home
