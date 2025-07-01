import SearchBlog from "@/components/templates/blogs/search/SearchBlog";
import connectToDB from "@/configs/db";
import React from "react";
import BlogModel from "@/models/Blog"
import CommentModel from "@/models/Comment"

async function page() {

  connectToDB()
  const blogs = await BlogModel.find({}).populate("comments").lean()

  return (
    <>
      <main id="content">
        <SearchBlog  blogs={JSON.parse(JSON.stringify(blogs))} />
      </main>
    </>
  );
}

export default page;
