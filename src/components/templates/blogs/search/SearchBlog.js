"use client";
import CardBlog from "@/components/modules/blogs/CardBlog";
import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import React, { useEffect, useState } from "react";
import styles from "./SearchBlog.module.css";

function SearchBlog({ blogs }) {
  const [displayedBlogs, setDisplayedBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setVisibleCount(4);
  };

  useEffect(() => {
    let filteredBlogs = blogs;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredBlogs = blogs.filter((blog) => {
        const titleMatch = blog.title?.toLowerCase().includes(query) || false;
        const contentMatch =
          blog.content?.toLowerCase().includes(query) || false;
        return titleMatch || contentMatch;
      });
    }

    setDisplayedBlogs(filteredBlogs.slice(0, visibleCount));
  }, [blogs, visibleCount, searchQuery]);

  return (
    <>
      <Breadcrumb title={"جستجو در بین مقالات"}>
        <div className={styles.searchContainer}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              className={styles.searchInput}
              dir="rtl"
              placeholder="جستجو برای ..."
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button className={styles.searchButton} type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className={styles.searchIcon}
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
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
                  <button
                    className={styles.noResultsButton}
                    onClick={() => setSearchQuery("")}
                  >
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

export default SearchBlog;
