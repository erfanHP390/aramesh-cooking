"use client"
import React, { useState, useEffect } from "react";
import styles from "./AllBlog.module.css";
import CardBlog from "@/components/modules/blogs/CardBlog";
import { GiArchiveRegister, GiCook, GiNotebook } from "react-icons/gi";
import Link from "next/link";

function AllBlog({ blogs }) {
  const [displayedBlogs, setDisplayedBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeFilter, setActiveFilter] = useState(null);
  const [filterType, setFilterType] = useState(null);

  // - count blogs on category
  const categoryCounts = blogs.reduce((acc, blog) => {
    acc[blog.category] = (acc[blog.category] || 0) + 1;
    return acc;
  }, {});

  // - count blogs.length in month
  const archiveCounts = blogs.reduce((acc, blog) => {
    const date = new Date(blog.createdAt);
    const persianMonth = date.toLocaleDateString('fa-IR', { month: 'long', year: 'numeric' });
    acc[persianMonth] = (acc[persianMonth] || 0) + 1;
    return acc;
  }, {});

  useEffect(() => {
    // - filter blogs for choose user
    let filtered = blogs;
    if (activeFilter && filterType === 'category') {
      filtered = blogs.filter(blog => blog.category === activeFilter);
    } else if (activeFilter && filterType === 'archive') {
      filtered = blogs.filter(blog => {
        const date = new Date(blog.createdAt);
        const persianMonth = date.toLocaleDateString('fa-IR', { month: 'long', year: 'numeric' });
        return persianMonth === activeFilter;
      });
    }
    
    setDisplayedBlogs(filtered.slice(0, visibleCount));
  }, [blogs, visibleCount, activeFilter, filterType]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const handleFilter = (filter, type) => {
    setActiveFilter(filter);
    setFilterType(type);
    setVisibleCount(4);
  };

  const resetFilter = () => {
    setActiveFilter(null);
    setFilterType(null);
    setVisibleCount(4);
  };

  return (
    <>
      <div className={`${styles.section} ${styles.zIndex2} ${styles.pb6}`}>
        <div className={styles.container}>
          <div
            className={`${styles.bgBody} ${styles.rounded3} ${styles.shadowSm} ${styles.py4} ${styles.pyLg5} ${styles.px4} ${styles.pxXl5} ${styles.mtN7}`}
          >
            <div className={`${styles.row} ${styles.mt2}`}>
              <div className={styles.colLg8}>
                <div className={styles.blogHeader}>
                  <GiCook className={styles.cookingIcon} />
                  <h1 className={styles.blogMainTitle}>وبلاگ آشپزی با آرامش</h1>
                  {activeFilter && (
                    <button 
                      onClick={resetFilter}
                      className={`${styles.btn} ${styles.btnSm} ${styles.btnOutlinePrimary} ${styles.mr2}`}
                    >
                      حذف فیلتر
                    </button>
                  )}
                </div>

                <div className={styles.row}>
                  {displayedBlogs.map((blog) => (
                    <CardBlog key={blog._id} {...blog} />
                  ))}
                </div>

                {displayedBlogs.length < blogs.length && (
                  <div className={styles.textCenter}>
                    <button
                      onClick={handleLoadMore}
                      className={`${styles.btn} ${styles.btnLight} ${styles.border}`}
                    >
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
                    </button>
                  </div>
                )}
              </div>
              
              <div className={`${styles.colLg4} ${styles.psLg5}`}>
                <aside
                  className={`${styles.widgetArea} ${styles.sticky} ${styles.mt5} ${styles.mtLg0}`}
                >
                  <aside
                    id="archives"
                    className={`${styles.widget} ${styles.mb4}`}
                  >
                    <div className={styles.widgetTitle}>
                      <GiArchiveRegister className={styles.widgetIcon} />
                      <h4 className={styles.h5}>
                        <span>آرشیو محتوا</span>
                      </h4>
                    </div>
                    <div className={styles.sideLinks}>
                      {Object.entries(archiveCounts).map(([month, count]) => (
                        <a
                          key={month}
                          className={`${styles.py2} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleFilter(month, 'archive');
                          }}
                        >
                          {month}
                          <span
                            className={`${styles.badge} ${styles.bgLightDark} ${styles.textPrimary} ${styles.rounded3}`}
                          >
                            {count}
                          </span>
                        </a>
                      ))}
                    </div>
                  </aside>

                  <aside
                    id="categories"
                    className={`${styles.widget} ${styles.mb4}`}
                  >
                    <div className={styles.widgetTitle}>
                      <GiCook className={styles.widgetIcon} />
                      <h4 className={styles.h5}>
                        <span>دسته بندی ها</span>
                      </h4>
                    </div>
                    <div className={styles.sideLinks}>
                      {Object.entries(categoryCounts).map(([category, count]) => (
                        <a
                          key={category}
                          className={`${styles.py2} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleFilter(category, 'category');
                          }}
                        >
                          {category}
                          <span
                            className={`${styles.badge} ${styles.bgLightDark} ${styles.textPrimary} ${styles.rounded3}`}
                          >
                            {count}
                          </span>
                        </a>
                      ))}
                    </div>
                  </aside>

                  <aside id="meta" className={`${styles.widget} ${styles.mb4}`}>
                    <div className={styles.widgetTitle}>
                      <GiNotebook className={styles.widgetIcon} />
                      <h4 className={styles.h5}>
                        <span>سایر</span>
                      </h4>
                    </div>
                    <div className={styles.sideLinks}>
                      <Link
                        className={`${styles.py2} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
                        href={`/login`}
                      >
                        صفحه ورود
                      </Link>
                      <Link
                        className={`${styles.py2} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
                        href={"/pricing"}
                      >
                        دوره‌های آموزشی
                      </Link>
                      <Link
                        className={`${styles.py2} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
                        href={"/contact"}
                      >
                        ارتباط با ما
                      </Link>
                    </div>
                  </aside>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllBlog;