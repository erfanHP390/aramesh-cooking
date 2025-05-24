import React from "react";
import styles from "./Login.module.css";
import Link from "next/link";

function Login() {
  return (
    <section id="login-area" className={styles.loginSection}>
      <div className={styles.loginContainer}>
        <div className={styles.loginRow}>
          <div className={styles.loginFormWrapper} data-aos="fade-up">
            <div className={styles.loginCard}>
              <form id="login-form" className={styles.loginForm} noValidate>
                <h1 className={styles.loginTitle}>ورود به حساب کاربری</h1>
                <div className={styles.loginDivider} />
                
                <div className={styles.formGroup}>
                  <input
                    name="email"
                    className={styles.formInput}
                    placeholder="آدرس ایمیل"
                    aria-label="email"
                    type="email"
                    required
                  />
                  <div className={styles.invalidFeedback}>
                    لطفا آدرس ایمیل را وارد کنید.
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <input
                    className={styles.formInput}
                    placeholder="رمز عبور"
                    aria-label="password"
                    type="password"
                    required
                  />
                  <div className={styles.invalidFeedback}>
                    لطفا رمز عبور را وارد کنید.
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <div className={styles.formCheck}>
                    <input
                      className={styles.checkboxInput}
                      type="checkbox"
                      id="remember"
                    />
                    <label className={styles.checkboxLabel} htmlFor="remember">
                      من را به یاد بیاورید
                    </label>
                  </div>
                  
                  <button type="submit" className={ `  btn_services ${styles.submitButton}`}>
                    ورود به حساب کاربری
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className={styles.loginIcon}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
              
              <div className={styles.socialLogin}>
                <p className={styles.socialDivider}>یا</p>
                
                <div className={styles.socialButtons}>
                  <a href="#" className={styles.facebookButton}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.socialIcon}
                      width="1.5rem"
                      height="1.5rem"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                    </svg>
                    ورود با فیسبوک
                  </a>
                  
                  <a href="#" className={styles.twitterButton}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.socialIcon}
                      width="1.5rem"
                      height="1.5rem"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                    </svg>
                    ورود با توئیتر
                  </a>
                </div>
                
                <div className={styles.loginLinks}>
                  <p>
                    حساب کاربری ندارید؟{" "}
                    <Link href={"/register"} className={styles.link}>ثبت نام کنید</Link>
                  </p>
                  <p>
                    رمز عبور از دست رفته؟{" "}
                    <Link href={"/forgotPassword"} className={styles.link}>بازنشانی رمز عبور</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;