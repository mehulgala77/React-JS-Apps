import React, { useRef } from 'react'
import Slider from "react-slick";
import Product from './Product/Product';

import './ProductSlider.scss';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ProductSlider() {
  const sliderRef = useRef();

  const settings = {
    // dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className='product-slider-container'>
      <h2> Multiple items </h2>
      <div className='slider-container'>
        <Slider {...settings} ref={sliderRef}>
          {[...Array(9)].map((_, i) => (
            <Product index={i + 1} />
          ))}
        </Slider>
        <div className='prev btn-container' onClick={goToPrev}>
          <div className='prev-btn btn'>&#8592;</div>
        </div>
        <div className='next btn-container' onClick={goToNext}>
          <div className='next-btn btn'>&#8594;	</div>
        </div>
      </div>
    </div>
  );
}

export default ProductSlider