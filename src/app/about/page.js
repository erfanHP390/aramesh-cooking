import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import AboutUs from '@/components/templates/aboutUs/aboutUs/AboutUs'
import Services from '@/components/templates/aboutUs/services/Services'
import Subscribe from '@/components/templates/aboutUs/subscribe/Subscribe'
import Statistic from '@/components/templates/index/statistic/Statistic'
import Team from '@/components/templates/index/team/Team'
import React from 'react'

function page() {
  return (
    <>
      <main id="content">
        <Breadcrumb  title={"درباره ما"}   />
        <AboutUs />
        <Services />
        <Statistic />
        <Team />
        <Subscribe />
      </main>
    </>
  )
}

export default page
