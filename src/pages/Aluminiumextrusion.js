import React from 'react'
import ProductPage from '../pages/Productpage';
import mainImage from '../assets/thermalbreakprofile.jpg';
import {Aluminiumextrusionlist} from '../helpers/Aluminiumextrusionlist';

function Aluminiumextrusion() {
  return (
    
    <ProductPage 
      mainImage={mainImage}
      mainAltText="Aluminum Extrusion"
      title="Aluminum Extrusion"
      description="Aluminum extrusion is a process where aluminum is forced through a die to create specific cross-sectional profiles. It produces lightweight, strong shapes used in construction, automotive, and aerospace industries, allowing for custom designs and efficient material use."
      productList={Aluminiumextrusionlist}
    />
    
  )
}

export default Aluminiumextrusion
