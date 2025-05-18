import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Terms from '@/components/templates/rules/Terms'
import React from 'react'

function page() {
  return (
    <>
      <Navbar />
      <main id="content">
        <Breadcrumb />
        <Terms />
      </main>
      <Footer />
    </>
  )
}

export default page
