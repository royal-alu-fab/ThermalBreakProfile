// import React from 'react'
// import image1 from '../assets/thermalbreakprofile.jpg';
// import '../styles/Thermalbreakprofile.css'
// // import pimage1 from '../assets/products1.png'
// // import pimage2 from '../assets/product-2.png'
// // import pimage3 from '../assets/product3.png'
// import { Thermalprofilelist } from '../helpers/thermalprofilelist';

// function Thermalbreakprofile() {
//   return (
//     <div className='thermalprofile'>
//         <div className='tbppart1'>
//             <div className='tbpimage1'>
//                 <img src={image1} alt='image1' />
//             </div>
//             <div className='tbptext1'>
//                 <h1>Thermal Break Profile</h1>
//                 <p> A thermal break profile(also called thermal barrier strip, polyamide strip) is an insertion of an insulating material, such as polyamide, which interrupts the thermal transfer through an architectural aluminium profile. With rising energy prices in mind, everyone is striving for optimal insulation of their home. </p>
//             </div>
//         </div>
//         <div className='heading'>
//           <p>Our solutions for thermal break profile...</p>
//         </div>
        
//           <div className='tbpmould'>
//             {Thermalprofilelist.map((item) => (
//               <div className='tbpmouldimage' key={item.id}>
//                 <img src={item.image} alt="Product 1" />
//                 <h3> {item.desc}</h3>
//                </div>
//             ))}
          
//         </div>
//     </div>
//   )
// }

// export default Thermalbreakprofile;

import React from 'react'
import ProductPage from '../pages/Productpage';
import mainImage from '../assets/thermalbreakprofile.jpg';
import {Thermalprofilelist} from '../helpers/Thermalprofilelist';

function Thermalbreakprofile() {
  return (
    <ProductPage 
      mainImage={mainImage}
      mainAltText="Thermal Break Profile"
      title="Thermal Break Profile"
      description="A thermal break profile (also called thermal barrier strip, polyamide strip) is an insertion of an insulating material, such as polyamide, which interrupts the thermal transfer through an architectural aluminium profile. With rising energy prices in mind, everyone is striving for optimal insulation of their home."
      productList={Thermalprofilelist}
    />
  )
}

export default Thermalbreakprofile

