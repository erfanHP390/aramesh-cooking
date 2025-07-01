import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Contact from '@/components/templates/contact/ContactUs/Contact'
import React from 'react'
import connectToDB from "@/configs/db";
import DepartmentModel from "@/models/Department"

async function page() {

    connectToDB()
    const departments = await DepartmentModel.find({}).sort({_id: -1})
  

  return (
    <>
      <main id="content">
        <Breadcrumb title={"تماس با ما"} />
        <Contact  departments={departments} />
      </main>
    </>
  )
}

export default page
