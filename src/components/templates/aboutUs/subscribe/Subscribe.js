import React from "react";
import styles from "./Subscribe.module.css";

function Subscribe() {
  return (
    <>
      <div
        id="subcribe"
        className="section py-6 py-md-7 bg-body overflow-hidden"
      >
        {/* particle moving animation */}
        <div className="particle">
          <div
            className="scroll-rotate position-absolute opacity-50 text-primary z-index-n1"
            style={{ right: "9%", bottom: "72%" }}
          >
            <svg
              className="bi bi-bounding-box-circles"
              width="2rem"
              height="2rem"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.5 2h-9V1h9v1zm-10 1.5v9h-1v-9h1zm11 9v-9h1v9h-1zM3.5 14h9v1h-9v-1z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M14 3a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm0 11a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zM2 3a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm0 11a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className="scroll-rotate position-absolute opacity-50 text-warning z-index-n1"
            style={{ right: "12%", bottom: "30%" }}
          >
            <svg
              className="bi bi-bounding-box-circles"
              width="2rem"
              height="2rem"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.5 2h-9V1h9v1zm-10 1.5v9h-1v-9h1zm11 9v-9h1v9h-1zM3.5 14h9v1h-9v-1z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M14 3a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm0 11a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zM2 3a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm0 11a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className="scroll-rotate position-absolute opacity-50 text-danger d-none d-lg-block z-index-n1"
            style={{ right: "22%", bottom: "55%" }}
          >
            <svg
              className="bi bi-bounding-box-circles"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.5 2h-9V1h9v1zm-10 1.5v9h-1v-9h1zm11 9v-9h1v9h-1zM3.5 14h9v1h-9v-1z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M14 3a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm0 11a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zM2 3a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm0 11a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className="scroll-rotate position-absolute opacity-50 text-danger d-none d-lg-block z-index-n1"
            style={{ left: "40%", top: "20%" }}
          >
            <svg
              className="bi bi-bounding-box-circles"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.5 2h-9V1h9v1zm-10 1.5v9h-1v-9h1zm11 9v-9h1v9h-1zM3.5 14h9v1h-9v-1z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M14 3a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm0 11a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zM2 3a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm0 11a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className="scroll-rotate position-absolute opacity-50 text-primary z-index-n1"
            style={{ left: "60%", bottom: "20%" }}
          >
            <svg
              className="bi bi-bounding-box-circles"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.5 2h-9V1h9v1zm-10 1.5v9h-1v-9h1zm11 9v-9h1v9h-1zM3.5 14h9v1h-9v-1z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M14 3a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm0 11a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zM2 3a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm0 11a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className="scroll-rotate position-absolute opacity-50 text-warning z-index-n1"
            style={{ left: "20%", bottom: "60%" }}
          >
            <svg
              className="bi bi-bounding-box-circles"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.5 2h-9V1h9v1zm-10 1.5v9h-1v-9h1zm11 9v-9h1v9h-1zM3.5 14h9v1h-9v-1z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M14 3a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm0 11a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zM2 3a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm0 11a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className="scroll-rotate position-absolute opacity-50 text-primary z-index-n1"
            style={{ left: "12%", bottom: "30%" }}
          >
            <svg
              className="bi bi-bounding-box-circles"
              width="2rem"
              height="2rem"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.5 2h-9V1h9v1zm-10 1.5v9h-1v-9h1zm11 9v-9h1v9h-1zM3.5 14h9v1h-9v-1z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M14 3a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm0 11a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zM2 3a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm0 11a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className="scroll-rotate position-absolute opacity-50 text-success z-index-n1"
            style={{ left: "6%", bottom: "75%" }}
          >
            <svg
              className="bi bi-bounding-box-circles"
              width="2rem"
              height="2rem"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.5 2h-9V1h9v1zm-10 1.5v9h-1v-9h1zm11 9v-9h1v9h-1zM3.5 14h9v1h-9v-1z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M14 3a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm0 11a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zM2 3a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm0 11a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8 col-md-6" data-aos="fade-up">
              {/* Title */}
              <div className="text-center mx-auto mb-4">
                <svg
                  className="bi bi-envelope-open text-primary mb-4"
                  width="5rem"
                  height="5rem"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M.243 6.929l.514-.858L8 10.417l7.243-4.346.514.858L8 11.583.243 6.93z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7.184 10.68L.752 14.432l-.504-.864L6.68 9.816l.504.864zm1.632 0l6.432 3.752.504-.864L9.32 9.816l-.504.864z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M8.47 1.318a1 1 0 00-.94 0l-6 3.2A1 1 0 001 5.4V14a1 1 0 001 1h12a1 1 0 001-1V5.4a1 1 0 00-.53-.882l-6-3.2zM7.06.435a2 2 0 011.882 0l6 3.2A2 2 0 0116 5.4V14a2 2 0 01-2 2H2a2 2 0 01-2-2V5.4a2 2 0 011.059-1.765l6-3.2z"
                    clipRule="evenodd"
                  />
                </svg>
                <h2>
                  <span className="fw-light">عضویت در</span> خبرنامه
                </h2>
                <hr className="divider my-4 mx-auto bg-warning border-warning" />
                <p className="lead text-muted mb-0">
                  برای دریافت به روزرسانی های روزانه در خبرنامه ما مشترک شوید!
                </p>
              </div>
              {/* End Title */}
              {/*form*/}
              <div className="mx-auto">
                <form
                  id="subscribe1"
                  className="needs-validation"
                  action="#"
                  noValidate=""
                >
                  <div className="row">
                    <div className="col-12 col-lg-8 mb-4 mb-lg-0">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="آدرس ایمیل"
                        dir="auto"
                        name="email"
                        aria-label="newsletter form"
                      />
                    </div>
                    <div className="col-12 col-lg-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-2"
                      >
                        عضویت!
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/*end form*/}
            </div>
          </div>
        </div>
        {/* end subcribe */}
      </div>
    </>
  );
}

export default Subscribe;
