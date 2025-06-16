import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Contact from '@/components/templates/contact/ContactUs/Contact'
import React from 'react'
import connectToDB from "@/configs/db";
import DepartmentModel from "@/models/Department"

async function page() {

    connectToDB()
    const departments = await DepartmentModel.find({}).sort({_id: -1})
  

  return (
    <>
      <Navbar />
      <main id="content">
        <Breadcrumb title={"تماس با ما"} />
        <Contact  departments={departments} />
      </main>
      <Footer />
    </>
  )
}

export default page
