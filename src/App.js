import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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
  return(
    <div className="App"> 
       <Router>
        <Scrolltotop />
        <Navbar />
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
          
        </Routes> 
        </div>
        <Footer />
       </Router>
    </div>
   
  )
}
export default App;