"use client";
import React, { useEffect, useState } from "react";
import styles from "./CommentForm.module.css";
import Loading from "@/app/loading";
import { swalAlert, toastError, toastSuccess } from "@/utils/alerts";
import { validateEmail } from "@/utils/auth";
import { useRouter } from "next/navigation";

function CommentForm({ blogID, replyingTo, commentName }) {
  const router = useRouter();
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
        setCity(getUserInfoComment.city);
      }
    }

    if (replyingTo) {
      setDescription(`در پاسخ به کامنت ${commentName}:`);
    }
  }, [replyingTo, commentName]);

  const sendComment = async () => {
    if (!name || !description || !email || !city) {
      setIsLoading(false);
      return swalAlert("لطفا تمامی موارد را پر کنید", "error", "فهمیدم");
    }

    if (!validateEmail(email)) {
      setIsLoading(false);
      return swalAlert("لطفا یک ایمیل معتبر وارد نمایید", "error", "فهمیدم");
    }

    if (isSaveValue) {
      const userInfo = { name, email, city };
      localStorage.setItem("user", JSON.stringify(userInfo));
    }

    const newComment = { name, description, email, city, blogID };

    const res = await fetch("/api/blogs/comments", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newComment),
    });

    handleResponse(
      res,
      "نظر شما با موفقیت ثبت شد با تشکر از اینکه ما را در خدمات‌رسانی بهتر با نظر پرمهرتان یاری می‌کنید 😍"
    );
  };

  const sendAnswer = async () => {
    if (!name || !description || !email || !city) {
      setIsLoading(false);
      return swalAlert("لطفا تمامی موارد را پر کنید", "error", "فهمیدم");
    }

    if (!validateEmail(email)) {
      setIsLoading(false);
      return swalAlert("لطفا یک ایمیل معتبر وارد نمایید", "error", "فهمیدم");
    }

    if (isSaveValue) {
      const userInfo = { name, email, city };
      localStorage.setItem("user", JSON.stringify(userInfo));
    }

    const newAnswer = { name, description, email, city, commentID: replyingTo };

    const res = await fetch("/api/blogs/comments/answer", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newAnswer),
    });

    handleResponse(
      res,
      "پاسخ شما برای کامنت مورد نظر ثبت شد، در صورت تایید نمایش داده خواهد شد"
    );
  };

  const handleResponse = async (res, successMessage) => {
    setIsLoading(false);
    setName("");
    setEmail("");
    setDescription("");
    setCity("");

    if (res.status === 201) {
      toastSuccess(
        successMessage,
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
    } else if (res.status === 400) {
      toastError(
        "لطفا همه موارد * را پر نمایید. در صورت بروز مشکل به پشتیبانی پیام دهید",
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
    } else {
      toastError(
        "خطا در سرور، لطفا چند دقیقه بعد دوباره تلاش کنید",
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
      <p className={styles.commentFormNote}>آدرس ایمیل شما منتشر نمی‌شود.</p>
      <div className={styles.commentForm}>
        <form className="needs-validation" action="#" noValidate>
          <div className="mb-4">
            <textarea
              className={`${styles.formControl} form-control`}
              placeholder="دیدگاه"
              aria-label="درج نظر"
              rows={4}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className={styles.invalidFeedback}>
              لطفا ایمیل خود را وارد کنید
            </div>
          </div>

          <div className="mb-4">
            <input
              className={`${styles.formControl} form-control`}
              placeholder="شهر"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <div className="form-check">
              <input
                className="form-check-input"
                id="comment-cookies"
                name="comment-cookies"
                type="checkbox"
                checked={isSaveValue}
                onChange={() => setIsSaveValue((prev) => !prev)}
              />
              <label
                className={`${styles.formCheckLabel} form-check-label`}
                htmlFor="comment-cookies"
              >
                برای دفعات بعد نام، ایمیل و شهر مرا ذخیره کن
              </label>
            </div>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setIsLoading(true);
                replyingTo ? sendAnswer() : sendComment();
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
