import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import AllBlog from "@/components/templates/blogs/allblog/AllBlog";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <Breadcrumb title={"جستجو بین مقالات"} />
      <main id="content">

      </main>
      <Footer />
    </>
  );
}

export default page;
