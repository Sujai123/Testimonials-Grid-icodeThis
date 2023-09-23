import React from 'react'
import StarSVG from '../../assets/StarSVG';
import EmptyStarSVG from '../../assets/EmptyStarSVG';
import styles from './product.module.css'

const TOTAL_STARS = 5;

const ProductRate = ({value}) => {

  const emptyStars = TOTAL_STARS - value;

  return (
    <div className={styles.rate}>
      {new Array(value).fill(null).map((_, index) => <StarSVG key={index} />)}
      {new Array(emptyStars).fill(null).map((_, index) => <EmptyStarSVG key={index} />)}
    </div>
  )
}

export default ProductRate;

ProductRate.defaultProps = {
  value: 3,
}