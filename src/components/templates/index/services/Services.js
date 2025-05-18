import React from "react";
import styles from "./Services.module.css";

function Services() {
  return (
    <>
      <div
        id="services"
        className="section bg-gradient-primary overflow-hidden"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 bg-light-dark">
              <div className="px-4 py-5 px-lg-7 py-lg-7" data-aos="fade-right">
                <h2 className="fw-bold mb-3">خدمات ما</h2>
                <p className="lead mb-5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است .<br /> لورم ایپسوم متن
                  ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                  طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
                  سطرآنچنان که لازم است .
                </p>
                <a href="#" className="btn btn-primary">
                  اطلاعات بیشتر
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
            <div className="col-md-6 text-light position-relative overflow-hidden">
              {/* scribble */}
              <figure className="scribble scale-3 opacity-10 bottom-0 end-0 z-index-n1">
                <svg
                  className="text-secondary"
                  width={200}
                  height={200}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M42.5,-66.2C57.1,-56.7,72.5,-48.4,81.1,-35.3C89.8,-22.2,91.8,-4.4,89.6,13C87.3,30.4,80.7,47.4,69.5,60.1C58.3,72.9,42.4,81.5,25.9,84.6C9.5,87.8,-7.4,85.4,-22.7,79.8C-37.9,74.1,-51.5,65.2,-60.9,53.3C-70.4,41.4,-75.8,26.6,-79,10.8C-82.1,-5,-83.1,-21.7,-77.7,-36.4C-72.4,-51,-60.7,-63.7,-46.7,-73.5C-32.7,-83.3,-16.4,-90.1,-1.2,-88.2C13.9,-86.3,27.8,-75.7,42.5,-66.2Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </figure>
              {/* scribble */}
              <figure className="scribble scale-4 opacity-10 bottom-0 end-0 z-index-n1">
                <svg
                  className="text-secondary"
                  width={200}
                  height={200}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M42.5,-66.2C57.1,-56.7,72.5,-48.4,81.1,-35.3C89.8,-22.2,91.8,-4.4,89.6,13C87.3,30.4,80.7,47.4,69.5,60.1C58.3,72.9,42.4,81.5,25.9,84.6C9.5,87.8,-7.4,85.4,-22.7,79.8C-37.9,74.1,-51.5,65.2,-60.9,53.3C-70.4,41.4,-75.8,26.6,-79,10.8C-82.1,-5,-83.1,-21.7,-77.7,-36.4C-72.4,-51,-60.7,-63.7,-46.7,-73.5C-32.7,-83.3,-16.4,-90.1,-1.2,-88.2C13.9,-86.3,27.8,-75.7,42.5,-66.2Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </figure>
              {/* scribble */}
              <figure className="scribble scale-5 opacity-10 bottom-0 end-0 z-index-n1">
                <svg
                  className="text-secondary"
                  width={200}
                  height={200}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M42.5,-66.2C57.1,-56.7,72.5,-48.4,81.1,-35.3C89.8,-22.2,91.8,-4.4,89.6,13C87.3,30.4,80.7,47.4,69.5,60.1C58.3,72.9,42.4,81.5,25.9,84.6C9.5,87.8,-7.4,85.4,-22.7,79.8C-37.9,74.1,-51.5,65.2,-60.9,53.3C-70.4,41.4,-75.8,26.6,-79,10.8C-82.1,-5,-83.1,-21.7,-77.7,-36.4C-72.4,-51,-60.7,-63.7,-46.7,-73.5C-32.7,-83.3,-16.4,-90.1,-1.2,-88.2C13.9,-86.3,27.8,-75.7,42.5,-66.2Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </figure>
              {/* scribble */}
              <figure className="scribble scale-6 opacity-10 bottom-0 end-0 z-index-n1">
                <svg
                  className="text-secondary"
                  width={200}
                  height={200}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M42.5,-66.2C57.1,-56.7,72.5,-48.4,81.1,-35.3C89.8,-22.2,91.8,-4.4,89.6,13C87.3,30.4,80.7,47.4,69.5,60.1C58.3,72.9,42.4,81.5,25.9,84.6C9.5,87.8,-7.4,85.4,-22.7,79.8C-37.9,74.1,-51.5,65.2,-60.9,53.3C-70.4,41.4,-75.8,26.6,-79,10.8C-82.1,-5,-83.1,-21.7,-77.7,-36.4C-72.4,-51,-60.7,-63.7,-46.7,-73.5C-32.7,-83.3,-16.4,-90.1,-1.2,-88.2C13.9,-86.3,27.8,-75.7,42.5,-66.2Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </figure>
              <div className="py-5 px-2 px-lg-5">
                {/* row */}
                <div className="row align-items-center justify-content-around">
                  <div className="col-12" data-aos="fade-up">
                    <div className="my-3">
                      <div className="d-block d-sm-flex rounded ps-3 pe-1 ps-md-1 pe-md-1 py-2">
                        <div className="d-block d-sm-flex align-items-center text-center mb-4 mb-sm-0 me-sm-4">
                          {/* <i class="far fa-user me-3 fa-2x text-primary"></i> */}
                          <svg
                            className="bi bi-graph-up text-warning"
                            width="4rem"
                            height="4rem"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0h1v16H0V0zm1 15h15v1H1v-1z" />
                            <path
                              fillRule="evenodd"
                              d="M14.39 4.312L10.041 9.75 7 6.707l-3.646 3.647-.708-.708L7 5.293 9.959 8.25l3.65-4.563.781.624z"
                              clipRule="evenodd"
                            />
                            <path
                              fillRule="evenodd"
                              d="M10 3.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V4h-3.5a.5.5 0 01-.5-.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-start">
                          <h3 className="h5 text-white">عنوان یک بخش مهم</h3>
                          <p className="text-light">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                            است .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <div className="my-3">
                      <div className="d-block d-sm-flex rounded ps-3 pe-1 ps-md-1 pe-md-1 py-2">
                        <div className="d-block d-sm-flex align-items-center text-center mb-4 mb-sm-0 me-sm-4">
                          {/* <i class="far fa-thumbs-up me-3 fa-2x text-primary"></i> */}
                          <svg
                            className="bi bi-pie-chart text-warning"
                            width="4rem"
                            height="4rem"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
                              clipRule="evenodd"
                            />
                            <path
                              fillRule="evenodd"
                              d="M7.5 7.793V1h1v6.5H15v1H8.207l-4.853 4.854-.708-.708L7.5 7.793z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-start">
                          <h3 className="h5 text-white">عنوان یک بخش مهم</h3>
                          <p className="text-light">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                            است .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12" data-aos="fade-up">
                    <div className="my-3">
                      <div className="d-block d-sm-flex rounded ps-3 pe-1 ps-md-1 pe-md-1 py-2">
                        <div className="d-block d-sm-flex align-items-center text-center mb-4 mb-sm-0 me-sm-4">
                          {/* <i class="far fa-file-archive me-3 fa-2x text-primary"></i> */}
                          <svg
                            className="bi bi-file-richtext text-warning"
                            width="4rem"
                            height="4rem"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 1h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H4z"
                              clipRule="evenodd"
                            />
                            <path
                              fillRule="evenodd"
                              d="M4.5 11.5A.5.5 0 015 11h3a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 9h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm1.639-3.708l1.33.886 1.854-1.855a.25.25 0 01.289-.047l1.888.974V7.5a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V7s1.54-1.274 1.639-1.208zM6.25 5a.75.75 0 100-1.5.75.75 0 000 1.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-start">
                          <h3 className="h5 text-white">عنوان یک بخش مهم</h3>
                          <p className="text-light">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                            است .
                          </p>
                        </div>
                      </div>
                    </div>
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

export default Services;
