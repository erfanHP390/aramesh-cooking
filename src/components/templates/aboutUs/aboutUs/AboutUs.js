import React from "react";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <>
      <div id="profile" className={`section py-6 py-md-7 bg-body ${styles.aboutContainer}`}>
        <div className={`container ${styles.aboutContent}`}>
          <div className="row justify-content-between">
            <div className={`col-lg-6 ${styles.aboutImage}`} data-aos="fade-right">
              {/* تصویر درباره ما */}
              <div className="text-center">
                <div className="px-5 px-md-6 mb-5 mb-lg-0">
                  <img
                    className={`img-fluid ${styles.aboutImg}`}
                    src="images/our-services-home.webp"
                    alt="تیم حرفه ای آشپزی آرامش"
                  />
                </div>
              </div>
            </div>
            <div className={`col-lg-6 ${styles.aboutText}`} data-aos="flip-up">
              <div className={`py-0 ${styles.aboutDescription}`}>
                <h2 className={`fw-bold mb-3 ${styles.aboutTitle}`}>درباره تیم آرامش</h2>
                <p className={`lead mb-5 ${styles.aboutParagraph}`}>
                  مجموعه " آرامش " با افتخار ارائه‌دهنده بهترین خدمات آشپزی و پذیرایی در سطح کشور است. ما با تیمی متشکل از سرآشپزان حرفه‌ای و با تجربه، آماده ارائه خدمات بی‌نظیر در زمینه‌های زیر هستیم:
                  <br /><br />
                  - پذیرایی و تدارکات مجالس و مراسمات خاص
                  <br />
                  - آموزش آشپزی حرفه‌ای در تمامی سطوح
                  <br />
                  - مشاوره و طراحی منوی اختصاصی برای رستوران‌ها
                  <br />
                  - ارائه غذاهای فست‌فود و سنتی با بالاترین کیفیت
                  <br /><br />
                  ما با بهره‌گیری از بهترین مواد اولیه و تکنیک‌های روز آشپزی بین‌المللی، تجربه‌ای منحصر به فرد از طعم و کیفیت را برای شما به ارمغان می‌آوریم. اعتماد شما سرمایه ماست.
                </p>
                <a href="#services" className={`btn btn-warning btn_services ${styles.aboutButton}`}>
                  خدمات ما
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className={`bi bi-chevron-double-left ${styles.aboutIcon}`}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                    />
                    <path
                      fillRule="evenodd"
                      d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;