import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import ForgotPass from '@/components/templates/forgot/ForgotPass'
import React from 'react'

function page() {
  return (
    <>
      <Navbar />
      <main id="content">
        <Breadcrumb title={"بازیابی رمزعبور"} />
        <ForgotPass />
      </main>
      <Footer />
    </>
  )
}

export default page
