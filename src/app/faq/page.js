import React from "react";
import styles from "@/styles/faq.module.css";
import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";
import MainFaq from "@/components/templates/faq/MainFaq";

function page() {
  return (
    <>
      <Navbar />
      <MainFaq />
      <Footer />
    </>
  );
}

export default page;
