import React from 'react'
import Hero from '../../components/Hero'
import Category from './Category'
import ProdactsPage from './ProdactsPage'
import AboutUs from './AboutUs'
import CTA from '../../components/CTA'


function Home() {
  
  return <>
  <main>
        <Hero />
        <Category />
        <ProdactsPage />
        <AboutUs />
        <CTA />
       
  </main>

  </>
}

export default Home