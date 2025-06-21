import React from "react";
import styles from "../../templates/blogs/allblog/AllBlog.module.css";

function CardBlog({ titr, title, shortDesc, comments, author, description, createdAt, updatedAt, img }) {
  return (
    <div className={`${styles.colMd6} ${styles.pxLg4}`}>
      <div
        className={`${styles.card} ${styles.blogTwo} ${styles.mb5} ${styles.rounded3} ${styles.overflowHidden}`}
      >
        <div className={styles.blogTwoImg}>
          <a href="#">
            <img
              className={styles.imgFluid}
              src={img || "https://via.placeholder.com/300x200"} // Fallback image
              alt={title || "Blog Image"}
            />
          </a>
        </div>
        <div className={`${styles.cardBody} ${styles.px0}`}>
          <span className={styles.blogAuthor}>
            <a href="#">
              <img
                className={`${styles.avatarMd} ${styles.mtN2} ${styles.roundedCircle}`}
                src={author?.avatar || "src/img-min/avatar/img1-small.jpg"}
                alt={author?.name || "Author"}
              />
            </a>
          </span>
          <div className={styles.cardTitle}>
            <h3 className={`${styles.h5} ${styles.mb3}`}>
              <a href="#" className={styles.blogPostTitle}>
                {title || "عنوان پست"}
              </a>
            </h3>
            <div className={`${styles.meta} ${styles.textMuted}`}>
              <svg
                className={`${styles.bi} ${styles.biCalendar} ${styles.me2} ${styles.textMuted}`}
                width=".8rem"
                height=".8rem"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className={styles.dateText}>
                {createdAt ? new Date(createdAt).toLocaleDateString("fa-IR") : "تاریخ نامعلوم"}
              </span>
            </div>
          </div>
          <p className={styles.blogExcerpt}>
            {shortDesc || "توضیحات کوتاه پست وبلاگ"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardBlog;