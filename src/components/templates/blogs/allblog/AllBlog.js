import React from 'react'
import styles from "./AllBlog.module.css"
import Sidebar from '../sidebar/Sidebar'

function AllBlog() {
  return (
    <>
      <div className="section z-index-2 pb-6">
  <div className="container">
    <div className="bg-body rounded-3 shadow-sm py-4 py-lg-5 px-4 px-xl-5 mt-n7">
      <div className="row mt-2">
        <div className="col-lg-8">
          {/* row */}
          <div className="row">
            <div className="col-md-6 px-lg-4">
              {/* Card */}
              <div className="card border-0 blog-two mb-5 rounded-3 overflow-hidden">
                <div className="blog-two-img">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="src/img-min/blog/blog1.jpg"
                      alt="alt title"
                    />
                  </a>
                </div>
                <div className="card-body px-0">
                  <span className="blog-author">
                    <a href="#">
                      <img
                        className="avatar-md mt-n-2 rounded-circle"
                        src="src/img-min/avatar/img1-small.jpg"
                        alt="avatar"
                      />
                    </a>
                  </span>
                  <div className="card-title">
                    <h3 className="h5 mb-3">
                      <a href="#">عنوان محتوای وبلاگ</a>
                    </h3>
                    <div className="meta text-muted">
                      <svg
                        className="bi bi-calendar me-2 text-muted"
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
                      <span>4 اردیبهشت 1403</span>
                    </div>
                  </div>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد.
                  </p>
                </div>
              </div>
              {/* End card */}
            </div>
            <div className="col-md-6 px-lg-4">
              {/* Card */}
              <div className="card border-0 blog-two mb-5 rounded-3 overflow-hidden">
                <div className="blog-two-img">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="src/img-min/blog/blog2.jpg"
                      alt="alt title"
                    />
                  </a>
                </div>
                <div className="card-body px-0">
                  <span className="blog-author">
                    <a href="#">
                      <img
                        className="avatar-md mt-n-2 rounded-circle"
                        src="src/img-min/avatar/img2-small.jpg"
                        alt="avatar"
                      />
                    </a>
                  </span>
                  <div className="card-title">
                    <h3 className="h5 mb-3">
                      <a href="#">عنوان محتوای وبلاگ</a>
                    </h3>
                    <div className="meta text-muted">
                      <svg
                        className="bi bi-calendar me-2 text-muted"
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
                      <span>4 اردیبهشت 1403</span>
                    </div>
                  </div>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد.
                  </p>
                </div>
              </div>
              {/* end card */}
            </div>
            <div className="col-md-6 px-lg-4">
              {/* Card */}
              <div className="card border-0 blog-two mb-5 rounded-3 overflow-hidden">
                <div className="blog-two-img">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="src/img-min/blog/blog3.jpg"
                      alt="alt title"
                    />
                  </a>
                </div>
                <div className="card-body px-0">
                  <span className="blog-author">
                    <a href="#">
                      <img
                        className="avatar-md mt-n-2 rounded-circle"
                        src="src/img-min/avatar/img3-small.jpg"
                        alt="avatar"
                      />
                    </a>
                  </span>
                  <div className="card-title">
                    <h3 className="h5 mb-3">
                      <a href="#">عنوان محتوای وبلاگ</a>
                    </h3>
                    <div className="meta text-muted">
                      <svg
                        className="bi bi-calendar me-2 text-muted"
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
                      <span>4 اردیبهشت 1403</span>
                    </div>
                  </div>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد.
                  </p>
                </div>
              </div>
              {/* End card */}
            </div>
            <div className="col-md-6 px-lg-4">
              {/* Card */}
              <div className="card border-0 blog-two mb-5 rounded-3 overflow-hidden">
                <div className="blog-two-img">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="src/img-min/blog/blog4.jpg"
                      alt="alt title"
                    />
                  </a>
                </div>
                <div className="card-body px-0">
                  <span className="blog-author">
                    <a href="#">
                      <img
                        className="avatar-md mt-n-2 rounded-circle"
                        src="src/img-min/avatar/img1-small.jpg"
                        alt="avatar"
                      />
                    </a>
                  </span>
                  <div className="card-title">
                    <h3 className="h5 mb-3">
                      <a href="#">عنوان محتوای وبلاگ</a>
                    </h3>
                    <div className="meta text-muted">
                      <svg
                        className="bi bi-calendar me-2 text-muted"
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
                      <span>4 اردیبهشت 1403</span>
                    </div>
                  </div>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد.
                  </p>
                </div>
              </div>
              {/* End card */}
            </div>
            <div className="col-md-6 px-lg-4">
              {/* Card */}
              <div className="card border-0 blog-two mb-5 rounded-3 overflow-hidden">
                <div className="blog-two-img">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="src/img-min/blog/blog5.jpg"
                      alt="alt title"
                    />
                  </a>
                </div>
                <div className="card-body px-0">
                  <span className="blog-author">
                    <a href="#">
                      <img
                        className="avatar-md mt-n-2 rounded-circle"
                        src="src/img-min/avatar/img2-small.jpg"
                        alt="avatar"
                      />
                    </a>
                  </span>
                  <div className="card-title">
                    <h3 className="h5 mb-3">
                      <a href="#">عنوان محتوای وبلاگ</a>
                    </h3>
                    <div className="meta text-muted">
                      <svg
                        className="bi bi-calendar me-2 text-muted"
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
                      <span>4 اردیبهشت 1403</span>
                    </div>
                  </div>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد.
                  </p>
                </div>
              </div>
              {/* end card */}
            </div>
            <div className="col-md-6 px-lg-4">
              {/* Card */}
              <div className="card border-0 blog-two mb-5 rounded-3 overflow-hidden">
                <div className="blog-two-img">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="src/img-min/blog/blog6.jpg"
                      alt="alt title"
                    />
                  </a>
                </div>
                <div className="card-body px-0">
                  <span className="blog-author">
                    <a href="#">
                      <img
                        className="avatar-md mt-n-2 rounded-circle"
                        src="src/img-min/avatar/img3-small.jpg"
                        alt="avatar"
                      />
                    </a>
                  </span>
                  <div className="card-title">
                    <h3 className="h5 mb-3">
                      <a href="#">عنوان محتوای وبلاگ</a>
                    </h3>
                    <div className="meta text-muted">
                      <svg
                        className="bi bi-calendar me-2 text-muted"
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
                      <span>4 اردیبهشت 1403</span>
                    </div>
                  </div>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد.
                  </p>
                </div>
              </div>
              {/* End card */}
            </div>
          </div>
          {/* end row */}
          <div className="text-center">
            <a href="#" className="btn btn-light border">
              <span>نمایش محتوا بیشتر</span>
              <svg
                className="bi bi-arrow-repeat"
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
  )
}

export default AllBlog
