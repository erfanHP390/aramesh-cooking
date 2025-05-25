import React from "react";
import styles from "./Sidebar.module.css";
import { GiArchiveRegister, GiCook, GiNotebook } from "react-icons/gi";

function Sidebar() {
  return (
    <div className={`${styles.colLg4} ${styles.psLg5}`}>
      <aside className={`${styles.widgetArea} ${styles.sticky} ${styles.mt5} ${styles.mtLg0}`}>
        {/* آرشیو محتوا */}
        <aside id="archives" className={`${styles.widget} ${styles.mb4}`}>
          <div className={styles.widgetTitle}>
            <GiArchiveRegister className={styles.widgetIcon} />
            <h4 className={styles.h5}>
              <span>آرشیو محتوا</span>
            </h4>
          </div>
          <div className={styles.sideLinks}>
            <a
              className={`${styles.py2} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
              href="category.html"
            >
              فروردین 1403
              <span className={`${styles.badge} ${styles.bgLightDark} ${styles.textPrimary} ${styles.rounded3}`}>
                10
              </span>
            </a>
            <a
              className={`${styles.py2} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
              href="category.html"
            >
              اردیبهشت 1403
              <span className={`${styles.badge} ${styles.bgLightDark} ${styles.textPrimary} ${styles.rounded3}`}>
                14
              </span>
            </a>
            <a
              className={`${styles.py2} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
              href="category.html"
            >
              خرداد 1403
              <span className={`${styles.badge} ${styles.bgLightDark} ${styles.textPrimary} ${styles.rounded3}`}>
                12
              </span>
            </a>
            <a
              className={`${styles.py2} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
              href="category.html"
            >
              تیر 1403
              <span className={`${styles.badge} ${styles.bgLightDark} ${styles.textPrimary} ${styles.rounded3}`}>
                11
              </span>
            </a>
            <a
              className={`${styles.py2} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
              href="category.html"
            >
              مرداد 1403
              <span className={`${styles.badge} ${styles.bgLightDark} ${styles.textPrimary} ${styles.rounded3}`}>
                16
              </span>
            </a>
          </div>
        </aside>

        {/* دسته بندی ها */}
        <aside id="categories" className={`${styles.widget} ${styles.mb4}`}>
          <div className={styles.widgetTitle}>
            <GiCook className={styles.widgetIcon} />
            <h4 className={styles.h5}>
              <span>دسته بندی ها</span>
            </h4>
          </div>
          <div className={styles.sideLinks}>
            <a
              className={`${styles.py2} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
              href="category.html"
            >
              دستور پخت‌ها
              <span className={`${styles.badge} ${styles.bgLightDark} ${styles.textPrimary} ${styles.rounded3}`}>
                16
              </span>
            </a>
            <a
              className={`${styles.py2} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
              href="category.html"
            >
              تکنیک‌های آشپزی
              <span className={`${styles.badge} ${styles.bgLightDark} ${styles.textPrimary} ${styles.rounded3}`}>
                23
              </span>
            </a>
            <a
              className={`${styles.py2} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
              href="category.html"
            >
              مواد اولیه
              <span className={`${styles.badge} ${styles.bgLightDark} ${styles.textPrimary} ${styles.rounded3}`}>
                15
              </span>
            </a>
            <a
              className={`${styles.py2} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
              href="category.html"
            >
              ابزار آشپزی
              <span className={`${styles.badge} ${styles.bgLightDark} ${styles.textPrimary} ${styles.rounded3}`}>
                3
              </span>
            </a>
          </div>
        </aside>

        {/* سایر */}
        <aside id="meta" className={`${styles.widget} ${styles.mb4}`}>
          <div className={styles.widgetTitle}>
            <GiNotebook className={styles.widgetIcon} />
            <h4 className={styles.h5}>
              <span>سایر</span>
            </h4>
          </div>
          <div className={styles.sideLinks}>
            <a
              className={`${styles.py2} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
              href="login.html"
            >
              صفحه ورود
            </a>
            <a
              className={`${styles.py2} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
              href="category.html"
            >
              دوره‌های آموزشی
            </a>
            <a
              className={`${styles.py2} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
              href="category.html"
            >
              نظرات
            </a>
          </div>
        </aside>
      </aside>
    </div>
  );
}

export default Sidebar;