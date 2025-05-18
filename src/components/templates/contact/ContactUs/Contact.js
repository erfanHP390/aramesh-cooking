import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <div id="contact" className="section py-6">
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-lg-5 pe-lg-5" data-aos="fade-right">
              <div className="contact-area p-5 border rounded-3 bg-light-dark">
                {/* contact email */}
                <div className="email">
                  <div className="row">
                    <div className="col-2 text-center">
                      {/* icon */}
                      <svg
                        className="icon text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 512 512"
                      >
                        <rect
                          stroke="currentColor"
                          x={48}
                          y={96}
                          width={416}
                          height={320}
                          rx={40}
                          ry={40}
                          style={{
                            fill: "none",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 32,
                          }}
                        />
                        <polyline
                          stroke="currentColor"
                          points="112 160 256 272 400 160"
                          style={{
                            fill: "none",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 32,
                          }}
                        />
                      </svg>
                      {/* <i class="text-primary icon fas fa-envelope"></i> */}
                    </div>
                    <div className="col-10">
                      <p className="h5">ایمیل:</p>
                      <p className="mb-0">support@domain.com</p>
                    </div>
                  </div>
                </div>
                {/* contact phone */}
                <div className="phone">
                  <div className="row">
                    <div className="col-2 text-center">
                      {/* icon */}
                      <svg
                        className="icon text-primary rtl-270"
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 512 512"
                      >
                        <path
                          stroke="currentColor"
                          d="M451,374c-15.88-16-54.34-39.35-73-48.76C353.7,313,351.7,312,332.6,326.19c-12.74,9.47-21.21,17.93-36.12,14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48,5.41-23.23,14.79-36c13.22-18,12.22-21,.92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9,44,119.9,47,108.83,51.6A160.15,160.15,0,0,0,83,65.37C67,76,58.12,84.83,51.91,98.1s-9,44.38,23.07,102.64,54.57,88.05,101.14,134.49S258.5,406.64,310.85,436c64.76,36.27,89.6,29.2,102.91,23s22.18-15,32.83-31a159.09,159.09,0,0,0,13.8-25.8C465,391.17,468,391.17,451,374Z"
                          style={{
                            fill: "none",
                            strokeMiterlimit: 10,
                            strokeWidth: 32,
                          }}
                        />
                      </svg>
                      {/* <i class="text-primary icon fas fa-phone"></i> */}
                    </div>
                    <div className="col-10">
                      <p className="h5">تلفن تماس:</p>
                      <p className="mb-0">09121234567</p>
                    </div>
                  </div>
                </div>
                {/* hour working */}
                <div className="time">
                  <div className="row">
                    <div className="col-2 text-center">
                      {/* icon */}
                      <svg
                        className="icon text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 512 512"
                      >
                        <path
                          stroke="currentColor"
                          d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z"
                          style={{
                            fill: "none",
                            strokeMiterlimit: 10,
                            strokeWidth: 32,
                          }}
                        />
                        <polyline
                          stroke="currentColor"
                          points="256 128 256 272 352 272"
                          style={{
                            fill: "none",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 32,
                          }}
                        />
                      </svg>
                      {/* <i class="text-primary icon fas fa-clock"></i> */}
                    </div>
                    <div className="col-10">
                      <p className="h5">ساعات کاری:</p>
                      <p className="mb-0">
                        08.00 <em>صبح</em> <strong>الی</strong> 8.00 <em>شب</em>
                      </p>
                    </div>
                  </div>
                </div>
                {/* address */}
                <div className="address">
                  <div className="row">
                    <div className="col-2 text-center">
                      {/* icon */}
                      <svg
                        className="icon text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 512 512"
                      >
                        <path
                          stroke="currentColor"
                          d="M313.27,124.64,198.73,51.36a32,32,0,0,0-29.28.35L56.51,127.49A16,16,0,0,0,48,141.63v295.8a16,16,0,0,0,23.49,14.14l97.82-63.79a32,32,0,0,1,29.5-.24l111.86,73a32,32,0,0,0,29.27-.11l115.43-75.94a16,16,0,0,0,8.63-14.2V74.57a16,16,0,0,0-23.49-14.14l-98,63.86A32,32,0,0,1,313.27,124.64Z"
                          style={{
                            fill: "none",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 32,
                          }}
                        />
                        <line
                          stroke="currentColor"
                          x1={328}
                          y1={128}
                          x2={328}
                          y2={464}
                          style={{
                            fill: "none",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 32,
                          }}
                        />
                        <line
                          stroke="currentColor"
                          x1={184}
                          y1={48}
                          x2={184}
                          y2={384}
                          style={{
                            fill: "none",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 32,
                          }}
                        />
                      </svg>
                      {/* <i class="text-primary icon fas fa-map-marked"></i> */}
                    </div>
                    <div className="col-10">
                      <p className="h5">آدرس دفتر:</p>
                      <p className="mb-0">
                        ایران,تهران,منطقه یک,خیابان مفتح,پلاک 13
                      </p>
                    </div>
                  </div>
                </div>
                {/* maps responsive */}
                <div className="responsive-maps">
                  <iframe
                    className="lazy"
                    data-src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d25904.955143421448!2d51.39057203948671!3d35.747870107493654!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1739194616938!5m2!1sfa!2s"
                    aria-label="Google maps"
                    width={800}
                    height={600}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex={0}
                  />
                </div>
                {/* end maps responsive */}
              </div>
            </div>
            <div className="col-lg-7 ps-lg-0 mt-5 mt-lg-0" data-aos="fade-left">
              <div className="w-100 p-5 border rounded-3 bg-light-dark">
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
                {/* end contact form */}
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
      </div>
    </>
  );
}

export default Contact;
