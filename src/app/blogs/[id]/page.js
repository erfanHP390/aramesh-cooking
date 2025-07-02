import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Blog from '@/components/templates/blogs/single/Blog'
import connectToDB from '@/configs/db'
import React from 'react'
import BlogModel from "@/models/Blog"

export async function generateMetadata({ params }) {
  connectToDB()
  const blog = await BlogModel.findOne({ _id: params.id }).lean()
  
  return {
    title: `${blog.title} | وبلاگ تخصصی آشپزی آرامش`,
    description: blog.shortDesc || "مقاله ای تخصصی درباره آشپزی و پذیرایی",
    alternates: {
      canonical: `https://aramesh-cooking.ir/blogs/${params.id}`,
    },
    openGraph: {
      title: `${blog.title} | آرامش`,
      description: blog.shortDesc,
      images: [
        {
          url: blog.img,
          width: 800,
          height: 600,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${blog.title} | آرامش`,
      description: blog.shortDesc,
      images: [blog.img],
    },
    robots: {
      index: true,
      follow: true,
    }
  }
}

async function page({ params }) {
  connectToDB()
  const blog = await BlogModel.findOne({ _id: params.id }).populate("comments").lean()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.shortDesc,
    image: blog.img,
    author: {
      '@type': 'Person',
      name: blog.author,
    },
    datePublished: new Date(blog.createdAt).toISOString(),
    dateModified: new Date(blog.updatedAt || blog.createdAt).toISOString(),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="content">
        <Breadcrumb 
          title={blog.title} 
          titr={blog.title} 
        />
        <Blog blog={JSON.parse(JSON.stringify(blog))} />
      </main>
    </>
  )
}

export default page