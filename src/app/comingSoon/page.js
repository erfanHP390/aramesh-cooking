import React from "react";
import Soon from "@/components/templates/comingSoon/Soon";

export const metadata = {
  title: "به زودی | مجموعه آشپزی آرامش",
  description: "به زودی با بهترین تجربه آشپزی آنلاین در خدمت شما خواهیم بود. برای اطلاع از راه‌اندازی، ایمیل خود را ثبت کنید.",
  robots: {
    index: false,
    follow: true,
    nocache: true
  },
  alternates: {
    canonical: "https://aramesh-cooking.ir/coming-soon",
  },
  openGraph: {
    title: "به زودی | مجموعه آشپزی آرامش",
    description: "در حال آماده‌سازی بهترین تجربه آشپزی آنلاین برای شما هستیم",
    url: "https://aramesh-cooking.ir/coming-soon",
    images: [
      {
        url: "https://aramesh-cooking.ir/images/coming-soon-og.jpg",
        width: 800,
        height: 600,
        alt: "به زودی راه‌اندازی می‌شویم",
      },
    ],
  }
};

function page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'صفحه به زودی راه‌اندازی می‌شود',
    description: 'در حال آماده‌سازی بهترین تجربه آشپزی آنلاین برای شما هستیم',
    url: 'https://aramesh-cooking.ir/coming-soon',
    publisher: {
      '@type': 'Organization',
      name: 'آرامش',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aramesh-cooking.ir/images/logo.png'
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Soon />
    </>
  );
}

export default page;