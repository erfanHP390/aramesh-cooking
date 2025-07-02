import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Overview from "@/components/templates/career/overview/Overview";
import Position from "@/components/templates/career/position/Position";
import React from "react";

export const metadata = {
  title: "فرصت‌های شغلی | همکاری با تیم آشپزی آرامش",
  description: "فرصت‌های شغلی در مجموعه آرامش - به خانواده حرفه‌ای‌ترین تیم آشپزی بپیوندید. مزایای رقابتی و محیط کار پویا",
  keywords: [
    "فرصت‌های شغلی آشپزی",
    "استخدام سرآشپز",
    "کار در آشپزی",
    "همکاری با رستوران",
    "شغل آشپزی در تهران"
  ],
  alternates: {
    canonical: "https://aramesh-cooking.ir/career",
  },
  openGraph: {
    title: "فرصت‌های شغلی | مجموعه آشپزی آرامش",
    description: "به تیم حرفه‌ای آشپزی آرامش بپیوندید و در محیطی پویا مشغول به کار شوید",
    url: "https://aramesh-cooking.ir/career",
    siteName: "آرامش",
    images: [
      {
        url: "https://aramesh-cooking.ir/images/og-career.jpg",
        width: 800,
        height: 600,
        alt: "فرصت‌های شغلی آشپزی آرامش",
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
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'فرصت‌های شغلی در آشپزی آرامش',
    description: 'فرصت‌های شغلی متنوع در زمینه آشپزی و پذیرایی در مجموعه آرامش',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'آرامش',
      sameAs: 'https://aramesh-cooking.ir',
      logo: 'https://aramesh-cooking.ir/images/logo.png'
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'تهران',
        addressRegion: 'تهران',
        addressCountry: 'IR'
      }
    },
    employmentType: 'FULL_TIME',
    datePosted: new Date().toISOString()
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="content" itemScope itemType="https://schema.org/WebPage">
        <Breadcrumb title={"فرصت‌های شغلی"} />
        <Overview />
        <Position />
      </main>
    </>
  );
}

export default page;