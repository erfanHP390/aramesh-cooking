import React from "react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <>
      {/* sidebar */}
      <div className="col-lg-4 ps-lg-5">
        <aside className="widget-area sticky mt-5 mt-lg-0">
          {/* widget */}
          <aside id="archives" className="widget mb-4">
            <div className="widget-title">
              <h4 className="h5">
                <span>آرشیو محتوا</span>
              </h4>
            </div>
            <div className="side-links">
              <a
                className="py-2 d-flex justify-content-between align-items-center"
                href="category.html"
              >
                فروردین 1403
                <span className="badge bg-light-dark text-primary rounded-3">
                  10
                </span>
              </a>
              <a
                className="py-2 d-flex justify-content-between align-items-center"
                href="category.html"
              >
                اردیبهشت 1403
                <span className="badge bg-light-dark text-primary rounded-3">
                  14
                </span>
              </a>
              <a
                className="py-2 d-flex justify-content-between align-items-center"
                href="category.html"
              >
                خرداد 1403
                <span className="badge bg-light-dark text-primary rounded-3">
                  12
                </span>
              </a>
              <a
                className="py-2 d-flex justify-content-between align-items-center"
                href="category.html"
              >
                تیر 1403
                <span className="badge bg-light-dark text-primary rounded-3">
                  11
                </span>
              </a>
              <a
                className="py-2 d-flex justify-content-between align-items-center"
                href="category.html"
              >
                مرداد 1403
                <span className="badge bg-light-dark text-primary rounded-3">
                  16
                </span>
              </a>
            </div>
          </aside>
          {/* end widget */}
          {/* widget */}
          <aside id="categories" className="widget mb-4">
            <div className="widget-title">
              <h4 className="h5">
                <span>دسته بندی ها</span>
              </h4>
            </div>
            <div className="side-links">
              <a
                className="py-2 d-flex justify-content-between align-items-center"
                href="category.html"
              >
                وبلاگ
                <span className="badge bg-light-dark text-primary rounded-3">
                  16
                </span>
              </a>
              <a
                className="py-2 d-flex justify-content-between align-items-center"
                href="category.html"
              >
                خبر
                <span className="badge bg-light-dark text-primary rounded-3">
                  23
                </span>
              </a>
              <a
                className="py-2 d-flex justify-content-between align-items-center"
                href="category.html"
              >
                بروزرسانی ها
                <span className="badge bg-light-dark text-primary rounded-3">
                  15
                </span>
              </a>
              <a
                className="py-2 d-flex justify-content-between align-items-center"
                href="category.html"
              >
                مشکل
                <span className="badge bg-light-dark text-primary rounded-3">
                  3
                </span>
              </a>
            </div>
          </aside>
          {/* end widget */}
          {/* widget */}
          <aside id="meta" className="widget mb-4">
            <div className="widget-title">
              <h4 className="h5">
                <span>سایر</span>
              </h4>
            </div>
            <div className="side-links">
              <a
                className="py-2 d-flex justify-content-between align-items-center"
                href="login.html"
              >
                صفحه ورود
              </a>
              <a
                className="py-2 d-flex justify-content-between align-items-center"
                href="category.html"
              >
                دسته بندی ها
              </a>
              <a
                className="py-2 d-flex justify-content-between align-items-center"
                href="category.html"
              >
                نظرات
              </a>
            </div>
          </aside>
          {/* end widget */}
        </aside>
      </div>
      {/* end sidebar */}
    </>
  );
}

export default Sidebar;
