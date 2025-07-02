import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Terms from '@/components/templates/rules/Terms'
import React from 'react'

export const metadata = {
  title: "قوانین و مقررات | شرایط ثبت‌نام و شرکت در دوره‌های آموزش آشپزی آرامش",
  description: "شرایط کامل ثبت‌نام، قوانین حضور در کلاس‌ها، سیاست بازگشت وجه و مقررات استفاده از محتوای آموزشی دوره‌های آشپزی آرامش",
  keywords: [
    "قوانین دوره آشپزی",
    "شرایط ثبت نام کلاس آشپزی",
    "مقررات آموزشگاه آشپزی",
    "سیاست بازگشت هزینه آشپزی",
    "قوانین استفاده از ویدیوهای آموزشی",
    "شرایط شرکت در دوره‌های آرامش"
  ],
  alternates: {
    canonical: "https://aramesh-cooking.ir/terms",
  },
  openGraph: {
    title: "قوانین و مقررات دوره‌های آموزش آشپزی | آرامش",
    description: "شرایط کامل ثبت‌نام و قوانین شرکت در دوره‌های آموزش آشپزی آرامش",
    url: "https://aramesh-cooking.ir/terms",
    siteName: "آرامش",
    images: [
      {
        url: "https://aramesh-cooking.ir/images/og-terms.jpg",
        width: 800,
        height: 600,
        alt: "قوانین و مقررات دوره‌های آشپزی آرامش",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "قوانین و مقررات دوره‌های آموزش آشپزی | آرامش",
    description: "شرایط کامل ثبت‌نام و قوانین شرکت در دوره‌های آموزش آشپزی آرامش",
    images: ["https://aramesh-cooking.ir/images/og-terms.jpg"],
  },
};

function page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "قوانین و مقررات آشپزی با آرامش",
    "description": "صفحه رسمی شرایط و ضوابط دوره‌های آموزشی آشپزی",
    "url": "https://aramesh-cooking.ir/terms",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "شرایط ثبت نام",
          "description": "مقررات عمومی ثبت‌نام در دوره‌های آموزشی و الزامات سنتی"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "قوانین حضور در کلاس‌ها",
          "description": "ضوابط حضور و غیاب و رفتار در کلاس‌های عملی و تئوری"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "سیاست بازگشت هزینه",
          "description": "شرایط و مهلت انصراف از دوره و استرداد شهریه"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "قوانین استفاده از محتوا",
          "description": "محدودیت‌های استفاده و انتشار محتوای آموزشی دوره‌ها"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "مسئولیت‌های کاربران",
          "description": "تعهدات و مسئولیت‌های شرکت‌کنندگان در دوره‌ها"
        }
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "آرامش",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aramesh-cooking.ir/logo.png",
        "width": 183,
        "height": 60
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="content" itemScope itemType="https://schema.org/WebPage" role="main" className="terms-page">
        <meta itemProp="name" content="قوانین و مقررات دوره‌های آشپزی" />
        <meta itemProp="description" content="شرایط کامل ثبت‌نام و قوانین استفاده از دوره‌های آموزش آشپزی آرامش" />
        
        <Breadcrumb 
          title={"قوانین و مقررات"} 
          itemProp="breadcrumb"
        />
        
        <Terms />
      </main>
    </>
  )
}

export default page