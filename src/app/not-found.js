import Link from 'next/link';
import styles from '@/styles/404.module.css'; 

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorIllustration}>
          <div className={styles.pan}></div>
          <div className={styles.egg}></div>
          <div className={styles.errorText}>404</div>
        </div>
        
        <h1 className={styles.title}>صفحه مورد نظر پیدا نشد!</h1>
        
        <p className={styles.description}>
          به نظر می‌رسد این صفحه مانند یک دستور پخت گم شده است. 
          اما نگران نباشید، می‌توانید به صفحه اصلی بازگردید و 
          از دستورات پخت خوشمزه ما استفاده کنید.
        </p>
        
        <div className={styles.actions}>
          <Link href="/" target='_blank' className={styles.primaryButton}>
            بازگشت به صفحه اصلی
          </Link>
          <Link href="/blog"  target='_blank' className={styles.secondaryButton}>
            مشاهده وبلاگ
          </Link>
        </div>
      </div>
    </div>
  );
}