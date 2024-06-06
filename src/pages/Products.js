import React  from 'react';
import { Link } from 'react-router-dom';
import product from '../assets/productmain.jpg';
import '../styles/Product.css';
import productlist from '../helpers/Productlist';
import Getintouch from '../helpers/Getintouch';
function Products({items}) {
  return (
    <div className='content'>
    <div className='products'>
      <div className='part1'>
        <div className='text1'>
            <h1>Explore coatings, thermal breaks and beyond...</h1>
        </div>
        <div className='photo1'>
            <img src= {product} alt='product'/>
        </div>
      </div>
      <div className='text2'>
        <h1>OUR RANGE OF PRODUCTS</h1>
      </div>

    {productlist.map((item) => (
      <div className='product-container' key={item.id}>
        {item.id % 2 === 0 ? (
        <>
          <div className='product-container-text'>
            <div className='para'>
              <p className='text-heading'> {item.head} </p>
              <p className='text-paragraph'> {item.para} </p> 
              <div className='btn-link'><Link to = {item.url} ><button className='btn'>Read More</button></Link></div>
            </div>
          </div>
          <div className='product-container-image'>
            <img src={item.image} alt= {item.title} />
          </div>
        </>
      ) : (
        <>
          <div className='product-container-image'>
            <img src={item.image} alt= {item.title} />
          </div>
          <div className='product-container-text'>
            <div className='para'>
              <p className='text-heading'> {item.head} </p>
              <p className='text-paragraph'> {item.para} </p> 
              <div className='btn-link'><Link to = {item.url}><button className='btn'>Read More</button></Link></div>
            </div>
          </div>
        </>
      )}
      </div>
    ))}

    <div >
      <Getintouch />
    </div>
    </div>
    </div>
  )
}

export default Products;
