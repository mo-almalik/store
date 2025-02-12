import React from 'react'
import Hero from '../../components/Hero'
import Category from './Category'
import ProdactsPage from './ProdactsPage'

function Home() {
  
  return <>
  <main className='pb-20 md:pb0'>
        <Hero />
        <Category />
        <ProdactsPage />
  </main>

  </>
}

export default Home