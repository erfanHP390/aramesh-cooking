import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Gallery from "@/components/templates/portfolio/Gallery";
import React from "react";
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import CategoryModel from "@/models/Category";

async function page() {
  connectToDB();
  const products = await ProductModel.find({}).populate("category").lean()
  const categories = await CategoryModel.find({}).lean()

  return (
    <>
      <main id="content" className="flex-grow-1">
        <Breadcrumb title={"نمونه ها"} />
        <Gallery products={JSON.parse(JSON.stringify(products))} categories={JSON.parse(JSON.stringify(categories))} />
      </main>
    </>
  );
}

export default page;
