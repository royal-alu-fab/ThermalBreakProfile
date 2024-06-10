import React, {useState} from 'react'
import contactimg from '../assets/contactus-2.jpg';
import '../styles/Contact.css';
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import Maps from '../assets/googlemaps.png';
import ContactForm from '../helpers/ContactForm';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    product: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers for contactNumber and ensure it is up to 10 digits
    if (name === 'contactNumber') {
      if (value === '' || /^\d{1,10}$/.test(value)) {
        setFormData({
          ...formData,
          [name]: value
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.contactNumber) newErrors.contactNumber = 'Contact number is required';
    if (!formData.product) newErrors.product = 'Please select a product';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (formData.contactNumber.length !== 10) {
      newErrors.contactNumber = 'Contact number must be exactly 10 digits';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      // Add your form submission logic here
    }
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form data
      console.log('Form submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };


  return (
    <div className='content'>
    <div className='contactus'>
      
      <div className='contactphoto'>
        <img src={contactimg} alt='contactimg' />
      </div>

      <div className='contact-header'>
        <h1>GET IN TOUCH</h1>
      </div>

      <div className='contact-division'>
        <div className='contact-detail'>
          <div className='contact-item'>
            <span className='contact-icons'><IoIosMail /></span>
            <div><p> royalaluthermalbreaksales@gmail.com</p></div> 
          </div>
          <div className='contact-item'>
            <span className='contact-icons'><FaPhone /></span>
            <div><p>8347555547</p></div>
          </div>
          <div className='contact-item'>
            <span className='contact-icons'><FaHome /></span>
            <div><p>307-G.I.D.C. Makarpura, <br /> Vadodara - 390010 <br /> Gujarat - India</p></div>
          </div>
        </div>

        <div className='contact-form'>
            <form className='forms' onSubmit={handleSubmit}>
              <div className='form-group'>
                <input type='text' name='name' placeholder='Name' className='form-control' value={formData.name} onChange={handleChange} />
                {errors.name && <span className='error'> {errors.name} </span> }
                <input type='email' name='email' placeholder='Email' className='form-control' value={formData.email} onChange={handleChange}/> 
                {errors.email && <span className='error'>{errors.email}</span>}
              </div>

              <div className='form-group'>
                <input type='text' name= 'contactNumber' placeholder="Contact Number" className='form-control' value={formData.contactNumber} onChange={handleChange}></input>
                {errors.contactNumber && <span className='error'>{errors.contactNumber}</span>}
            </div>

              <div className='form-group'>
                <select name='product' className='form-control' value={formData.product} onChange={handleChange}>
                  <option value=''>Select a Product</option>
                  <option value='product1'>Thermal Break Profile</option>
                  <option value='product2'>Thermal Break Aluminium Profile</option>
                  <option value='product3'>Aluminium Extrusion</option>
                  <option value='product4'>HVAC Solutions</option>
                  <option value='product5'>Powder Coating</option>
                  <option value='product5'>Wooden Coating</option>
                </select>
                {errors.product && <span className='error'>{errors.product}</span>}
            </div>

            <div className='form-group'>
              <textarea name='message' placeholder='Your Message' className='form-control' value={formData.message} onChange={handleChange}></textarea>
              {errors.message && <span className='error'>{errors.message}</span>}
            </div>

            <div className='form-group form-group-submit'>
              <button type='submit' className='submit-btn'>Submit</button>
            </div>
            </form>
        </div>
      </div>

      <div className="formspree-form">
        <ContactForm />
      </div>

      <div className='location-heading'>
        <h1> LOCATIONS...</h1>
      </div>
      
      <div className='locations-container'>
      <div className='location'>
        <div className='map'>
          <img src={Maps} alt='Location 1' />
        </div>
        <div className='address'>
          <p>123 Main St, City, Country</p>
        </div>
      </div>
      <div className='location'>
        <div className='map'>
          <img src={Maps} alt='Location 2' />
        </div>
        <div className='address'>
          <p>456 Second St, City, Country</p>
        </div>
      </div>
      <div className='location'>
        <div className='map'>
          <img src={Maps} alt='Location 3' />
        </div>
        <div className='address'>
          <p>789 Third St, City, Country</p>
        </div>
      </div>
    </div>
      <div>

      </div>
    </div>
    </div>
  )
}

export default Contact;
