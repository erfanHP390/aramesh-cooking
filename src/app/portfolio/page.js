import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Gallery from '@/components/templates/portfolio/Gallery'
import React from 'react'

function page() {
  return (
    <>
      <Navbar />
      <main id="content">\
        <Breadcrumb />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}

export default page
