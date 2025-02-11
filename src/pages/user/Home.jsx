import React from 'react'
import Hero from '../../components/Hero'
import Category from './Category'

function Home() {
  
  return <>
  <main className='pb-20 md:pb0'>
        <Hero />
    <Category />
  </main>

  </>
}

export default Home