"use client";
import React, { useEffect } from "react";
import styles from "./Statistic.module.css";

const Statistic = () => {
  useEffect(() => {
    const progressTrigger = document.querySelector(
      `.${styles.progressVerticalTrigger}`
    );
    const progressBars = document.querySelectorAll(
      `.${styles.progressVerticalLine}`
    );

    const animateProgressBars = () => {
      progressBars.forEach((bar) => {
        const percent = bar.getAttribute("data-percent");
        bar.style.height = `${percent}%`;
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProgressBars();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (progressTrigger) {
      observer.observe(progressTrigger);
    }

    return () => {
      if (progressTrigger) {
        observer.unobserve(progressTrigger);
      }
    };
  }, []);

  return (
    <div className={`${styles.space_elem}  container`}>
      <header className={`text-center mx-auto mb-5 ${styles.header}`}>
        <h2 className="h3 fw-bold">
          آمار <span className="fw-light">گروه آشپزی آرامش</span>
        </h2>
        <hr className={`divider my-4 ${styles.divider}`} />
        <p className={`lead ${styles.subtitle}`}>
          آمار و ارقامی از فعالیت‌ها و موفقیت‌های گروه تخصصی آشپزی آرامش
        </p>
      </header>
      <div className="row">
        <div className={`col-md-6 ${styles.progressVerticalTrigger}`}>
          <div className="row mb-5 mb-lg-0">
            {/* Vertical Progress Bar */}
            <div className="col-3 text-center">
              <div className={`${styles.progressVertical} rounded mb-3`}>
                <div
                  className={styles.progressVerticalLine}
                  data-percent={95}
                  style={{
                    height: "0%",
                    backgroundColor: "#8B2E2C",
                    transition: "height 1.5s ease-in-out",
                  }}
                />
              </div>
              <p className="h6">رضایت مشتریان</p>
            </div>
            {/* Vertical Progress Bar */}
            <div className="col-3 text-center">
              <div className={`${styles.progressVertical} rounded mb-3`}>
                <div
                  className={styles.progressVerticalLine}
                  data-percent={87}
                  style={{
                    height: "0%",
                    backgroundColor: "#607744",
                    transition: "height 1.5s ease-in-out 0.2s",
                  }}
                />
              </div>
              <p className="h6">تعداد دوره‌ها</p>
            </div>
            {/* Vertical Progress Bar */}
            <div className="col-3 text-center">
              <div className={`${styles.progressVertical} rounded mb-3`}>
                <div
                  className={styles.progressVerticalLine}
                  data-percent={92}
                  style={{
                    height: "0%",
                    backgroundColor: "#A97142",
                    transition: "height 1.5s ease-in-out 0.4s",
                  }}
                />
              </div>
              <p className="h6">میزان موفقیت</p>
            </div>
            {/* Vertical Progress Bar */}
            <div className="col-3 text-center">
              <div className={`${styles.progressVertical} rounded mb-3`}>
                <div
                  className={styles.progressVerticalLine}
                  data-percent={78}
                  style={{
                    height: "0%",
                    backgroundColor: "#ffcc43",
                    transition: "height 1.5s ease-in-out 0.6s",
                  }}
                />
              </div>
              <p className="h6">تعداد مشتریان</p>
            </div>
          </div>
        </div>
        <div className="col-md-5 ms-md-auto">
          <p className={`lead mb-4 ${styles.description}`}>
            گروه آشپزی آرامش با سال‌ها تجربه در زمینه آموزش و پذیرش سفارشات
            مجالس، توانسته به موفقیت‌های چشمگیری در صنعت آشپزی دست یابد. ما با
            استفاده از بهترین مواد اولیه و تیم حرفه‌ای، همواره در تلاش برای
            ارائه خدمات باکیفیت هستیم.
          </p>
          <a href="#" className={`btn btn-warning ${styles.btn_services}`}>
            مشاهده جزئیات
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              fill="currentColor"
              className={`bi bi-chevron-double-left ms-2 ${styles.icon}`}
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
              <path
                fillRule="evenodd"
                d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
