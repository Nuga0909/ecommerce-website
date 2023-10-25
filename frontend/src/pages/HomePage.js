import React from "react";
import Hero from "../components/Home/Hero";
import ContentOne from "../components/Home/ContentOne";
import TheHype from "../components/Home/TheHype";
import OurStory from "../components/Home/OurStory";
import Featured from "../components/Home/Featured";
import OojaEveryday from "../components/Home/OojaEveryday";
import Woman from "../components/Home/Woman";
import Man from "../components/Home/Man";
import Bags from "../components/Home/Bags";

function HomePage() {
  return (
    <div>
      <Hero />
      <ContentOne />
      <Woman />
      <Man />
      <Bags />
      <TheHype />
      <OurStory />
      <Featured />
      <OojaEveryday />
    </div>
  );
}

export default HomePage;
