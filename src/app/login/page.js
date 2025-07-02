import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Login from '@/components/templates/login/Login'
import React from 'react'

export const metadata = {
  title: "ورود به حساب کاربری | مجموعه آشپزی آرامش",
  description: "صفحه ورود به حساب کاربری مجموعه آشپزی آرامش - دسترسی به دوره‌های آموزشی و امکانات ویژه",
  robots: {
    index: false,
    follow: true,
    nocache: true
  },
  alternates: {
    canonical: "https://aramesh-cooking.ir/login",
  }
};

function page() {
  return (
    <>
      <main id="content" itemScope itemType="https://schema.org/WebPage">
        <Breadcrumb title={"ورود به حساب کاربری"} />
        <Login />
      </main>
    </>
  )
}

export default page