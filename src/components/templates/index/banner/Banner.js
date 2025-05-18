"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./Banner.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`mySwiper  ${styles.Swiper}`}
      >
        <SwiperSlide className={`${styles.swiper_slide}`}>
          <>
            <div
              className="col-12 px-0 pt-7 pb-7 pb-md-7 z-index-1"
              style={{
                minHeight: 520,
                backgroundImage: 'url("src/img-min/bg/bg.jpg")',
                backgroundSize: "cover",
              }}
            >
              {/* background overlay */}
              <div className="overlay bg-gradient-secondary opacity-90 z-index-n1" />
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  {/* content */}
                  <div className="col-12 col-md-10" data-aos="fade-up">
                    <div className="mt-0 py-0 py-lg-5 text-center text-lg-start hero-caption">
                      <h2 className="display-5 fw-bold text-warning mb-3">
                        عنوان اصلی
                      </h2>
                      <p className="lead text-light mb-5">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                      </p>
                      <a className="btn btn-warning" href="#profile">
                        {/* <i class="fas fa-paper-plane me-1"></i>  */}
                        توضیحات بیشتر
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.5rem"
                          height="1.5rem"
                          fill="currentColor"
                          className="me-2"
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
                      </a>
                    </div>
                  </div>
                  {/* end content */}
                </div>
              </div>
            </div>
            <div
              className="col-12 px-0 pt-7 pb-7 pb-md-7 z-index-1"
              style={{
                minHeight: 520,
                backgroundImage: 'url("src/img-min/bg/bg3.jpg")',
                backgroundSize: "cover",
              }}
            >
              {/* background overlay */}
              <div className="overlay bg-gradient-secondary opacity-90 z-index-n1" />
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  {/* content */}
                  <div className="col-12 col-md-10" data-aos="fade-up">
                    <div className="mt-0 py-0 py-lg-5 text-center text-lg-start hero-caption">
                      <h2 className="display-5 fw-bold text-warning mb-3">
                        عنوان اصلی
                      </h2>
                      <p className="lead text-light mb-5">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                      </p>
                      <a className="btn btn-warning" href="#services">
                        {/* <i class="fas fa-paper-plane me-1"></i> */}
                        خدمات ما
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.5rem"
                          height="1.5rem"
                          fill="currentColor"
                          className="me-2"
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
                      </a>
                    </div>
                  </div>
                  {/* end content */}
                </div>
              </div>
            </div>
          </>
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiper_slide}`}>Slide 2</SwiperSlide>
        <SwiperSlide className={`${styles.swiper_slide}`}>Slide 3</SwiperSlide>
        <SwiperSlide className={`${styles.swiper_slide}`}>Slide 4</SwiperSlide>
        <SwiperSlide className={`${styles.swiper_slide}`}>Slide 5</SwiperSlide>
        <SwiperSlide className={`${styles.swiper_slide}`}>Slide 6</SwiperSlide>
        <SwiperSlide className={`${styles.swiper_slide}`}>Slide 7</SwiperSlide>
        <SwiperSlide className={`${styles.swiper_slide}`}>Slide 8</SwiperSlide>
        <SwiperSlide className={`${styles.swiper_slide}`}>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
