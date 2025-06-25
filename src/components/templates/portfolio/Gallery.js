"use client"
import React, { useState } from "react";
import styles from "./Gallery.module.css";
import Product from "@/components/modules/portfolio/Product";

function Gallery({ products, categories }) { 
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState("68505c3d5891c2655475ae0a"); 

  const showCategories = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId === "68505c3d5891c2655475ae0a") { 
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category._id === categoryId
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div id="portfolio" className={`section py-6 ${styles.galleryWrapper}`}>
      <div className="container">
        <header className="text-center mx-auto mb-5">
          <h2 className="h3 fw-bold font-vazir-bold">
            نمونه کارهای <span className="fw-light font-vazir-regular">ما</span>
          </h2>
          <hr className="divider my-4 bg-warning border-warning" />
        </header>
        <div className="button-group filters-button-group portfolio-nav text-center mb-5">
          {categories.map((category) => (
            <button
              key={category._id}
              className={`button portfolio-nav-item text-body bg-transparent border-0 mx-3 font-vazir-bold ${styles.btn_category} ${
                activeCategory == category._id ? `${styles.active}` : ""
              }`}
              data-filter="*"
              onClick={() => showCategories(category._id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className={`grid portfolio ${styles.productsGrid}`}>
          {filteredProducts.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              img={product.img}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
