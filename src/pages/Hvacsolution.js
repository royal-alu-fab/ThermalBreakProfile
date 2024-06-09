import React from 'react'
import ProductPage from '../pages/Productpage';
import mainImage from '../assets/thermalbreakprofile.jpg';
import {Hvacsolutionlist} from '../helpers/Hvacsolutionlist';

function Hvacsolution() {
  return (
    <div>
        <ProductPage
          mainImage={mainImage}
          mainAltText="HVAC Solutions"
          title="HVAC Solutions"
          description="HVAC solutions refer to systems and services for heating, ventilation, and air conditioning in buildings. It includes equipment and technologies designed to regulate indoor climate, ensuring comfort, air quality, and energy efficiency in residential, commercial, and industrial settings."
          productList={Hvacsolutionlist}
        />
        <div style={{ marginTop: '20px' }}>
          <a href="/hvac-solutions-catalogue.pdf" download="hvac-solutions-catalogue.pdf">
            Download our Product Catalog
          </a>
        </div>
    </div>
  )
}

export default Hvacsolution
