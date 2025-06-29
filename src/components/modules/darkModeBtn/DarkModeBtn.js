"use client";
import React, { useEffect, useState } from "react";
import styles from "./DarkModeBtn.module.css";
import { IoSunny, IoMoon } from "react-icons/io5";

function DarkModeBtn() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    if (isDark) {
      document.body.classList.add("dark-mode");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);
  };

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      title="حالت شب و روز"
      className={`${styles.DarkModeBtn} btn btn-circle btn-light btn-sm position-fixed start-1 bottom-1 z-index-10`}
      aria-label="Toggle theme"
    >
      {dark ? (
        // <svg
        //   xmlns="http://www.w3.org/2000/svg"
        //   width={16}
        //   height={16}
        //   fill="currentColor"
        //   className="bi bi-moon-stars-fill"
        //   viewBox="0 0 16 16"
        // >
        //   <path d="M6 .278a.77.77..." />
        // </svg>
        <IoSunny />
      ) : (
        // <svg
        //   xmlns="http://www.w3.org/2000/svg"
        //   width={16}
        //   height={16}
        //   fill="currentColor"
        //   className="bi bi-brightness-high-fill"
        //   viewBox="0 0 16 16"
        // >
        //   <path d="M12 8a4 4..." />
        // </svg>
        <IoMoon />
      )}
    </button>
  );
}

export default DarkModeBtn;
