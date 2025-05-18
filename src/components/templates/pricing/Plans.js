import React from "react";
import styles from "./Plans.module.css";

function Plans() {
  return (
    <>
      <div
        id="pricing"
        className="section pt-6 pt-md-7 pb-4 pb-md-5 bg-light-dark"
      >
        <div className="container">
          {/* navigation */}
          <div className="text-center">
            <div className="slideToggle mb-5 mb-lg-6">
              <label className="form-switch">
                <span className="beforeinput">ماهانه</span>
                <input
                  type="checkbox"
                  id="js-checkbox"
                  className="js-checkbox"
                />
                <i />
                <span className="afterinput">سالانه</span>
              </label>
            </div>
          </div>
          {/* row */}
          <div className="row justify-content-center">
            <div className="col-11 col-md-6 col-lg-4" data-aos="fade-up">
              <div className="px-xl-2">
                {/* price table*/}
                <div className="pricing-table-two shadow-sm bg-body rounded-3 mb-5">
                  {/* pricing header */}
                  <header className="pricing-header">
                    <h3 className="fw-bold h4">عنوان یک</h3>
                    <p className="sub-head text-muted">شروع کار</p>
                    <div className="line-after bg-gradient-primary mb-4" />
                    <div className="pricing-fee">
                      <h4 className="js-monthly text-primary">
                        19900 <em>تومان</em>{" "}
                        <span className="small fw-light">/ماهانه</span>
                      </h4>
                      <h4 className="js-yearly text-primary">
                        119900 <em>تومان</em>{" "}
                        <span className="small fw-light">/سالانه</span>
                      </h4>
                    </div>
                  </header>
                  {/* end pricing header */}
                  {/* pricing content */}
                  <div className="pricing-content">
                    <p>100 کارمند</p>
                    <p>ویژگی های نامحدود</p>
                    <p>نرم افزار ارائه</p>
                    <p>مدیریت پروژه</p>
                    <p>مدیریت رویداد</p>
                    <div className="d-grid mt-5">
                      <a className="btn btn-secondary btn-block" href="#">
                        شروع کنید
                      </a>
                    </div>
                  </div>
                  {/* end pricing content */}
                </div>
                {/* End price table*/}
              </div>
            </div>
            <div className="col-11 col-md-6 col-lg-4" data-aos="fade-up">
              <div className="px-xl-2">
                {/* price table*/}
                <div className="pricing-table-two shadow-sm bg-body rounded-3 mt-lg-n4 mb-5">
                  {/* ribbon */}
                  <div className="ribbon ribbon-md ribbon-end">
                    <span className="bg-warning text-dark">پرفروش</span>
                  </div>
                  {/* pricing header */}
                  <div className="pricing-header">
                    <h3 className="fw-bold h4">اقتصادی</h3>
                    <p className="sub-head text-muted">کسب و کار متوسط</p>
                    <div className="line-after bg-gradient-primary mb-4" />
                    <div className="pricing-fee">
                      <h4 className="js-monthly text-primary">
                        29990 <em>تومان</em>{" "}
                        <span className="small fw-light">/ماهانه</span>
                      </h4>
                      <h4 className="js-yearly text-primary">
                        299990 <em>تومان</em>{" "}
                        <span className="small fw-light">/سالانه</span>
                      </h4>
                    </div>
                  </div>
                  {/* end pricing header */}
                  {/* pricing content */}
                  <div className="pricing-content">
                    <p>500 کارمند</p>
                    <p>ویژگی های نامحدود</p>
                    <p>نرم افزار ارائه</p>
                    <p>مدیریت پروژه</p>
                    <p>مدیریت رویداد</p>
                    <p>محبوب ترین</p>
                    <div className="d-grid mt-5">
                      <a className="btn btn-primary" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="me-2"
                          width="1.5rem"
                          height="1.5rem"
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
                        شروع کنید
                      </a>
                    </div>
                  </div>
                  {/* end pricing content */}
                </div>
                {/* end pricing table */}
              </div>
            </div>
            <div className="col-11 col-md-6 col-lg-4" data-aos="fade-up">
              <div className="px-xl-2">
                {/* price table*/}
                <div className="pricing-table-two shadow-sm bg-body rounded-3 mb-5">
                  {/* pricing header */}
                  <header className="pricing-header">
                    <h3 className=" fw-bold h4">حرفه ای</h3>
                    <p className="sub-head text-muted">تجارت بزرگ</p>
                    <div className="line-after bg-gradient-primary mb-4" />
                    <div className="pricing-fee">
                      <h4 className="js-monthly text-primary">
                        39990 <em>تومان</em>{" "}
                        <span className="small fw-light">/ماهانه</span>
                      </h4>
                      <h4 className="js-yearly text-primary">
                        399990 <em>تومان</em>{" "}
                        <span className="small fw-light">/سالانه</span>
                      </h4>
                    </div>
                  </header>
                  {/* end pricing header */}
                  {/* pricing content */}
                  <div className="pricing-content">
                    <p>1000 کارمند</p>
                    <p>ویژگی های نامحدود</p>
                    <p>نرم افزار ارائه</p>
                    <p>مدیریت پروژه</p>
                    <p>مدیریت رویداد</p>
                    <div className="d-grid mt-5">
                      <a className="btn btn-secondary btn-block" href="#">
                        شروع کنید
                      </a>
                    </div>
                  </div>
                  {/* end pricing content */}
                </div>
                {/* End price table*/}
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
      </div>
    </>
  );
}

export default Plans;
