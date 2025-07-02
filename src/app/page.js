import Main from "@/components/templates/index/main/Main";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>آشپزی با آرامش | آموزش حرفه‌ای آشپزی و پذیرایی مجالس</title>
        
        <meta 
          name="description" 
          content="گروه تخصصی آشپزی آرامش - ارائه خدمات آموزش آشپزی حرفه‌ای، پذیرایی مجالس، مشاوره تغذیه و برنامه‌ریزی منوی هفتگی با بهترین کیفیت و مواد اولیه" 
        />
        
        <link rel="canonical" href="https://aramesh-cooking.ir" />
        
        <meta property="og:title" content="آشپزی با آرامش | آموزش حرفه‌ای آشپزی و پذیرایی مجالس" />
        <meta property="og:description" content="گروه تخصصی آشپزی آرامش - خدمات آموزش آشپزی و پذیرایی با کیفیت" />
        <meta property="og:url" content="https://aramesh-cooking.ir" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="آشپزی با آرامش | آموزش حرفه‌ای آشپزی و پذیرایی مجالس" />
        <meta name="twitter:description" content="گروه تخصصی آشپزی آرامش - خدمات آموزش آشپزی و پذیرایی با کیفیت" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "آشپزی با آرامش",
            "url": "https://aramesh-cooking.ir",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://aramesh-cooking.ir/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "آشپزی با آرامش",
            "url": "https://aramesh-cooking.ir",
            "logo": "https://aramesh-cooking.ir/images/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+98-21-12345678",
              "contactType": "customer service"
            }
          })}
        </script>
      </Head>

      <Main />
    </>
  );
}