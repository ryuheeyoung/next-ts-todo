import Head from "next/head";
import { Container, Content, Main, Title } from "components/sharedstyles";
import BoardBox from "components/boardBox";
import TodayBox from "components/todayBox";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>할 일 목록</Title>
        <Content>
          <BoardBox></BoardBox>
          <TodayBox></TodayBox>
        </Content>
      </Main>
    </Container>
  );
}
