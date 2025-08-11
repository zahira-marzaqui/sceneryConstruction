import { useState } from "react";
import { Link } from "react-router-dom";
// import "./Realisation.css";

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
  },
  {
    id: 5,
    titre: "Villa moderne à Agadir",
    image: "assets/img/realisation/1.webp",
    description: "Construction complète d’une villa avec piscine et jardin.",
    categorie: "Construction"
  },
  {
    id: 6,
    titre: "Rénovation appartement Casablanca",
    image: "assets/img/realisation/2.webp",
    description: "Rénovation complète du sol au plafond.",
    categorie: "Rénovation"
  },
  {
    id: 7,
    titre: "Aménagement bureau Rabat",
    image: "assets/img/realisation/1.webp",
    description: "Design et aménagement intérieur d’un open space.",
    categorie: "Aménagement"
  },
  {
    id: 8,
    titre: "Aménagement bureau Rabat",
    image: "assets/img/realisation/2.webp",
    description: "Design et aménagement intérieur d’un open space.",
    categorie: "Aménagement"
  }
  
];

const categories = ["Tous", "Construction", "Rénovation", "Aménagement"];

function Realisation() {
  const [selectedCat, setSelectedCat] = useState("Tous");

  const filteredRealisations =
    selectedCat === "Tous"
      ? realisations
      : realisations.filter((r) => r.categorie === selectedCat);

  return (
    <>
      <section className="realisation-hero text-center py-5 ">
        <div className="container">
          <h1 className="display-4">Nos Réalisations</h1>
          <p className="lead">Découvrez quelques-uns des projets que nous avons menés avec succès</p>
        </div>
      </section>

      <div className="container text-center py-3 filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn outline m-1 ${selectedCat === cat ? "active" : ""}`}
            onClick={() => setSelectedCat(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

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
      </div>

      {/* CTA Section */}
          <div className="cta-section mb-5" data-aos="fade-up" data-aos-delay={800}>
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h3>Prêt à lancer votre projet ?</h3>
                <p>Faites appel à nos experts pour réaliser vos travaux en toute confiance.</p>
                <div className="action-buttons">
                  <Link to="/devis" className="btn btn-primary">Obtenir un devis</Link>
                  <Link to="/services" className="btn btn-secondary">Voir nos réalisations</Link>
                </div>

              </div>
            </div>
          </div>
          {/* End CTA Section */}

     
    </>
  );
}

export default Realisation;
