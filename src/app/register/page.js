import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Register from "@/components/templates/register/Register";
import React from "react";

function page() {
  return (
    <>
      <main id="content">
        <Breadcrumb title={"ثبت نام"} />
        <Register />
      </main>
    </>
  );
}

export default page;
