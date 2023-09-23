import React from "react";
import style from "./product.module.css";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "../../constants";
import styles from './product.module.css';

const MORE_PRODUCTS_INTERVAL = 5;

const ProductsContainer = () => {
  return (
    <div className={style.productsContainer}>
      {PRODUCTS.map((product) => {
        return (
          <ProductCard
            key={product.title}
            title={product.title}
            body={product.body}
            rate={product.rate}
          />
        );
      })}
      <div className={styles.more}>+{MORE_PRODUCTS_INTERVAL} more</div>
    </div>
  );
};

export default ProductsContainer;
