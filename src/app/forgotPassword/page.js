import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import ForgotPass from '@/components/templates/forgot/ForgotPass'
import React from 'react'

export const metadata = {
  title: "بازیابی رمز عبور | مجموعه آشپزی آرامش",
  description: "صفحه بازیابی رمز عبور حساب کاربری در مجموعه آشپزی آرامش",
  robots: {
    index: false,
    follow: true,
    nocache: true
  },
  alternates: {
    canonical: "https://aramesh-cooking.ir/forgot-password",
  }
};

function page() {
  return (
    <>
      <main id="content" itemScope itemType="https://schema.org/WebPage">
        <Breadcrumb title={"بازیابی رمز عبور"} />
        <ForgotPass />
      </main>
    </>
  )
}

export default page