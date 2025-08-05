import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Acceuil from './Components/Acceuil/Acceuil';
import Actualité from './Components/actualité/Actualité';
import Prestataires from './Components/prestataires/Prestataires';
import About from './Components/about/About';
import Contact from './Components/contact/Contact';
import { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";
import Services from './Components/Service/Services';
import ProjetForm2 from './Components/Forms/ProjetForm2';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'react-phone-input-2/lib/style.css';
import Footer from './Components/footer/Footer';
import Realisation from './Components/Realisation/Realisation';



function App() {
  useEffect(() => {
    new PureCounter();
  }, []);
  return (
    <>
    <Router>
         <Menu></Menu>
         <Routes>
          <Route path='/' element={<Acceuil></Acceuil> } ></Route>
          <Route path='/services' element={<Services></Services> } ></Route>
          <Route path='/about' element={<About></About> } ></Route>
          <Route path='/Réalisation' element={<Realisation></Realisation> } ></Route>
          <Route path='/contact' element={<Contact></Contact> } ></Route>
          <Route path='/devis' element={<ProjetForm2></ProjetForm2> } ></Route>
          {/* <Route path='/ContactClient' element={<Contactclients></Contactclients> } ></Route> */}
         </Routes>
        <Footer></Footer>
      </Router>
       
        
        
    </>
      

      
   
    
  );
}

export default App;
