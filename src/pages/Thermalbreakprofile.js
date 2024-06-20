import React from 'react'
import ProductPage from '../pages/Productpage';
// import mainImage from '../assets/thermalbreakprofile.jpg';
import mainImage from '../assets/thermal break profile/thermalbreakprofilemain.jpg';
import {Thermalprofilelist} from '../helpers/Thermalprofilelist';

function Thermalbreakprofile() {
  return (
    <ProductPage 
      mainImage={mainImage}
      mainAltText="Thermal Break Profile"
      title="Thermal Break Profile"
      description="A thermal break profile (also called thermal barrier strip, polyamide strip, PA66) is an insertion of an insulating material, such as polyamide, which interrupts the thermal transfer through an architectural aluminium profile. With rising energy prices in mind, everyone is striving for optimal insulation of their home."
      productList={Thermalprofilelist}
    />
  )
}

export default Thermalbreakprofile

