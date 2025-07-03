"use client";
import React, { useState } from "react";
import styles from "./Register.module.css";
import { useRouter } from "next/navigation";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import { validateEmail, validatePassword, validatePhone } from "@/utils/auth";
import swal from "sweetalert";
import Loading from "@/app/loading";

function Register() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isReadRules, setIsReadRules] = useState(false);

  const registerUser = async () => {
    if (isReadRules) {
      if (!name || !email || !phone || !password) {
        setIsLoading(false);
        return swalAlert("لطفا تمامی موارد را پر کنید", "error", "فهمیدم");
      }

      const isValidEmail = validateEmail(email);
      if (!isValidEmail) {
        setIsLoading(false);
        return swalAlert("لطفا یک ایمیل معتبر وارد نمایید", "error", "فهمیدم");
      }

      const isValidPhone = validatePhone(phone);
      if (!isValidPhone) {
        setIsLoading(false);
        return swalAlert("لطفا یک تلفن معتبر وارد نمایید", "error", "فهمیدم");
      }

      const isValidPassword = validatePassword(password);
      if (!isValidPassword) {
        setIsLoading(false);
        return swalAlert(
          "لطفا یک رمزعبور معتبر .وارد نمایید (جداقل هشت کاراکتر و شامل نماد،عدد،حروف کوچک و بزرگ انگلیسی باشد",
          "error",
          "فهمیدم"
        );
      }

      const newUser = {
        name,
        phone,
        email,
        password,
      };

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const userData = await res.json();

      if (res.status === 201) {
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setIsReadRules(false);
        setIsLoading(false);
        swal({
          title: "ثبت نام شما با موفقیت انجام شد کد اشتراک شما:",
          text: `${userData.data.subscription}`,
          icon: "success",
          buttons: "فهمیدم",
        }).then((result) => {
          if (result) {
            router.replace("/");
          }
        });
      } else if (res.status === 422) {
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setIsReadRules(false);
        setIsLoading(false);
        toastError(
          "نام/شماره تلفن / ایمیل شما قبلا ثبت شده است لطفا دوباره اقدام کنید",
          "top-center",
          5000,
          false,
          true,
          true,
          true,
          undefined,
          "colored"
        );
      } else if (res.status === 419) {
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setIsReadRules(false);
        setIsLoading(false);
        toastError(
          "شماره تلفن/ایمیل باید فرمت معتبر و رمزعبور حداقل از نماد و حرف بزرگ و کوچک و  نماد تشکیل شده باشد",
          "top-center",
          5000,
          false,
          true,
          true,
          true,
          undefined,
          "colored"
        );
      } else if (res.status === 500) {
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setIsReadRules(false);
        setIsLoading(false);
        toastError(
          "خطا در سرور ، لطفا بعدا تلاش کنید",
          "top-center",
          5000,
          false,
          true,
          true,
          true,
          undefined,
          "colored"
        );
      }
    } else {
      setIsLoading(false);
      return swalAlert(
        "لطفا ابتدا شرایط و قوانین را مطالعه فرمایید",
        "error",
        "فهمیدم"
      );
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <section
            id="register"
            className={`section ${styles.primaryBg} ${styles.loginContainer}`}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-12 col-md-10 col-lg-8 px-3 px-md-4"
                  data-aos="fade-up"
                >
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
                          value={name}
                          onChange={(event) => setName(event.target.value)}
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
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                        <div className={styles.invalidFeedback}>
                          لطفا آدرس ایمیل معتبر وارد کنید.
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <input
                          type="text"
                          className={styles.formControl}
                          placeholder="تلفن"
                          required
                          value={phone}
                          onChange={(event) => setPhone(event.target.value)}
                        />
                        <div className={styles.invalidFeedback}>
                          لطفا تلفن خود را وارد کنید.
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <input
                          type="password"
                          className={styles.formControl}
                          placeholder="رمز عبور"
                          required
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                        <div className={styles.invalidFeedback}>
                          لطفا رمز عبور را وارد کنید.
                        </div>
                      </div>

                      <div className={styles.checkboxContainer}>
                        <label className={styles.checkboxLabel}>
                          <input
                            type="checkbox"
                            className={styles.checkboxInput}
                            required
                            value={isReadRules}
                            onChange={(event) =>
                              setIsReadRules((prevValue) => !prevValue)
                            }
                          />
                          <span className={styles.textColor}>
                            <a href="/terms" className={styles.loginLink}>
                              شرایط و ضوابط
                            </a>{" "}
                            را می‌پذیرم
                          </span>
                        </label>
                      </div>

                      <button
                        type="submit"
                        onClick={(event) => {
                          event.preventDefault();
                          setIsLoading(true);
                          registerUser();
                        }}
                        className={`${styles.btnPrimary} ${styles.formControl}`}
                      >
                        ثبت نام
                      </button>
                    </form>

                    <div className={styles.orText}>
                      <span className={styles.textColor}>یا</span>
                    </div>

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

                    <p className={`${styles.textColor} text-center`}>
                      حساب کاربری دارید؟{" "}
                      <a href="/login" className={styles.loginLink}>
                        ورود به حساب
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default Register;
