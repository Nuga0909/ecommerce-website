import React from "react";
import Hero from "../components/Home/Hero";
import ContentOne from "../components/Home/ContentOne";
import TheHype from "../components/Home/TheHype";
import IntroducingModel from "../components/Home/IntroducingModel";
import OurStory from "../components/Home/OurStory";
import Featured from "../components/Home/Featured";
import OojaEveryday from "../components/Home/OojaEveryday";
import Woman from "../components/Home/Woman";
import Man from "../components/Home/Man";

function HomePage() {
  return (
    <div>
      <Hero />
      <ContentOne />
      <Woman />
      <Man />
      <TheHype />
      {/* <IntroducingModel /> */}
      <OurStory />
      <Featured />
      <OojaEveryday />
    </div>
  );
}

export default HomePage;
