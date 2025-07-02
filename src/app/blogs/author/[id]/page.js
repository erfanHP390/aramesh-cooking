import AuthorBlogs from "@/components/templates/blogs/authorBlogs/AuthorBlogs";
import connectToDB from "@/configs/db";
import React from "react";
import BlogModel from "@/models/Blog";
import CommentModel from "@/models/Comment";

export async function generateMetadata({ params }) {
  const author = decodeURIComponent(params.id);
  
  return {
    title: `مقالات ${author} | نویسنده وبلاگ آشپزی آرامش`,
    description: `مقالات و مطالب تخصصی نوشته شده توسط ${author} در زمینه آشپزی و پذیرایی`,
    alternates: {
      canonical: `https://aramesh-cooking.ir/blogs/author/${params.id}`,
    },
    openGraph: {
      title: `مقالات ${author} | آرامش`,
      description: `مجموعه مقالات تخصصی در زمینه آشپزی و پذیرایی نوشته شده توسط ${author}`,
      images: [
        {
          url: "/images/og-author-default.jpg",
          width: 800,
          height: 600,
          alt: `تصویر نویسنده ${author}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `مقالات ${author} | آرامش`,
      description: `مقالات تخصصی آشپزی نوشته شده توسط ${author}`,
      images: ["/images/twitter-author-default.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    }
  }
}

async function page({ params }) {
  const author = decodeURIComponent(params.id);
  connectToDB();
  const blogs = await BlogModel.find({ author }).populate("comments").lean();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author,
    description: `نویسنده تخصصی در زمینه آشپزی و پذیرایی`,
    image: "/images/profile-user.png",
    url: `https://aramesh-cooking.ir/blogs/author/${params.id}`,
    hasOccupation: {
      '@type': 'Occupation',
      name: 'نویسنده و آشپز حرفه‌ای'
    },
    authorOf: blogs.map(blog => ({
      '@type': 'BlogPosting',
      name: blog.title,
      url: `https://aramesh-cooking.ir/blogs/${blog._id}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="content" itemScope itemType="https://schema.org/CollectionPage">
        <AuthorBlogs author={author} blogs={JSON.parse(JSON.stringify(blogs))} />
      </main>
    </>
  );
}

export default page;