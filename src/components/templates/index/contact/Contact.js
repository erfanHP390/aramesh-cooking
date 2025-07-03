"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css";
import Loading from "@/app/loading";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import { validateEmail, validatePhone } from "@/utils/auth";

function Contact({ departments }) {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [department, setDepartment] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [newSendMessage, setNewSendMessage] = useState("");

  const sendMessage = async () => {
    if (!name || !info || !department || !content || department === -1) {
      setIsLoading(false);
      return swalAlert(
        "لطفا اطلاعات را بطور کامل ارسال کنید",
        "error",
        "فهمیدم"
      );
    }

    const isValidEmail = validateEmail(info);
    const isValidPhone = validatePhone(info);
    if (isValidEmail) {
      const newMessage = {
        name,
        email: info,
        department,
        content,
      };
      setNewSendMessage(newMessage);
    } else if (isValidPhone) {
      const newMessage = {
        name,
        phone: info,
        department,
        content,
      };
      setNewSendMessage(newMessage);
    } else {
      setIsLoading(false);
      return swalAlert(
        "لطفا ایمیل/شماره تلفن  معتبر را وارد نمایید",
        "error",
        "فهمیدم"
      );
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSendMessage),
    });

    if (res.status === 201) {
      setName("");
      setInfo("");
      setDepartment(-1);
      setContent("");
      setIsLoading(false);
      toastSuccess(
        "پیام شما با موفقیت ثبت شد. پاسخ را بزودی دریافت خواهید کرد",
        "bottom-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
    } else if (res.status === 400) {
      setName("");
      setInfo("");
      setDepartment(-1);
      setContent("");
      setIsLoading(false);
      toastError(
        "لطفا اطلاعات را بطور کامل وارد نمایید",
        "top-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
    } else if (res.status === 422) {
      setName("");
      setInfo("");
      setDepartment(-1);
      setContent("");
      setIsLoading(false);
      toastError(
        "لطفا ایمیل/شماره تلفن معتبر وارد نمایید",
        "top-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
    } else if (res.status === 500) {
      setName("");
      setInfo("");
      setDepartment(-1);
      setContent("");
      setIsLoading(false);
      toastError(
        "خطا در سرور لطفا پس از چند دقیقه دوباره تلاش نمایید",
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
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div id="contact" className={`section py-6 ${styles.contactSection}`}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div
                    className={`${styles.contactBox} shadow-sm rounded-3 w-100 p-5`}
                    data-aos="fade-up"
                  >
                    <div className="text-center mb-5">
                      <h2 className={`h3 fw-bold ${styles.contactTitle}`}>
                        ارتباط با گروه آشپزی آرامش
                      </h2>
                      <hr className={`divider my-4 ${styles.divider}`} />
                      <p className={`lead ${styles.contactSubtitle}`}>
                        برای سفارش غذا، شرکت در دوره‌های آموزشی یا هرگونه سوال
                        با ما در تماس باشید
                      </p>
                    </div>

                    <form action="#" className="contact-form">
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label
                            className={`form-label ${styles.formLabel}`}
                            htmlFor="name"
                          >
                            نام کامل
                          </label>
                          <input
                            type="text"
                            name="name"
                            className={`form-control ${styles.formInput}`}
                            id="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="نام و نام خانوادگی"
                          />
                        </div>
                        <div className="col-md-6 mb-4">
                          <label
                            className={`form-label ${styles.formLabel}`}
                            htmlFor="email"
                          >
                            ایمیل یا شماره تماس
                          </label>
                          <input
                            type="text"
                            className={`form-control ${styles.formInput}`}
                            name="email"
                            id="email"
                            value={info}
                            onChange={(event) => setInfo(event.target.value)}
                            placeholder="example@example.com یا 0912XXX"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label
                          className={`form-label ${styles.formLabel}`}
                          htmlFor="subject"
                        >
                          موضوع پیام
                        </label>
                        <select
                          className={`form-select ${styles.formInput}`}
                          name="subject"
                          id="subject"
                          onChange={(event) =>
                            setDepartment(event.target.value)
                          }
                        >
                          {" "}
                          <option className={styles.option_chosen} value={-1}>
                            انتخاب کنید
                          </option>
                          {departments.map((item) => (
                            <option
                              className={styles.option_chosen}
                              key={item._id}
                              value={item._id}
                            >
                              {item.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-4">
                        <label
                          className={`form-label ${styles.formLabel}`}
                          htmlFor="messages"
                        >
                          متن پیام
                        </label>
                        <textarea
                          className={`form-control ${styles.formInput}`}
                          name="message"
                          rows={8}
                          id="messages"
                          value={content}
                          onChange={(event) => setContent(event.target.value)}
                          placeholder="پیام خود را با جزئیات بنویسید..."
                        />
                      </div>
                      <div className="text-center mb-4">
                        <button
                          className={`btn ${styles.submitBtn}  ${styles.btn_services}`}
                          type="submit"
                          onClick={(event) => {
                            event.preventDefault();
                            setIsLoading(true);
                            sendMessage();
                          }}
                        >
                          ارسال پیام
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem"
                            height="1.5rem"
                            fill="currentColor"
                            className="me-2 rtl-270"
                            viewBox="0 0 512 512"
                          >
                            <path
                              d="M53.12,199.94l400-151.39a8,8,0,0,1,10.33,10.33l-151.39,400a8,8,0,0,1-15-.34L229.66,292.45a16,16,0,0,0-10.11-10.11L53.46,215A8,8,0,0,1,53.12,199.94Z"
                              style={{
                                fill: "none",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 32,
                              }}
                            />
                            <line
                              x1={460}
                              y1={52}
                              x2={227}
                              y2={285}
                              style={{
                                fill: "none",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 32,
                              }}
                            />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Contact;
