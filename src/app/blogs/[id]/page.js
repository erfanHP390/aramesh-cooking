import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Blog from '@/components/templates/blogs/single/Blog'
import connectToDB from '@/configs/db'
import React from 'react'
import BlogModel from "@/models/Blog"

async function page({params}) {
    connectToDB()
    const blog = await BlogModel.findOne({_id: params.id}).populate("comments").lean()

  return (
    <>
      <main id="content">'
        <Breadcrumb title={`${blog.titr}`} titr={`${blog.title}`} />
        <Blog  blog={JSON.parse(JSON.stringify(blog))} />
      </main>
    </>
  )
}

export default page
