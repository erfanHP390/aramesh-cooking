import React from "react";
import styles from "./Latest.module.css";
import Card from "@/components/modules/card/Card";
import connectToDB from "@/configs/db";
import BlogModel from "@/models/Blog"

async function Latest() {
  connectToDB()
  const blogs = await BlogModel.find({}).sort({ _id: -1 }).lean()

  return (
    <section id="blog" className={`section pt-6 pt-md-7 pb-4 pb-md-5 bg-body ${styles.latestSection}`}>
      <div className="container">
        {/* section header */}
        <header className={`text-center mx-auto mb-5 mb-lg-6 ${styles.sectionHeader}`}>
          <h2 className={`h3 fw-bold ${styles.sectionTitle}`}>
            وبلاگ <span className="fw-light">ما</span>
          </h2>
          <hr className={`divider my-4 ${styles.dividerLine}`} />
        </header>
        {/* end section header */}
        
        {/* row */}
        <div className="row g-4">
          <Card blogs={JSON.parse(JSON.stringify(blogs))} />
        </div>
        {/* end row */}
      </div>
    </section>
  );
}

export default Latest;