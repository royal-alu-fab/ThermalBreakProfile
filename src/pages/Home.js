import React from 'react';
import '../styles/Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import home5 from '../assets/home6.jpg';
import home4 from '../assets/home-5.jpg';
import home2 from '../assets/home-3.jpg';
import home1 from '../assets/home-2.jpg';
import Slider from 'react-slick';
import ProductRange from '../helpers/ProductRange';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
 
  return (
    <div className='home'>
      <div className='slide'>
        <Slider {...settings}>
          <div className='image'>
            <img src={ home1 } alt='home1'/>
          </div>
          
          <div className='image'>
            <img src={ home2 } alt='home2'/>
          </div>

          <div className='image'>
            <img src={ home4 } alt='home4'/>
          </div>

          <div className='image'>
            <img src={ home5 } alt='home5'/>
          </div>
        </Slider>
      </div>
    
    <div className='hometext1'>
        <h1>Revolutionizing Innovations in India's Building Solutions</h1>
        
        <p>Royal Alu Fab stands at the forefront of thermal break windows technology in India. With two decades of expertise, we've established a reputation for unwavering quality, delivering cutting-edge products and services nationwide through our Eco-intelligent solutions. Our commitment extends to offering the broadest array of top-tier, energy-efficient, and sleek aluminum profiles and thermal break profiles globally.</p>
        
        <p>At Royal Alu Fab, we challenge boundaries and redefine norms. Through our diverse services and groundbreaking products, we continuously shatter limits, driving innovation in India's construction landscape.</p>
    </div>

    <div className='productrange'>
      <ProductRange />
    </div>

    </div>
  )
}

export default Home
