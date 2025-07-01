"use client";
import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import React, { useEffect, useState } from "react";
import styles from "./AuthorBlogs.module.css";
import CardBlog from "@/components/modules/blogs/CardBlog";
import { teamMembers } from "@/utils/constants";

function AuthorBlogs({ blogs, author }) {
  const [displayedBlogs, setDisplayedBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    // Calculate total comments count
    const totalComments = blogs.reduce((total, blog) => {
      return total + (blog.comments?.length || 0);
    }, 0);

    setCommentCount(totalComments);

    // Set displayed blogs
    setDisplayedBlogs(blogs.slice(0, visibleCount));
  }, [blogs, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <>
      <Breadcrumb title={"آثار نویسنده"}>
    <div className={`col-md-8 col-lg-6 ${styles.container}`}>
      <div className={styles.authorProfileCard}>
        <div className={styles.authorAvatarContainer}>
          <img
            src={"/images/profile-user.png"}
            alt="نمایه نویسنده"
            width={120}
            height={120}
            className={styles.authorAvatar}
          />
        </div>
        <div className={styles.authorContent}>
          <h1 className={styles.authorName}>{author}</h1>
          <p className={styles.authorTitle}>نویسنده و آشپز</p>
          
          <div className={styles.authorStats}>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>مقالات</span>
              <span className={styles.statCount}>{blogs.length}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>نظرات</span>
              <span className={styles.statCount}>{commentCount}</span>
            </div>
          </div>
          
          <div className={styles.socialLinks}>
            <a href="https://facebook.com/" className={`${styles.socialLink} ${styles.facebook}`} aria-label="فیسبوک">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"/>
              </svg>
            </a>
            
            <a href="https://twitter.com/" className={`${styles.socialLink} ${styles.twitter}`} aria-label="توییتر">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"/>
              </svg>
            </a>
            
            <a href="https://linkedin.com/" className={`${styles.socialLink} ${styles.linkedin}`} aria-label="لینکدین">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"/>
              </svg>
            </a>
            
            <a href="https://instagram.com/" className={`${styles.socialLink} ${styles.instagram}`} aria-label="اینستاگرام">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"/>
                <path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"/>
                <path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"/>
              </svg>
            </a>
            
            <a href="https://youtube.com/" className={`${styles.socialLink} ${styles.youtube}`} aria-label="یوتیوب">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M508.64,148.79c0-45-33.1-81.2-74-81.2C379.24,65,322.74,64,265,64H247c-57.6,0-114.2,1-169.6,3.6-40.8,0-73.9,36.4-73.9,81.4C1,184.59-.06,220.19,0,255.79q-.15,53.4,3.4,106.9c0,45,33.1,81.5,73.9,81.5,58.2,2.7,117.9,3.9,178.6,3.8q91.2.3,178.6-3.8c40.9,0,74-36.5,74-81.5,2.4-35.7,3.5-71.3,3.4-107Q512.24,202.29,508.64,148.79ZM207,353.89V157.39l145,98.2Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
      </Breadcrumb>
      <div id="blogs" className={`section py-6 ${styles.blogsSection}`}>
        <div className="container">
          <div className="row">
            {displayedBlogs.length > 0 ? (
              displayedBlogs.map((blog) => (
                <CardBlog key={blog._id} {...blog} />
              ))
            ) : (
              <div className={styles.noResults}>
                <div className={styles.noResultsContainer}>
                  <svg
                    className={styles.noResultsIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#8B2E2C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8V12"
                      stroke="#8B2E2C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16H12.01"
                      stroke="#8B2E2C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className={styles.noResultsTitle}>مقاله‌ای یافت نشد</h3>
                  <p className={styles.noResultsText}>
                    متأسفیم، نتیجه‌ای برای جستجوی شما پیدا نکردیم.
                    <br />
                    لطفاً عبارت دیگری را امتحان کنید.
                  </p>
                  <button className={styles.noResultsButton}>
                    بازگشت به همه مقالات
                  </button>
                </div>
              </div>
            )}
          </div>

          {displayedBlogs.length < blogs.length &&
            displayedBlogs.length > 0 && (
              <div className="text-center">
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
              </div>
            )}
        </div>
      </div>
    </>
  );
}

export default AuthorBlogs;
