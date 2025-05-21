import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingContent}>
        <div className={styles.utensils}>
          <div className={styles.spoon}></div>
          <div className={styles.fork}></div>
          <div className={styles.knife}></div>
        </div>
        <div className={styles.loadingText}>
          <span className={styles.textPart}>آماده‌سازی</span>
          <span className={styles.textPart}>دستور پخت</span>
          <span className={styles.textPart}>لذیذ...</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill}></div>
        </div>
      </div>
    </div>
  );
}