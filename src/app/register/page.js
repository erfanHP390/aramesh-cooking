import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Register from "@/components/templates/register/Register";
import Head from "next/head";
import React from "react";

function page() {
  return (
    <>
      <Head>
        <title>ثبت نام | عضویت در سایت با کد اشتراک اختصاصی</title>
        
        <meta 
          name="description" 
          content="فرم ثبت نام سریع و امن با دریافت کد اشتراک فوری. عضویت در سایت با تلفن، ایمیل و رمزعبور امن. امکان ورود با فیسبوک و توئیتر نیز وجود دارد." 
        />
        
        <link rel="canonical" href="https://yoursite.com/register" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "ثبت نام",
              "description": "صفحه عضویت در سایت با دریافت کد اشتراک فوری",
              "potentialAction": {
                "@type": "RegisterAction",
                "target": "https://yoursite.com/register"
              }
            }
          `}
        </script>
      </Head>

      <main id="content" role="main">
        <Breadcrumb 
          title={"ثبت نام"} 
        />
        
        <Register />
      </main>
    </>
  );
}

export default page;