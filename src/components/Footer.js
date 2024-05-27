import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='icons'>
        <div><a href='https://instagram.com' target="blank" ><FaInstagram /></a></div>
        <div><a href='https://facebook.com' target="blank" ><FaFacebook /></a></div>
        <div><a href='https://youtube.com' target="blank" ><FaYoutube /></a></div>
      </div>
      <div className='text'>
        <p>All rights Reserved | </p>&nbsp;
        <p> Royal Alu Fab pvt.ltd &reg; |</p> &nbsp;
        <p> Disclaimer | </p> &nbsp;
        <p> Privacy Policy </p> &nbsp;
      </div>
    </div>
  )
}

export default Footer
