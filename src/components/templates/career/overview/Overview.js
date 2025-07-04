import React from "react";
import styles from "./Overview.module.css";
import {
  GiChefToque,
  GiHealthIncrease,
  GiPayMoney,
  GiMeal,
  GiVacuumCleaner,
  GiBookshelf,
  GiWorld,
} from "react-icons/gi";

function Overview() {
  return (
    <>
      <div
        id="overview"
        className={`section pt-6 pt-md-7 pb-4 pb-md-5 ${styles.overviewSection}`}
      >
        <div className="container">
          {/* row */}
          <div className="row mb-6 mb-md-7">
            <div
              className={`col-lg-6 order-lg-2 px-5 px-lg-7 text-center ${styles.overviewImageContainer}`}
              data-aos="fade-left"
            >
              <img
                src="/images/overview.webp"
                className="img-fluid"
                alt="تیم حرفه ای آشپزی با آرامش"
                loading="lazy"
              />
            </div>
            <div
              className="col-lg-6 order-lg-1 align-self-center"
              data-aos="fade-right"
            >
              <div className="mt-4 mt-lg-0">
                <h2 className={`h1 fw-light mt-3 ${styles.overviewTitle}`}>
                  به خانواده{" "}
                  <span className={`fw-semi-bold ${styles.overviewTitleBold}`}>
                    آرامش
                  </span>{" "}
                  بپیوندید
                </h2>
                <p className={`lead mt-3 ${styles.overviewText}`}>
                  ما در مجموعه " آرامش" به دنبال افراد خلاق، پرانرژی و علاقه‌مند
                  به دنیای آشپزی هستیم. اگر عاشق خلق طعم‌های جدید هستید و به کار
                  تیمی اعتقاد دارید، اینجا محل رشد و شکوفایی استعدادهای شماست.
                  <br />
                  <br />
                  ما با ارائه محیطی پویا و حرفه‌ای، فرصت‌های بی‌نظیری برای
                  یادگیری و پیشرفت در اختیار شما قرار می‌دهیم.
                </p>
              </div>
            </div>
          </div>
          {/* end row */}
          {/* row */}
          <div className="row">
            <div className="col-md-6 col-lg-4 px-4 px-md-3" data-aos="fade-up">
              {/* service block */}
              <div
                className={`p-4 mb-5 text-center border rounded-3 ${styles.serviceBox}`}
              >
                <div className={`mb-3 ${styles.serviceIcon}`}>
                  <GiHealthIncrease size="3rem" />
                </div>
                <h3 className={`h5 mb-2 ${styles.serviceTitle}`}>
                  بیمه تکمیلی و رفاهی
                </h3>
                <p className={styles.serviceDescription}>
                  پوشش کامل بیمه درمانی برای شما و خانواده‌تان به همراه تسهیلات
                  رفاهی ویژه برای همکاران
                </p>
              </div>
              {/* end service block */}
            </div>
            <div
              className="col-md-6 col-lg-4 px-4 px-md-3"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              {/* service block */}
              <div
                className={`p-4 mb-5 text-center border rounded-3 ${styles.serviceBox}`}
              >
                <div className={`mb-3 ${styles.serviceIcon}`}>
                  <GiPayMoney size="3rem" />
                </div>
                <h3 className={`h5 mb-2 ${styles.serviceTitle}`}>
                  حقوق و مزایای رقابتی
                </h3>
                <p className={styles.serviceDescription}>
                  پرداخت حقوق منصفانه و پاداش‌های عملکردی به همراه مزایای ویژه
                  برای سرآشپزان برتر
                </p>
              </div>
              {/* end service block */}
            </div>
            <div
              className="col-md-6 col-lg-4 px-4 px-md-3"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {/* service block */}
              <div
                className={`p-4 mb-5 text-center border rounded-3 ${styles.serviceBox}`}
              >
                <div className={`mb-3 ${styles.serviceIcon}`}>
                  <GiMeal size="3rem" />
                </div>
                <h3 className={`h5 mb-2 ${styles.serviceTitle}`}>
                  تغذیه رایگان
                </h3>
                <p className={styles.serviceDescription}>
                  وعده‌های غذایی سالم و باکیفیت برای تمامی همکاران به صورت
                  رایگان در محل کار
                </p>
              </div>
              {/* end service block */}
            </div>
            <div className="col-md-6 col-lg-4 px-4 px-md-3" data-aos="fade-up">
              {/* service block */}
              <div
                className={`p-4 mb-5 text-center border rounded-3 ${styles.serviceBox}`}
              >
                <div className={`mb-3 ${styles.serviceIcon}`}>
                  <GiVacuumCleaner size="3rem" />
                </div>
                <h3 className={`h5 mb-2 ${styles.serviceTitle}`}>
                  مرخصی استعلاجی و تشویقی
                </h3>
                <p className={styles.serviceDescription}>
                  مرخصی‌های با حقوق و مرخصی‌های ویژه برای مناسبت‌های خانوادگی و
                  شخصی
                </p>
              </div>
              {/* end service block */}
            </div>
            <div
              className="col-md-6 col-lg-4 px-4 px-md-3"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              {/* service block */}
              <div
                className={`p-4 mb-5 text-center border rounded-3 ${styles.serviceBox}`}
              >
                <div className={`mb-3 ${styles.serviceIcon}`}>
                  <GiBookshelf size="3rem" />
                </div>
                <h3 className={`h5 mb-2 ${styles.serviceTitle}`}>
                  دوره‌های آموزشی تخصصی
                </h3>
                <p className={styles.serviceDescription}>
                  امکان شرکت در دوره‌های داخلی و خارجی برای ارتقای مهارت‌های
                  آشپزی و مدیریت
                </p>
              </div>
              {/* end service block */}
            </div>
            <div
              className="col-md-6 col-lg-4 px-4 px-md-3"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {/* service block */}
              <div
                className={`p-4 mb-5 text-center border rounded-3 ${styles.serviceBox}`}
              >
                <div className={`mb-3 ${styles.serviceIcon}`}>
                  <GiWorld size="3rem" />
                </div>
                <h3 className={`h5 mb-2 ${styles.serviceTitle}`}>
                  سفرهای مطالعاتی
                </h3>
                <p className={styles.serviceDescription}>
                  بازدید از مراکز معتبر آشپزی بین‌المللی و شرکت در نمایشگاه‌های
                  تخصصی
                </p>
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

export default Overview;
