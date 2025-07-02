import React from "react";
import styles from "./Blog.module.css";
import Comments from "../comments/Comments";
import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";
import Link from "next/link";

async function Blog({ blog }) {
  connectToDB();
  const answerComments = await CommentModel.find({ isAnswer: true });

  return (
    <>
      <div id="post-content" className={`${styles.postContainer} section pb-5`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className={`${styles.postContentWrapper} px-md-3`}>
                {/* Post content */}
                <div className="pt-3 pb-3">
                  <div className={styles.postHeaderContainer}>
                    <h1 className={styles.postHeader}>{blog.title}</h1>
                    <h2 className={styles.postAbstract}>چکیده</h2>
                    <div className={styles.postAbstractText}>
                      {blog.shortDesc}
                    </div>
                  </div>
                  <figure className={`${styles.postImage} align-center`}>
                    <img
                      className="img-fluid"
                      src={blog.img}
                      alt="Image description"
                    />
                    <figcaption className={styles.postImageCaption}>
                      {blog.title}
                    </figcaption>
                  </figure>
                  <div className={styles.postDescription}>
                    {blog.description}
                  </div>
                </div>
                {/* author */}
                <div
                  className={`${styles.authorSection} row justify-content-center py-3`}
                >
                  <div className="col-4 col-sm-3 col-md-2">
                    <a href="#">
                      <img
                        className={`${styles.authorImage} rounded-circle border img-fluid`}
                        src="/images/profile-user.png"
                        alt="author"
                      />
                    </a>
                  </div>
                  <div className="col-8 col-sm-9 col-md-10">
                    {/*name*/}
                    <div className={`${styles.authorName} h5 mb-2`}>
                      <span className="fw-bold">{blog.author}</span>
                    </div>
                    <div className="mb-1">
                      <Link className={styles.authorLink} href={`/blogs/author/${blog.author}`}>
                        دیدن مقالات بیشتر از این نویسنده
                      </Link>
                    </div>
                    {/*description*/}
                    <div className={styles.postDate}>
                      تاریخ ثبت :{" "}
                      {new Date(blog.createdAt).toLocaleDateString("fa-IR")}
                    </div>
                  </div>
                </div>
                {/* Comments */}
                <div id="comments" className="pt-4">
                  {/*title*/}
                  <h3 className={styles.commentsHeader}>
                    (
                    {blog.comments.filter((comment) => comment.isAccept).length}
                    ) دیدگاه
                  </h3>
                  {/*comment list*/}
                  <Comments
                    comments={blog.comments}
                    blogID={blog._id}
                    answers={answerComments}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;