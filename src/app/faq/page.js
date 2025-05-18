import React from "react";
import styles from "@/styles/faq.module.css";
import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";

function page() {
  return (
    <>
    <Navbar />
        {/* =========={ MAIN }==========  */}
        <main id="content">
          {/* =========={ HERO }==========  */}
          <div id="hero" className="section py-5 jarallax">
            {/* background parallax */}
            <img
              className="jarallax-img"
              src="src/img-min/bg/bg-planet.jpg"
              alt="title"
            />
            {/* background overlay */}
            <div className="overlay bg-primary opacity-90 z-index-n1" />
            {/* rocket moving up animation */}
            <div className="particle">
              <div className="particle-move-up d-none d-lg-block particle-move-up-1 text-light z-index-n1 opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-315"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 32,
                    }}
                  />
                  <path
                    className="text-warning"
                    fill="currentColor"
                    d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 32,
                    }}
                  />
                </svg>
              </div>
              <div className="particle-move-up particle-move-up-2 text-light z-index-n1 opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-315"
                  width="1rem"
                  height="1rem"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 32,
                    }}
                  />
                  <path
                    className="text-warning"
                    fill="currentColor"
                    d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 32,
                    }}
                  />
                </svg>
              </div>
              <div className="particle-move-up d-none d-sm-block particle-move-up-3 text-light z-index-n1 opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-315"
                  width="1.2rem"
                  height="1.2rem"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 32,
                    }}
                  />
                  <path
                    className="text-warning"
                    fill="currentColor"
                    d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 32,
                    }}
                  />
                </svg>
              </div>
              <div className="particle-move-up d-none d-xl-block particle-move-up-4 text-light z-index-n1 opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-315"
                  width="1rem"
                  height="1rem"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 32,
                    }}
                  />
                  <path
                    className="text-warning"
                    fill="currentColor"
                    d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 32,
                    }}
                  />
                </svg>
              </div>
              <div className="particle-move-up d-none d-sm-block particle-move-up-5 text-light z-index-n1 opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-315"
                  width="1.2rem"
                  height="1.2rem"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 32,
                    }}
                  />
                  <path
                    className="text-warning"
                    fill="currentColor"
                    d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 32,
                    }}
                  />
                </svg>
              </div>
              <div className="particle-move-up border-success text-light particle-move-up-6 z-index-n1 opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-315"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 32,
                    }}
                  />
                  <path
                    className="text-warning"
                    fill="currentColor"
                    d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 32,
                    }}
                  />
                </svg>
              </div>
              <div className="particle-move-up particle-move-up-7 z-index-n1 text-light opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-315"
                  width="1.2rem"
                  height="1.2rem"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 32,
                    }}
                  />
                  <path
                    className="text-warning"
                    fill="currentColor"
                    d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 32,
                    }}
                  />
                </svg>
              </div>
              <div className="particle-move-up particle-move-up-8 z-index-n1 text-light opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-315"
                  width="1.2rem"
                  height="1.2rem"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 32,
                    }}
                  />
                  <path
                    className="text-warning"
                    fill="currentColor"
                    d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 32,
                    }}
                  />
                </svg>
              </div>
              <div className="particle-move-up particle-move-up-9 z-index-n1 text-light opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-315"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 32,
                    }}
                  />
                  <path
                    className="text-warning"
                    fill="currentColor"
                    d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 32,
                    }}
                  />
                </svg>
              </div>
            </div>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                {/* content */}
                <div className="col-lg-6">
                  <div className="mt-0 py-4 text-center">
                    <h1 className="h2 text-white text-shadow">
                      چگونه می توانیم کمک کنیم?
                    </h1>
                    <hr className="divider my-4 mx-auto bg-warning border-warning" />
                    {/* search form */}
                    <div className="input-group input-group-newsletter mb-3">
                      <input
                        type="text"
                        className="form-control"
                        dir="rtl"
                        placeholder="سوال خود را جستجو کنید..."
                        aria-label="Type your questions"
                      />
                      <button className="btn btn-warning" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-search"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-light mb-0">
                      آنچه را که به دنبال آن هستید پیدا کنید.
                    </p>
                  </div>
                </div>
                {/* end content */}
              </div>
            </div>
          </div>
          {/* End hero */}
          {/* =========={ FAQ }==========  */}
          <div id="faq" className="section py-6 bg-body">
            <div className="container">
              {/* Questions Header */}
              <header className="text-center mx-auto mb-5">
                <h2 className="h3 fw-bold">سوالات متداول</h2>
                <hr className="divider my-4 bg-warning border-warning" />
              </header>
              <div className="row justify-content-center">
                <div className="accordion-list col-10 col-md-8">
                  <div id="Accordione" className="accordion mb-5">
                    {/* faq list */}
                    <div
                      className="card mb-3 border-0 collapse-shadow"
                      data-aos="fade-up"
                    >
                      <div
                        className="card-header bg-light-dark py-2 mb-0"
                        id="HeadingOnee"
                      >
                        <div className="d-grid mb-0">
                          <button
                            className="btn btn-link btn-block btn-accordion text-dark-light fw-medium d-flex px-0 justify-content-between"
                            data-bs-toggle="collapse"
                            data-bs-target="#CollapseOnee"
                            aria-expanded="true"
                            aria-controls="CollapseOnee"
                          >
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ؟
                            <span className="collapse-arrow-end">
                              <svg
                                className="bi bi-chevron-down"
                                width="1rem"
                                height="1rem"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                      <div
                        id="CollapseOnee"
                        className="collapse show"
                        aria-labelledby="HeadingOnee"
                        data-bs-parent="#Accordione"
                      >
                        <div className="card-body">
                          <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                            است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                            متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* faq list */}
                    <div
                      className="card mb-3 border-0 collapse-shadow"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div
                        className="card-header bg-light-dark py-2 mb-0"
                        id="HeadingTwoe"
                      >
                        <div className="d-grid mb-0">
                          <button
                            className="btn btn-link btn-block btn-accordion text-dark-light fw-medium d-flex px-0 justify-content-between collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#CollapseTwoe"
                            aria-expanded="false"
                            aria-controls="CollapseTwoe"
                          >
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ؟
                            <span className="collapse-arrow-end">
                              <svg
                                className="bi bi-chevron-down"
                                width="1rem"
                                height="1rem"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                      <div
                        id="CollapseTwoe"
                        className="collapse"
                        aria-labelledby="HeadingTwoe"
                        data-bs-parent="#Accordione"
                      >
                        <div className="card-body">
                          <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                            است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                            متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* faq list */}
                    <div
                      className="card mb-3 border-0 collapse-shadow"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <div
                        className="card-header bg-light-dark py-2 mb-0"
                        id="HeadingThreee"
                      >
                        <div className="d-grid mb-0">
                          <button
                            className="btn btn-link btn-block btn-accordion text-dark-light fw-medium d-flex px-0 justify-content-between collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#CollapseThreee"
                            aria-expanded="false"
                            aria-controls="CollapseThreee"
                          >
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ؟
                            <span className="collapse-arrow-end">
                              <svg
                                className="bi bi-chevron-down"
                                width="1rem"
                                height="1rem"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                      <div
                        id="CollapseThreee"
                        className="collapse"
                        aria-labelledby="HeadingThreee"
                        data-bs-parent="#Accordione"
                      >
                        <div className="card-body">
                          <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                            است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                            متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* faq list */}
                    <div
                      className="card mb-3 border-0 collapse-shadow"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <div
                        className="card-header bg-light-dark py-2 mb-0"
                        id="HeadingFoure"
                      >
                        <div className="d-grid mb-0">
                          <button
                            className="btn btn-link btn-block btn-accordion text-dark-light fw-medium d-flex px-0 justify-content-between collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#CollapseFoure"
                            aria-expanded="false"
                            aria-controls="CollapseFoure"
                          >
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ؟
                            <span className="collapse-arrow-end">
                              <svg
                                className="bi bi-chevron-down"
                                width="1rem"
                                height="1rem"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                      <div
                        id="CollapseFoure"
                        className="collapse"
                        aria-labelledby="HeadingFoure"
                        data-bs-parent="#Accordione"
                      >
                        <div className="card-body">
                          <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                            است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                            متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-center text-muted"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <p className="mb-0">
                      سوال دیگری دارید؟{" "}
                      <a href="contact.html">با ما در ارتباط باشید</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End FAQ */}
        </main>
        {/* end main */}
        <Footer />
      </>
  );
}

export default page;
