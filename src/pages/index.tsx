import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Video from "../components/Video";
import Presentation from "../components/Presentation";

import { Container } from "../styles/styles";

const Home: NextPage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 3500);
  }, []);

  return (
    <>
      <Head>
        <title>Art || Page</title>
      </Head>
      <Presentation />
      {visible && (
        <Container>
          <Header />
          <Video />
        </Container>
      )}
    </>
  );
};

export default Home;
