import AuthorBlogs from "@/components/templates/blogs/authorBlogs/AuthorBlogs";
import connectToDB from "@/configs/db";
import React from "react";
import BlogModel from "@/models/Blog"
import CommentModel from "@/models/Comment"

async function page({params}) {  

  const author = decodeURIComponent(params.id)

  connectToDB();
  const blogs = await BlogModel.find({author: decodeURIComponent(params.id)}).populate("comments").lean()

  return (
    <>
      <main id="content">
        <AuthorBlogs  author={author}  blogs={JSON.parse(JSON.stringify(blogs))}  />
      </main>
    </>
  );
}

export default page;
