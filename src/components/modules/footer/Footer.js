import React from "react";
import styles from "./Footer.module.css";
import NewsLetter from "@/components/templates/index/newsLetter/NewsLetter";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} section pt-6 `}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className={`${styles.widget} pe-lg-5`}>
                <h4 className={styles.widgetTitle}>درباره گروه آشپزی آرامش</h4>
                <div className={styles.widgetBody}>
                  <p>
                    گروه آشپزی آرامش با بیش از ۱۰ سال سابقه در زمینه تهیه غذای مجالس و 
                    آموزش آشپزی حرفه‌ای، آماده ارائه خدمات با کیفیت به شما عزیزان می‌باشد.
                  </p>
                  <address className={styles.contactInfo}>
                    <svg className={styles.icon} viewBox="0 0 512 512">
                      <path
                        d="M256,48c-79.5,0-144,61.39-144,137,0,87,96,224.87,131.25,272.49a15.77,15.77,0,0,0,25.5,0C304,409.89,400,272.07,400,185,400,109.39,335.5,48,256,48Z"
                        style={{
                          fill: "none",
                          stroke: "currentColor",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 32,
                        }}
                      />
                      <circle
                        cx={256}
                        cy={192}
                        r={48}
                        style={{
                          fill: "none",
                          stroke: "currentColor",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 32,
                        }}
                      />
                    </svg>
                    تهران، خیابان ولیعصر، کوچه آرامش، پلاک ۱۲
                  </address>
                  <p className={styles.contactInfo}>
                    <svg className={styles.icon} viewBox="0 0 512 512">
                      <path
                        d="M451,374c-15.88-16-54.34-39.35-73-48.76C353.7,313,351.7,312,332.6,326.19c-12.74,9.47-21.21,17.93-36.12,14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48,5.41-23.23,14.79-36c13.22-18,12.22-21,.92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9,44,119.9,47,108.83,51.6A160.15,160.15,0,0,0,83,65.37C67,76,58.12,84.83,51.91,98.1s-9,44.38,23.07,102.64,54.57,88.05,101.14,134.49S258.5,406.64,310.85,436c64.76,36.27,89.6,29.2,102.91,23s22.18-15,32.83-31a159.09,159.09,0,0,0,13.8-25.8C465,391.17,468,391.17,451,374Z"
                        style={{
                          fill: "none",
                          stroke: "currentColor",
                          strokeMiterlimit: 10,
                          strokeWidth: 32,
                        }}
                      />
                    </svg>
                    ۰۹۱۲۱۲۳۴۵۶۷
                  </p>
                  <p className={styles.contactInfo}>
                    <svg className={styles.icon} viewBox="0 0 512 512">
                      <rect
                        x={48}
                        y={96}
                        width={416}
                        height={320}
                        rx={40}
                        ry={40}
                        style={{
                          fill: "none",
                          stroke: "currentColor",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 32,
                        }}
                      />
                      <polyline
                        points="112 160 256 272 400 160"
                        style={{
                          fill: "none",
                          stroke: "currentColor",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 32,
                        }}
                      />
                    </svg>
                    info@aramesh-cooking.ir
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className={styles.widget}>
                <h4 className={styles.widgetTitle}>لینک‌های سریع</h4>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className={styles.linkList}>
                      <li><Link href={"/"}>صفحه اصلی</Link></li>
                      <li><Link href={"/about"}>درباره ما</Link></li>
                      <li><Link href={"/services"}>خدمات ما</Link></li>
                      <li><Link href={"/contact"}>تماس با ما</Link></li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className={styles.linkList}>
                      <li><Link href={"/portfolio"}>منوی غذاها</Link></li>
                      <li><Link href={"/pricing"}>دوره‌های آموزشی</Link></li>
                      <li><Link href={"/blogs"}>وبلاگ آشپزی</Link></li>
                      <li><Link href={"faq"}>سوالات متداول</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <NewsLetter />       
          </div>
        </div>

        <div className={styles.copyright}>
          <div className="container py-3 border-top">
            <div className="row">
              <div className="col-12 text-center">
                <p>© {new Date().getFullYear()} گروه آشپزی آرامش. تمامی حقوق محفوظ است.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;