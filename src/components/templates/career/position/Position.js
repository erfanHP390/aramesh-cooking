import React from "react";
import styles from "./Position.module.css";

function Position() {
  return (
    <>
      <div id="open-position" className={`section py-6 py-md-7 ${styles.positionSection}`}>
        <div className="container">
          {/* section header */}
          <header className={styles.positionHeader}>
            <h2 className={styles.positionTitle}>موقعیت‌های شغلی در اشپزی آرامش</h2>
            <hr className={styles.positionDivider} />
          </header>
          {/* end section header */}
          <div className="row justify-content-center">
            <div className="col-10">
              <div className={`head-schedule ${styles.positionListHeader}`}>
                <div className="row g-0 align-items-center text-center text-md-start p-4">
                  <div className="col-xl-8 col-md-6">
                    <p className="mb-0">موقعیت شغلی</p>
                  </div>
                  <div className="col-md py-2 py-md-0">
                    <span>تیم</span>
                  </div>
                  <div className="col-md">
                    <span>محل</span>
                  </div>
                </div>
              </div>
              <div className={`schedule ${styles.positionList}`}>
                <div className={`row g-0 align-items-center text-center text-md-start p-4 ${styles.positionItem}`}>
                  <div className="col-xl-8 col-md-6">
                    <h5 className={styles.positionName}>سرآشپز حرفه‌ای</h5>
                  </div>
                  <div className="col-md py-2 py-md-0">
                    <span className={styles.positionTeam}>آشپزی</span>
                  </div>
                  <div className="col-md">
                    <span className={styles.positionLocation}>ایران، تهران</span>
                  </div>
                </div>
                <div className={`row g-0 align-items-center text-center text-md-start p-4 ${styles.positionItem}`}>
                  <div className="col-xl-8 col-md-6">
                    <h5 className={styles.positionName}>
                      متخصص شیرینی‌پزی و دسرهای بین‌المللی
                    </h5>
                  </div>
                  <div className="col-md py-2 py-md-0">
                    <span className={styles.positionTeam}>آشپزی</span>
                  </div>
                  <div className="col-md">
                    <span className={styles.positionLocation}>ایران، تهران</span>
                  </div>
                </div>
                <div className={`row g-0 align-items-center text-center text-md-start p-4 ${styles.positionItem}`}>
                  <div className="col-xl-8 col-md-6">
                    <h5 className={styles.positionName}>مدیر اجرایی مجالس و پذیرایی</h5>
                  </div>
                  <div className="col-md py-2 py-md-0">
                    <span className={styles.positionTeam}>خدمات پذیرایی</span>
                  </div>
                  <div className="col-md">
                    <span className={styles.positionLocation}>ایران، تهران</span>
                  </div>
                </div>
                <div className={`row g-0 align-items-center text-center text-md-start p-4 ${styles.positionItem}`}>
                  <div className="col-xl-8 col-md-6">
                    <h5 className={styles.positionName}>مدرس دوره‌های آشپزی تخصصی</h5>
                  </div>
                  <div className="col-md py-2 py-md-0">
                    <span className={styles.positionTeam}>آموزش</span>
                  </div>
                  <div className="col-md">
                    <span className={styles.positionLocation}>ایران، تهران</span>
                  </div>
                </div>
                <div className={`row g-0 align-items-center text-center text-md-start p-4 ${styles.positionItem}`}>
                  <div className="col-xl-8 col-md-6">
                    <h5 className={styles.positionName}>طراح منو و برنامه‌ریزی غذایی</h5>
                  </div>
                  <div className="col-md py-2 py-md-0">
                    <span className={styles.positionTeam}>خلاقیت</span>
                  </div>
                  <div className="col-md">
                    <span className={styles.positionLocation}>ایران، تهران</span>
                  </div>
                </div>
              </div>
              <div className={styles.positionFooter}>
                <p className="mb-0">
                  علاقه‌مند به همکاری با بهترین تیم آشپزی هستید؟{" "}
                  <a href="contact.html">با ما تماس بگیرید</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Position;