import React from "react";
import styles from "./Brands.module.css";

function Brands() {
  return (
    <>
      <div id="partner-brand" className="section bg-body py-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              {/* slider brand */}
              <div
                className="nav-dark-button"
                data-flickity='{ "cellAlign": "left","rightToLeft": true, "wrapAround": true, "adaptiveHeight": true, "pageDots": false, "imagesLoaded": true }'
              >
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-24 py-3 py-lg-1 px-4 px-lg-5 text-center">
                  <a href="#" target="_blank">
                    <img
                      className="brands-image img-fluid"
                      src="src/img/brand/img1.png"
                      alt="Image Description"
                    />
                  </a>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-24 py-3 py-lg-1 px-4 px-lg-5 text-center">
                  <a href="#" target="_blank">
                    <img
                      className="brands-image img-fluid"
                      src="src/img/brand/img2.png"
                      alt="Image Description"
                    />
                  </a>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-24 py-3 py-lg-1 px-4 px-lg-5 text-center">
                  <a href="#" target="_blank">
                    <img
                      className="brands-image img-fluid"
                      src="src/img/brand/img3.png"
                      alt="Image Description"
                    />
                  </a>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-24 py-3 py-lg-1 px-4 px-lg-5 text-center">
                  <a href="#" target="_blank">
                    <img
                      className="brands-image img-fluid"
                      src="src/img/brand/img4.png"
                      alt="Image Description"
                    />
                  </a>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-24 py-3 py-lg-1 px-4 px-lg-5 text-center">
                  <a href="#" target="_blank">
                    <img
                      className="brands-image img-fluid"
                      src="src/img/brand/img5.png"
                      alt="Image Description"
                    />
                  </a>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-24 py-3 py-lg-1 px-4 px-lg-5 text-center">
                  <a href="#" target="_blank">
                    <img
                      className="brands-image img-fluid"
                      src="src/img/brand/img6.png"
                      alt="Image Description"
                    />
                  </a>
                </div>
              </div>
              {/* end slider brand */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brands;
