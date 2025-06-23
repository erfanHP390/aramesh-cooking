"use client";
import React, { useEffect, useState } from "react";
import styles from "./CommentForm.module.css";
import Loading from "@/app/loading";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import { validateEmail } from "@/utils/auth";
import { useRouter } from "next/navigation";

function CommentForm({blogID}) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [isSaveValue, setIsSaveValue] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getUserInfoComment = JSON.parse(localStorage.getItem("user"));

      if (getUserInfoComment) {
        setName(getUserInfoComment.name);
        setEmail(getUserInfoComment.email);
      }
    }
  }, []);

  const sendComment = async () => {
    if (!name || !description || !email || !city) {
      setIsLoading(false);
      return swalAlert("لطفا تمامی موارد را پر کنید", "error", "فهمیدم");
    }

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setIsLoading(false);
      return swalAlert("لطفا یک ایمیل معتبر وارد نمایید", "error", "فهمیدم");
    }

    if (isSaveValue) {
      const userInfo = {
        name,
        email,
        city,
      };

      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(userInfo));
      }
    }

    const newComment = {
      name,
      description,
      email,
      city,
      blogID: blogID
    };

    const res = await fetch("/api/blogs/comments", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newComment),
    });

    if (res.status === 201) {
      setName("");
      setEmail("");
      setDescription("");
      setCity("");
      setIsLoading(false);
      toastSuccess(
        "نظر شما با موفقیت ثبت شد با تشکر از اینکه مار را در خدمات رسانی بهتر  با نظر پرمهرتان یاری می کنید😍",
        "top-center",
        5000,
        false,
        true,
        true,
        true,
        undefined,
        "colored"
      );
      router.refresh()
    } else if (res.status === 400) {
      setName("");
      setEmail("");
      setDescription("");
      setCity("");
      setIsLoading(false);
      toastError(
        "لطفا همه موارد * را پر نمایید . در صورت بروز مشکل به پشتیبانی پیام دهید",
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
      setEmail("");
      setDescription("");
      setCity("");
      setIsLoading(false);
      toastError(
        "لطفا یک ایمیل معتبر را وارد کنید",
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
      setEmail("");
      setDescription("");
      setCity("");
      setIsLoading(false);
      toastError(
        "خطا در سرور ، لطفا چند دقیقه بعد دوباره تلاش کنید",
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
    <div id="comment-form" className="mt-5">
      <h4 className={`${styles.commentFormHeader} h5`}>پاسخ دهید</h4>
      <p className={styles.commentFormNote}>آدرس ایمیل شما منتشر نمی شود</p>
      <div className={styles.commentForm}>
        <form className="needs-validation" action="#" noValidate="">
          <div className="mt-2" />
          <div className="mb-4">
            <textarea
              className={`${styles.formControl} form-control`}
              placeholder="دیدگاه"
              aria-label="درج نظر"
              rows={4}
              required=""
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <div className={styles.invalidFeedback}>
              لطفا نظر خود را وارد کنید
            </div>
          </div>
          <div className="mb-4">
            <input
              className={`${styles.formControl} form-control`}
              placeholder="نام"
              aria-label="name"
              type="text"
              required=""
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <div className={styles.invalidFeedback}>
              لطفا نام خود را وارد کنید
            </div>
          </div>
          <div className="mb-4">
            <input
              className={`${styles.formControl} form-control`}
              placeholder="ایمیل"
              aria-label="email"
              type="email"
              required=""
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div className={styles.invalidFeedback}>
              لطفا آدرس ایمیل خود را وارد کنید
            </div>
          </div>
          <div className="mb-4">
            <input
              className={`${styles.formControl} form-control`}
              placeholder="لطفا شهر خود را وارد نمایید"
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <div className="comment-form-cookies">
              <div className="form-check">
                <input
                  className="form-check-input"
                  id="comment-cookies"
                  name="comment-cookies"
                  type="checkbox"
                  value={isSaveValue}
                  onChange={(event) =>
                    setIsSaveValue((prevValue) => !prevValue)
                  }
                />
                <label
                  className={`${styles.formCheckLabel} form-check-label`}
                  htmlFor="comment-cookies"
                >
                  برای دفعه بعد که من نظر می دهم نام ، ایمیل و وب سایت من را
                  ذخیره کنید.
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                setIsLoading(true);
                sendComment();
              }}
              className={`${styles.submitButton} btn btn-primary`}
            >
              {isLoading ? <Loading /> : "ارسال دیدگاه"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommentForm;
