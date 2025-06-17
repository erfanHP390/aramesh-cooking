import React from "react";
import styles from "./Plans.module.css";
import { MdSend } from "react-icons/md";

function Plans() {
  return (
    <section id="pricing" className={styles.plansSection}>
      <div className="container">
        {/* Toggle Switch */}
        <div className={styles.toggleContainer}>
          <label className={styles.toggleSwitch}>
            <span className={`${styles.toggleLabel} ${styles.monthly}`}>ماهانه</span>
            <input type="checkbox" id="js-checkbox" className="js-checkbox" />
            <span className={styles.toggleSlider}></span>
            <span className={`${styles.toggleLabel} ${styles.yearly}`}>ماهانه/سالانه</span>
          </label>
        </div>

        {/* Pricing Tables */}
        <div className="row justify-content-center">
          {/* Beginner Plan */}
          <div className="col-11 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="px-xl-2">
              <div className={`${styles.pricingTable}`}>
                <header className={styles.pricingHeader}>
                  <h3 className={styles.pricingTitle}>پکیج مبتدی</h3>
                  <p className={styles.pricingSubtitle}>آشپزی خانگی</p>
                  <div className={styles.dividerLine}></div>
                  <div className={styles.pricingAmount}>
                    <span className="js-monthly">199,000 <em>تومان</em></span>
                    <span className="js-yearly d-none">1,990,000 <em>تومان</em></span>
                    <div className={styles.pricingPeriod}>
                      <span className={`js-monthly ${styles.btn_pricing_time}`}>/ماهانه</span>
                      <span className={`js-yearly d-none  ${styles.btn_pricing_time}`}>/سالانه</span>
                    </div>
                  </div>
                </header>
                <div className={styles.pricingFeatures}>
                  <p>دسترسی به 10 دستور پخت ماهانه</p>
                  <p>ویدیوهای آموزشی پایه</p>
                  <p>پشتیبانی آنلاین</p>
                  <p>کتابچه مواد اولیه فصلی</p>
                  <p>تخفیف 10% در خرید مواد اولیه</p>
                </div>
                <button className={`${styles.pricingButton} ${styles.secondaryButton}`}>
                  شروع کنید
                </button>
              </div>
            </div>
          </div>

          {/* Professional Plan */}
          <div className="col-11 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="px-xl-2">
              <div className={`${styles.pricingTable} ${styles.popularTable}`}>
                <div className={styles.ribbon}>
                  <span>پرفروش</span>
                </div>
                <header className={styles.pricingHeader}>
                  <h3 className={styles.pricingTitle}>پکیج حرفه‌ای</h3>
                  <p className={styles.pricingSubtitle}>آشپزهای مشتاق</p>
                  <div className={styles.dividerLine}></div>
                  <div className={styles.pricingAmount}>
                    <span className="js-monthly">499,000 <em>تومان</em></span>
                    <span className="js-yearly d-none">4,990,000 <em>تومان</em></span>
                    <div className={styles.pricingPeriod}>
                      <span className={`js-monthly ${styles.btn_pricing_time}`}>/ماهانه</span>
                      <span className={`js-yearly d-none  ${styles.btn_pricing_time}`}>/سالانه</span>
                    </div>
                  </div>
                </header>
                <div className={styles.pricingFeatures}>
                  <p>دسترسی نامحدود به تمام دستورات</p>
                  <p>کلاس‌های آنلاین هفتگی</p>
                  <p>مشاوره شخصی با سرآشپز</p>
                  <p>کیت مواد اولیه ماهانه</p>
                  <p>تخفیف 20% در خرید مواد اولیه</p>
                  <p>عضویت در جامعه آشپزی</p>
                </div>
                <button className={`${styles.pricingButton} ${styles.primaryButton}`}>
                  <MdSend className="me-2" size={20} />
                  شروع کنید
                </button>
              </div>
            </div>
          </div>

          {/* VIP Plan */}
          <div className="col-11 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="px-xl-2">
              <div className={`${styles.pricingTable}`}>
                <header className={styles.pricingHeader}>
                  <h3 className={styles.pricingTitle}>پکیج VIP</h3>
                  <p className={styles.pricingSubtitle}>آشپزهای نخبه</p>
                  <div className={styles.dividerLine}></div>
                  <div className={styles.pricingAmount}>
                    <span className="js-monthly">999,000 <em>تومان</em></span>
                    <span className="js-yearly d-none">9,990,000 <em>تومان</em></span>
                    <div className={styles.pricingPeriod}>
                      <span className={`js-monthly ${styles.btn_pricing_time}`}>/ماهانه</span>
                      <span className={`js-yearly d-none  ${styles.btn_pricing_time}`}>/سالانه</span>
                    </div>
                  </div>
                </header>
                <div className={styles.pricingFeatures}>
                  <p>همه امکانات پکیج حرفه‌ای</p>
                  <p>کلاس‌های خصوصی با سرآشپز</p>
                  <p>دسترسی به دستورات اختصاصی</p>
                  <p>کیت لوازم آشپزی حرفه‌ای</p>
                  <p>تخفیف 30% در خرید مواد اولیه</p>
                  <p>مشاوره برنامه‌ریزی منوی شخصی</p>
                </div>
                <button className={`${styles.pricingButton} ${styles.secondaryButton}`}>
                  شروع کنید
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plans;