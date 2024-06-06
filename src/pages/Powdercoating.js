import React from 'react'
import ProductPage from '../pages/Productpage';
import mainImage from '../assets/thermalbreakprofile.jpg';
import {Powdercoatinglist} from '../helpers/Powdercoatinglist';

function Powdercoating() {
  return (
    <ProductPage 
      mainImage={mainImage}
      mainAltText="Thermal Break Profile"
      title="Thermal Break Profile"
      description="A thermal break profile (also called thermal barrier strip, polyamide strip) is an insertion of an insulating material, such as polyamide, which interrupts the thermal transfer through an architectural aluminium profile. With rising energy prices in mind, everyone is striving for optimal insulation of their home."
      productList={Powdercoatinglist}
    /> 
  )
}

export default Powdercoating
