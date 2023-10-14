import React from "react";
import NavigationBar from "../components/Home/NavigationBar";
import Hero from "../components/Home/Hero";
import ContentOne from "../components/Home/ContentOne";
import ExploreShoes from "../components/Home/ExploreShoes";
import TheHype from "../components/Home/TheHype";
import IntroducingModel from "../components/Home/IntroducingModel";

function HomePage() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <ContentOne />
      <ExploreShoes />
      <TheHype />
      <IntroducingModel/>
    </div>
  );
}

export default HomePage;
