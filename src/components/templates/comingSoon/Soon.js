"use client";
import React, { useState } from "react";
import styles from "./Soon.module.css";
import Loading from "@/app/loading";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import { validateEmail } from "@/utils/auth";
import swal from "sweetalert"

function Soon() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const registerEmail = async () => {
    if (!email) {
      setIsLoading(false);
      return swalAlert("لطفا ایمیل خود را وارد نمایید", "error", "فهمیدم");
    }

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setIsLoading(false);
      return swalAlert("لطفا ایمیل معتبر وارد نمایید", "error", "فهمیدم");
    }

    const newsEmail = { email };

    const res = await fetch("/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newsEmail),
    });

    if (res.status === 201) {
      setEmail("");
      setIsLoading(false);
      swal({
        title: "ایمیل شما با موفقیت ثبت شد",
        text: "اخبار ما را از ایمیل خود دنبال کنید",
        icon: "success",
        button: "فهمیدم",
      });
    } else if (res.status === 400) {
      setEmail("");
      setIsLoading(false);
      toastError(
        "لطفا ایمیل خود را وارد نمایید",
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
      setEmail("");
      setIsLoading(false);
      toastError(
        "ایمیل ثبت شده است",
        "bottom-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
    } else if (res.status === 422) {
      setEmail("");
      setIsLoading(false);
      toastError(
        "لطفا ایمیل معتبر وارد نمایید",
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
      setEmail("");
      setIsLoading(false);
      toastError(
        "خطا در سرور لطفا پس از چند دقیقه دوباره تلاش نمایید",
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
  };

  return (
    <main id="content">
      <div id="hero" className={styles.soonContainer}>
        <div className={styles.videoBackground}>
          <div className={styles.heroOverlay}></div>

          {/* content */}
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>به زودی راه‌اندازی می‌شویم!</h1>
              <p className={styles.heroSubtitle}>
                در حال آماده‌سازی بهترین تجربه آشپزی آنلاین برای شما هستیم
              </p>

              {/* newsLetter-form */}
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  className={styles.emailInput}
                  placeholder="ایمیل خود را برای اطلاع از راه‌اندازی وارد کنید"
                  aria-label="آدرس ایمیل"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <button
                  onClick={() => {
                    setIsLoading(true);
                    registerEmail();
                  }}
                  className={styles.notifyBtn}
                >
                  {isLoading ? <Loading /> : "مطلع شوید!"}
                </button>
              </div>

              {/* socials-icon */}
              <div className={styles.socialIcons}>
                <a
                  href="https://instagram.com/ashpazibaaaramsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  title="اینستاگرام"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"
                    />
                    <path
                      fill="currentColor"
                      d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"
                    />
                    <path
                      fill="currentColor"
                      d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"
                    />
                  </svg>
                </a>

                <a
                  href="https://youtube.com/ashpazibaaaramsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  title="یوتیوب"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M508.64,148.79c0-45-33.1-81.2-74-81.2C379.24,65,322.74,64,265,64H247c-57.6,0-114.2,1-169.6,3.6-40.8,0-73.9,36.4-73.9,81.4C1,184.59-.06,220.19,0,255.79q-.15,53.4,3.4,106.9c0,45,33.1,81.5,73.9,81.5,58.2,2.7,117.9,3.9,178.6,3.8q91.2.3,178.6-3.8c40.9,0,74-36.5,74-81.5,2.4-35.7,3.5-71.3,3.4-107Q512.24,202.29,508.64,148.79ZM207,353.89V157.39l145,98.2Z"
                    />
                  </svg>
                </a>

                <a
                  href="https://t.me/ashpazibaaaramsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  title="تلگرام"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="currentColor"
                      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"
                    />
                  </svg>
                </a>

                <a
                  href="https://aparat.com/ashpazibaaaramsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  title="آپارات"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Soon;
