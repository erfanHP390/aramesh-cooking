import React from "react";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <>
      <div id="profile" className="section py-6 py-md-7 bg-body">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6" data-aos="fade-right">
              {/* About 2 Thumb */}
              <div className="text-center mb-4">
                <div className="px-5 px-md-6 mb-5 mb-lg-0">
                  <img
                    className="img-fluid"
                    src="src/img-min/svg/presentation2.svg"
                    alt="company profile"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="flip-up">
              <div className="pt-0">
                <h2 className="fw-bold mb-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </h2>
                <p className="lead mb-5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است .
                </p>
                <a href="#services" className="btn btn-warning">
                  خدمات ما
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-chevron-double-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                    />
                    <path
                      fillRule="evenodd"
                      d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
