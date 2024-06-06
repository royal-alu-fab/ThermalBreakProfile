import React from 'react'
import AboutImage from '../assets/aboutus.jpg';
import '../styles/About.css';
import Aboutlogo from '../assets/mlogob.png';
import VisionIcon from '../assets/customersatisfaction.png';
import Getintouch from '../helpers/Getintouch';
import Corevalues from '../helpers/Corevalues';

function About() {
  return (
    <div className='content'>
    <div className='about-us'>
     <div className='image-container'>
        <img src= {AboutImage} alt='aboutimg' className='bgimage'/>
        <div className='text-overlay'> 
          <h1>Expanding our services to meet your evolving industry needs effectively</h1>
        </div>
     </div>
     <p className='about-header'>About us</p>
     
     <div className='about-us2'>
        {/* <div className='logobg'>  */}
          <img src= {AboutImage} alt='aboutimg' className='bgimage2'/>
          <div className='text-overlay2'>
            <div className='abt-logo'>
              <img src={Aboutlogo} alt='aboutlogo'/>
            </div>
            <div className='abt-text'>
             <p> Royal Alu Fab made its debut in the surface coating industry in 2000. <br /><br />We lead as the premier surface finish application company, offering comprehensive in-house finishing capabilities like anodizing, powder coating, PVDF coating, industrial & automotive liquid painting, and innovative natural coating finishes such as RealWood, RealMarble & RealGranite, all housed under one roof. Our unique solutions and capabilities make us the sole provider in the industry, with a state-of-the-art 25,000 sq ft application center established nationwide since 2014. <br /><br /> Our dedication to preserving personal relationships with our valued customers and suppliers is unwavering.</p>

            </div>
          </div>
        {/* </div> */}
     </div>
     <p className='about-header'>OUR VISION</p>
     
     <div className='vision'>
        <div className="vision-box">
          <div className="vision-icon"><img src={VisionIcon} alt="icon" /></div>
          <div className='vision-text'>
            <p className='heading1'>Transparency</p>
            <p className='para1'>We believe in transparent communication and honesty with our customers, partners, and stakeholders.</p>
          </div>
        </div>

        <div className="vision-box">
          <div className="vision-icon"><img src={VisionIcon} alt="icon" /></div>
          <div className='vision-text'>
            <p className='heading1'>Transparency</p>
            <p className='para1'>We believe in transparent communication and honesty with our customers, partners, and stakeholders.</p>
          </div>
        </div>

        <div className="vision-box">
          <div className="vision-icon"><img src={VisionIcon} alt="icon" /></div>
          <div className='vision-text'>
            <p className='heading1'>Transparency</p>
            <p className='para1'>We believe in transparent communication and honesty with our customers, partners, and stakeholders.</p>
          </div>
        </div>

        <div className="vision-box">
          <div className="vision-icon"><img src={VisionIcon} alt="icon" /></div>
          <div className='vision-text'>
            <p className='heading1'>Transparency</p>
            <p className='para1'>We believe in transparent communication and honesty with our customers, partners, and stakeholders.</p>
          </div>
        </div>
     </div>
     <p className='about-header'>WHY CHOOSE US?</p>
    
    <div className='choose-me'>
      <div className='choose-box'>
        <div class="choose-icon"><img src={VisionIcon} alt="icon1" /></div>
        <div class="choose-text">Transparency</div>
      </div>
      <div className='choose-box'>
        <div class="choose-icon"><img src={VisionIcon} alt="icon1" /></div>
        <div class="choose-text">Transparency</div>
      </div>
      <div className='choose-box'>
        <div class="choose-icon"><img src={VisionIcon} alt="icon1" /></div>
        <div class="choose-text">Transparency</div>
      </div>
      <div className='choose-box'>
        <div class="choose-icon"><img src={VisionIcon} alt="icon1" /></div>
        <div class="choose-text">Transparency</div>
      </div>
      <div className='choose-box'>
        <div class="choose-icon"><img src={VisionIcon} alt="icon1" /></div>
        <div class="choose-text">Transparency</div>
      </div>
      <div className='choose-box'>
        <div class="choose-icon"><img src={VisionIcon} alt="icon1" /></div>
        <div class="choose-text">Transparency</div>
      </div>
    </div>
    <Corevalues />
    <Getintouch />
    
    </div>
    </div>
  )
}

export default About;
