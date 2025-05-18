import React from "react";
import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <>
      <div id="portfolio" className="section py-6 bg-white-black">
        <div className="container">
          {/* section header */}
          <header className="text-center mx-auto mb-5">
            <h2 className="h3 fw-bold">
              {" "}
              نمونه کارهای <span className="fw-light">ما</span>
            </h2>
            <hr className="divider my-4 bg-warning border-warning" />
          </header>
          <div className="button-group filters-button-group portfolio-nav text-center">
            <button
              className="button portfolio-nav-item text-body bg-transparent border-0 mb-3 mb-md-5 active"
              data-filter="*"
            >
              همه
            </button>
            <button
              className="button portfolio-nav-item text-body bg-transparent border-0 mb-3 mb-md-5"
              data-filter=".web"
            >
              وب
            </button>
            <button
              className="button portfolio-nav-item text-body bg-transparent border-0 mb-3 mb-md-5"
              data-filter=".branding"
            >
              برندسازی
            </button>
            <button
              className="button portfolio-nav-item text-body bg-transparent border-0 mb-3 mb-md-5"
              data-filter=".graphic"
            >
              گرافیک
            </button>
            <button
              className="button portfolio-nav-item text-body bg-transparent border-0 mb-3 mb-md-5"
              data-filter=".photovid"
            >
              عکاسی
            </button>
          </div>
          {/* Portfolio Content */}
          <div className="grid portfolio row g-0 lightgallery-thumbnail">
            <figure
              className="col-sm-6 col-lg-4 portfolio-item branding"
              data-src="src/img-min/portfolio/digital1.jpg"
              data-sub-html="Logo Design"
            >
              <img
                className="portfolio-image-3"
                src="src/img-min/portfolio/digital1-small.jpg"
                alt="Image Description"
              />
              <figcaption className="portfolio-info-3">
                <div className="portfolio-info-content-3">
                  <h3 className="h5 mb-3 text-white">طراحی لوگو</h3>
                  <small className="d-block text-light">
                    دوباره نام تجاری خود را
                  </small>
                </div>
              </figcaption>
            </figure>
            <figure
              className="col-sm-6 col-lg-4 portfolio-item photovid branding web"
              data-src="src/img-min/portfolio/digital2.jpg"
              data-sub-html="Web Development"
            >
              <img
                className="portfolio-image-3"
                src="src/img-min/portfolio/digital2-small.jpg"
                alt="Image Description"
              />
              <figcaption className="portfolio-info-3">
                <div className="portfolio-info-content-3">
                  <h3 className="h5 mb-3 text-white">وب</h3>
                  <small className="d-block text-light">سرویس توسعه وب</small>
                </div>
              </figcaption>
            </figure>
            <figure
              className="col-sm-6 col-lg-4 portfolio-item graphic"
              data-src="src/img-min/portfolio/digital3.jpg"
              data-sub-html="Graphic Design"
            >
              <img
                className="portfolio-image-3"
                src="src/img-min/portfolio/digital3-small.jpg"
                alt="Image Description"
              />
              <figcaption className="portfolio-info-3">
                <div className="portfolio-info-content-3">
                  <h3 className="h5 mb-3 text-white">گرافیک</h3>
                  <small className="d-block text-light">
                    طراحی گرافیکی برای بازاریابی
                  </small>
                </div>
              </figcaption>
            </figure>
            <figure
              className="col-sm-6 col-lg-4 portfolio-item branding graphic"
              data-src="src/img-min/portfolio/digital4.jpg"
              data-sub-html="Video"
            >
              <img
                className="portfolio-image-3"
                src="src/img-min/portfolio/digital4-small.jpg"
                alt="Image Description"
              />
              <figcaption className="portfolio-info-3">
                <div className="portfolio-info-content-3">
                  <h3 className="h5 mb-3 text-white">ویدئو</h3>
                  <small className="d-block text-light">
                    فروش ویدئویی و بازاریابی
                  </small>
                </div>
              </figcaption>
            </figure>
            <figure
              className="col-sm-6 col-lg-4 portfolio-item photovid"
              data-src="src/img-min/portfolio/digital5.jpg"
              data-sub-html="Photography"
            >
              <img
                className="portfolio-image-3"
                src="src/img-min/portfolio/digital5-small.jpg"
                alt="Image Description"
              />
              <figcaption className="portfolio-info-3">
                <div className="portfolio-info-content-3">
                  <h3 className="h5 mb-3 text-white">عکاسی</h3>
                  <small className="d-block text-light">
                    بهترین لحظه خود را ضبط کنید
                  </small>
                </div>
              </figcaption>
            </figure>
            <figure
              className="col-sm-6 col-lg-4 portfolio-item web"
              data-src="src/img-min/portfolio/digital6.jpg"
              data-sub-html="Apps Development"
            >
              <img
                className="portfolio-image-3"
                src="src/img-min/portfolio/digital6-small.jpg"
                alt="Image Description"
              />
              <figcaption className="portfolio-info-3">
                <div className="portfolio-info-content-3">
                  <h3 className="h5 mb-3 text-white">برنامه</h3>
                  <small className="d-block text-light">
                    توسعه برنامه ها و بازی ها
                  </small>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
