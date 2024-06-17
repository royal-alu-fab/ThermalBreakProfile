import React from 'react';
import '../styles/Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import main1 from '../assets/main page/main1.jpg';
import main2 from '../assets/main page/main2.png';
import main3 from '../assets/main page/main3.JPG';
import main4 from '../assets/homepage4.jpg';
import maindisplay from '../assets/main page/main display.jpg';
import Slider from 'react-slick';
import ProductRange from '../helpers/ProductRange';
import CoreValues from '../helpers/Corevalues';
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
    <div className='content'>
    <div className='home'>
      <div className='slide'>
        <Slider {...settings}>
          <div className='image'>
            <img src={ main1 } alt='home1'/>
          </div>
          
          <div className='image'>
            <img src={ main2 } alt='home2'/>
          </div>

          <div className='image'>
            <img src={ main3 } alt='main3'/>
          </div>

          <div className='image'>
            <img src={ main4 } alt='home5'/>
          </div>

          <div className='image'>
            <img src={ maindisplay } alt='home5'/>
          </div>
        </Slider>
      </div>
    
    <div className='hometext1'>
        <h1>Revolutionizingggg Innovations in India's Building Solutions</h1>
        
        <p>Royal Alu Fab stands at the forefront of thermal break windows technology in India. With two decades of expertise, we've established a reputation for unwavering quality, delivering cutting-edge products and services nationwide through our Eco-intelligent solutions. Our commitment extends to offering the broadest array of top-tier, energy-efficient, and sleek aluminum profiles and thermal break profiles globally.</p>
        
        <p>At Royal Alu Fab, we challenge boundaries and redefine norms. Through our diverse services and groundbreaking products, we continuously shatter limits, driving innovation in India's construction landscape.</p>
    </div>

    <div> <ProductRange /></div>

    <div> <CoreValues /></div>
    
    </div>
    </div>
  )
}

export default Home
