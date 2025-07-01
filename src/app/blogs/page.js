import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import AllBlog from '@/components/templates/blogs/allblog/AllBlog'
import connectToDB from '@/configs/db'
import React from 'react'
import BlogModel from "@/models/Blog"
import CommentModel from "@/models/Comment"

async function page() {

  connectToDB()
  const blogs = await BlogModel.find({}).populate("comments").lean()

  return (
    <>
      <main id="content">
        <Breadcrumb title={"مقالات"} />
        <AllBlog blogs={JSON.parse(JSON.stringify(blogs))} />
      </main>
    </>
  )
}

export default page
