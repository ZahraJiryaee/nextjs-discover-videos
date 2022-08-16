import Head from "next/head";

import Navbar from "../components/navbar/navbar";
import Banner from "../components/banner/banner";
import SectionCards from "../components/card/section-cards";

import { getVideos } from "../lib/videos";

import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  // all video content
  const disneyVideos = getVideos();
  return { props: { disneyVideos } };
}

export default function Home({ disneyVideos }) {
  console.log("disneyVideos:", disneyVideos);
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar username="zahrajiryaee77@gmail.com" />

      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />

      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards
          title="Productivity"
          videos={disneyVideos}
          size="medium"
        />
      </div>
    </div>
  );
}
