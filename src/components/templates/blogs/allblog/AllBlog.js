import React from 'react';
import { GiCook } from 'react-icons/gi';
import styles from "./AllBlog.module.css";
import Sidebar from '../sidebar/Sidebar';
import CardBlog from '@/components/modules/blogs/CardBlog';

function AllBlog({blogs}) {
  return (
    <>
      <div className={`${styles.section} ${styles.zIndex2} ${styles.pb6}`}>
        <div className={styles.container}>
          <div className={`${styles.bgBody} ${styles.rounded3} ${styles.shadowSm} ${styles.py4} ${styles.pyLg5} ${styles.px4} ${styles.pxXl5} ${styles.mtN7}`}>
            <div className={`${styles.row} ${styles.mt2}`}>
              <div className={styles.colLg8}>
                <div className={styles.blogHeader}>
                  <GiCook className={styles.cookingIcon} />
                  <h1 className={styles.blogMainTitle}>وبلاگ آشپزی با آرامش</h1>
                </div>
                
                <div className={styles.row}>
                  {blogs.map(blog => (
                    <CardBlog key={blog._id} {...blog} />
                  ))}
                </div>

                <div className={styles.textCenter}>
                  <a href="#" className={`${styles.btn} ${styles.btnLight} ${styles.border}`}>
                    <span>نمایش محتوا بیشتر</span>
                    <svg
                      className={`${styles.bi} ${styles.biArrowRepeat}`}
                      width="1.2rem"
                      height="1.2rem"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.854 7.146a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L2.5 8.207l1.646 1.647a.5.5 0 00.708-.708l-2-2zm13-1a.5.5 0 00-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 00-.708.708l2 2a.5.5 0 00.708 0l2-2a.5.5 0 000-.708z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M8 3a4.995 4.995 0 00-4.192 2.273.5.5 0 01-.837-.546A6 6 0 0114 8a.5.5 0 01-1.001 0 5 5 0 00-5-5zM2.5 7.5A.5.5 0 013 8a5 5 0 009.192 2.727.5.5 0 11.837.546A6 6 0 012 8a.5.5 0 01.501-.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllBlog;