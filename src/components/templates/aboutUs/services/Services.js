import React from 'react'
import styles from "./Services.module.css"

function Services() {
  return (
    <>
      <div id="services" className="section pt-6 pt-md-7 pb-4 pb-md-5 bg-light-dark">
  <div className="container">
    {/* section header */}
    <header className="text-center mx-auto mb-5">
      <h2 className="h3 fw-bold">
        {" "}
        خدمات <span className="fw-light">ما</span>
      </h2>
      <hr className="divider my-4 mx-auto bg-warning border-warning" />
    </header>
    {/* end section header */}
    <div className="row">
      <div className="col-md-6">
        <div
          className="bg-body mb-5 rounded-3 overflow-hidden shadow-sm"
          data-aos="fade-up"
        >
          <div className="row g-0">
            {/* img block */}
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={{
                backgroundImage: 'url("src/img-min/section/company1.jpg")'
              }}
            />
            {/* content block */}
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <div className="p-4">
                <h3 className="h4 mb-3">خدمت شماره یک</h3>
                <p className="lead mb-5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div
          className="bg-body mb-5 rounded-3 overflow-hidden shadow-sm"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="row g-0">
            {/* img block */}
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={{
                backgroundImage: 'url("src/img-min/section/company2.jpg")'
              }}
            />
            {/* content block */}
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <div className="p-4">
                <h3 className="h4 mb-3">محصولات و خدمات شرکت</h3>
                <p className="lead mb-5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Services
