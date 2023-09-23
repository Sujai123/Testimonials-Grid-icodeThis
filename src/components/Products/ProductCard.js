import React from "react";
import styles from "./product.module.css";
import ProductRate from "./ProductRate";
import Button from "../Button";
import RightSVG from "../../assets/RightSVG";

const ProductCard = ({ title, body, rate }) => {
  return (
    <div className={styles.product}>
      <ProductRate value={rate} />
      <h1>{title}</h1>
      <p>{body}</p>
      <Button icon={<RightSVG />}>See project</Button>
    </div>
  );
};

export default ProductCard;
