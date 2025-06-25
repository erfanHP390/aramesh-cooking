import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Plans from '@/components/templates/pricing/Plans'
import React from 'react'

function page() {
  return (
    <>
      <Navbar />
      <main id="content">
        <Breadcrumb title={"تعرفه ها"} />
        <Plans />
      </main>
      <Footer />
    </>
  )
}

export default page
