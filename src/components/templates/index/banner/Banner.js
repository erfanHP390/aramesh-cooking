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
      navigation={true}
      loop={true}
      autoplay={{ delay: 3500 }}
      modules={[Navigation, Autoplay]}
      className="mySwiper home-slider"
    >
      <SwiperSlide>
        <img
          src="/images/sliders/slider1.jpeg"
          alt="Slide"
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
          src="/images/sliders/slider4.jpg"
          alt="Slide"
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
          src="/images/sliders/slider5.jpg"
          alt="Slide"
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
          src="/images/sliders/slider6.jpg"
          alt="Slide"
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
          src="/images/sliders/slider7.jpg"
          alt="Slide"
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
