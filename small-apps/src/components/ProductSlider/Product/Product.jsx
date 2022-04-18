import React from 'react';
import './Product.scss';

const Product = ({ index }) => {
  return (
    <div className='product-container'>
      <div className='product'>{index}</div>
    </div>
  )
}

export default Product;