import React from "react";
import { GiCookingPot } from "react-icons/gi";
import styles from "./Terms.module.css";

function Terms() {
  return (
    <>
      <div className={`${styles.section} ${styles.zIndex2} ${styles.pb6}`}>
        <div className={styles.container}>
          <div className={`${styles.bgBody} ${styles.rounded3} ${styles.shadowSm} ${styles.py4} ${styles.pyLg5} ${styles.px4} ${styles.pxXl5} ${styles.mtN7}`}>
            <div className={styles.row}>
              <div className={styles.colLg8}>
                <div className={`${styles.postContent} ${styles.pxMd3}`}>
                  <div className={styles.titleContainer}>
                    <GiCookingPot className={styles.cookingIcon} />
                    <h1 className={styles.mainTitle}>قوانین و مقررات آشپزی با ارامش</h1>
                  </div>
                  
                  <h2 className={styles.sectionTitle}>شرایط ثبت نام در دوره‌های آشپزی</h2>
                  <p className={styles.paragraph}>
                    ۱. حداقل سن برای شرکت در دوره‌های عمومی ۱۶ سال می‌باشد. برای دوره‌های تخصصی، حداقل سن ۱۸ سال در نظر گرفته شده است.
                  </p>
                  <p className={styles.paragraph}>
                    ۲. ثبت نام تنها از طریق وبسایت آشپزی با ارامش معتبر بوده و پرداخت هزینه به منزله پذیرش کامل این قوانین می‌باشد.
                  </p>
                  <p className={styles.paragraph}>
                    ۳. در صورت انصراف تا ۷۲ ساعت قبل از شروع دوره، کل مبلغ به هنرجو عودت داده می‌شود.
                  </p>

                  <h2 className={styles.sectionTitle}>قوانین حضور در کلاس‌ها</h2>
                  <p className={styles.paragraph}>
                    ۱. حضور به موقع در کلاس‌ها الزامی است. تاخیر بیش از ۱۵ دقیقه به منزله غیبت محسوب می‌شود.
                  </p>
                  <p className={styles.paragraph}>
                    ۲. هنرجویان موظف به رعایت بهداشت فردی و پوشیدن لباس مناسب در محیط آشپزخانه هستند.
                  </p>
                  <p className={styles.paragraph}>
                    ۳. همراه آوردن وسایل شخصی غیرضروری به آشپزخانه آموزشی ممنوع می‌باشد.
                  </p>

                  <h2 className={styles.sectionTitle}>سیاست بازگشت هزینه</h2>
                  <p className={styles.paragraph}>
                    ۱. در صورت انصراف تا ۷۲ ساعت قبل از شروع دوره، کل مبلغ عودت داده می‌شود.
                  </p>
                  <p className={styles.paragraph}>
                    ۲. پس از شروع دوره، مبلغ بازگشتی بر اساس جلسات باقیمانده محاسبه می‌شود.
                  </p>
                  <p className={styles.paragraph}>
                    ۳. در صورت لغو دوره از طرف آموزشگاه، کل مبلغ به هنرجو بازگردانده می‌شود.
                  </p>

                  <h2 className={styles.sectionTitle}>قوانین استفاده از محتوای آموزشی</h2>
                  <p className={styles.paragraph}>
                    ۱. کلیه محتوای آموزشی شامل ویدیوها، جزوات و دستور پخت‌ها، متعلق به آشپزی با ارامش بوده و هرگونه تکثیر یا انتشار غیرمجاز پیگرد قانونی دارد.
                  </p>
                  <p className={styles.paragraph}>
                    ۲. هنرجویان تنها مجاز به استفاده شخصی از محتوای آموزشی هستند.
                  </p>

                  <h2 className={styles.sectionTitle}>مسئولیت‌ها</h2>
                  <p className={styles.paragraph}>
                    ۱. آموزشگاه مسئولیتی در قبال وسایل شخصی هنرجویان ندارد.
                  </p>
                  <p className={styles.paragraph}>
                    ۲. در صورت بروز هرگونه آسیب ناشی از بی‌احتیاطی هنرجو، مسئولیت متوجه خود فرد خواهد بود.
                  </p>
                  <p className={styles.paragraph}>
                    ۳. هنرجویان با بیماری‌های خاص یا آلرژی موظف به اطلاع‌رسانی قبل از شروع دوره هستند.
                  </p>

                  <h2 className={styles.sectionTitle}>تغییرات در قوانین</h2>
                  <p className={styles.paragraph}>
                    آشپزی با ارامش این حق را برای خود محفوظ می‌دارد که در هر زمان بدون اطلاع قبلی، این شرایط و ضوابط را تغییر دهد. این تغییرات بلافاصله پس از انتشار در سایت قابل اجرا خواهند بود.
                  </p>

                  <p className={`${styles.paragraph} ${styles.mt4}`}>
                    <strong className={styles.strongText}>آخرین بروزرسانی:</strong> 24 آذر 1403
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Terms;