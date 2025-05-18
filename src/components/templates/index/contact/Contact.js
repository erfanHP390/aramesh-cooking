import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <div id="contact" className="section py-6 bg-light-dark">
        <div className="container">
          {/* row */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="u-contact bg-body shadow-sm rounded-3 w-100 p-5"
                data-aos="fade-up"
              >
                <div className="text-center mb-5">
                  {/* contact title */}
                  <h2 className="h3 fw-bold">تماس با ما</h2>
                  <hr className="divider my-4 bg-warning border-warning" />
                  <p className="lead text-muted">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
                  </p>
                </div>
                {/* contact form */}
                <form action="#" className="contact-form">
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className="form-label" htmlFor="name">
                        نام شما
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                      />
                      <div className="validate" />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label" htmlFor="email">
                        ایمیل شما
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                      />
                      <div className="validate" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="subject">
                      موضوع
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                    />
                    <div className="validate" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="messages">
                      پیام
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows={10}
                      id="messages"
                      defaultValue={""}
                    />
                    <div className="validate" />
                  </div>
                  <div className="text-center mb-4">
                    <button className="btn btn-primary" type="submit">
                      ارسال پیام
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5rem"
                        height="1.5rem"
                        fill="currentColor"
                        className="me-2 rtl-270"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M53.12,199.94l400-151.39a8,8,0,0,1,10.33,10.33l-151.39,400a8,8,0,0,1-15-.34L229.66,292.45a16,16,0,0,0-10.11-10.11L53.46,215A8,8,0,0,1,53.12,199.94Z"
                          style={{
                            fill: "none",
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 32,
                          }}
                        ></path>
                        <line
                          x1={460}
                          y1={52}
                          x2={227}
                          y2={285}
                          style={{
                            fill: "none",
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 32,
                          }}
                        ></line>
                      </svg>
                    </button>
                  </div>
                </form>
                {/* end contact form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
