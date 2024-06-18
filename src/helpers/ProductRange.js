import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import tbp from '../assets/thermal break profile/tbp.jpg';
import tbap from '../assets/thermal break aluminium profile/tbap1.jpg';
import ae from '../assets/aluminium extrusion/AE.jpg';
import hvac from '../assets/hvac solutions/hvac.jpg';
import woodcoat from '../assets/wooden coating/wooden.jpg';
import powdercoat from '../assets/powder coating/powdercoating.jpg';
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
      {/* <div className="product-range-container">
        <h1>Experience Our Range Of Surfaces</h1>
        <div className="product-images">

          <Slider {...settings}>
              <div className='productdiv'>
                  <img src={tbp} alt="Product 1" />
                  <h3> Thermal Break Profile</h3>
              </div>
              <div className='productdiv'>
                  <img src={tbp} alt="Product 2" />
                  <h3>Thermal Break Aluminium Profile</h3>
              </div>
              <div className='productdiv'>
                  <img src={tbp} alt="Product 3" />
                  <h3> Aluminium Extrusion</h3>
              </div>
              <div className='productdiv'>
                  <img src={tbp} alt="Product 4" />
                  <h3> HVAC Solution</h3>
              </div>
              <div className='productdiv'>
                  <img src={tbp} alt="Product 1" />
                  <h3> Powder Coating</h3>
              </div>
              <div className='productdiv'>
                  <img src={tbp} alt="Product 1" />
                  <h3> Wooden Coating</h3>
              </div>
          </Slider>
        </div>
      </div> */}



    <div className="product-range">
      <h1>Experience Our Range Of Surfaces</h1>
      <div className="products">
        {/* <div className="product">
          <h2>Our Product Range</h2>
          <ul>
            <li>Aluminium Profile</li>
            <li>Aluminium Bronze Ingots</li>
            <li>Silicon Bronze Ingots</li>
            <li>Phosphorous Bronze Ingots</li>
            <li>Tin Bronze Ingots</li>
            <li>Leaded Bronze Ingots</li>
            <li>Manganese Bronze Ingots</li>
            <li>Bismuth Bronze Ingots</li>
            <li>Brass Ingots</li>
          </ul>
        </div> */}
        <div className="product">
        <Link to ='/thermalbreakprofile'>
          <h2>Thermal Break Profile</h2>
          <img src={tbp} alt="Thermal Break Profile" />
          </ Link>
        </div>
        <div className="product">
          <Link to ='/thermalbreakaluminiumprofile'>
            <h2>Thermal Break Aluminium Profile</h2>
            <img src={tbap} alt="Thermal Break Aluminium Profile" /> 
          </ Link>
        </div>
        <div className="product">
          <Link to ='/aluminiumextrusion'>
            <h2>Aluminium Extrusion</h2>
            <img src={ae} alt="Aluminium Extrusion" /> 
          </Link> 
        </div>
        <div className="product">
          <Link to ='/hvacsolution'>
            <h2>HVAC Solutions</h2>
            <img src={hvac} alt="HVAC Solutions" /> 
          </Link>
        </div>
        <div className="product">
          <Link to ='/powdercoating'>
            <h2>Aluminium Profile Powder Coating</h2>      
            <img src={powdercoat} alt="Powder Coating" />
          </Link> 
        </div>
        <div className="product">
          <Link to ='/woodencoating'>
            <h2>Wooden Coating</h2>      
            <img src={woodcoat} alt="Wooden Coating" /> 
          </Link>
        </div>
      </div>
    </div>

      {/* <div className='recent-work'>
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
      </div> */}
    </div>
  );
}

export default ProductRange;
