import SearchBlog from "@/components/templates/blogs/search/SearchBlog";
import connectToDB from "@/configs/db";
import React from "react";
import BlogModel from "@/models/Blog";
import CommentModel from "@/models/Comment";

export const metadata = {
  title: "جستجوی مقالات | وبلاگ تخصصی آشپزی آرامش",
  description: "جستجو در میان مقالات تخصصی آشپزی، پذیرایی و آموزش‌های آشپزی حرفه‌ای",
  keywords: [
    "جستجوی مقالات آشپزی",
    "مقالات تخصصی آشپزی",
    "آموزش آشپزی",
    "مجله آشپزی آرامش",
    "جستجوی دستور پخت"
  ],
  alternates: {
    canonical: "https://aramesh-cooking.ir/blogs/search",
  },
  openGraph: {
    title: "جستجوی مقالات | وبلاگ آشپزی آرامش",
    description: "جستجو در میان صدها مقاله تخصصی آشپزی و پذیرایی",
    url: "https://aramesh-cooking.ir/blogs/search",
    siteName: "آرامش",
    images: [
      {
        url: "https://aramesh-cooking.ir/images/og-search.jpg",
        width: 800,
        height: 600,
        alt: "جستجوی مقالات آشپزی",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  }
};

async function page() {
  connectToDB();
  const blogs = await BlogModel.find({}).populate("comments").lean();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'جستجوی مقالات آشپزی',
    description: 'صفحه جستجوی مقالات تخصصی آشپزی و پذیرایی',
    url: 'https://aramesh-cooking.ir/blogs/search',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://aramesh-cooking.ir/blogs/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="content" itemScope itemType="https://schema.org/SearchResultsPage">
        <SearchBlog blogs={JSON.parse(JSON.stringify(blogs))} />
      </main>
    </>
  );
}

export default page;