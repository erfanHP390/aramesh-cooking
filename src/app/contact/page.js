import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Contact from '@/components/templates/contact/ContactUs/Contact'
import React from 'react'

function page() {
  return (
    <>
      <Navbar />
      <main id="content">
        <Breadcrumb />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default page
