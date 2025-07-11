"use client";

import React from "react";
import Link from "next/link";
import styles from "./Card.module.css";

const BlogCard = ({ blogs }) => {
  return (
    <>
      {blogs.slice(0, 4).map((blog) => (
        <div
          className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4"
          key={blog._id}
        >
          <div
            className={`card h-100 border-0 rounded-3 overflow-hidden d-flex flex-column ${styles.blogCard}`}
            data-aos="fade-up"
          >
            <div className={styles.blogImageWrapper}>
              <Link href={`/blogs/${blog._id}`} passHref>
                  <img
                    className={`img-fluid ${styles.blogImage}`}
                    src={blog.img}
                    alt={blog.title}
                    loading="lazy"
                  />
              </Link>
            </div>
            <div className={`card-body d-flex flex-column ${styles.blogBody}`}>
              <div className={styles.blogTitleWrapper}>
                <h3 className={`h5 ${styles.blogTitle}`}>
                  <Link href={`/blogs/${blog._id}`} passHref  className={styles.blogTitleLink}>
                    {blog.title}
                  </Link>
                </h3>
              </div>
              <div className={styles.blogMeta}>
                <svg
                  className={styles.foodIcon}
                  width="0.8rem"
                  height="0.8rem"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.665 6.113a1 1 0 0 1-.667-.977L13 5a4 4 0 0 0-6.483-3.136 1 1 0 0 1-.8.2 4 4 0 0 0-3.693 6.13 1 1 0 0 1 .2 1 4 4 0 0 0 6.67 4.087 1 1 0 0 1 1.262-.152 2.5 2.5 0 0 0 3.715-2.905 1 1 0 0 1 .341-1.113 2.001 2.001 0 0 0-.547-3.478zM14 5c0 .057 0 .113-.003.17a3.001 3.001 0 0 1 .822 5.216 3.5 3.5 0 0 1-5.201 4.065 5 5 0 0 1-8.336-5.109A5 5 0 0 1 5.896 1.08 5 5 0 0 1 14 5z"
                  />
                  <circle cx="8" cy="8" r="3" />
                </svg>
                <span>{new Date(blog.createdAt).toLocaleDateString("fa-IR")}</span>
              </div>
              <p className={styles.blogContent}>{blog.shortDesc}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
