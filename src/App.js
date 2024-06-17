import {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, useNavigate, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Scrolltotop from './pages/Scrolltotop';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Thermalbreakprofile from './pages/Thermalbreakprofile';
import Thermalbreakaluminiumprofile from './pages/Thermalbreakaluminiumprofile';
import Hvacsolution from './pages/Hvacsolution';
import Aluminiumextrusion from './pages/Aluminiumextrusion';
import Powdercoating from './pages/Powdercoating';
import Woodencoating from './pages/Woodencoating';

function App () {
    const RedirectHandler = () => {
      const navigate = useNavigate();

      useEffect(() => {
        // Check if there's a redirect query parameter
        const params = new URLSearchParams(window.location.search);
        const redirectPath = params.get('redirect');
        if (redirectPath) {
          navigate(redirectPath, { replace: true });
        }
      }, [navigate]);

      return null;
    };

  return(
    <div className="App"> 
       <Router>
        <Scrolltotop />
        <Navbar />
        <RedirectHandler />
        <div className='maincontent'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/thermalbreakprofile' element={<Thermalbreakprofile />}></Route>
          <Route path='/thermalbreakaluminiumprofile' element={<Thermalbreakaluminiumprofile />}></Route>
          <Route path='/hvacsolution' element={<Hvacsolution />}></Route>
          <Route path='/aluminiumextrusion' element={<Aluminiumextrusion />}></Route>
          <Route path='/powdercoating' element={<Powdercoating />}></Route>
          <Route path='/woodencoating' element={<Woodencoating />}></Route>
          <Route path="*" element={<Navigate to="/" replace />} />
          
        </Routes> 
        </div>
        <Footer />
       </Router>
    </div>
   
  )
}
export default App;