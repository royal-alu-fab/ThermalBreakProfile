import React from 'react'
import ProductPage from '../pages/Productpage';
import hvacImage from '../assets/hvac solutions/hvac.jpg';
import {Hvacsolutionlist} from '../helpers/Hvacsolutionlist';

function Hvacsolution() {
  return (
    <div>
        <ProductPage
          mainImage={hvacImage}
          mainAltText="HVAC Solutions"
          title="HVAC Solutions"
          description="HVAC solutions refer to systems and services for heating, ventilation, and air conditioning in buildings. It includes equipment and technologies designed to regulate indoor climate, ensuring comfort, air quality, and energy efficiency in residential, commercial, and industrial settings."
          productList={Hvacsolutionlist} 
        />
    </div>
  )
}

export default Hvacsolution
