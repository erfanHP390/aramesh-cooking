import React from "react";
import styles from "./Services.module.css";

function Services() {
  return (
    <>
      <div
        id="services"
        className={`section pt-6 pt-md-7 pb-4 pb-md-5 bg-light-dark ${styles.dark_mode_background}`}
      >
        <div className="container">
          {/* section header */}
          <header
            className={`text-center mx-auto mb-5 ${styles.dark_mode_text}`}
          >
            <h2 className={`h3 fw-bold ${styles.dark_mode_heading}`}>
              {" "}
              خدمات <span className="fw-light">ما</span>
            </h2>
            <hr
              className={`divider my-4 mx-auto bg-warning border-warning ${styles.dark_mode_divider}`}
            />
          </header>
          {/* end section header */}
          <div className="row">
            <div className="col-md-6">
              <div
                className={`bg-body mb-5 rounded-3 overflow-hidden shadow-sm ${styles.dark_mode_card}`}
                data-aos="fade-up"
              >
                <div className="row g-0">
                  {/* img block */}
                  <div
                    className={`${styles.img_container} col-lg-6 order-lg-2 text-white showcase-img ${styles.dark_mode_img_container}`}
                  >
                    <img
                      alt="service"
                      className={`${styles.img_content} ${styles.dark_mode_img}`}
                      src="/images/Food.webp"
                      loading="lazy"
                    />
                  </div>
                  {/* content block */}
                  <div
                    className={`col-lg-6 order-lg-1 my-auto showcase-text ${styles.dark_mode_showcase_text}`}
                  >
                    <div className="p-4">
                      <h3 className={`h4 mb-3 ${styles.dark_mode_subheading}`}>
                        پذیرایی مجالس و مراسمات
                      </h3>
                      <p className={`lead mb-5 ${styles.dark_mode_paragraph}`}>
                        خدمات پذیرایی حرفه‌ای برای تمامی مراسمات از جمله عروسی،
                        جشن تولد، همایش‌ها و مراسمات شرکتی. ما با تیم حرفه‌ای
                        خود و استفاده از بهترین مواد اولیه، تجربه‌ای بی‌نظیر از
                        طعم و سرویس را برای مهمانان شما به ارمغان می‌آوریم.
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className={`bg-body mb-5 rounded-3 overflow-hidden shadow-sm ${styles.dark_mode_card}`}
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="row g-0">
                  {/* img block */}
                  <div
                    className={`${styles.img_container} col-lg-6 order-lg-2 text-white showcase-img ${styles.dark_mode_img_container}`}
                  >
                    <img
                      alt="service"
                      src="/images/Vegan-food.webp"
                      className={`${styles.img_content} ${styles.dark_mode_img}`}
                      loading="lazy"
                    />
                  </div>
                  {/* content block */}
                  <div
                    className={`col-lg-6 order-lg-1 my-auto showcase-text ${styles.dark_mode_showcase_text}`}
                  >
                    <div className="p-4">
                      <h3 className={`h4 mb-3 ${styles.dark_mode_subheading}`}>
                        آموزش آشپزی حرفه‌ای
                      </h3>
                      <p className={`lead mb-5 ${styles.dark_mode_paragraph}`}>
                        دوره‌های آموزشی آشپزی برای تمامی سطوح از مبتدی تا
                        پیشرفته زیر نظر بهترین سرآشپزان کشور. چه بخواهید به صورت
                        حرفه‌ای آشپزی یاد بگیرید و چه برای علاقه شخصی، ما بهترین
                        محیط آموزشی را برای شما فراهم کرده‌ایم.
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
