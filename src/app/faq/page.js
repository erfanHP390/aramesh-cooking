import React from "react";
import MainFaq from "@/components/templates/faq/MainFaq";

export const metadata = {
  title: "سوالات متداول | مجموعه آشپزی آرامش",
  description: "پاسخ به رایج‌ترین سوالات درباره دوره‌های آشپزی، ثبت نام، شرایط بازگشت هزینه و مدارک معتبر",
  keywords: [
    "سوالات متداول آشپزی",
    "پرسش و پاسخ آشپزی",
    "دوره‌های آموزشی آشپزی",
    "ثبت نام کلاس آشپزی",
    "مدارک معتبر آشپزی"
  ],
  alternates: {
    canonical: "https://aramesh-cooking.ir/faq",
  },
  openGraph: {
    title: "سوالات متداول | مجموعه آشپزی آرامش",
    description: "پاسخ به تمام سوالات شما درباره دوره‌های آشپزی و خدمات ما",
    url: "https://aramesh-cooking.ir/faq",
    siteName: "آرامش",
    images: [
      {
        url: "https://aramesh-cooking.ir/images/og-faq.jpg",
        width: 800,
        height: 600,
        alt: "سوالات متداول آشپزی آرامش",
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

function page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "چگونه می‌توانم در دوره‌های آشپزی شما ثبت نام کنم؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "شما می‌توانید از طریق صفحه دوره‌های آموزشی در سایت، دوره مورد نظر خود را انتخاب و به صورت آنلاین ثبت نام کنید. همچنین می‌توانید با شماره تلفن ۰۲۱-۱۲۳۴۵۶۷۸ تماس بگیرید."
        }
      },
      {
        "@type": "Question",
        "name": "آیا امکان بازگشت هزینه در صورت انصراف وجود دارد؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "بله، تا ۴۸ ساعت پس از ثبت نام امکان انصراف و بازگشت کامل هزینه وجود دارد. پس از شروع دوره، مبلغ بازگشتی بر اساس جلسات باقیمانده محاسبه می‌شود."
        }
      },
      {
        "@type": "Question",
        "name": "آیا مواد اولیه دوره‌های عملی را شما تهیه می‌کنید؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "بله، برای دوره‌های حضوری ما کیت‌های مواد اولیه را آماده می‌کنیم که شامل تمام مواد مورد نیاز برای هر جلسه می‌شود. برای دوره‌های آنلاین نیز لیست کامل مواد اولیه ارسال می‌شود."
        }
      },
      {
        "@type": "Question",
        "name": "آیا مدرک معتبر پس از پایان دوره ارائه می‌دهید؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "بله، پس از گذراندن موفقیت‌آمیز دوره و قبولی در آزمون پایانی، مدرک معتبر فنی و حرفه‌ای با مهر وزارت کار به شما اعطا می‌شود."
        }
      },
      {
        "@type": "Question",
        "name": "آیا امکان برگزاری کلاس‌های خصوصی وجود دارد؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "بله، ما کلاس‌های خصوصی و نیمه خصوصی با زمان‌بندی انعطاف‌پذیر برای هنرجویان عزیز برگزار می‌کنیم. برای اطلاعات بیشتر با ما تماس بگیرید."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MainFaq />
    </>
  );
}

export default page;