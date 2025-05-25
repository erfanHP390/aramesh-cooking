import React from 'react';
import { GiCook } from 'react-icons/gi';
import styles from "./AllBlog.module.css";
import Sidebar from '../sidebar/Sidebar';

function AllBlog() {
  return (
    <>
      <div className={`${styles.section} ${styles.zIndex2} ${styles.pb6}`}>
        <div className={styles.container}>
          <div className={`${styles.bgBody} ${styles.rounded3} ${styles.shadowSm} ${styles.py4} ${styles.pyLg5} ${styles.px4} ${styles.pxXl5} ${styles.mtN7}`}>
            <div className={`${styles.row} ${styles.mt2}`}>
              <div className={styles.colLg8}>
                {/* Header with cooking icon */}
                <div className={styles.blogHeader}>
                  <GiCook className={styles.cookingIcon} />
                  <h1 className={styles.blogMainTitle}>وبلاگ آشپزی با آرامش</h1>
                </div>
                
                {/* row */}
                <div className={styles.row}>
                  {/* Card 1 */}
                  <div className={`${styles.colMd6} ${styles.pxLg4}`}>
                    <div className={`${styles.card} ${styles.blogTwo} ${styles.mb5} ${styles.rounded3} ${styles.overflowHidden}`}>
                      <div className={styles.blogTwoImg}>
                        <a href="#">
                          <img
                            className={styles.imgFluid}
                            src="src/img-min/blog/blog1.jpg"
                            alt="alt title"
                          />
                        </a>
                      </div>
                      <div className={`${styles.cardBody} ${styles.px0}`}>
                        <span className={styles.blogAuthor}>
                          <a href="#">
                            <img
                              className={`${styles.avatarMd} ${styles.mtN2} ${styles.roundedCircle}`}
                              src="src/img-min/avatar/img1-small.jpg"
                              alt="avatar"
                            />
                          </a>
                        </span>
                        <div className={styles.cardTitle}>
                          <h3 className={`${styles.h5} ${styles.mb3}`}>
                            <a href="#" className={styles.blogPostTitle}>تکنیک‌های پیشرفته آشپزی</a>
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
                            <span className={styles.dateText}>4 اردیبهشت 1403</span>
                          </div>
                        </div>
                        <p className={styles.blogExcerpt}>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                          با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                          و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                          تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                          کاربردی می باشد.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className={`${styles.colMd6} ${styles.pxLg4}`}>
                    <div className={`${styles.card} ${styles.blogTwo} ${styles.mb5} ${styles.rounded3} ${styles.overflowHidden}`}>
                      <div className={styles.blogTwoImg}>
                        <a href="#">
                          <img
                            className={styles.imgFluid}
                            src="src/img-min/blog/blog2.jpg"
                            alt="alt title"
                          />
                        </a>
                      </div>
                      <div className={`${styles.cardBody} ${styles.px0}`}>
                        <span className={styles.blogAuthor}>
                          <a href="#">
                            <img
                              className={`${styles.avatarMd} ${styles.mtN2} ${styles.roundedCircle}`}
                              src="src/img-min/avatar/img2-small.jpg"
                              alt="avatar"
                            />
                          </a>
                        </span>
                        <div className={styles.cardTitle}>
                          <h3 className={`${styles.h5} ${styles.mb3}`}>
                            <a href="#" className={styles.blogPostTitle}>دسرهای فصلی بهاری</a>
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
                            <span className={styles.dateText}>4 اردیبهشت 1403</span>
                          </div>
                        </div>
                        <p className={styles.blogExcerpt}>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                          با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                          و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                          تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                          کاربردی می باشد.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className={`${styles.colMd6} ${styles.pxLg4}`}>
                    <div className={`${styles.card} ${styles.blogTwo} ${styles.mb5} ${styles.rounded3} ${styles.overflowHidden}`}>
                      <div className={styles.blogTwoImg}>
                        <a href="#">
                          <img
                            className={styles.imgFluid}
                            src="src/img-min/blog/blog3.jpg"
                            alt="alt title"
                          />
                        </a>
                      </div>
                      <div className={`${styles.cardBody} ${styles.px0}`}>
                        <span className={styles.blogAuthor}>
                          <a href="#">
                            <img
                              className={`${styles.avatarMd} ${styles.mtN2} ${styles.roundedCircle}`}
                              src="src/img-min/avatar/img3-small.jpg"
                              alt="avatar"
                            />
                          </a>
                        </span>
                        <div className={styles.cardTitle}>
                          <h3 className={`${styles.h5} ${styles.mb3}`}>
                            <a href="#" className={styles.blogPostTitle}>رازهای طعم‌دهی غذاها</a>
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
                            <span className={styles.dateText}>4 اردیبهشت 1403</span>
                          </div>
                        </div>
                        <p className={styles.blogExcerpt}>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                          با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                          و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                          تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                          کاربردی می باشد.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className={`${styles.colMd6} ${styles.pxLg4}`}>
                    <div className={`${styles.card} ${styles.blogTwo} ${styles.mb5} ${styles.rounded3} ${styles.overflowHidden}`}>
                      <div className={styles.blogTwoImg}>
                        <a href="#">
                          <img
                            className={styles.imgFluid}
                            src="src/img-min/blog/blog4.jpg"
                            alt="alt title"
                          />
                        </a>
                      </div>
                      <div className={`${styles.cardBody} ${styles.px0}`}>
                        <span className={styles.blogAuthor}>
                          <a href="#">
                            <img
                              className={`${styles.avatarMd} ${styles.mtN2} ${styles.roundedCircle}`}
                              src="src/img-min/avatar/img1-small.jpg"
                              alt="avatar"
                            />
                          </a>
                        </span>
                        <div className={styles.cardTitle}>
                          <h3 className={`${styles.h5} ${styles.mb3}`}>
                            <a href="#" className={styles.blogPostTitle}>آشپزی سالم برای خانواده</a>
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
                            <span className={styles.dateText}>4 اردیبهشت 1403</span>
                          </div>
                        </div>
                        <p className={styles.blogExcerpt}>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                          با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                          و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                          تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                          کاربردی می باشد.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className={`${styles.colMd6} ${styles.pxLg4}`}>
                    <div className={`${styles.card} ${styles.blogTwo} ${styles.mb5} ${styles.rounded3} ${styles.overflowHidden}`}>
                      <div className={styles.blogTwoImg}>
                        <a href="#">
                          <img
                            className={styles.imgFluid}
                            src="src/img-min/blog/blog5.jpg"
                            alt="alt title"
                          />
                        </a>
                      </div>
                      <div className={`${styles.cardBody} ${styles.px0}`}>
                        <span className={styles.blogAuthor}>
                          <a href="#">
                            <img
                              className={`${styles.avatarMd} ${styles.mtN2} ${styles.roundedCircle}`}
                              src="src/img-min/avatar/img2-small.jpg"
                              alt="avatar"
                            />
                          </a>
                        </span>
                        <div className={styles.cardTitle}>
                          <h3 className={`${styles.h5} ${styles.mb3}`}>
                            <a href="#" className={styles.blogPostTitle}>طراحی منوی رستوران</a>
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
                            <span className={styles.dateText}>4 اردیبهشت 1403</span>
                          </div>
                        </div>
                        <p className={styles.blogExcerpt}>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                          با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                          و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                          تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                          کاربردی می باشد.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 6 */}
                  <div className={`${styles.colMd6} ${styles.pxLg4}`}>
                    <div className={`${styles.card} ${styles.blogTwo} ${styles.mb5} ${styles.rounded3} ${styles.overflowHidden}`}>
                      <div className={styles.blogTwoImg}>
                        <a href="#">
                          <img
                            className={styles.imgFluid}
                            src="src/img-min/blog/blog6.jpg"
                            alt="alt title"
                          />
                        </a>
                      </div>
                      <div className={`${styles.cardBody} ${styles.px0}`}>
                        <span className={styles.blogAuthor}>
                          <a href="#">
                            <img
                              className={`${styles.avatarMd} ${styles.mtN2} ${styles.roundedCircle}`}
                              src="src/img-min/avatar/img3-small.jpg"
                              alt="avatar"
                            />
                          </a>
                        </span>
                        <div className={styles.cardTitle}>
                          <h3 className={`${styles.h5} ${styles.mb3}`}>
                            <a href="#" className={styles.blogPostTitle}>تکنیک‌های تزیین غذا</a>
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
                            <span className={styles.dateText}>4 اردیبهشت 1403</span>
                          </div>
                        </div>
                        <p className={styles.blogExcerpt}>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                          با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                          و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                          تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                          کاربردی می باشد.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end row */}

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