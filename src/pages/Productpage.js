import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Productpage.css';
import Getintouch from '../helpers/Getintouch';

function ProductPage({ mainImage, mainAltText, title, description, productList }) {
  return (
    <div className='thermalprofile'>
      <div className='tbppart1'>
        <div className='tbpimage1'>
          <img src={mainImage} alt={mainAltText} />
        </div>
        <div className='tbptext1'>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className='heading'>
        <p>Our solutions for {title.toLowerCase()}...</p>
      </div>
      <div className='tbpmould'>
        {productList.map((item) => (
          <div className='tbpmouldimage' key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.desc}</h3>
          </div>
        ))}
      </div>
      <div>
        <Getintouch />
      </div>
    </div>
  );
}

ProductPage.propTypes = {
  mainImage: PropTypes.string.isRequired,
  mainAltText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductPage;
