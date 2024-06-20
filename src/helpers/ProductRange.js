import React from 'react';
import { Link } from 'react-router-dom';
import tbp from '../assets/thermal break profile/tbp.jpg';
import tbap from '../assets/thermal break aluminium profile/tbap1.jpg';
import ae from '../assets/aluminium extrusion/AE.jpg';
// import hvac from '../assets/hvac solutions/hvac.jpg';
import woodcoat from '../assets/wooden coating/wooden.jpg';
import powdercoat from '../assets/powder coating/powdercoating.jpg';
import '../styles/ProductRange.css';

function ProductRange() { 
  return (
    <div>
    <div className="product-range">
      <h1>Experience Our Range Of Surfaces</h1>
      <div className="products">
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
        {/* <div className="product">
          <Link to ='/hvacsolution'>
            <h2>HVAC Solutions</h2>
            <img src={hvac} alt="HVAC Solutions" /> 
          </Link>
        </div> */}
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
    </div>
  );
}

export default ProductRange;
