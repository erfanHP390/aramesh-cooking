import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Login from '@/components/templates/login/Login'
import React from 'react'

function page() {
  return (
    <>
     <Navbar />
     <main id="content">
        <Breadcrumb title={"ورود"} />
        <Login />
     </main>
     <Footer /> 
    </>
  )
}

export default page
