import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Contact from '@/components/templates/contact/ContactUs/Contact'
import React from 'react'
import connectToDB from "@/configs/db";
import DepartmentModel from "@/models/Department"

export const metadata = {
  title: "تماس با ما | مجموعه آشپزی آرامش",
  description: "راه‌های ارتباطی با مجموعه آشپزی آرامش - پشتیبانی، پیشنهادات و انتقادات خود را با ما در میان بگذارید",
  keywords: [
    "تماس با آرامش",
    "پشتیبانی آشپزی",
    "آدرس مجموعه آشپزی",
    "شماره تماس آشپزی",
    "ارتباط با سرآشپزان"
  ],
  alternates: {
    canonical: "https://aramesh-cooking.ir/contact",
  },
  openGraph: {
    title: "تماس با ما | مجموعه آشپزی آرامش",
    description: "راه‌های ارتباطی با تیم حرفه‌ای آشپزی آرامش",
    url: "https://aramesh-cooking.ir/contact",
    siteName: "آرامش",
    images: [
      {
        url: "https://aramesh-cooking.ir/images/og-contact.jpg",
        width: 800,
        height: 600,
        alt: "تماس با مجموعه آشپزی آرامش",
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
  connectToDB()
  const departments = await DepartmentModel.find({}).sort({_id: -1}).lean()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'تماس با مجموعه آشپزی آرامش',
    description: 'صفحه ارتباط با تیم حرفه‌ای آشپزی آرامش',
    url: 'https://aramesh-cooking.ir/contact',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+98-912-123-4567',
      email: 'support@aramesh-cooking.ir',
      contactType: 'customer service',
      areaServed: 'IR',
      availableLanguage: 'Persian'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'خیابان مفتح، پلاک 13',
      addressLocality: 'تهران',
      addressRegion: 'تهران',
      postalCode: '1234567890',
      addressCountry: 'IR'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="content" itemScope itemType="https://schema.org/ContactPage">
        <Breadcrumb title={"تماس با ما"} />
        <Contact departments={JSON.parse(JSON.stringify(departments))} />
      </main>
    </>
  )
}

export default page