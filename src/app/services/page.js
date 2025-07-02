import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Brands from "@/components/templates/services/barnds/Brands";
import Service from "@/components/templates/services/service/Service";
import Head from "next/head";
import React from "react";

function page() {
  return (
    <>
      <Head>
        <title>خدمات تخصصی آشپزی | آموزش حرفه‌ای، پذیرایی و مشاوره تغذیه</title>

        <meta
          name="description"
          content="خدمات کامل آشپزی شامل آموزش حرفه‌ای، پذیرایی مجالس، دستورات اختصاصی، کیت‌های آشپزی، برنامه‌ریزی منوی هفتگی و مشاوره تغذیه توسط بهترین متخصصین"
        />

        <link rel="canonical" href="https://aramesh-cooking.ir/services" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "خدمات آشپزی و تغذیه",
            provider: {
              "@type": "Organization",
              name: "آشپزی با آرامش",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "خدمات آشپزی",
              itemListElement: [
                {
                  "@type": "OfferCatalog",
                  name: "آموزش آشپزی",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "آموزش آشپزی حرفه‌ای",
                      },
                    },
                  ],
                },
                {
                  "@type": "OfferCatalog",
                  name: "خدمات پذیرایی",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "پذیرایی و مجالس",
                      },
                    },
                  ],
                },
                {
                  "@type": "OfferCatalog",
                  name: "مشاوره تخصصی",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "مشاوره تغذیه",
                      },
                    },
                  ],
                },
              ],
            },
          })}
        </script>
      </Head>

      <main id="content" role="main" className="services-page">
        <Breadcrumb
          title={"خدمات تخصصی آشپزی"}
          itemListElement={[
            {
              "@type": "ListItem",
              position: 1,
              name: "خانه",
              item: "https://aramesh-cooking.ir",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "خدمات",
            },
          ]}
        />

        <Service />

        <Brands />
      </main>
    </>
  );
}

export default page;
