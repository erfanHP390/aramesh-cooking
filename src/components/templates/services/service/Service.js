"use client";
import React, { useEffect } from "react";
import { FaUtensils, FaGlassCheers, FaBookOpen, FaBoxOpen, FaCalendarAlt, FaUserMd } from "react-icons/fa";
import styles from "./Service.module.css";

function Service() {
  useEffect(() => {
    const loadAOS = async () => {
      const AOS = await import('aos');
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    };
    loadAOS();
  }, []);

  return (
    <>
      <div id="service" className={`section pt-6 pt-md-7 ${styles.primaryBg}`}>
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
              {/* service block */}
              <div className={`${styles.fiveService} ${styles.hoverBoxUp} text-center mb-7`}>
                <div className={`${styles.serviceIcon} ${styles.iconBg} border`}>
                  <span>
                    <FaUtensils size={32} />
                  </span>
                </div>
                <div className={`${styles.serviceContent} ${styles.secondaryBg} shadow-sm rounded-3 pt-5 pb-4 px-4`}>
                  <h3 className={`h5 mt-3 ${styles.titleColor}`}>آموزش آشپزی حرفه‌ای</h3>
                  <p className={`mb-4 ${styles.textColor}`}>
                    دوره‌های آموزشی با بهترین سرآشپزها برای تمام سطوح از مبتدی تا پیشرفته
                  </p>
                  <a
                    href="#"
                    className={`${styles.readMore} ${styles.secondaryBg} ${styles.textColor}`}
                    title="Read More"
                  >
                    <svg
                      className="bi bi-plus"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* end service block */}
            </div>
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              {/* service block */}
              <div className={`${styles.fiveService} ${styles.hoverBoxUp} text-center mb-7`}>
                <div className={`${styles.serviceIcon} ${styles.iconBg} border`}>
                  <span>
                    <FaGlassCheers size={32} />
                  </span>
                </div>
                <div className={`${styles.serviceContent} ${styles.secondaryBg} shadow-sm rounded-3 pt-5 pb-4 px-4`}>
                  <h3 className={`h5 mt-3 ${styles.titleColor}`}>پذیرایی و مجالس</h3>
                  <p className={`mb-4 ${styles.textColor}`}>
                    خدمات پذیرایی حرفه‌ای برای مراسم‌های مختلف با منوهای اختصاصی
                  </p>
                  <a
                    href="#"
                    className={`${styles.readMore} ${styles.secondaryBg} ${styles.textColor}`}
                    title="Read More"
                  >
                    <svg
                      className="bi bi-plus"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* end service block */}
            </div>
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {/* service block */}
              <div className={`${styles.fiveService} ${styles.hoverBoxUp} text-center mb-7`}>
                <div className={`${styles.serviceIcon} ${styles.iconBg} border`}>
                  <span>
                    <FaBookOpen size={32} />
                  </span>
                </div>
                <div className={`${styles.serviceContent} ${styles.secondaryBg} shadow-sm rounded-3 pt-5 pb-4 px-4`}>
                  <h3 className={`h5 mt-3 ${styles.titleColor}`}>دستورات اختصاصی</h3>
                  <p className={`mb-4 ${styles.textColor}`}>
                    دستور پخت‌های منحصر به فرد و تخصصی برای رژیم‌های غذایی مختلف
                  </p>
                  <a
                    href="#"
                    className={`${styles.readMore} ${styles.secondaryBg} ${styles.textColor}`}
                    title="Read More"
                  >
                    <svg
                      className="bi bi-plus"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* end service block */}
            </div>
            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
              {/* service block */}
              <div className={`${styles.fiveService} ${styles.hoverBoxUp} text-center mb-7`}>
                <div className={`${styles.serviceIcon} ${styles.iconBg} border`}>
                  <span>
                    <FaBoxOpen size={32} />
                  </span>
                </div>
                <div className={`${styles.serviceContent} ${styles.secondaryBg} shadow-sm rounded-3 pt-5 pb-4 px-4`}>
                  <h3 className={`h5 mt-3 ${styles.titleColor}`}>کیت‌های آشپزی</h3>
                  <p className={`mb-4 ${styles.textColor}`}>
                    مجموعه‌های کامل مواد اولیه و دستور پخت برای تهیه غذاهای مختلف
                  </p>
                  <a
                    href="#"
                    className={`${styles.readMore} ${styles.secondaryBg} ${styles.textColor}`}
                    title="Read More"
                  >
                    <svg
                      className="bi bi-plus"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* end service block */}
            </div>
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              {/* service block */}
              <div className={`${styles.fiveService} ${styles.hoverBoxUp} text-center mb-7`}>
                <div className={`${styles.serviceIcon} ${styles.iconBg} border`}>
                  <span>
                    <FaCalendarAlt size={32} />
                  </span>
                </div>
                <div className={`${styles.serviceContent} ${styles.secondaryBg} shadow-sm rounded-3 pt-5 pb-4 px-4`}>
                  <h3 className={`h5 mt-3 ${styles.titleColor}`}>برنامه‌ریزی منوی هفتگی</h3>
                  <p className={`mb-4 ${styles.textColor}`}>
                    طراحی منوی هفتگی متنوع و متعادل بر اساس نیازهای غذایی خانواده
                  </p>
                  <a
                    href="#"
                    className={`${styles.readMore} ${styles.secondaryBg} ${styles.textColor}`}
                    title="Read More"
                  >
                    <svg
                      className="bi bi-plus"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* end service block */}
            </div>
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {/* service block */}
              <div className={`${styles.fiveService} ${styles.hoverBoxUp} text-center mb-7`}>
                <div className={`${styles.serviceIcon} ${styles.iconBg} border`}>
                  <span>
                    <FaUserMd size={32} />
                  </span>
                </div>
                <div className={`${styles.serviceContent} ${styles.secondaryBg} shadow-sm rounded-3 pt-5 pb-4 px-4`}>
                  <h3 className={`h5 mt-3 ${styles.titleColor}`}>مشاوره تغذیه</h3>
                  <p className={`mb-4 ${styles.textColor}`}>
                    مشاوره تخصصی تغذیه و رژیم‌های غذایی سالم توسط متخصصین تغذیه
                  </p>
                  <a
                    href="#"
                    className={`${styles.readMore} ${styles.secondaryBg} ${styles.textColor}`}
                    title="Read More"
                  >
                    <svg
                      className="bi bi-plus"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* end service block */}
            </div>
          </div>
          {/* end row */}
        </div>
      </div>
    </>
  );
}

export default Service;