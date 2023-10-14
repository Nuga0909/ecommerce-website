import React from "react";
import NavigationBar from "../components/Home/NavigationBar";
import Hero from "../components/Home/Hero";
import ContentOne from "../components/Home/ContentOne";
import ExploreShoes from "../components/Home/ExploreShoes";

function HomePage() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <ContentOne />
      <ExploreShoes />
    </div>
  );
}

export default HomePage;
