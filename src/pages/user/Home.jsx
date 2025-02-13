import React from 'react'
import Hero from '../../components/Hero'
import Category from './Category'
import ProdactsPage from './ProdactsPage'
import AboutUs from './AboutUs'

function Home() {
  
  return <>
  <main className='pb-20 md:pb0'>
        <Hero />
        <Category />
        <ProdactsPage />
        <AboutUs />
  </main>

  </>
}

export default Home