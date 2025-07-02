"use client"
import React from "react";
import styles from "./Team.module.css";
import { teamMembers } from "@/utils/constants";
import Link from "next/link";

function Team() {
  return (
    <div id="team" className={`section pt-6 pt-md-7 pb-4 pb-md-5 ${styles.teamSection}`}>
      <div className="container">
        {/* section header */}
        <header className="text-center mx-auto mb-5">
          <h2 className={`h3 fw-bold ${styles.sectionTitle}`}>تیم آشپزی آرامش</h2>
          <hr className={`divider my-4 ${styles.divider}`} />
          <p className={`lead ${styles.sectionSubtitle}`}>
            با تیم حرفه‌ای ما آشنا شوید که با عشق و مهارت برای شما می‌پزند
          </p>
        </header>
        {/* end section header */}

        {/* row */}
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="col-8 col-sm-6 col-md-5 col-lg-3 px-lg-4">
              {/* team block */}
              <div
                className={`${styles.teamBlock} shadow-sm rounded-3 overflow-hidden mb-5`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={styles.teamThumb}>
                  <img
                    src={member.image}
                    className="img-fluid"
                    alt={`تصویر ${member.name}`}
                    loading="lazy"
                  />
                  <Link
                    href={member.href}
                    onClick={(e) => e.preventDefault()}
                    className={styles.viewProfile}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    aria-label={`مشاهده پروفایل ${member.name}`}
                    title={`مشاهده پروفایل ${member.name}`}
                  >
                    <svg
                      className="bi bi-eye"
                      width="1.2rem"
                      height="1.2rem"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 001.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0014.828 8a13.133 13.133 0 00-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 001.172 8z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
                <div className={styles.teamInfo}>
                  <div className={styles.teamInfoContent}>
                    <p className={`h5 mb-1 ${styles.memberName}`}>{member.name}</p>
                    <span className={styles.memberRole}>{member.role}</span>
                    <ul className={styles.specialtiesList}>
                      {member.specialties.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    {/* social icon */}
                    <div className={`${styles.teamInfoSocial} mb-2`}>
                      <a
                        className={styles.socialIcon}
                        href={"www.twitter.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} در توییتر`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1rem"
                          height="1rem"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                        >
                          <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                        </svg>
                      </a>
                      <a
                        className={styles.socialIcon}
                        href={"www.facebook.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} در فیسبوک`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1rem"
                          height="1rem"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                        >
                          <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                        </svg>
                      </a>
                      <a
                        className={styles.socialIcon}
                        href={"www.instagram.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} در اینستاگرام`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1rem"
                          height="1rem"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                        >
                          <path d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z" />
                          <path d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z" />
                          <path d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* end team block */}
            </div>
          ))}
        </div>
        {/* end row */}
      </div>
    </div>
  );
}

export default Team;
