import React from "react";
import styles from "./Services.module.css";

function Services() {
  return (
    <>
      <div id="services" className="section  overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 bg-light-dark">
              <div className="px-4 py-5 px-lg-7 py-lg-7" data-aos="fade-right">
                <h2 className="fw-bold mb-3">خدمات گروه آشپزی آرامش</h2>
                <p className="lead mb-5">
                  گروه تخصصی آشپزی آرامش با تیمی از سرآشپزان حرفه‌ای آماده ارائه
                  خدمات در زمینه‌های:
                  <br />
                  - پذیرش سفارشات مجالس و مهمانی‌ها
                  <br />
                  - آموزش آشپزی حرفه‌ای و خانگی
                  <br />
                  - طراحی منوی اختصاصی برای رستوران‌ها
                  <br />- مشاوره تغذیه و برنامه‌ریزی غذایی
                </p>
                <a href="#" className={`${styles.btn_services} btn btn-primary`}>
                  مشاهده منوی کامل
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-utensils"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.5 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H14v10a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V6H8.5v10a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h15Z" />
                    <path d="M3 0h1.5v1H3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1.5v1H3a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h1.5v1H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Zm12 0h-1.5v1H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1.5v1H15a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-1.5v1H15a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div
              className="col-md-6 text-light position-relative overflow-hidden"
              style={{ backgroundColor: "#8B2E2C" }}
            >
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
                          <svg
                            className="bi bi-egg-fried text-warning"
                            width="4rem"
                            height="4rem"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                            />
                            <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z" />
                          </svg>
                        </div>
                        <div className="text-start">
                          <h3 className="h5 text-white">منوی اختصاصی مجالس</h3>
                          <p className="text-light">
                            طراحی منوی اختصاصی برای مراسم شما با توجه به سلیقه و
                            بودجه، استفاده از بهترین مواد اولیه و اجرای حرفه‌ای
                            توسط سرآشپزان با تجربه
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
                          <svg
                            className="bi bi-mortarboard text-warning"
                            width="4rem"
                            height="4rem"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                          </svg>
                        </div>
                        <div className="text-start">
                          <h3 className="h5 text-white">
                            دوره‌های آموزش آشپزی
                          </h3>
                          <p className="text-light">
                            برگزاری دوره‌های تخصصی آشپزی ایرانی و بین‌المللی
                            برای علاقه‌مندان و هنرجویان توسط اساتید مجرب
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12" data-aos="fade-up">
                    <div className="my-3">
                      <div className="d-block d-sm-flex rounded ps-3 pe-1 ps-md-1 pe-md-1 py-2">
                        <div className="d-block d-sm-flex align-items-center text-center mb-4 mb-sm-0 me-sm-4">
                          <svg
                            className="bi bi-people text-warning"
                            width="4rem"
                            height="4rem"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275z" />
                          </svg>
                        </div>
                        <div className="text-start">
                          <h3 className="h5 text-white">مشاوره تغذیه و رژیم</h3>
                          <p className="text-light">
                            ارائه برنامه‌های غذایی سالم و متنوع توسط متخصصین
                            تغذیه برای افراد، خانواده‌ها و رستوران‌ها
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
