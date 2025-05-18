import React from "react";
import styles from "./Position.module.css";

function Position() {
  return (
    <>
      <div id="open-position" className="section py-6 py-md-7 bg-light-dark">
        <div className="container">
          {/* section header */}
          <header className="text-center mx-auto mb-5">
            <h2 className="h3 fw-bold"> حرفه های مورد نیاز ما</h2>
            <hr className="divider my-4 mx-auto bg-warning border-warning" />
          </header>
          {/* end section header */}
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="head-schedule bg-primary shadow-md text-light">
                <div className="row g-0 align-items-center text-center text-md-start p-4 border-bottom">
                  <div className="col-xl-8 col-md-6">
                    <p className="mb-0 text-light">حرفه</p>
                  </div>
                  <div className="col-md py-2 py-md-0">
                    <span>تیم</span>
                  </div>
                  <div className="col-md">
                    <span>محل</span>
                  </div>
                </div>
              </div>
              <div className="schedule bg-body shadow-md mb-5">
                <div className="row g-0 align-items-center text-center text-md-start p-4 border-bottom">
                  <div className="col-xl-8 col-md-6">
                    <h5 className="mb-0">مهندسی کارکنان</h5>
                  </div>
                  <div className="col-md py-2 py-md-0">
                    <span>مهندسی</span>
                  </div>
                  <div className="col-md">
                    <span>ایران , تهران</span>
                  </div>
                </div>
                <div className="row g-0 align-items-center text-center text-md-start p-4 border-bottom">
                  <div className="col-xl-8 col-md-6">
                    <h5 className="mb-0">
                      مدیر مالیات غیرمستقیم ، مالیات بر ارزش افزوده
                    </h5>
                  </div>
                  <div className="col-md py-2 py-md-0">
                    <span>دارایی</span>
                  </div>
                  <div className="col-md">
                    <span>ایران , تهران</span>
                  </div>
                </div>
                <div className="row g-0 align-items-center text-center text-md-start p-4 border-bottom">
                  <div className="col-xl-8 col-md-6">
                    <h5 className="mb-0">مأمور انطباق ارشد</h5>
                  </div>
                  <div className="col-md py-2 py-md-0">
                    <span>حقوقی</span>
                  </div>
                  <div className="col-md">
                    <span>ایران , تهران</span>
                  </div>
                </div>
                <div className="row g-0 align-items-center text-center text-md-start p-4 border-bottom">
                  <div className="col-xl-8 col-md-6">
                    <h5 className="mb-0">مشاور عمومی همکار ، دادخواست</h5>
                  </div>
                  <div className="col-md py-2 py-md-0">
                    <span>حقوقی</span>
                  </div>
                  <div className="col-md">
                    <span>ایران , تهران</span>
                  </div>
                </div>
                <div className="row g-0 align-items-center text-center text-md-start p-4 border-bottom">
                  <div className="col-xl-8 col-md-6">
                    <h5 className="mb-0">طراح UI/UX</h5>
                  </div>
                  <div className="col-md py-2 py-md-0">
                    <span>طراحی</span>
                  </div>
                  <div className="col-md">
                    <span>ایران , تهران</span>
                  </div>
                </div>
              </div>
              <div className="text-center text-muted">
                <p className="mb-0">
                  علاقه مند به پیوستن هستید؟{" "}
                  <a href="contact.html">با ما در ارتباط باشید</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Position;
