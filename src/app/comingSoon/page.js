import React from "react";
import styles from "@/styles/comingSoon.module.css";
import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";

function page() {
  return (
    <>
      <Navbar />
      <main id="content">
        {/* =========={ HERO }==========  */}
        <div id="hero" className="section">
          {/* Background YouTube Parallax */}
          <div
            className="jarallax pt-8 pb-6 pb-md-8 z-index-1"
            data-jarallax-video="https://www.youtube.com/watch?v=6stlCkUDG_s"
          >
            {/* background overlay */}
            <div className="overlay bg-primary opacity-70 z-index-n1" />
            <div className="container">
              <div className="row justify-content-center">
                {/* content */}
                <div className="col-lg-7" data-aos="fade-up">
                  <div className="py-0 py-lg-5 text-center">
                    <h1 className="display-4 fw-bold text-white mb-3">
                      به زودی
                    </h1>
                    <p className="lead text-light mb-5">
                      ما به طور جدی در حال توسعه این سایت هستیم
                    </p>
                    <div className="input-group input-group-newsletter mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="آدرس ایمیل را وارد کنید"
                        aria-label="Enter email..."
                        dir="auto"
                      />
                      <button className="btn btn-warning" type="button">
                        من را با خبر کن!
                      </button>
                    </div>
                    <ul className="list-unstyled social-icon mb-0">
                      {/*facebook*/}
                      <li className="my-2 me-3">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light"
                          href="https://facebook.com/"
                          title="Facebook"
                        >
                          {/* <i class="fab fa-facebook fa-2x"></i> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                            />
                          </svg>
                        </a>
                      </li>
                      {/*twitter*/}
                      <li className="my-2 me-3">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light"
                          href="https://twitter.com/"
                          title="Twitter"
                        >
                          {/* <i class="fab fa-twitter fa-2x"></i> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
                            />
                          </svg>
                        </a>
                      </li>
                      {/*youtube*/}
                      <li className="my-2 me-3">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light"
                          href="https://youtube.com/"
                          title="Youtube"
                        >
                          {/* <i class="fab fa-youtube fa-2x"></i> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M508.64,148.79c0-45-33.1-81.2-74-81.2C379.24,65,322.74,64,265,64H247c-57.6,0-114.2,1-169.6,3.6-40.8,0-73.9,36.4-73.9,81.4C1,184.59-.06,220.19,0,255.79q-.15,53.4,3.4,106.9c0,45,33.1,81.5,73.9,81.5,58.2,2.7,117.9,3.9,178.6,3.8q91.2.3,178.6-3.8c40.9,0,74-36.5,74-81.5,2.4-35.7,3.5-71.3,3.4-107Q512.24,202.29,508.64,148.79ZM207,353.89V157.39l145,98.2Z"
                            />
                          </svg>
                        </a>
                      </li>
                      {/*VKontakte*/}
                      <li className="my-2 me-3">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light"
                          href="https://vk.com/"
                          title="VKontakte"
                        >
                          {/* <i class="fab fa-vk fa-2x"></i> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M484.7,132c3.56-11.28,0-19.48-15.75-19.48H416.58c-13.21,0-19.31,7.18-22.87,14.86,0,0-26.94,65.6-64.56,108.13-12.2,12.3-17.79,16.4-24.4,16.4-3.56,0-8.14-4.1-8.14-15.37V131.47c0-13.32-4.06-19.47-15.25-19.47H199c-8.14,0-13.22,6.15-13.22,12.3,0,12.81,18.81,15.89,20.84,51.76V254c0,16.91-3,20-9.66,20-17.79,0-61-66.11-86.92-141.44C105,117.64,99.88,112,86.66,112H33.79C18.54,112,16,119.17,16,126.86c0,13.84,17.79,83.53,82.86,175.77,43.21,63,104.72,96.86,160.13,96.86,33.56,0,37.62-7.69,37.62-20.5V331.33c0-15.37,3.05-17.93,13.73-17.93,7.62,0,21.35,4.09,52.36,34.33C398.28,383.6,404.38,400,424.21,400h52.36c15.25,0,22.37-7.69,18.3-22.55-4.57-14.86-21.86-36.38-44.23-62-12.2-14.34-30.5-30.23-36.09-37.92-7.62-10.25-5.59-14.35,0-23.57-.51,0,63.55-91.22,70.15-122"
                              style={{ fillRule: "evenodd" }}
                            />
                          </svg>
                        </a>
                      </li>
                      {/*Linkedin*/}
                      <li className="my-2 me-3">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light"
                          href="https://linkedin.com/"
                          title="Linkedin"
                        >
                          {/* <i class="fab fa-linkedin fa-2x"></i> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"
                            />
                          </svg>
                        </a>
                      </li>
                      {/*instagram*/}
                      <li className="my-2 me-3">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light"
                          href="https://instagram.com/"
                          title="Instagram"
                        >
                          {/* <i class="fab fa-instagram fa-2x"></i> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"
                            />
                            <path
                              fill="currentColor"
                              d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"
                            />
                            <path
                              fill="currentColor"
                              d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"
                            />
                          </svg>
                        </a>
                      </li>
                      {/*end instagram*/}
                    </ul>
                  </div>
                </div>
                {/* end content */}
              </div>
            </div>
          </div>
        </div>
        {/* end hero */}
      </main>
      {/* end main */}
      <Footer />
    </>
  );
}

export default page;
