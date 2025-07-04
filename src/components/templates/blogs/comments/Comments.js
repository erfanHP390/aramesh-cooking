"use client";
import React, { useState } from "react";
import styles from "./Comments.module.css";
import swal from "sweetalert";
import CommentForm from "../commentForm/CommentForm";

function Comments({ comments, blogID, answers }) {
  const [replyingTo, setReplyingTo] = useState(null);
  const [commentName, setCommentName] = useState(null);

  const handleReplyClick = (commentID, name) => {
    setReplyingTo(commentID);
    setCommentName(name);
    const formElement = document.getElementById("comment-form");

    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ol className={`${styles.commentList} comment-list`}>
        <li>
          {comments.map(
            (comment) =>
              comment.isAccept && (
                <React.Fragment key={comment._id}>
                  <div className={`${styles.userComment} u-hover`}>
                    <footer className={styles.commentFooter}>
                      <img
                        className={`${styles.commentAvatar} avatar-md border img-fluid float-start me-3`}
                        src="/images/profile-user.webp"
                        alt="avatar"
                        loading="lazy"
                      />
                      <div className={styles.titleComments}>
                        <div className="d-flex align-items-center gap-2 flex-wrap">
                          <a
                            className={styles.commentAuthor}
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {comment.name}
                          </a>
                          <span
                            className={`${styles.commentDate} text-muted dates small`}
                          >
                            <time dateTime={comment.createdAt}>
                              {new Date(comment.createdAt).toLocaleDateString(
                                "fa-IR"
                              )}
                            </time>
                          </span>
                        </div>
                      </div>
                    </footer>
                    <div className={styles.commentText}>
                      <p>{comment.description}</p>
                    </div>
                    <div className={styles.btnReply}>
                      <a
                        className={styles.replyLink}
                        href="#comment-form"
                        onClick={() =>
                          handleReplyClick(comment._id, comment.name)
                        }
                        aria-label={`Reply to ${comment.name}`}
                      >
                        پاسخ
                      </a>
                    </div>
                  </div>

                  {/* پاسخ‌ها */}
                  {answers.map(
                    (answer) =>
                      answer.mainComment === comment._id &&
                      answer.isAccept && (
                        <ul
                          key={answer._id}
                          className={`${styles.subComment} list-unstyled sub-comment`}
                        >
                          <li>
                            <div className={`${styles.userComment} u-hover`}>
                              <footer className={styles.commentFooter}>
                                <img
                                  className={`${styles.commentAvatar} avatar-md border img-fluid float-start me-3`}
                                  src="/images/profile-user.webp"
                                  alt="avatar"
                                  loading="lazy"
                                />
                                <div className={styles.titleComments}>
                                  <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <a
                                      className={styles.commentAuthor}
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {answer.name}
                                    </a>
                                    <span
                                      className={`${styles.commentDate} text-muted dates small`}
                                    >
                                      <time dateTime={answer.createdAt}>
                                        {new Date(
                                          answer.createdAt
                                        ).toLocaleDateString("fa-IR")}
                                      </time>
                                    </span>
                                  </div>
                                </div>
                              </footer>
                              <div className={styles.commentText}>
                                <p>{answer.description}</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      )
                  )}
                </React.Fragment>
              )
          )}
        </li>
      </ol>

      <CommentForm
        blogID={blogID}
        replyingTo={replyingTo}
        commentName={commentName}
      />
    </>
  );
}

export default Comments;
