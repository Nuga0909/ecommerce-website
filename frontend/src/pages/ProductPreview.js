import React from 'react'
import NavigationBar from '../components/Home/NavigationBar'
import PreviewHero from '../components/ProductPreview/PreviewHero'
import RatingsReviews from '../components/ProductPreview/RatingsReviews'
import Footer from '../components/Home/Footer'

function ProductPreview() {
  return (
      <div>
          <NavigationBar />
          <PreviewHero />
          <RatingsReviews />
          <Footer />
    </div>
  )
}

export default ProductPreview