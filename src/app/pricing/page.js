import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Subscribe from '@/components/templates/aboutUs/subscribe/Subscribe'
import Plans from '@/components/templates/pricing/Plans'
import React from 'react'

function page() {
  return (
    <>
      <Navbar />
      <main id="content">
        <Breadcrumb />
        <Plans />
        <Subscribe />
      </main>
      <Footer />
    </>
  )
}

export default page
