import React from 'react'
import Hero from '../../components/Hero'
import Category from './Category'
import ProdactsPage from './ProdactsPage'
import AboutUs from './AboutUs'
import CTA from '../../components/CTA'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'


function Home() {
  const {t} = useTranslation()
  return <>
  <Helmet>
    <title>{t('navbar.home')}</title>
  </Helmet>
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