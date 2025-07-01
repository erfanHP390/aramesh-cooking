"use client";
import React, { Children } from "react";
import styles from "./Breadcrumb.module.css";
import Link from "next/link";
import { GiMeal } from "react-icons/gi";

function Breadcrumb({title , titr , children}) {
  return (
    <>
      <div id="hero" className={`section py-5 jarallax ${styles.breadcrumbContainer}`}>
        <div className={`overlay ${styles.breadcrumbOverlay}`} />
        
        {/* Food icons animation */}
        <div className={`particle ${styles.breadcrumbParticleContainer}`}>
          <div className={`particle-move-up d-none d-lg-block particle-move-up-1 ${styles.breadcrumbParticle} ${styles.breadcrumbParticle1}`}>
            <GiMeal className={`${styles.breadcrumb_icon}  rotate-315`} />
          </div>
          <div className={`particle-move-up particle-move-up-2 ${styles.breadcrumbParticle} ${styles.breadcrumbParticle2}`}>
            <GiMeal className={`${styles.breadcrumb_icon}  rotate-315`} />
          </div>
          <div className={`particle-move-up d-none d-sm-block particle-move-up-3 ${styles.breadcrumbParticle} ${styles.breadcrumbParticle3}`}>
            <GiMeal className={`${styles.breadcrumb_icon}  rotate-315`} />
          </div>
          <div className={`particle-move-up d-none d-xl-block particle-move-up-4 ${styles.breadcrumbParticle} ${styles.breadcrumbParticle4}`}>
            <GiMeal className={`${styles.breadcrumb_icon}  rotate-315`} />
          </div>
          <div className={`particle-move-up d-none d-sm-block particle-move-up-5 ${styles.breadcrumbParticle} ${styles.breadcrumbParticle5}`}>
            <GiMeal className={`${styles.breadcrumb_icon}  rotate-315`} />
          </div>
          <div className={`particle-move-up border-success particle-move-up-6 ${styles.breadcrumbParticle} ${styles.breadcrumbParticle6}`}>
            <GiMeal className={`${styles.breadcrumb_icon}  rotate-315`} />
          </div>
          <div className={`particle-move-up particle-move-up-7 ${styles.breadcrumbParticle} ${styles.breadcrumbParticle7}`}>
            <GiMeal className={`${styles.breadcrumb_icon}  rotate-315`} />
          </div>
          <div className={`particle-move-up particle-move-up-8 ${styles.breadcrumbParticle} ${styles.breadcrumbParticle8}`}>
            <GiMeal className={`${styles.breadcrumb_icon}  rotate-315`} />
          </div>
          <div className={`particle-move-up particle-move-up-9 ${styles.breadcrumbParticle} ${styles.breadcrumbParticle9}`}>
            <GiMeal className={`${styles.breadcrumb_icon}  rotate-315`} />
          </div>
        </div>
        
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {/* Content */}
            <div className="col-lg-7">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dark justify-content-center bg-transparent small mb-0">
                  <li className="breadcrumb-item">
                    <Link href={"/"} className={styles.breadcrumbLink}>خانه</Link>
                  </li>
                  <li
                    className={`breadcrumb-item active d-none d-md-block ${styles.breadcrumbActiveItem}`}
                    aria-current="page"
                  >
                    {titr ? titr : title}
                  </li>
                </ol>
              </nav>
              <div className="mt-0 pt-4 text-center">
                <h1 className={`text-white text-shadow ${styles.breadcrumbText}`}>{title}</h1>
                <hr className={`divider mt-4 mx-auto ${styles.breadcrumbDivider}`} />
              </div>
              {children}
            </div>
            {/* End content */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;