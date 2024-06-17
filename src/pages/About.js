import React from 'react'
import AboutImage from '../assets/aboutus.jpg';
import '../styles/About.css';
import Aboutlogo from '../assets/mlogob.png';
import Innovation from '../assets/ourvision/innovation.png';
import Customerfocus from '../assets/ourvision/customerfocus.png';
import Excellence from '../assets/ourvision/excellence.png';
import Integrity from '../assets/ourvision/integrity.png';
import Getintouch from '../helpers/Getintouch';
import Corevalues from '../helpers/Corevalues';
import Qualityassurance from '../assets/why choose us_/quality-assurance.png';
import IndustryLeadership from '../assets/why choose us_/industry-leadership.png';
import ExperiencedTeam from '../assets/why choose us_/experienced team.png';
import CustomizedSolutions from '../assets/why choose us_/customized-solutions.png';
import WideProductRange from '../assets/why choose us_/products-range.png';
import ContinnuousImprovement from '../assets/why choose us_/continuous-improvement.png';

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
     <hr className="divider" />
     <div className='about-us2'>
          <img src= {AboutImage} alt='aboutimg' className='bgimage2'/>
          <div className='text-overlay2'>
            <div className='abt-logo'>
              <img src={Aboutlogo} alt='aboutlogo'/>
            </div>
            <div className='abt-text'>
             {/* <p> Royal Alu Fab made its debut in the surface coating industry in 2000. <br /><br />We lead as the premier surface finish application company, offering comprehensive in-house finishing capabilities like anodizing, powder coating, PVDF coating, industrial & automotive liquid painting, and innovative natural coating finishes such as RealWood, RealMarble & RealGranite, all housed under one roof. Our unique solutions and capabilities make us the sole provider in the industry, with a state-of-the-art 25,000 sq ft application center established nationwide since 2014. <br /><br /> Our dedication to preserving personal relationships with our valued customers and suppliers is unwavering.</p> */}

             <p> Royal Alu Fab made its debut in the surface coating industry in 2000. <br /><br />Founded as a family business in 2000, we have consistently remained independent and committed to our promise of prioritizing our customers' needs. By understanding what drives both customers and markets, we create top-notch solutions through collaboration. We stay close to you and make quick decisions where they matter most. Utilizing flexible, local networks worldwide, we ensure the right team is in place at the right time. With more than 20 years of experience, we deliver the optimal combination of quality, quantity, time, and price.<br /><br /> Our mission is to supply our customers with the necessary parts for their product manufacturing. We don’t focus on creating elaborate names for these parts; the most important name is likely that of your personal contact at Royal Alu Fab. From the initial engagement to project completion and beyond, we work alongside you to find the best solutions, guaranteeing the highest quality and service. This approach positions us as more than just a leading B2B company; we are a people-focused company, passionate about thermal break pofile solutions. So, let’s talk solutions, together.</p>
            </div>
          </div>
     </div>


     <p className='about-header'>OUR VISION</p>
     <hr className="divider"/>
     <div className='vision'>
        <div className="vision-box">
          <div className="vision-icon"><img src={Innovation} alt="icon" /></div>
          <div className='vision-text'>
            <p className='heading1'>Innovation</p>
            <p className='para1'>We aim to create new and better products for the future. We are always looking for new ways to improve our thermal break profiles.</p>
          </div>
        </div>

        <div className="vision-box">
          <div className="vision-icon"><img src={Customerfocus} alt="icon" /></div>
          <div className='vision-text'>
            <p className='heading1'>Customer Focus</p>
            <p className='para1'>We listen to our customers and meet their needs. We provide solutions that fit what our customers want and need.</p>
          </div>
        </div>

        <div className="vision-box">
          <div className="vision-icon"><img src={Excellence} alt="icon" /></div>
          <div className='vision-text'>
            <p className='heading1'>Excellence</p>
            <p className='para1'>We strive to be the best in everything we do. We continually improve our processes and products to reach the highest standards.</p>
          </div>
        </div>

        <div className="vision-box">
          <div className="vision-icon"><img src={Integrity} alt="icon" /></div>
          <div className='vision-text'>
            <p className='heading1'>Integrity</p>
            <p className='para1'>We believe in doing the right thing always. We uphold honesty and strong moral principles in our work.</p>
          </div>
        </div>
     </div>
     <p className='about-header'>WHY CHOOSE US?</p>
     <hr className="divider"/>
    <div className='choose-me'>
      <div className='choose-box'>
        <div class="choose-icon"><img src={Qualityassurance} alt="icon1" /></div>
        <div class="choose-text">Quality Assurance</div>
      </div>
      <div className='choose-box'>
        <div class="choose-icon"><img src={IndustryLeadership} alt="icon1" /></div>
        <div class="choose-text">Industry Leadership</div>
      </div>
      <div className='choose-box'>
        <div class="choose-icon"><img src={ExperiencedTeam} alt="icon1" /></div>
        <div class="choose-text">Experienced Team</div>
      </div>
      <div className='choose-box'>
        <div class="choose-icon"><img src={CustomizedSolutions} alt="icon1" /></div>
        <div class="choose-text">Customized Solutions</div>
      </div>
      <div className='choose-box'>
        <div class="choose-icon"><img src={WideProductRange} alt="icon1" /></div>
        <div class="choose-text">Wide Product Range</div>
      </div>
      <div className='choose-box'>
        <div class="choose-icon"><img src={ContinnuousImprovement} alt="icon1" /></div>
        <div class="choose-text">Continuous Improvement</div>
      </div>
    </div>
    <Corevalues />
    <Getintouch />
    
    </div>
    </div>
  )
}

export default About;
