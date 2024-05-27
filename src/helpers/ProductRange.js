import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import product4 from '../assets/logo.png';
import product2 from '../assets/product-2.png';
import product3 from '../assets/product3.png';
import product1 from '../assets/products1.png';
import recent1 from '../assets/home-2.jpg';
import recent2 from '../assets/home-3.jpg';
import recent3 from '../assets/home-5.jpg';
import recent4 from '../assets/home6.jpg';
import recent5 from '../assets/product-1.jpg';
import '../styles/ProductRange.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProductRange() {

  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <= 768) {
        setShowArrows(false);
      }else {
        setShowArrows(true);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize',handleResize)
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: showArrows,
  };
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: showArrows,
  };
 

  return (
    <div>
      <div className="product-range-container">
        <h1>Experience Our Range Of Surfaces</h1>
        <div className="product-images">

          <Slider {...settings}>
              <div className='productdiv'>
                  <img src={product1} alt="Product 1" />
                  <h3> Powder Coating</h3>
              </div>
              <div className='productdiv'>
                  <img src={product2} alt="Product 2" />
                  <h3> Wooden Coating</h3>
              </div>
              <div className='productdiv'>
                  <img src={product3} alt="Product 3" />
                  <h3> Thermal profile</h3>
              </div>
              <div className='productdiv'>
                  <img src={product4} alt="Product 4" />
                  <h3> Logo Coating</h3>
              </div>
              <div className='productdiv'>
                  <img src={product1} alt="Product 1" />
                  <h3> Powder Coating</h3>
              </div>
          </Slider>

        </div>
      </div>
      <div className='recent-work'>
        <h1>OUR RECENT WORKS</h1>
        <div className='recent-work-images'>
          <Slider {...settings2}>
            <div className='recentdiv'><img src= {recent1} alt='' /></div>
            <div className='recentdiv'><img src= {recent2} alt='' /></div>
            <div className='recentdiv'><img src= {recent3} alt='' /></div>
            <div className='recentdiv'><img src= {recent4} alt='' /></div>
            <div className='recentdiv'><img src= {recent5} alt='' /></div>
          </Slider>

        </div>
      </div>
    </div>
  );
}

export default ProductRange;
