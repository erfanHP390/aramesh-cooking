import React from "react";
import styles from "./Blog.module.css";

function Blog({ blog }) {
  return (
    <>
      <div id="post-content" className={`${styles.postContainer} section pb-5`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className={`${styles.postContentWrapper} px-md-3`}>
                {/* Post content */}
                <div className="pt-3 pb-3">
                  <p>
                    <h1 className={styles.postHeader}>
                        {blog.title}
                    </h1>
                    <h2 className={styles.postAbstract}>
                      چکیده
                    </h2>
                    <span className={styles.postAbstract}>{blog.shortDesc}</span>
                  </p>
                  <figure className={`${styles.postImage} align-center`}>
                    <img
                      className="img-fluid"
                      src={blog.img}
                      alt="Image description"
                    />
                    <figcaption className={styles.postImageCaption}>{blog.title}</figcaption>
                  </figure>
                  <p className={styles.postDescription}>
                    {blog.description}
                  </p>
                </div>
                {/* author */}
                <div className={`${styles.authorSection} row justify-content-center py-3`}>
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
                    <p className={`${styles.authorName} h5 mb-2`}>
                      <span className="fw-bold">{blog.author}</span>
                    </p>
                    <p className="mb-1">
                      <a className={styles.authorLink} href="#">دیدن مقالات بیشتر از این نویسنده</a>
                    </p>
                    {/*description*/}
                    <p className={styles.postDate}>تاریخ ثبت : {new Date(blog.createdAt).toLocaleDateString("fa-IR")}</p>
                  </div>
                </div>
                {/* Comments */}
                <div id="comments" className="pt-4">
                  {/*title*/}
                  <h3 className={styles.commentsHeader}>5 دیدگاه</h3>
                  {/*comment list*/}
                  <ol className={`${styles.commentList} comment-list`}>
                    <li>
                      <div className={`${styles.userComment} u-hover`}>
                        <footer>
                          <img
                            className={`${styles.commentAvatar} avatar-md border img-fluid float-start me-3`}
                            src="/images/profile-user.png"
                            alt="avatar"
                          />
                          <div className={styles.titleComments}>
                            <a className={styles.commentAuthor} href="#" target="_blank">
                              مهران احمدی
                            </a>
                            <span className={`${styles.commentDate} text-muted dates small`}>
                              <time dateTime="2020-10-27">21 آذر 1403</time>
                            </span>
                          </div>
                        </footer>
                        <div className={styles.commentText}>
                          <p>من این محتوا را دوست داشتم</p>
                        </div>
                        <div className={styles.btnReply}>
                          <a className={styles.replyLink} href="#comment-form">
                            پاسخ
                          </a>
                        </div>
                      </div>
                      <ul className={`${styles.subComment} list-unstyled sub-comment`}>
                        <li>
                          <div className={`${styles.userComment} u-hover`}>
                            <footer>
                              <img
                                className={`${styles.commentAvatar} avatar-md border img-fluid float-start me-3`}
                                src="/images/profile-user.png"
                                alt="avatar"
                              />
                              <div className={styles.titleComments}>
                                <a className={styles.commentAuthor} href="#" target="_blank">
                                  علی شریفی
                                </a>
                                <span className={`${styles.commentDate} text-muted dates small`}>
                                  <time dateTime="2020-10-27">21 آذر 1403</time>
                                </span>
                              </div>
                            </footer>
                            <div className={styles.commentText}>
                              <p>خیلی خوشحالم از بازخورد شما!</p>
                            </div>
                            <div className={styles.btnReply}>
                              <a className={styles.replyLink} href="#comment-form">
                                پاسخ
                              </a>
                            </div>
                          </div>
                          <ul className={`${styles.subComment} list-unstyled sub-comment`}>
                            <li className="comment " id="comment-5">
                              <div className={`${styles.userComment} u-hover`}>
                                <footer>
                                  <img
                                    className={`${styles.commentAvatar} avatar-md border img-fluid float-start me-3`}
                                    src="/images/profile-user.png"
                                    alt="avatar"
                                  />
                                  <div className={styles.titleComments}>
                                    <a
                                      className={styles.commentAuthor}
                                      href="#"
                                      target="_blank"
                                    >
                                      مهران احمدی
                                    </a>
                                    <span className={`${styles.commentDate} text-muted dates small`}>
                                      <time dateTime="2020-10-27">
                                        21 آذر 1403
                                      </time>
                                    </span>
                                  </div>
                                </footer>
                                <div className={styles.commentText}>
                                  <p>منم همین طور!</p>
                                </div>
                                <div className={styles.btnReply}>
                                  <a
                                    className={styles.replyLink}
                                    href="#comment-form"
                                  >
                                    پاسخ
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ol>
                  {/*comment form*/}
                  <div id="comment-form" className="mt-5">
                    <h4 className={`${styles.commentFormHeader} h5`}>پاسخ دهید</h4>
                    <p className={styles.commentFormNote}>آدرس ایمیل شما منتشر نمی شود</p>
                    <div className={styles.commentForm}>
                      <form
                        className="needs-validation"
                        action="#"
                        noValidate=""
                      >
                        <div className="mt-2" />
                        <div className="mb-4">
                          <textarea
                            className={`${styles.formControl} form-control`}
                            placeholder="دیدگاه"
                            aria-label="درج نظر"
                            rows={4}
                            required=""
                            defaultValue={""}
                          />
                          <div className={styles.invalidFeedback}>
                            لطفا نظر خود را وارد کنید
                          </div>
                        </div>
                        <div className="mb-4">
                          <input
                            className={`${styles.formControl} form-control`}
                            placeholder="نام"
                            aria-label="name"
                            type="text"
                            required=""
                          />
                          <div className={styles.invalidFeedback}>
                            لطفا نام خود را وارد کنید
                          </div>
                        </div>
                        <div className="mb-4">
                          <input
                            className={`${styles.formControl} form-control`}
                            placeholder="ایمیل"
                            aria-label="email"
                            type="text"
                            required=""
                          />
                          <div className={styles.invalidFeedback}>
                            لطفا آدرس ایمیل خود را وارد کنید
                          </div>
                        </div>
                        <div className="mb-4">
                          <input
                            className={`${styles.formControl} form-control`}
                            placeholder="وبسایت:"
                            aria-label="website"
                            type="text"
                          />
                        </div>
                        <div className="mb-4">
                          <div className="comment-form-cookies">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="comment-cookies"
                                name="comment-cookies"
                                type="checkbox"
                                defaultValue="yes"
                              />
                              <label
                                className={`${styles.formCheckLabel} form-check-label`}
                                htmlFor="comment-cookies"
                              >
                                برای دفعه بعد که من نظر می دهم نام ، ایمیل و وب
                                سایت من را ذخیره کنید.
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <button type="submit" className={`${styles.submitButton} btn btn-primary`}>
                            ارسال دیدگاه
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
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