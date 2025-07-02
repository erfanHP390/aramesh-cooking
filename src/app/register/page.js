import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Register from "@/components/templates/register/Register";
import React from "react";

export const metadata = {
  title: "ثبت نام | عضویت سریع و امن در سایت با کد اشتراک اختصاصی",
  description: "فرم ثبت نام آنلاین با دریافت فوری کد فعالسازی - عضویت امن با تلفن همراه، ایمیل و رمزعبور قوی + ورود با شبکه‌های اجتماعی",
  keywords: [
    "ثبت نام در سایت",
    "فرم عضویت آنلاین",
    "کد اشتراک اختصاصی",
    "عضویت با تلفن همراه",
    "ثبت نام امن",
    "ورود با فیسبوک",
    "عضویت سریع"
  ],
  alternates: {
    canonical: "https://yoursite.com/register",
  },
  openGraph: {
    title: "ثبت نام | عضویت سریع در سایت",
    description: "فرم ثبت نام آنلاین با دریافت فوری کد فعالسازی و پشتیبانی از ورود با شبکه‌های اجتماعی",
    url: "https://yoursite.com/register",
    siteName: "نام سایت شما",
    images: [
      {
        url: "https://yoursite.com/images/og-register.jpg",
        width: 800,
        height: 600,
        alt: "صفحه ثبت نام در سایت",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "ثبت نام | عضویت سریع در سایت",
    description: "فرم ثبت نام آنلاین با دریافت فوری کد فعالسازی",
    images: ["https://yoursite.com/images/og-register.jpg"],
  },
};

function page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ثبت نام",
    "description": "صفحه عضویت در سایت با دریافت کد اشتراک فوری",
    "url": "https://yoursite.com/register",
    "potentialAction": {
      "@type": "RegisterAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://yoursite.com/register",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Account",
        "name": "حساب کاربری"
      }
    },
    "isPartOf": {
      "@type": "WebSite",
      "name": "نام سایت شما",
      "url": "https://yoursite.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="content" itemScope itemType="https://schema.org/WebPage" role="main">
        <meta itemProp="name" content="صفحه ثبت نام" />
        <meta itemProp="description" content="فرم ثبت نام آنلاین با دریافت فوری کد فعالسازی" />
        
        <Breadcrumb 
          title={"ثبت نام و عضویت"} 
          itemProp="breadcrumb"
        />
        
        <Register />
      </main>
    </>
  );
}

export default page;