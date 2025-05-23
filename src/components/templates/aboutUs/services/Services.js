import React from "react";
import styles from "./Services.module.css";

function Services() {
  return (
    <>
      <div
        id="services"
        className="section pt-6 pt-md-7 pb-4 pb-md-5 bg-light-dark"
      >
        <div className="container">
          {/* section header */}
          <header className="text-center mx-auto mb-5">
            <h2 className="h3 fw-bold">
              {" "}
              خدمات <span className="fw-light">ما</span>
            </h2>
            <hr className="divider my-4 mx-auto bg-warning border-warning" />
          </header>
          {/* end section header */}
          <div className="row">
            <div className="col-md-6">
              <div
                className="bg-body mb-5 rounded-3 overflow-hidden shadow-sm"
                data-aos="fade-up"
              >
                <div className="row g-0">
                  {/* img block */}
                  <div
                    className={`${styles.img_container} col-lg-6 order-lg-2 text-white showcase-img`}
                  >
                    <img
                      alt="service"
                      className={`${styles.img_content}`}
                      src="/images/Food.jpg"
                    />
                  </div>
                  {/* content block */}
                  <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                    <div className="p-4">
                      <h3 className="h4 mb-3">پذیرایی مجالس و مراسمات</h3>
                      <p className="lead mb-5">
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
                className="bg-body mb-5 rounded-3 overflow-hidden shadow-sm"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="row g-0">
                  {/* img block */}
                  <div
                    className={`${styles.img_container} col-lg-6 order-lg-2 text-white showcase-img`}
                  >
                    <img
                      alt="service"
                      src="/images/Vegan-food.jpg"
                      className={`${styles.img_content}`}
                    />
                  </div>
                  {/* content block */}
                  <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                    <div className="p-4">
                      <h3 className="h4 mb-3">آموزش آشپزی حرفه‌ای</h3>
                      <p className="lead mb-5">
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
