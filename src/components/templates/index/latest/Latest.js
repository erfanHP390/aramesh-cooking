import React from "react";
import styles from "./Latest.module.css";

function Latest() {
  return (
    <>
      <div id="blog" className="section pt-6 pt-md-7 pb-4 pb-md-5 bg-body">
        <div className="container">
          {/* section header */}
          <header className="text-center mx-auto mb-5 mb-lg-6">
            <h2 className="h3 fw-bold">
              {" "}
              وبلاگ <span className="fw-light">ما</span>
            </h2>
            <hr className="divider my-4 bg-warning border-warning" />
          </header>
          {/* end section header */}
          {/* row */}
          <div className="row">
            <div className="col-md-6 col-lg-4 px-lg-4">
              {/* Card */}
              <div
                className="card card-full border-0 blog-two mb-5 rounded-3 overflow-hidden"
                data-aos="fade-up"
              >
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
                  <div className="card-title">
                    <h3 className="h5 mb-3">
                      <a href="#">عنوان مطلب وبلاگ</a>
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
                  <p className="mb-0 text-muted">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
                  </p>
                </div>
              </div>
              {/* End card */}
            </div>
            <div className="col-md-6 col-lg-4 px-lg-4">
              {/* Card */}
              <div
                className="card card-full border-0 blog-two mb-5 rounded-3 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={100}
              >
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
                  <div className="card-title">
                    <h3 className="h5 mb-3">
                      <a href="#">عنوان مطلب وبلاگ</a>
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
                  <p className="mb-0 text-muted">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
                  </p>
                </div>
              </div>
              {/* end card */}
            </div>
            <div className="col-md-6 col-lg-4 px-lg-4">
              {/* Card */}
              <div
                className="card card-full border-0 blog-two mb-5 rounded-3 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={200}
              >
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
                  <div className="card-title">
                    <h3 className="h5 mb-3">
                      <a href="#">عنوان مطلب وبلاگ</a>
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
                  <p className="mb-0 text-muted">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
                  </p>
                </div>
              </div>
              {/* End card */}
            </div>
          </div>
          {/* end row */}
        </div>
      </div>
    </>
  );
}

export default Latest;
