import { NavLink } from "react-router-dom";

function Footer() {
    return ( 
        <>
            
        <footer className="footer mt-auto bg-dark text-light py-4">
        <div className="container">
        <div className="row">
          {/* Colonne 1 */}
          <div className="col-md-4 mb-3">
            <h5>Scenery Construction</h5>
            <p>Nous construisons vos idées avec passion et professionnalisme.</p>
            <div class="social-links d-flex mt-4">
            {/* <a href=""><i class="bi bi-twitter-x"></i></a> */}
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            {/* <a href=""><i class="bi bi-linkedin"></i></a> */}
          </div>

          </div>
          
          {/* Colonne 2 */}
          <div className="col-md-4 mb-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><NavLink to="/" className="text-light">Accueil</NavLink></li>
              <li><NavLink to="/services" className="text-light">Services</NavLink></li>
              <li><NavLink to="/about" className="text-light">À propos</NavLink></li>
              <li><NavLink to="/Réalisation" className="text-light">Réalisation</NavLink></li>
              <li><NavLink to="/contact" className="text-light">Contact</NavLink></li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p><i className="bi bi-telephone"></i> +212663-039059</p>
            <p><i className="bi bi-envelope"></i> contact@scenery-construction.com</p>
            <p><i className="bi bi-geo-alt"></i> App 6 ,3éme etage Imm FM16, Agadir 80000</p>
          </div>
          

          
        </div>

        <hr className="border-light" />
        <div className="text-center">
          &copy; {new Date().getFullYear()} Scenery Construction. Tous droits réservés.
        </div>
      </div>
    </footer>

        </>
     );
}

export default Footer;