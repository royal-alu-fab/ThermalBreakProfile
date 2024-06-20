import React,{useState,useEffect,useRef} from 'react';
// import logo from '../assets/llogo.png';
import logomain from '../assets/logomain.jpg';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaBars } from "react-icons/fa";

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

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

    // const handleScroll = () => {
    //   if (window.scrollY > lastScrollY) {
    //     // Scrolling down
    //     setScrollUp(false);
    //   } else {
    //     // Scrolling up
    //     setScrollUp(true);
    //   }
    //   setLastScrollY(window.scrollY);
    //   closeMenu();
    // };

    // useEffect(() => {
    //   window.addEventListener('scroll', handleScroll);
  
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, [lastScrollY]);
    
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && 
          !menuRef.current.contains(event.target) && 
          toggleButtonRef.current && 
          !toggleButtonRef.current.contains(event.target)
        ) {
          closeMenu();
        }
      };
  
      if (showMenu) {
        document.addEventListener('click', handleClickOutside);
      } else {
        document.removeEventListener('click', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [showMenu]);

    useEffect(() => {
      const handleScroll = () =>{
        if (showMenu) {
          closeMenu();
        }
      };

      window.addEventListener('scroll',handleScroll);

      return() => {
        window.removeEventListener('scroll',handleScroll);
      };
    }, [showMenu]);

    
  return (
    // <div className={`navbar ${scrollUp ? 'nav-down' : 'nav-up'}`}>
      <div className='navbar'>
      <div className='leftside'>
        <Link to = "/">
          <img src= {logomain} alt='Logo'></img>
        </Link>
      </div>
      
       <div ref={toggleButtonRef} className='menuitem' onClick={toggleMenu}><FaBars /></div>
      
       <div ref={menuRef} className={`rightside ${showMenu ? 'active' : ''}`}>
        <Link to='/' onClick={closeMenu}>Home</Link>
        
        <div className='dropdown' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
        <Link to= '/products' className='dropdown-link'>Products</Link>
          {dropdownVisible && (
          <div className='dropdown-menu'>
            <Link to='/thermalbreakprofile' onClick={closeMenu}>Thermal Break Profile</Link>
            <Link to='/thermalbreakaluminiumprofile' onClick={closeMenu}>Thermal Break Aluminium Profile </Link>
            <Link to='/aluminiumextrusion' onClick={closeMenu}>Aluminium Extrusion</Link>
            {/* <Link to='/hvacsolution' onClick={closeMenu}>HVAC Solutions</Link> */}
            <Link to='/powdercoating' onClick={closeMenu}>Aluminium Profile Powder Coating</Link>
            <Link to='/woodencoating' onClick={closeMenu}>Wooden Coating</Link>
          </div>
          )}
        </div>
        
        <Link to= '/about' onClick={closeMenu}>About us</Link>
        <Link to= '/contact' className='contact' onClick={closeMenu}>Contact us</Link>
      </div>
    </div>
  )
}

export default Navbar;