
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

const realisations = [
  {
    id: 1,
    titre: "Villa moderne à Agadir",
    image: "assets/img/realisation/1.webp",
    description: "Construction complète d’une villa avec piscine et jardin.",
    categorie: "Construction"
  },
  {
    id: 2,
    titre: "Rénovation appartement Casablanca",
    image: "assets/img/realisation/2.webp",
    description: "Rénovation complète du sol au plafond.",
    categorie: "Rénovation"
  },
  {
    id: 3,
    titre: "Aménagement bureau Rabat",
    image: "assets/img/realisation/1.webp",
    description: "Design et aménagement intérieur d’un open space.",
    categorie: "Aménagement"
  },
  {
    id: 4,
    titre: "Aménagement bureau Rabat",
    image: "assets/img/realisation/2.webp",
    description: "Design et aménagement intérieur d’un open space.",
    categorie: "Aménagement"
  }
  
];
function RealisationAcceuil() {
  const [selectedCat, setSelectedCat] = useState("Tous");

    const filteredRealisations =
    selectedCat === "Tous"
      ? realisations
      : realisations.filter((r) => r.categorie === selectedCat);
    return ( 
        <>
            {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Nos Réalisations </h2>
            <p>Découvrez quelques-uns des projets que nous avons menés avec succès</p>
          </div>
            {/* End Section Title */}
            
            <div className="container py-4">
                <div className="row">
                    {filteredRealisations.map((item) => (
                    <div className="col-lg-3 col-md-4 mb-4" key={item.id}>
                        <div className="realisation-tile position-relative overflow-hidden">
                        <img src={item.image} className="img-fluid w-100" alt={item.titre} />
                        <div className="overlay">
                            <div className="overlay-content text-center mt-2">
                            <h5>{item.titre}</h5>
                            <p>{item.description}</p>
                            <Link to='/Réalisation-Details' className="btn btn-sm">
                                Voir plus
                            </Link>
                            </div>
                        </div>
                        <div className="label position-absolute text-white px-3 py-2">
                            {item.titre}
                        </div>
                        </div>
                    </div>
                    ))}
                </div>

                
                <div className="text-center mt-4">
                    <Link to="/Réalisation">
                    <span className="hero-label">
                        voir tous nos réalisations
                        <i className="bi bi-arrow-right ms-2" />
                    </span>
                    </Link>
                </div>
                </div>

        </>
     );
}

export default RealisationAcceuil;