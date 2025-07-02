import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Gallery from "@/components/templates/portfolio/Gallery";
import React from "react";
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import CategoryModel from "@/models/Category";

export const metadata = {
  title: "گالری نمونه کارها | مجموعه آشپزی آرامش",
  description: "نمونه کارها و دستاوردهای تیم حرفه‌ای آشپزی آرامش - مشاهده آثار و دستورات اختصاصی",
  keywords: [
    "نمونه کار آشپزی",
    "گالری غذاهای آرامش",
    "دستاوردهای آشپزی",
    "نمونه منو رستوران",
    "طراحی غذاهای حرفه‌ای"
  ],
  alternates: {
    canonical: "https://aramesh-cooking.ir/portfolio",
  },
  openGraph: {
    title: "گالری نمونه کارها | مجموعه آشپزی آرامش",
    description: "نمونه کارها و دستاوردهای تیم حرفه‌ای آشپزی آرامش",
    url: "https://aramesh-cooking.ir/portfolio",
    siteName: "آرامش",
    images: [
      {
        url: "https://aramesh-cooking.ir/images/og-portfolio.jpg",
        width: 800,
        height: 600,
        alt: "گالری نمونه کارهای آشپزی آرامش",
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
  connectToDB();
  const products = await ProductModel.find({}).populate("category").lean()
  const categories = await CategoryModel.find({}).lean()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": product.img,
        "category": product.category.name
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="content" className="flex-grow-1" itemScope itemType="https://schema.org/CollectionPage">
        <Breadcrumb title={"گالری نمونه کارها"} />
        <Gallery products={JSON.parse(JSON.stringify(products))} categories={JSON.parse(JSON.stringify(categories))} />
      </main>
    </>
  );
}

export default page;