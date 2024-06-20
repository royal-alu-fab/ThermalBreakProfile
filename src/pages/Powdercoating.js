import React from 'react'
import ProductPage from '../pages/Productpage';
import powderCoatingImage from '../assets/powder coating/powdercoating.jpg';
import {Powdercoatinglist} from '../helpers/Powdercoatinglist';

function Powdercoating() {
  return (
    <ProductPage 
      mainImage={powderCoatingImage}
      mainAltText="Aluminium Profile Powder Coating"
      title="Aluminium Profile Powder Coating"
      description="Powder coating is a process where dry powder is applied electrostatically to a surface, then cured under heat, creating a durable, protective layer. It's commonly used on metals for enhanced resistance to corrosion, wear, and weathering."
      productList={Powdercoatinglist}
    /> 
  )
}

export default Powdercoating
