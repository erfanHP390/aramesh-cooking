"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Brands.module.css";

function Brands() {
  // Brand data with external image URLs
  const brands = [
    // برندهای خارجی
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Nestle_textlogo.svg",
      alt: "Nestlé",
      url: "https://www.nestle.com",
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/PepsiCo_logo.svg/1200px-PepsiCo_logo.svg.png",
      alt: "PepsiCo",
      url: "https://www.pepsico.com",
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Unilever_Logo.svg/1200px-Unilever_Logo.svg.png",
      alt: "Unilever",
      url: "https://www.unilever.com",
    },
    {
      id: 4,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Danone_logo.svg/1200px-Danone_logo.svg.png",
      alt: "Danone",
      url: "https://www.danone.com",
    },
    {
      id: 5,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Kellogg%27s_logo.svg/1200px-Kellogg%27s_logo.svg.png",
      alt: "Kellogg's",
      url: "https://www.kelloggs.com",
    },
    {
      id: 6,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mondelez_international_logo_2012.svg/1200px-Mondelez_international_logo_2012.svg.png",
      alt: "Mondelez",
      url: "https://www.mondelezinternational.com",
    },
    {
      id: 7,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Coca-Cola_logo.svg/1200px-Coca-Cola_logo.svg.png",
      alt: "Coca-Cola",
      url: "https://www.coca-cola.com",
    },
    // برندهای ایرانی
    {
      id: 8,
      img: "https://kalleh.com/wp-content/uploads/2020/06/kalleh-logo.svg",
      alt: "کاله",
      url: "https://www.kalleh.com",
    },
    {
      id: 9,
      img: "https://www.mihan.ir/wp-content/themes/mihan/assets/images/logo.svg",
      alt: "میهن",
      url: "https://www.mihan.ir",
    },
    {
      id: 10,
      img: "https://www.shirin-asal.com/wp-content/uploads/2020/06/shirin-asal-logo.svg",
      alt: "شیرین عسل",
      url: "https://www.shirin-asal.com",
    },
    {
      id: 11,
      img: "https://www.saharkhiz.ir/wp-content/uploads/2020/06/saharkhiz-logo.svg",
      alt: "سحرخیز",
      url: "https://www.saharkhiz.ir",
    },
    {
      id: 12,
      img: "https://www.takmakaron.com/wp-content/uploads/2020/06/takmakaron-logo.svg",
      alt: "تک ماکارون",
      url: "https://www.takmakaron.com",
    },
    {
      id: 13,
      img: "https://www.pegah.ir/wp-content/uploads/2020/06/pegah-logo.svg",
      alt: "پگاه",
      url: "https://www.pegah.ir",
    },
  ];

  return (
    <div id="partner-brand" className={styles.sectionContainer}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className={styles.sectionTitle}>برندهای همکار ما</h2>

            <div className={styles.brandsContainer}>
              <Swiper
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
                rtl={true}
                className={styles.brandSwiper}
              >
                {brands.map((brand) => (
                  <SwiperSlide key={brand.id}>
                    <div className={styles.brandSlide}>
                      <a
                        href={brand.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className={styles.brandImage}
                          src={brand.img}
                          alt={brand.alt}
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className={styles.swiperButtonNext}>&gt;</div>
              <div className={styles.swiperButtonPrev}>&lt;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
