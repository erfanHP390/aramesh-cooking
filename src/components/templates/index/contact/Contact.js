import React from "react";
import styles from "./Contact.module.css";

function Contact({ departments }) {
  return (
    <div id="contact" className={`section py-6 ${styles.contactSection}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className={`${styles.contactBox} shadow-sm rounded-3 w-100 p-5`}
              data-aos="fade-up"
            >
              <div className="text-center mb-5">
                <h2 className={`h3 fw-bold ${styles.contactTitle}`}>
                  ارتباط با گروه آشپزی آرامش
                </h2>
                <hr className={`divider my-4 ${styles.divider}`} />
                <p className={`lead ${styles.contactSubtitle}`}>
                  برای سفارش غذا، شرکت در دوره‌های آموزشی یا هرگونه سوال با ما
                  در تماس باشید
                </p>
              </div>

              <form action="#" className="contact-form">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label
                      className={`form-label ${styles.formLabel}`}
                      htmlFor="name"
                    >
                      نام کامل
                    </label>
                    <input
                      type="text"
                      name="name"
                      className={`form-control ${styles.formInput}`}
                      id="name"
                      placeholder="نام و نام خانوادگی"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label
                      className={`form-label ${styles.formLabel}`}
                      htmlFor="email"
                    >
                      ایمیل یا شماره تماس
                    </label>
                    <input
                      type="text"
                      className={`form-control ${styles.formInput}`}
                      name="email"
                      id="email"
                      placeholder="example@example.com یا 0912XXX"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className={`form-label ${styles.formLabel}`}
                    htmlFor="subject"
                  >
                    موضوع پیام
                  </label>
                  <select
                    className={`form-select ${styles.formInput}`}
                    name="subject"
                    id="subject"
                  >
                    {" "}
                    <option value="">انتخاب کنید</option>
                    {departments.map((item) => (
                      <option value="order">{item.title}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className={`form-label ${styles.formLabel}`}
                    htmlFor="messages"
                  >
                    متن پیام
                  </label>
                  <textarea
                    className={`form-control ${styles.formInput}`}
                    name="message"
                    rows={8}
                    id="messages"
                    placeholder="پیام خود را با جزئیات بنویسید..."
                  />
                </div>
                <div className="text-center mb-4">
                  <button
                    className={`btn ${styles.submitBtn}  ${styles.btn_services}`}
                    type="submit"
                  >
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
                      />
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
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
