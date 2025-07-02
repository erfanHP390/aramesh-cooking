import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Brands from "@/components/templates/services/barnds/Brands";
import Service from "@/components/templates/services/service/Service";
import React from "react";

export const metadata = {
  title: "خدمات تخصصی آشپزی | آموزش حرفه‌ای، پذیرایی و مشاوره تغذیه | آرامش",
  description: "ارائه کامل‌ترین خدمات آشپزی شامل آموزش حرفه‌ای، پذیرایی مجالس، برنامه‌ریزی منوی هفتگی، مشاوره تغذیه و فروش کیت‌های تخصصی آشپزی",
  keywords: [
    "خدمات آشپزی",
    "آموزش حرفه‌ای آشپزی",
    "پذیرایی مجالس",
    "مشاوره تغذیه",
    "دستورات اختصاصی آشپزی",
    "کیت آشپزی",
    "برنامه غذایی هفتگی",
    "آشپزی با آرامش"
  ],
  alternates: {
    canonical: "https://aramesh-cooking.ir/services",
  },
  openGraph: {
    title: "خدمات تخصصی آشپزی و تغذیه | آرامش",
    description: "آموزش حرفه‌ای، پذیرایی مجالس و مشاوره تغذیه توسط سرآشپزهای بین‌المللی",
    url: "https://aramesh-cooking.ir/services",
    siteName: "آرامش",
    images: [
      {
        url: "https://aramesh-cooking.ir/images/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "خدمات تخصصی آشپزی آرامش",
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
    title: "خدمات تخصصی آشپزی | آرامش",
    description: "کامل‌ترین خدمات آشپزی از آموزش تا پذیرایی و مشاوره تغذیه",
    images: ["https://aramesh-cooking.ir/images/og-services.jpg"],
  },
};

function page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "خدمات تخصصی آشپزی آرامش",
    "description": "ارائه خدمات کامل آشپزی از آموزش تا پذیرایی و مشاوره",
    "serviceType": "خدمات آشپزی و تغذیه",
    "provider": {
      "@type": "Organization",
      "name": "آرامش",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aramesh-cooking.ir/logo.png",
        "width": 183,
        "height": 60
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "Iran"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "لیست خدمات آشپزی",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "آموزش‌های تخصصی",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "آموزش آشپزی حرفه‌ای",
                "description": "دوره‌های آموزشی از پایه تا پیشرفته با مدرک معتبر"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "کارگاه‌های تخصصی",
                "description": "آموزش تکنیک‌های خاص آشپزی بین‌المللی"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "خدمات پذیرایی",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "پذیرایی مجالس",
                "description": "سرویس کامل پذیرایی برای مراسم و مهمانی‌ها"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "منوی اختصاصی",
                "description": "طراحی منوی شخصی‌سازی شده برای رویدادها"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "مشاوره و برنامه‌ریزی",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "مشاوره تغذیه",
                "description": "برنامه‌ریزی غذایی متناسب با نیازهای سلامتی"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "برنامه هفتگی",
                "description": "طراحی منوی هفتگی متنوع و سالم برای خانواده"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "محصولات تخصصی",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "کیت‌های آشپزی",
                "description": "مجموعه کامل مواد اولیه و دستور پخت برای غذاهای خاص"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "دستورات اختصاصی",
                "description": "دستور پخت‌های انحصاری سرآشپزهای آرامش"
              }
            }
          ]
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="content" itemScope itemType="https://schema.org/Service" role="main" className="services-page">
        <meta itemProp="name" content="خدمات تخصصی آشپزی آرامش" />
        <meta itemProp="description" content="ارائه کامل‌ترین خدمات آشپزی از آموزش تا پذیرایی و مشاوره تغذیه" />
        
        <Breadcrumb
          title={"خدمات تخصصی آشپزی"}
          itemListElement={[
            {
              "@type": "ListItem",
              position: 1,
              name: "خانه",
              item: "https://aramesh-cooking.ir",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "خدمات",
              item: "https://aramesh-cooking.ir/services",
            },
          ]}
          itemProp="breadcrumb"
        />

        <Service />
        <Brands />
      </main>
    </>
  );
}

export default page;