"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Brands.module.css";

function Brands() {
  const swiperRef = useRef(null);
  const brands = [
    {
      id: 1,
      img: "/images/brands/Nestlé.webp",
      alt: "Nestlé",
      url: "https://www.nestle.com",
    },
    {
      id: 2,
      img: "/images/brands/PepsiCo.png",
      alt: "PepsiCo",
      url: "https://www.pepsico.com",
    },
    {
      id: 3,
      img: "/images/brands/Unilever.png",
      alt: "Unilever",
      url: "https://www.unilever.com",
    },
    {
      id: 4,
      img: "/images/brands/Danone.png",
      alt: "Danone",
      url: "https://www.danone.com",
    },
    {
      id: 5,
      img: "/images/brands/Kellogg's.png",
      alt: "Kellogg's",
      url: "https://www.kelloggs.com",
    },
    {
      id: 6,
      img: "/images/brands/Mondelez.png",
      alt: "Mondelez",
      url: "https://www.mondelezinternational.com",
    },
    {
      id: 7,
      img: "/images/brands/Coca-Cola.png",
      alt: "Coca-Cola",
      url: "https://www.coca-cola.com",
    },
    {
      id: 8,
      img: "/images/brands/kalleh.jpg",
      alt: "کاله",
      url: "https://www.kalleh.com",
    },
    {
      id: 9,
      img: "/images/brands/mihan.png",
      alt: "میهن",
      url: "https://www.mihan.ir",
    },
    {
      id: 10,
      img: "/images/brands/shirin-asal.jpg",
      alt: "شیرین عسل",
      url: "https://www.shirin-asal.com",
    },
    {
      id: 11,
      img: "/images/brands/saharkhiz.jpg",
      alt: "سحرخیز",
      url: "https://www.saharkhiz.ir",
    },
    {
      id: 12,
      img: "/images/brands/takmakaron.webp",
      alt: "تک ماکارون",
      url: "https://www.takmakaron.com",
    },
    {
      id: 13,
      img: "/images/brands/pegah..png",
      alt: "پگاه",
      url: "https://www.pegah.ir",
    },
  ];

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }
  }, []);

  return (
    <div id="partner-brand" className={styles.sectionContainer}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className={`${styles.sectionTitle} font-vazir-bold`}>برندهای همکار ما</h2>

            <div className={styles.brandsContainer}>
              <Swiper
                ref={swiperRef}
                modules={[Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={2}
                breakpoints={{
                  576: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  992: { slidesPerView: 5 },
                  1200: { slidesPerView: 6 },
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: `.${styles.swiperButtonNext}`,
                  prevEl: `.${styles.swiperButtonPrev}`,
                }}
                loop={true}
                dir="rtl"
                className={styles.brandSwiper}
              >
                {brands.map((brand) => (
                  <SwiperSlide key={brand.id}>
                    <div className={styles.brandSlide}>
                      <a
                        href={brand.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.brandLink}
                      >
                        <div className={styles.imageContainer}>
                          <img
                            className={styles.brandImage}
                            src={brand.img}
                            alt={brand.alt}
                            loading="lazy"
                          />
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;