import React from 'react'
import ProductPage from '../pages/Productpage';
import woodenCoatingImage from '../assets/woodencoating.png';
import {Woodencoatinglist} from '../helpers/Woodencoatinglist';

function Woodencoating() {
  return (
    <ProductPage 
      mainImage={woodenCoatingImage}
      mainAltText="Wooden Coating"
      title="Wooden Coating"
      description="Wood coating enhances durability, appearance, and resistance to moisture, UV radiation, and environmental factors. Types include stains, varnishes, lacquers, and paints, applied through various methods like brushing, spraying, or dipping."
      productList={Woodencoatinglist}
    />
  )
}

export default Woodencoating