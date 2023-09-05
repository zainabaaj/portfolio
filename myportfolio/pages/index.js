import React, { useRef } from "react";
import Page from "../components/page";
import Intro from "@/components/Intro";
import Resume from "@/components/Resume";
import BackgroundImage from "@/components/BackgroundImage";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
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

      <div style={{
        backgroundImage: "url('/projpg3.jpg')", backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <Resume id="resume" />
        <Portfolio id="portfolio" />
        <Contact id="contact" />

      </div>


    </Page>
  );
}
