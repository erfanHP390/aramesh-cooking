"use client";
import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function Navbar() {
  const scrollToSection = (sectionId, offset = 0) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <header>
        <nav
          className={`${styles.earthtone_primary_bg} main-nav navbar navbar-expand-lg hover-navbar fixed-top navbar-light-dark`}
        >
          <div className="container">
            <Link className="navbar-brand main-logo" href="/">
              <img
                className={`logo-dark ${styles.logo}`}
                src="/images/logonav.png"
                alt="LOGO"
                width={120}
                height={60}
              />
              <span
                className={`h2 ${styles.earthtone_light_text} fw-bold mt-2`}
              >
                آرامش
              </span>
            </Link>

            <button
              className={`navbar-toggler ${styles.earthtone_border_light}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo"
              aria-controls="navbarTogglerDemo"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className={`navbar-toggler-icon ${styles.earthtone_toggler_icon}`}
              />
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${styles.earthtone_light_text} ${styles.nav_link_home}`}
                    href="/"
                  >
                    خانه
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    id="navbarhome"
                    className={`nav-link dropdown-toggle ${styles.earthtone_light_text}`}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    سایر صفحات
                    <IoMdArrowDropdown className={styles.icon_down} />
                  </a>
                  <ul
                    className={`dropdown-menu dropdown-menu-lg-center ${styles.earthtone_dropdown}`}
                    aria-labelledby="navbarhome"
                  >
                    <li className="dropdown-submenu">
                      <a
                        id="sub2"
                        className={`dropdown-item dropdown-toggle ${styles.earthtone_accent}`}
                        href="#"
                      >
                        صفحات
                        <MdOutlineKeyboardArrowLeft />
                      </a>
                      <ul
                        className={`submenu dropdown-menu ${styles.earthtone_dropdown}`}
                        aria-labelledby="sub2"
                      >
                        <li className="dropdown-submenu">
                          <a
                            id="sub350"
                            className={`dropdown-item dropdown-toggle ${styles.earthtone_accent}`}
                            href="#"
                          >
                            موارد اصلی
                            <MdOutlineKeyboardArrowLeft />
                          </a>
                          <ul
                            className={`submenu dropdown-menu ${styles.earthtone_dropdown}`}
                            aria-labelledby="sub350"
                          >
                            <li>
                              <a
                                className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                                href="404.html"
                              >
                                خطا 404
                              </a>
                            </li>
                            <li>
                              <a
                                className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                                href="classic-page.html"
                              >
                                کلاسیک
                              </a>
                            </li>
                            <li>
                              <a
                                className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                                href="coming-soon.html"
                              >
                                به زودی
                              </a>
                            </li>
                            <li>
                              <a
                                className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                                href="faq.html"
                              >
                                پرسش و پاسخ
                              </a>
                            </li>
                            <li>
                              <a
                                className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                                href="terms.html"
                              >
                                قوانین استفاده
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href={"/about"}
                          >
                            درباره ما
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href={"/career"}
                          >
                            حرفه و اشتغال
                          </Link>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href="contact.html"
                          >
                            تماس با ما
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href="portfolio.html"
                          >
                            نمونه کار
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href="pricing.html"
                          >
                            تعرفه ها
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href="service.html"
                          >
                            خدمات
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <a
                        id="sub22"
                        className={`dropdown-item dropdown-toggle ${styles.earthtone_accent}`}
                        href="#"
                      >
                        وبلاگ
                        <MdOutlineKeyboardArrowLeft />
                      </a>
                      <ul
                        className={`submenu dropdown-menu ${styles.earthtone_dropdown}`}
                        aria-labelledby="sub22"
                      >
                        <li>
                          <a
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href="category.html"
                          >
                            صفحه وبلاگ
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href="search.html"
                          >
                            جستجو
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href="author.html"
                          >
                            صفحه نویسنده
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href="single.html"
                          >
                            مقاله
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href="classic-post.html"
                          >
                            مقاله کلاسیک
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <a
                        id="sub221"
                        className={`dropdown-item dropdown-toggle ${styles.earthtone_accent}`}
                        href="#"
                      >
                        کاربران
                        <MdOutlineKeyboardArrowLeft />
                      </a>
                      <ul
                        className={`submenu dropdown-menu ${styles.earthtone_dropdown}`}
                        aria-labelledby="sub221"
                      >
                        <li>
                          <a
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href="login.html"
                          >
                            ورود
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href="register.html"
                          >
                            ثبت نام
                          </a>
                        </li>
                        <li>
                          <a
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href="forgot.html"
                          >
                            بازیابی رمز
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${styles.earthtone_light_text} ${styles.nav_link_button}`}
                    onClick={() => scrollToSection("about", 80)}
                  >
                    درباره ما
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${styles.earthtone_light_text} ${styles.nav_link_button}`}
                    onClick={() => scrollToSection("services", 120)}
                  >
                    خدمات
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${styles.earthtone_light_text} ${styles.nav_link_button}`}
                    onClick={() => scrollToSection("statistic", 80)}
                  >
                    آمار
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${styles.earthtone_light_text} ${styles.nav_link_button}`}
                    onClick={() => scrollToSection("team", 80)}
                  >
                    تیم ما
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${styles.earthtone_light_text} ${styles.nav_link_button}`}
                    onClick={() => scrollToSection("latest", 80)}
                  >
                    وبلاگ
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${styles.earthtone_light_text} ${styles.nav_link_button}`}
                    onClick={() => scrollToSection("contact", 80)}
                  >
                    تماس با ما
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
