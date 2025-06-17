import React from "react";
import styles from "./Product.module.css";

function Product({ name, description, img, category }) {
  return (
    <div className={styles.productContainer}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.productImage}
          src={img}
          alt={name}
          loading="lazy"
        />
        <div className={styles.productInfo}>
          <h3 className={`${styles.productTitle} font-vazir-bold`}>{name}</h3>
          <p className={`${styles.productDescription} font-vazir-regular`}>{description}</p>
          {category && (
            <span className={`${styles.productCategory} font-vazir-fd-bold`}>
              {category.name}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;