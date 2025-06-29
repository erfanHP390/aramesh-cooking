"use client";
import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { toastError, toastSuccess } from "@/utils/alerts";
import { useRouter } from "next/navigation";

function Navbar({ isCookies, user }) {
  const router = useRouter();

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

  useEffect(() => {
    const refreshUser = async () => {
      const res = await fetch("/api/auth/refresh", {
        method: "POST",
      });

      const userData = await res.json();

      if (res.status === 200 && userData?.user?.refreshToken) {
        const refreshT = userData.user.refreshToken;

        const signinUser = await fetch("/api/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userRefreshToken: refreshT }),
        });

        if (signinUser.status === 200) {
          toastSuccess(
            "خوش آمدید 😊",
            "top-center",
            5000,
            false,
            true,
            true,
            true,
            undefined,
            "colored"
          );
          router.refresh();
        } else if (signinUser.status === 419) {
          toastError(
            "ایمیل / رمز عبور نامعنبر است",
            "top-center",
            5000,
            false,
            true,
            true,
            true,
            undefined,
            "colored"
          );
        } else if (signinUser.status === 404) {
          toastError(
            "کاربر یافت نشد",
            "top-center",
            5000,
            false,
            true,
            true,
            true,
            undefined,
            "colored"
          );
        } else if (signinUser.status === 401) {
          toastError(
            "ایمیل/رمزعبور صحیح نیست",
            "top-center",
            5000,
            false,
            true,
            true,
            true,
            undefined,
            "colored"
          );
        } else if (signinUser.status === 500) {
          toastError(
            "خطا در سرور ، لطفا بعدا تلاش کنید",
            "top-center",
            5000,
            false,
            true,
            true,
            true,
            undefined,
            "colored"
          );
        }
      }
    };

    if (!isCookies) {
      refreshUser();
    }
  }, []);

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
                              <Link
                                className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                                href={"/comingSoon"}
                              >
                                به زودی
                              </Link>
                            </li>
                            <li>
                              <Link
                                className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                                href={"/faq"}
                              >
                                پرسش و پاسخ
                              </Link>
                            </li>
                            <li>
                              <Link
                                className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                                href={"/rules"}
                              >
                                قوانین استفاده
                              </Link>
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
                          <Link
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href={"/contact"}
                          >
                            تماس با ما
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href={"/portfolio"}
                          >
                            نمونه کار
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href={"/pricing"}
                          >
                            تعرفه ها
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href={"/services"}
                          >
                            خدمات
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <a
                        id="sub22"
                        className={`dropdown-item dropdown-toggle ${styles.earthtone_accent}`}
                        href={"#"}
                      >
                        وبلاگ
                        <MdOutlineKeyboardArrowLeft />
                      </a>
                      <ul
                        className={`submenu dropdown-menu ${styles.earthtone_dropdown}`}
                        aria-labelledby="sub22"
                      >
                        <li>
                          <Link
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href={"/blogs"}
                          >
                            صفحه وبلاگ
                          </Link>
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
                          <Link
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href={"/blogs/68565c571794979b13c4a37b"}
                          >
                            مقاله
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <a
                        id="sub221"
                        className={`dropdown-item dropdown-toggle ${styles.earthtone_accent}`}
                        href="#"
                      >
                        {user ? "کاربر" : "کاربران"}
                        <MdOutlineKeyboardArrowLeft />
                      </a>
                      <ul
                        className={`submenu dropdown-menu ${styles.earthtone_dropdown}`}
                        aria-labelledby="sub221"
                      >
                        <li>
                          <Link
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href={user ? "#" : "/login"}
                          >
                            {user ? <>{`نام: ${user.name}`}</> : "ورود"}
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href={user ? "#" : "/register"}
                          >
                            {user ? <>{`ایمیل: ${user.email}`}</> : "ثبت نام"}
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`dropdown-item ${styles.earthtone_dropdown_item}`}
                            href={user ? "#" : "/forgotPassword"}
                          >
                            {user ? (
                              <>{`کداشتراک: ${user.subscription}`}</>
                            ) : (
                              "بازیابی رمزعبور"
                            )}{" "}
                          </Link>
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
