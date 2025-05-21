"use client";
import styles from "./Error.module.css";
import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className={styles.container}>
      <div className={styles.errorContent}>
        <div className={styles.errorIllustration}>
          <div className={styles.bowl}></div>
          <div className={styles.spilledSoup}></div>
          <div className={styles.errorText}>خطا!</div>
        </div>

        <h1 className={styles.title}>مشکلی در آماده‌سازی صفحه پیش آمد!</h1>

        <p className={styles.description}>
          مانند یک غذای سوخته، چیزی اینجا درست پیش نرفت. می‌توانید:
        </p>

        <div className={styles.actions}>
          <button onClick={() => reset()} className={styles.retryButton}>
            دوباره امتحان کنید
          </button>
          <Link href="/" className={styles.homeButton}>
            بازگشت به خانه
          </Link>
        </div>
      </div>
    </div>
  );
}
