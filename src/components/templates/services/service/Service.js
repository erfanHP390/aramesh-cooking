import React from "react";
import styles from "./Service.module.css";

function Service() {
  return (
    <>
      <div id="service" className="section pt-6 pt-md-7 bg-light-dark">
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
              {/* service block */}
              <div className="five-service hover-box-up text-center mb-7">
                <div className="service-icon text-white border">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 512 512"
                    >
                      <rect
                        stroke="currentColor"
                        x={32}
                        y={64}
                        width={448}
                        height={320}
                        rx={32}
                        ry={32}
                        style={{
                          fill: "none",
                          strokeLinejoin: "round",
                          strokeWidth: 32,
                        }}
                      />
                      <polygon
                        fill="currentColor"
                        points="304 448 296 384 216 384 208 448 304 448"
                        style={{
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 32,
                        }}
                      />
                      <line
                        stroke="currentColor"
                        x1={368}
                        y1={448}
                        x2={144}
                        y2={448}
                        style={{
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 32,
                        }}
                      />
                      <path
                        fill="currentColor"
                        d="M32,304v48a32.09,32.09,0,0,0,32,32H448a32.09,32.09,0,0,0,32-32V304Zm224,64a16,16,0,1,1,16-16A16,16,0,0,1,256,368Z"
                      />
                    </svg>
                    {/* <i class="fas fa-desktop text-primary"></i>  */}
                  </span>
                </div>
                <div className="service-content bg-body shadow-sm rounded-3 pt-5 pb-4 px-4">
                  <h3 className="h5 mt-3">توسعه وب</h3>
                  <p className="mb-4">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
                  </p>
                  <a
                    href="#"
                    className="read-more bg-body text-body"
                    title="Read More"
                  >
                    {/* <i class="fa fa-plus"></i> */}
                    <svg
                      className="bi bi-plus"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* end service block */}
            </div>
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              {/* service block */}
              <div className="five-service hover-box-up text-center mb-7">
                <div className="service-icon text-white border">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 512 512"
                    >
                      <path
                        stroke="currentColor"
                        d="M256.05,80.65Q263.94,80,272,80c106,0,192,86,192,192S378,464,272,464A192.09,192.09,0,0,1,89.12,330.65"
                        style={{
                          fill: "none",
                          strokeLinecap: "round",
                          strokeMiterlimit: 10,
                          strokeWidth: 32,
                        }}
                      />
                      <path
                        stroke="currentColor"
                        d="M256,48C141.12,48,48,141.12,48,256a207.29,207.29,0,0,0,18.09,85L256,256Z"
                        style={{
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 32,
                        }}
                      />
                    </svg>
                    {/* <i class="fas fa-chart-pie text-primary"></i>  */}
                  </span>
                </div>
                <div className="service-content bg-body shadow-sm rounded-3 pt-5 pb-4 px-4">
                  <h3 className="h5 mt-3">بازاریابی دیجیتالی</h3>
                  <p className="mb-4">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
                  </p>
                  <a
                    href="#"
                    className="read-more bg-body text-body"
                    title="Read More"
                  >
                    {/* <i class="fa fa-plus"></i> */}
                    <svg
                      className="bi bi-plus"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* end service block */}
            </div>
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {/* service block */}
              <div className="five-service hover-box-up text-center mb-7">
                <div className="service-icon text-white border">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 512 512"
                    >
                      <path
                        stroke="currentColor"
                        d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
                        style={{
                          fill: "none",
                          strokeMiterlimit: 10,
                          strokeWidth: 32,
                        }}
                      />
                      <line
                        stroke="currentColor"
                        x1="338.29"
                        y1="338.29"
                        x2={448}
                        y2={448}
                        style={{
                          fill: "none",
                          strokeLinecap: "round",
                          strokeMiterlimit: 10,
                          strokeWidth: 32,
                        }}
                      />
                    </svg>
                    {/* <i class="text-primary fas fa-search"></i> */}
                  </span>
                </div>
                <div className="service-content bg-body shadow-sm rounded-3 pt-5 pb-4 px-4">
                  <h3 className="h5 mt-3">بهینه سازی موتور جستجو</h3>
                  <p className="mb-4">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
                  </p>
                  <a
                    href="#"
                    className="read-more bg-body text-body"
                    title="Read More"
                  >
                    {/* <i class="fa fa-plus"></i> */}
                    <svg
                      className="bi bi-plus"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* end service block */}
            </div>
            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
              {/* service block */}
              <div className="five-service hover-box-up text-center mb-7">
                <div className="service-icon text-white border">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M455.27,32h36.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                      />
                    </svg>
                    {/* <i class="text-primary fab fa-facebook"></i> */}
                  </span>
                </div>
                <div className="service-content bg-body shadow-sm rounded-3 pt-5 pb-4 px-4">
                  <h3 className="h5 mt-3">بازاریابی رسانه های اجتماعی</h3>
                  <p className="mb-4">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
                  </p>
                  <a
                    href="#"
                    className="read-more bg-body text-body"
                    title="Read More"
                  >
                    {/* <i class="fa fa-plus"></i> */}
                    <svg
                      className="bi bi-plus"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* end service block */}
            </div>
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              {/* service block */}
              <div className="five-service hover-box-up text-center mb-7">
                <div className="service-icon text-white border">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 512 512"
                    >
                      <rect
                        stroke="currentColor"
                        x={128}
                        y={16}
                        width={256}
                        height={480}
                        rx={48}
                        ry={48}
                        style={{
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 32,
                        }}
                      />
                      <path
                        stroke="currentColor"
                        d="M176,16h24a8,8,0,0,1,8,8h0a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16h0a8,8,0,0,1,8-8h24"
                        style={{
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 32,
                        }}
                      />
                    </svg>
                    {/* <i class="text-primary fas fa-mobile"></i> */}
                  </span>
                </div>
                <div className="service-content bg-body shadow-sm rounded-3 pt-5 pb-4 px-4">
                  <h3 className="h5 mt-3">بازاریابی برنامه های تلفن همراه</h3>
                  <p className="mb-4">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
                  </p>
                  <a
                    href="#"
                    className="read-more bg-body text-body"
                    title="Read More"
                  >
                    {/* <i class="fa fa-plus"></i> */}
                    <svg
                      className="bi bi-plus"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* end service block */}
            </div>
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {/* service block */}
              <div className="five-service hover-box-up text-center mb-7">
                <div className="service-icon text-white border">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M473.16,221.48l-2.26-9.59H262.46v88.22H387c-12.93,61.4-72.93,93.72-121.94,93.72-35.66,0-73.25-15-98.13-39.11a140.08,140.08,0,0,1-41.8-98.88c0-37.16,16.7-74.33,41-98.78s61-38.13,97.49-38.13c41.79,0,71.74,22.19,82.94,32.31l62.69-62.36C390.86,72.72,340.34,32,261.6,32h0c-60.75,0-119,23.27-161.58,65.71C58,139.5,36.25,199.93,36.25,256S56.83,369.48,97.55,411.6C141.06,456.52,202.68,480,266.13,480c57.73,0,112.45-22.62,151.45-63.66,38.34-40.4,58.17-96.3,58.17-154.9C475.75,236.77,473.27,222.12,473.16,221.48Z"
                      />
                    </svg>
                    {/* <i class="text-primary fab fa-google"></i> */}
                  </span>
                </div>
                <div className="service-content bg-body shadow-sm rounded-3 pt-5 pb-4 px-4">
                  <h3 className="h5 mt-3">مجموعه گوگل</h3>
                  <p className="mb-4">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
                  </p>
                  <a
                    href="#"
                    className="read-more bg-body text-body"
                    title="Read More"
                  >
                    {/* <i class="fa fa-plus"></i> */}
                    <svg
                      className="bi bi-plus"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* end service block */}
            </div>
          </div>
          {/* end row */}
        </div>
      </div>
    </>
  );
}

export default Service;
