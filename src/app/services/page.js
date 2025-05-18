import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Brands from '@/components/templates/services/barnds/Brands'
import Service from '@/components/templates/services/service/Service'
import React from 'react'

function page() {
  return (
    <>
      <Navbar />
      <main id="content">
        <Breadcrumb />
        <Service />
        <Brands />
      </main>
      <Footer />
    </>
  )
}

export default page
