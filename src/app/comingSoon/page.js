import React from "react";
import styles from "@/styles/comingSoon.module.css";
import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";
import Soon from "@/components/templates/comingSoon/Soon";

function page() {
  return (
    <>
      <Navbar />
      <Soon />
      <Footer />
    </>
  );
}

export default page;
