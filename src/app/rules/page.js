import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb'
import Terms from '@/components/templates/rules/Terms'
import Head from 'next/head'
import React from 'react'

function page() {
  return (
    <>
      <Head>
        <title>قوانین و مقررات | آشپزی با آرامش - شرایط ثبت نام و شرکت در دوره‌های آشپزی</title>
        
        <meta 
          name="description" 
          content="شرایط کامل ثبت نام، قوانین حضور در کلاس‌ها و سیاست بازگشت هزینه دوره‌های آشپزی با آرامش. اطلاعات حقوقی و مقررات استفاده از محتوای آموزشی." 
        />
        
        <link rel="canonical" href="https://aramesh-cooking.ir/terms" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "قوانین و مقررات آشپزی با آرامش",
            "description": "صفحه رسمی شرایط و ضوابط دوره‌های آموزشی آشپزی",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "شرایط ثبت نام"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "قوانین حضور در کلاس‌ها"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "سیاست بازگشت هزینه"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "قوانین استفاده از محتوا"
                }
              ]
            }
          })}
        </script>
      </Head>

      <main id="content" role="main" className="terms-page">
        <Breadcrumb 
          title={"قوانین و مقررات"} 
        />
        
        <Terms />
      </main>
    </>
  )
}

export default page