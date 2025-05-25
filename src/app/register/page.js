import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Register from "@/components/templates/register/Register";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <main id="content">
        <Breadcrumb title={"ثبت نام"} />
        <Register />
      </main>
      <Footer />
    </>
  );
}

export default page;
