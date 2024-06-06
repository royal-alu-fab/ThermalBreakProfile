import React,{useState,useEffect} from 'react';
import logo from '../assets/llogo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaBars } from "react-icons/fa";

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const closeMenu = () => {
      setShowMenu(false);
      setDropdownVisible(false);
    };
    const showDropdown = () => {
      setDropdownVisible(true);
    };
  
    const hideDropdown = () => {
      setDropdownVisible(false);
    };

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setScrollUp(false);
      } else {
        // Scrolling up
        setScrollUp(true);
      }
      setLastScrollY(window.scrollY);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);

  return (
    <div className={`navbar ${scrollUp ? 'nav-down' : 'nav-up'}`}>
      <div className='leftside'>
        <img src= {logo} alt='Logo'></img>
      </div>
      
       <div className='menuitem' onClick={toggleMenu}><FaBars /></div>
      
      {/* <div className='rightside'> */}
      <div className={`rightside ${showMenu ? 'active' : ''}`}>
        <Link to= '/' onClick={closeMenu}>Home</Link>
        
        <div className='dropdown' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
        <Link to= '/products' className='dropdown-link'>Products</Link>
          {dropdownVisible && (
          <div className='dropdown-menu'>
            <Link to='/thermalbreakprofile' onClick={closeMenu}>Thermal Break Profile</Link>
            <Link to='/thermalbreakaluminiumprofile' onClick={closeMenu}>Thermal break Aluminium Profile </Link>
            <Link to='/aluminiumextrusion' onClick={closeMenu}>Aluminium Extrusion</Link>
            <Link to='/hvacsolution' onClick={closeMenu}>HVAC Solution</Link>
            <Link to='/powdercoating' onClick={closeMenu}>Powder Coating</Link>
            <Link to='/woodencoating' onClick={closeMenu}>Wooden Coating</Link>
          </div>
          )}
        </div>
        
        {/* <Link to= '/products' onClick={closeMenu}>Products</Link> */}
        
        <Link to= '/about' onClick={closeMenu}>About us</Link>
        <Link to= '/contact' className='contact' onClick={closeMenu}>Contact us</Link>
      </div>
    </div>
  )
}

export default Navbar;