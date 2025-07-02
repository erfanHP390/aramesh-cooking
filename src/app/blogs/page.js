import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import AllBlog from '@/components/templates/blogs/allblog/AllBlog'
import connectToDB from '@/configs/db'
import React from 'react'
import BlogModel from "@/models/Blog"
import CommentModel from "@/models/Comment"

export const metadata = {
  title: "مقالات تخصصی آشپزی | وبلاگ آرامش",
  description: "مجموعه مقالات تخصصی در زمینه آشپزی، پذیرایی و آموزش‌های حرفه‌ای آشپزی با بهترین کیفیت",
  keywords: [
    "مقالات آشپزی",
    "آموزش آشپزی حرفه‌ای",
    "دستور پخت غذا",
    "تکنیک‌های آشپزی",
    "وبلاگ تخصصی آشپزی"
  ],
  alternates: {
    canonical: "https://aramesh-cooking.ir/blogs",
  },
  openGraph: {
    title: "مقالات تخصصی آشپزی | وبلاگ آرامش",
    description: "آخرین مقالات و آموزش‌های تخصصی در زمینه آشپزی و پذیرایی",
    url: "https://aramesh-cooking.ir/blogs",
    siteName: "آرامش",
    images: [
      {
        url: "https://aramesh-cooking.ir/images/og-blogs.jpg",
        width: 800,
        height: 600,
        alt: "مقالات تخصصی آشپزی",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  }
};

async function page() {
  connectToDB()
  const blogs = await BlogModel.find({}).populate("comments").lean()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://aramesh-cooking.ir/blogs',
    name: 'وبلاگ آشپزی آرامش',
    description: 'مقالات تخصصی در زمینه آشپزی و پذیرایی',
    url: 'https://aramesh-cooking.ir/blogs',
    publisher: {
      '@type': 'Organization',
      name: 'آرامش',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aramesh-cooking.ir/images/logo.png'
      }
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://aramesh-cooking.ir/blogs/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="content" itemScope itemType="https://schema.org/Blog">
        <Breadcrumb title={"مقالات آشپزی"} />
        <AllBlog blogs={JSON.parse(JSON.stringify(blogs))} />
      </main>
    </>
  )
}

export default page