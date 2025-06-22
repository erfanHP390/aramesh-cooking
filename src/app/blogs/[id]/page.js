import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Blog from '@/components/templates/blogs/single/Blog'
import connectToDB from '@/configs/db'
import React from 'react'
import BlogModel from "@/models/Blog"

async function page({params}) {
    connectToDB()
    const blog = await BlogModel.findOne({_id: params.id}).lean()

  return (
    <>
      <Navbar />
      <main id="content">'
        <Breadcrumb title={`${blog.titr}`} titr={`${blog.title}`} />
        <Blog  blog={JSON.parse(JSON.stringify(blog))} />
      </main>
      <Footer />
    </>
  )
}

export default page
