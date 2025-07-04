"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./Banner.module.css";

import { Navigation, Autoplay } from "swiper/modules";

function Banner() {
  return (
    <Swiper
      rewind={true}
      navigation={{
        nextEl: `.${styles.swiperButtonNext}`,
        prevEl: `.${styles.swiperButtonPrev}`,
      }}
      loop={true}
      autoplay={{ delay: 3500 }}
      modules={[Navigation, Autoplay]}
      className={`mySwiper home-slider`}
    >
      <SwiperSlide>
        <img
          src="/images/sliders/slider1.webp"
          alt="Slide"
          loading="lazy"
          style={{
            width: "100%",
            maxWidth: "1920px",
            height: "650px",
            aspectRatio: "1920 / 750",
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/sliders/slider2.webp"
          alt="Slide"
          loading="lazy"
          style={{
            width: "100%",
            maxWidth: "1920px",
            height: "650px",
            aspectRatio: "1920 / 750",
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/sliders/slider3.webp"
          alt="Slide"
          loading="lazy"
          style={{
            width: "100%",
            maxWidth: "1920px",
            height: "650px",
            aspectRatio: "1920 / 750",
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/sliders/slider4.webp"
          alt="Slide"
          loading="lazy"
          style={{
            width: "100%",
            maxWidth: "1920px",
            height: "650px",
            aspectRatio: "1920 / 750",
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/sliders/slider5.webp"
          alt="Slide"
          loading="lazy"
          style={{
            width: "100%",
            maxWidth: "1920px",
            height: "650px",
            aspectRatio: "1920 / 750",
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/sliders/slider6.webp"
          alt="Slide"
          loading="lazy"
          style={{
            width: "100%",
            maxWidth: "1920px",
            height: "650px",
            aspectRatio: "1920 / 750",
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/sliders/slider7.webp"
          alt="Slide"
          loading="lazy"
          style={{
            width: "100%",
            maxWidth: "1920px",
            height: "650px",
            aspectRatio: "1920 / 750",
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/sliders/slider8.webp"
          alt="Slide"
          loading="lazy"
          style={{
            width: "100%",
            maxWidth: "1920px",
            height: "650px",
            aspectRatio: "1920 / 750",
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
          }}
        />
      </SwiperSlide>
      <div className={`swiper-button-next ${styles.swiperButtonNext}`}></div>
      <div className={`swiper-button-prev ${styles.swiperButtonPrev}`}></div>
    </Swiper>
  );
}

export default Banner;
