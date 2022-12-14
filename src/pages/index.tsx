import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Video from "../components/Video";

import { Container } from "../styles/styles";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Art || Page</title>
      </Head>
      <Container>
        <Header />
        <Video />
      </Container>
    </>
  );
};

export default Home;
