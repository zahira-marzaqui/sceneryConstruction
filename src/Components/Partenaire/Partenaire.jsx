import React from "react";
import { Link } from 'react-router-dom';


function Partenaire({
  
}) {
  return (
    <>
      <section className="container">
        <style>{`
          .cta-card{
            display: grid;
            grid-template-columns: 1.25fr 1fr;
            gap: clamp(1rem, 3vw, 2.5rem);
            background: #000000ff; /* peach doux */
            border-radius: 20px;
            padding: 2.5rem;
            
            margin: 2rem auto;
            align-items: center;
            position: relative;
            overflow: hidden;
            height: 400px;
          }
          /* Vidéo en arrière-plan */
          .cta-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1;
          }

          /* Overlay noir semi-transparent */
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.83); /* Opacité ajustable */
            z-index: 2;
          }
          .cta-content, .cta-illustration {
            position: relative;
            z-index: 3;
            margin-top: -30px;
          }
          .cta-content h2{
            font-size: clamp(1.5rem, 3.2vw, 3rem);
            line-height: 1.5;
            color: #ffffffff; /* noir doux */
            font-weight: 800;
            margin: 0 0 1rem;
          }
          .cta-content p{
            font-size: clamp(0.95rem, 1.3vw, 1.3rem);
            color: #ffffffff;
            margin: 0;
          }
          .accent{ color: #f58633; }
          .brand{ color: #ffffffff; }
          .accent-brand{ color: #f58633; font-weight: 600; }

          .cta-illustration {
            position: absolute;      /* Important pour placer le bouton */
            bottom: 30px;           /* Décalage du bas */
            right: 25px;            /* Décalage de la droite */
            z-index: 3;             /* Toujours visible */
          }

          /* Bouton stylisé */
          .cta-btn {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            gap: .6rem;
            padding: 1.1rem 2rem;      /* Plus grand padding */
            width: 300px;              /* Largeur légèrement plus grande */
            background: #f58633;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-weight: 700;
            font-size: clamp(0.80rem, 1.3vw, 1.1rem);
            text-decoration: none;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
            transform: translateZ(0);
            transition: transform .2s ease, box-shadow .2s ease, opacity .2s ease;
            cursor: pointer;
            z-index: 3;
          }
          .titre-button:hover{
            color: #fff;

          }

          .cta-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 14px 30px rgba(5, 5, 5, 0.35);
            color: #fff;

          }

          /* Pour mobile : bouton centré en bas */
          @media (max-width: 992px) {
            .cta-illustration {
              position: relative;
              bottom: auto;
              right: auto;
              display: flex;
              justify-content: center;
              margin-top: 1.5rem;
            }

            .cta-btn {
              width: 80%; /* Plus large sur mobile */
            }
          }

          .cta-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 14px 30px rgba(5, 5, 5, 0.35);
          }

          .cta-btn:active{ transform: translateY(0); }
          .cta-btn .arrow{ font-size: 1.2rem; line-height: 1; }

          @media (max-width: 992px){
            .cta-card{ grid-template-columns: 1fr; }
            .cta-illustration{ min-height: 220px; background-position: center right; }
            .cta-btn{ position: static; margin-top: 1.25rem; }
          }
        `}</style>

        <div className=" cta-card">
          {/* Vidéo en arrière-plan */}
          <video autoPlay loop muted playsInline className="cta-video">
            <source src="assets/img/vidio/vid cta.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo HTML5.
          </video>

          {/* Overlay noir */}
          <div className="overlay"></div>

          <div className="cta-content">
            <h2>
              Devenez<span className="accent"> partenaire</span> Avec <span className="brand">Scenery Construction</span> !
            </h2>
            <p>
              Vous êtes un entrepreneur ou une entreprise qualifiée ? Rejoignez-nous pour bâtir ensemble des projets solides et durables.
            </p>

            {/* Bouton déplacé ici */}
            

           
          </div>

          <div className="cta-illustration">
            <Link to="/partenariat" className="cta-btn" >
                <span className="titre-button">Devenir partenaire</span>  <span className="arrow">→</span>

            </Link>
            
          </div>

      
        </div>
      </section>
    </>
  );
}

export default Partenaire;
