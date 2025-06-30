"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toastError, toastSuccess } from "@/utils/alerts";

function ClientRefresher() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) return;

    const checkAndRefresh = async () => {
      setChecked(true);

      try {
        const res = await fetch("/api/auth/checkToken");
        const data = await res.json();

        if (data.message === "need_refresh") {
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
                "ایمیل / رمز عبور نامعتبر است",
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
                "ایمیل / رمز عبور اشتباه است",
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
                "خطا در سرور، لطفاً بعداً تلاش کنید",
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
        } else if (data.message === "unauthenticated") {
          toastError(
            "هویت شما شناسایی نشد، لطفاً وارد شوید",
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
      } catch (error) {
        console.error("خطا در بررسی توکن‌ها:", error);
      }
    };

    checkAndRefresh();
  }, [checked]);

  return null;
}

export default ClientRefresher;
