import React from 'react'
import ProductPage from '../pages/Productpage';
import thermalBreakAluminiumProfileImage from '../assets/thermal break aluminium profile/thermal-break-aluminium-profile.jpg';
import {Thermalaluminiumlist} from '../helpers/Thermalaluminiumlist';

function Thermalbreakaluminiumprofile() {
  return (
    <ProductPage 
      mainImage={thermalBreakAluminiumProfileImage}
      mainAltText="Thermal Break Aluminium Profile"
      title="Thermal Break Aluminium Profile"
      description="A thermal break aluminum profile is a type of window or door frame that includes a non-conductive material between the inner and outer aluminum sections to reduce heat transfer, improving energy efficiency and reducing condensation."
      productList={Thermalaluminiumlist}
    />
  )
}

export default Thermalbreakaluminiumprofile;