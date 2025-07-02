import "./globals.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import ScrollTopBtn from "@/components/modules/ScrollTopBtn/ScrollTopBtn";
import DarkModeBtn from "@/components/modules/darkModeBtn/DarkModeBtn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClientRefresher from "@/components/modules/refresher/ClientRefresher";
import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";
import connectToDB from "@/configs/db";
import { cookies } from "next/headers";
import { authUser } from "@/utils/authUser";

export const metadata = {
  title: "آموزشگاه تخصصی آشپزی آرامش | دوره‌های حرفه‌ای آشپزی و پذیرایی",
  description: `آموزشگاه آشپزی آرامش، مرجع تخصصی آموزش آشپزی از مبتدی تا پیشرفته با بهترین اساتید! در این آموزشگاه، شما می‌توانید انواع دوره‌های آشپزی ایرانی و بین‌المللی، کارگاه‌های تخصصی، کلاس‌های خصوصی و خدمات مشاوره تغذیه را با بالاترین کیفیت تجربه کنید. مجموعه آرامش با ارائه برنامه‌های آموزشی متنوع و پشتیبانی حرفه‌ای، مسیر تبدیل شدن به یک سرآشپز ماهر را برای شما هموار می‌سازد.

چه به دنبال یادگیری اصول اولیه آشپزی، تکنیک‌های پیشرفته یا مهارت‌های پذیرایی حرفه‌ای باشید، آموزشگاه آشپزی آرامش همه نیازهای شما را پوشش می‌دهد. با ثبت‌نام در دوره‌های ما، از مزایای ویژه مانند دسترسی به ویدیوهای آموزشی، جزوات تخصصی و پشتیبانی اساتید مجرب بهره‌مند شوید. همین حالا به جمع هنرجویان ما بپیوندید و لذت پخت غذاهای خوشمزه و حرفه‌ای را تجربه کنید!`,
  keywords: [
    "آموزش آشپزی",
    "دوره آشپزی",
    "آموزشگاه آشپزی",
    "کلاس آشپزی",
    "آشپزی حرفه‌ای",
    "آشپزی ایرانی",
    "آشپزی بین‌المللی",
    "مدرسه آشپزی",
    "آموزش پذیرایی",
    "مشاوره تغذیه",
  ],
  icons: {
    icon: "http://localhost:3000/images/LOGOv2.png",
  },
  alternates: {
    canonical: "https://aramesh-cooking.ir",
  },
  openGraph: {
    title: "آموزشگاه تخصصی آشپزی آرامش | دوره‌های حرفه‌ای",
    description: "آموزش آشپزی از مبتدی تا پیشرفته با بهترین اساتید و امکانات",
    url: "https://aramesh-cooking.ir",
    siteName: "آرامش",
    images: [
      {
        url: "https://aramesh-cooking.ir/images/og-aramesh.jpg",
        width: 1200,
        height: 630,
        alt: "آموزشگاه آشپزی آرامش",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "آموزشگاه تخصصی آشپزی آرامش",
    description: "دوره‌های حرفه‌ای آشپزی و پذیرایی با مدرک معتبر",
    images: ["https://aramesh-cooking.ir/images/og-aramesh.jpg"],
  },
};

export default async function RootLayout({ children }) {
  connectToDB();
  const isCookies = cookies().get("token");
  const user = await authUser();

  return (
    <html lang="fa">
      <head>
        <link rel="stylesheet" href="/plugins/aos/dist/aos-rtl.css" />
        <link
          rel="stylesheet"
          href="/plugins/lightgallery.js/dist/css/lightgallery.min.css"
        />
        <link rel="stylesheet" href="/plugins/flickity/dist/flickity.min.css" />
        <link rel="stylesheet" href="/css/theme-rtl.css" />
        <link rel="stylesheet" href="/css/colors1.css" />

        <link rel="icon" href="/images/LOGOv2.png" type="image/png" />

        <link rel="manifest" href="/js/pwa/manifest.json" />
        <link rel="apple-touch-icon" href="/img-min/logo/apple-icon.png" />

        <Script
          src="/plugins/bootstrap/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/plugins/jarallax/dist/jarallax.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/plugins/jarallax/dist/jarallax-video.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/plugins/lightgallery.js/dist/js/lightgallery.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/plugins/lightgallery.js/demo/js/lg-thumbnail.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/plugins/lightgallery.js/demo/js/lg-video.js"
          strategy="afterInteractive"
        />
        <Script src="/plugins/aos/dist/aos.js" strategy="afterInteractive" />
        <Script
          src="/plugins/waypoints/lib/noframework.waypoints.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/plugins/counterup2/dist/index.js"
          strategy="afterInteractive"
        />
        <Script
          src="/plugins/flickity/dist/flickity.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/plugins/typed.js/dist/typed.umd.js"
          strategy="afterInteractive"
        />
        <Script
          src="/plugins/isotope-layout/dist/isotope.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/plugins/smooth-scroll/dist/smooth-scroll.polyfills.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/plugins/vanilla-lazyload/dist/lazyload.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/plugins/hc-sticky/dist/hc-sticky.js"
          strategy="afterInteractive"
        />
        <Script src="/js/theme.js" strategy="afterInteractive" />
      </head>
      <body>
        <ClientRefresher />
        <Navbar isCookies={!!isCookies} user={user} />
        {children}
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <DarkModeBtn />
        <ScrollTopBtn />
      </body>
    </html>
  );
}
