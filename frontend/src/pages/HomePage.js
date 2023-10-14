import React from 'react'
import NavigationBar from '../components/Home/NavigationBar';
import Hero from '../components/Home/Hero';
import ContentOne from '../components/Home/ContentOne';

function HomePage() {
  return (
      <div>
          <NavigationBar />
          <Hero />
          <ContentOne />
    </div>
  );
}

export default HomePage