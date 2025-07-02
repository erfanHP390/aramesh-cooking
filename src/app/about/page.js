import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import AboutUs from '@/components/templates/aboutUs/aboutUs/AboutUs'
import Services from '@/components/templates/aboutUs/services/Services'
import Subscribe from '@/components/templates/aboutUs/subscribe/Subscribe'
import Statistic from '@/components/templates/index/statistic/Statistic'
import Team from '@/components/templates/index/team/Team'
import React from 'react'

export const metadata = {
  title: "درباره ما | گروه آشپزی آرامش - خدمات پذیرایی و آموزش حرفه‌ای",
  description: "تیم حرفه‌ای آرامش با سابقه درخشان در پذیرایی مجالس، آموزش آشپزی و مشاوره منو. استفاده از بهترین مواد اولیه و متدهای روز دنیا.",
  keywords: [
    "آشپزی حرفه‌ای",
    "پذیرایی مجالس",
    "آموزش آشپزی",
    "طراحی منوی رستوران",
    "تیم آشپزی آرامش",
    "غذای باکیفیت"
  ],
  alternates: {
    canonical: "https://aramesh-cooking.ir/about-us",
  },
  openGraph: {
    title: "درباره تیم آشپزی آرامش | خدمات حرفه‌ای پذیرایی و آموزش",
    description: "مجموعه آرامش با تیم متخصص و مواد اولیه مرغوب، بهترین خدمات آشپزی را ارائه می‌دهد.",
    url: "https://aramesh-cooking.ir/about-us",
    siteName: "آرامش",
    images: [
      {
        url: "https://aramesh-cooking.ir/images/og-about-us.jpg",
        width: 800,
        height: 600,
        alt: "تیم حرفه‌ای آشپزی آرامش",
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
    title: "درباره تیم آشپزی آرامش | خدمات حرفه‌ای پذیرایی و آموزش",
    description: "مجموعه آرامش با تیم متخصص و مواد اولیه مرغوب، بهترین خدمات آشپزی را ارائه می‌دهد.",
    images: ["https://aramesh-cooking.ir/images/twitter-about-us.jpg"],
  },
};

function page() {
  return (
    <>
      <main id="content" itemScope itemType="https://schema.org/AboutPage">
        <Breadcrumb 
          title={"درباره تیم آرامش"} 
          itemProp="breadcrumb" 
        />
        <AboutUs />
        <Services />
        <Statistic />
        <Team />
        <Subscribe />
      </main>
    </>
  )
}

export default page