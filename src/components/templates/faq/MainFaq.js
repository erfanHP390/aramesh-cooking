import React from "react";
import styles from "./MainFaq.module.css";

function MainFaq() {
  const renderRocketParticles = () => {
    const particles = [];
    const particleCount = 8;
    
    for (let i = 1; i <= particleCount; i++) {
      const size = i % 2 === 0 ? "1.2rem" : "1rem";
      const delay = i * 0.5;
      const duration = 10 + Math.random() * 5;
      const left = `${5 + Math.random() * 90}%`;
      
      particles.push(
        <div 
          key={i}
          className={styles.rocketParticle}
          style={{
            left,
            fontSize: size,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 512 512"
            style={{ transform: 'rotate(315deg)' }}
          >
            <path
              d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z"
              style={{
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 32,
              }}
            />
            <path
              fill="currentColor"
              d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32"
              style={{
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 32,
              }}
            />
          </svg>
        </div>
      );
    }
    
    return particles;
  };

  const faqItems = [
    {
      id: 1,
      question: "چگونه می‌توانم در دوره‌های آشپزی شما ثبت نام کنم؟",
      answer: "شما می‌توانید از طریق صفحه دوره‌های آموزشی در سایت، دوره مورد نظر خود را انتخاب و به صورت آنلاین ثبت نام کنید. همچنین می‌توانید با شماره تلفن ۰۲۱-۱۲۳۴۵۶۷۸ تماس بگیرید."
    },
    {
      id: 2,
      question: "آیا امکان بازگشت هزینه در صورت انصراف وجود دارد؟",
      answer: "بله، تا ۴۸ ساعت پس از ثبت نام امکان انصراف و بازگشت کامل هزینه وجود دارد. پس از شروع دوره، مبلغ بازگشتی بر اساس جلسات باقیمانده محاسبه می‌شود."
    },
    {
      id: 3,
      question: "آیا مواد اولیه دوره‌های عملی را شما تهیه می‌کنید؟",
      answer: "بله، برای دوره‌های حضوری ما کیت‌های مواد اولیه را آماده می‌کنیم که شامل تمام مواد مورد نیاز برای هر جلسه می‌شود. برای دوره‌های آنلاین نیز لیست کامل مواد اولیه ارسال می‌شود."
    },
    {
      id: 4,
      question: "آیا مدرک معتبر پس از پایان دوره ارائه می‌دهید؟",
      answer: "بله، پس از گذراندن موفقیت‌آمیز دوره و قبولی در آزمون پایانی، مدرک معتبر فنی و حرفه‌ای با مهر وزارت کار به شما اعطا می‌شود."
    },
    {
      id: 5,
      question: "آیا امکان برگزاری کلاس‌های خصوصی وجود دارد؟",
      answer: "بله، ما کلاس‌های خصوصی و نیمه خصوصی با زمان‌بندی انعطاف‌پذیر برای هنرجویان عزیز برگزار می‌کنیم. برای اطلاعات بیشتر با ما تماس بگیرید."
    }
  ];

  return (
    <main className={styles.mainContainer}>
      <section className={styles.faqSection}>
        <div className="container">
          <header className={styles.faqHeader}>
            <h2 className={styles.faqTitle}>سوالات متداول آشپزی آرامش</h2>
            <hr className={styles.heroDivider} />
            <p className={styles.faqSubtitle}>پاسخ به رایج‌ترین پرسش‌های شما درباره دوره‌های آشپزی و خدمات ما</p>
          </header>
          
          <div className={styles.faqContainer}>
            {faqItems.map((item) => (
              <div key={item.id} className={styles.faqCard}>
                <div className={styles.faqCardHeader} id={`heading${item.id}`}>
                  <button
                    className={styles.faqQuestion}
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${item.id}`}
                    aria-expanded={item.id === 1 ? "true" : "false"}
                    aria-controls={`collapse${item.id}`}
                  >
                    {item.question}
                    <svg
                      className="bi bi-chevron-down"
                      width="1rem"
                      height="1rem"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                
                <div
                  id={`collapse${item.id}`}
                  className={`collapse ${item.id === 1 ? 'show' : ''}`}
                  aria-labelledby={`heading${item.id}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className={styles.faqAnswer}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className={styles.contactPrompt}>
              <p className="mb-0">
                پاسخ سوال خود را پیدا نکردید؟{" "}
                <a href="/contact" className={styles.contactLink}>
                   با ما در تماس باشید
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainFaq;