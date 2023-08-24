import React, { useRef } from "react";
import Page from "../components/page";
import Intro from "@/components/Intro";
import Resume from "@/components/Resume";
import BackgroundImage from "@/components/BackgroundImage";
import Portfolio from "@/components/Portfolio";
export default function Home() {
  const config = {
    type: "spring",
    damping: 20,
    stiffness: 100
  };
  return (
    <Page >
      {/* <BackgroundImage /> */}
      <Intro id="intro" />
      <Resume id="resume" />
      <Portfolio id="portfolio" />

    </Page>
  );
}
