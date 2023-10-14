import React from "react";
import NavigationBar from "../components/Home/NavigationBar";
import Hero from "../components/Home/Hero";
import ContentOne from "../components/Home/ContentOne";
import ExploreShoes from "../components/Home/ExploreShoes";
import TheHype from "../components/Home/TheHype";
import IntroducingModel from "../components/Home/IntroducingModel";
import OurStory from "../components/Home/OurStory";
import Featured from "../components/Home/Featured";
import OojaEveryday from "../components/Home/OojaEveryday";

function HomePage() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <ContentOne />
      <ExploreShoes />
      <TheHype />
      <IntroducingModel />
      <OurStory />
      <Featured />
      <OojaEveryday />
    </div>
  );
}

export default HomePage;
