import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Plans from '@/components/templates/pricing/Plans'
import React from 'react'

export const metadata = {
  title: "تعرفه و قیمت‌گذاری | دوره‌های آموزش آشپزی آرامش",
  description: "مشاهده پکیج‌های آموزشی آشپزی با قیمت مناسب - از مبتدی تا حرفه‌ای با بهترین اساتید",
  keywords: [
    "قیمت دوره آشپزی",
    "تعرفه کلاس آشپزی",
    "پکیج آموزش آشپزی",
    "هزینه یادگیری آشپزی",
    "دوره حرفه‌ای آشپزی"
  ],
  alternates: {
    canonical: "https://aramesh-cooking.ir/pricing",
  },
  openGraph: {
    title: "تعرفه دوره‌های آموزش آشپزی | آرامش",
    description: "پکیج‌های آموزشی از مبتدی تا حرفه‌ای با قیمت‌های مناسب",
    url: "https://aramesh-cooking.ir/pricing",
    siteName: "آرامش",
    images: [
      {
        url: "https://aramesh-cooking.ir/images/og-pricing.jpg",
        width: 800,
        height: 600,
        alt: "تعرفه دوره‌های آموزش آشپزی آرامش",
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
    "@type": "ProductCollection",
    "name": "پکیج‌های آموزشی آشپزی آرامش",
    "description": "دوره‌های آموزش آشپزی از مبتدی تا حرفه‌ای",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "199000",
      "highPrice": "999000",
      "priceCurrency": "IRR",
      "offerCount": "3"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "پکیج‌های آموزشی",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "پکیج مبتدی",
          "itemListElement": {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "آشپزی خانگی",
              "description": "دسترسی به 10 دستور پخت ماهانه، ویدیوهای آموزشی پایه"
            },
            "price": "199000",
            "priceCurrency": "IRR"
          }
        },
        {
          "@type": "OfferCatalog",
          "name": "پکیج حرفه‌ای",
          "itemListElement": {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "آشپزی حرفه‌ای",
              "description": "دسترسی نامحدود به تمام دستورات، کلاس‌های آنلاین هفتگی"
            },
            "price": "499000",
            "priceCurrency": "IRR"
          }
        },
        {
          "@type": "OfferCatalog",
          "name": "پکیج VIP",
          "itemListElement": {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "آشپزی نخبه",
              "description": "کلاس‌های خصوصی با سرآشپز، دسترسی به دستورات اختصاصی"
            },
            "price": "999000",
            "priceCurrency": "IRR"
          }
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
      <main id="content" itemScope itemType="https://schema.org/WebPage">
        <Breadcrumb title={"پکیج‌های آموزشی"} />
        <Plans />
      </main>
    </>
  )
}

export default page