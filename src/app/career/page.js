import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Overview from "@/components/templates/career/overview/Overview";
import Position from "@/components/templates/career/position/Position";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <main id="content">
        <Breadcrumb />
        <Overview />
        <Position />
      </main>
      <Footer />
    </>
  );
}

export default page;
