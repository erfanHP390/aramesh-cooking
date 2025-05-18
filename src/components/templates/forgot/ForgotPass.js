import React from "react";
import styles from "./ForgotPass.module.css";

function ForgotPass() {
  return (
    <>
      <div
        id="login-area"
        className="section pb-5 pb-md-6 border-top bg-light-dark"
      >
        <div className="container">
          <div className="row justify-content-center">
            {/* login form */}
            <div className="col-md-8 col-lg-7 px-5" data-aos="fade-up">
              <div className="position-relative mt-n7">
                <div className="p-5 rounded-3 bg-body shadow-sm">
                  <form
                    id="login-form"
                    className="needs-validation"
                    noValidate=""
                  >
                    <h1 className="h3 text-center">بازیابی رمز عبور</h1>
                    <hr className="divider my-4 mx-auto bg-warning border-warning" />
                    <div className="mb-4">
                      <input
                        name="email"
                        className="form-control"
                        dir="auto"
                        aria-label="email address"
                        placeholder="ایمیل"
                        defaultValue=""
                        type="email"
                        required=""
                      />
                      <div className="invalid-feedback">
                        لطفا آدرس ایمیل را وارد کنید.
                      </div>
                    </div>
                    <div className="d-grid mb-4">
                      <button type="submit" className="btn btn-primary">
                        {" "}
                        بازیابی رمز عبور
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ms-1 rotate-315"
                          width="1rem"
                          height="1rem"
                          fill="currentColor"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M218.1,167.17c0,13,0,25.6,4.1,37.4-43.1,50.6-156.9,184.3-167.5,194.5a20.17,20.17,0,0,0-6.7,15c0,8.5,5.2,16.7,9.6,21.3,6.6,6.9,34.8,33,40,28,15.4-15,18.5-19,24.8-25.2,9.5-9.3-1-28.3,2.3-36s6.8-9.2,12.5-10.4,15.8,2.9,23.7,3c8.3.1,12.8-3.4,19-9.2,5-4.6,8.6-8.9,8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7,6.2,34,5,22.8-15.5,24.1-21.6-11.7-21.8-9.7-30.7c.7-3,6.8-10,11.4-11s25,6.9,29.6,5.9c5.6-1.2,12.1-7.1,17.4-10.4,15.5,6.7,29.6,9.4,47.7,9.4,68.5,0,124-53.4,124-119.2S408.5,48,340,48,218.1,101.37,218.1,167.17ZM400,144a32,32,0,1,1-32-32A32,32,0,0,1,400,144Z"
                            style={{
                              fill: "none",
                              stroke: "currentColor",
                              strokeLinejoin: "round",
                              strokeWidth: 32,
                            }}
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                  <div className="mt-4">
                    <p>
                      حساب کاربری ندارید؟{" "}
                      <a href="register.html">ثبت نام کنید</a>
                    </p>
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

export default ForgotPass;
