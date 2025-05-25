import React from "react";
import styles from "./Register.module.css";

function Register() {
  return (
    <section id="register" className={`section ${styles.primaryBg} ${styles.loginContainer}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 px-3 px-md-4" data-aos="fade-up">
            <div className={styles.loginForm}>
              <form className={styles.form} noValidate>
                <h1 className={styles.loginTitle}>
                  هم اکنون ثبت نام کنید
                </h1>
                
                <div className={styles.divider}></div>
                
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    className={styles.formControl}
                    placeholder="نام کامل"
                    required
                  />
                  <div className={styles.invalidFeedback}>
                    لطفا نام کامل را وارد کنید.
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    className={styles.formControl}
                    placeholder="آدرس ایمیل"
                    required
                  />
                  <div className={styles.invalidFeedback}>
                    لطفا آدرس ایمیل معتبر وارد کنید.
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <input
                    type="password"
                    className={styles.formControl}
                    placeholder="رمز عبور"
                    required
                  />
                  <div className={styles.invalidFeedback}>
                    لطفا رمز عبور را وارد کنید.
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <input
                    type="password"
                    className={styles.formControl}
                    placeholder="تکرار رمز عبور"
                    required
                  />
                  <div className={styles.invalidFeedback}>
                    لطفا رمز عبور را تکرار کنید.
                  </div>
                </div>
                
                <div className={styles.checkboxContainer}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      className={styles.checkboxInput}
                      required
                    />
                    <span className={styles.textColor}>
                      <a href="/terms" className={styles.loginLink}>شرایط و ضوابط</a> را می‌پذیرم
                    </span>
                  </label>
                </div>
                
                <button type="submit" className={`${styles.btnPrimary} ${styles.formControl}`}>
                  ثبت نام
                </button>
              </form>
              
              <div className={styles.orText}>
                <span className={styles.textColor}>یا</span>
              </div>
              
              <div className={styles.socialButtons}>
                <a href="#" className={`${styles.socialBtn} ${styles.btnFacebook}`}>
                  ورود با فیسبوک
                  <svg className={styles.socialIcon} viewBox="0 0 512 512">
                    <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                  </svg>
                </a>
                
                <a href="#" className={`${styles.socialBtn} ${styles.btnTwitter}`}>
                  ورود با توییتر
                  <svg className={styles.socialIcon} viewBox="0 0 512 512">
                    <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                  </svg>
                </a>
              </div>
              
              <p className={`${styles.textColor} text-center`}>
                حساب کاربری دارید؟ {' '}
                <a href="/login" className={styles.loginLink}>ورود به حساب</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;