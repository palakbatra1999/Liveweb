import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './ReactMenu/Home'
import About from './ReactMenu/About'
import Contact from './ReactMenu/Contact'
import Service from './ReactMenu/Service';
import Navbar from './ReactMenu/Navbar';
import Footer from './ReactMenu/Footer'
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
  <>
   <Navbar/>
   <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/service" element={<Service/>} />
        <Route path="*" element={<Navigate to="/" />} />
        
     
   </Routes>
   <Footer/>
  </>
  );
}

export default App;
