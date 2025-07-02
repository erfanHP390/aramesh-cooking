import Main from "@/components/templates/index/main/Main";
import React from "react";

export const metadata = {
  title: "آموزش تخصصی آشپزی | پذیرایی مجالس و مشاوره تغذیه | آرامش",
  description: "آکادمی تخصصی آشپزی آرامش - ارائه دوره‌های آموزش حرفه‌ای آشپزی، خدمات پذیرایی اختصاصی، مشاوره تغذیه و برنامه‌ریزی منوی هفتگی با کیفیت ممتاز",
  keywords: [
    "آموزش آشپزی",
    "آشپزی حرفه‌ای",
    "پذیرایی مجالس",
    "مشاوره تغذیه",
    "آموزشگاه آشپزی",
    "دوره آشپزی",
    "کلاس آشپزی",
    "منوی هفتگی",
    "آشپزی با آرامش"
  ],
  alternates: {
    canonical: "https://aramesh-cooking.ir",
  },
  openGraph: {
    title: "آکادمی تخصصی آشپزی آرامش | آموزش حرفه‌ای و پذیرایی",
    description: "دوره‌های آموزش آشپزی، خدمات پذیرایی مجالس و مشاوره تغذیه توسط سرآشپزهای بین‌المللی",
    url: "https://aramesh-cooking.ir",
    siteName: "آرامش",
    images: [
      {
        url: "https://aramesh-cooking.ir/images/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "آکادمی تخصصی آشپزی آرامش",
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
    title: "آکادمی تخصصی آشپزی آرامش | آموزش حرفه‌ای و پذیرایی",
    description: "دوره‌های آموزش آشپزی، خدمات پذیرایی مجالس و مشاوره تغذیه",
    images: ["https://aramesh-cooking.ir/images/og-main.jpg"],
  },
};

export default function Home() {
  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "آکادمی آشپزی آرامش",
    "url": "https://aramesh-cooking.ir",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://aramesh-cooking.ir/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "آکادمی آشپزی آرامش",
    "url": "https://aramesh-cooking.ir",
    "logo": "https://aramesh-cooking.ir/images/logo.png",
    "sameAs": [
      "https://instagram.com/aramesh.cooking",
      "https://facebook.com/aramesh.cooking",
      "https://aparat.com/aramesh.cooking"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+98-21-12345678",
        "contactType": "customer service",
        "areaServed": "IR",
        "availableLanguage": ["fa"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+98-912-3456789",
        "contactType": "technical support",
        "areaServed": "IR",
        "availableLanguage": ["fa"]
      }
    ]
  };

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "CookingSchool",
    "name": "آکادمی آشپزی آرامش",
    "image": "https://aramesh-cooking.ir/images/logo.png",
    "@id": "https://aramesh-cooking.ir",
    "url": "https://aramesh-cooking.ir",
    "telephone": "+98-21-12345678",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "خیابان ولیعصر، پلاک 123",
      "addressLocality": "تهران",
      "postalCode": "1234567890",
      "addressCountry": "IR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.715298",
      "longitude": "51.404343"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات آشپزی",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "دوره‌های آموزشی",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Course",
                "name": "آشپزی مقدماتی"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
      />
      
      <Main itemScope itemType="https://schema.org/WebPage" />
    </>
  );
}