import React, { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Swal from 'sweetalert2';

function FormPublierProjet() {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    ville: "",
    typeBien: "",
    service: "",
    name: "",
    telephone: "",
    files: []
  });

  const FormTitles = [
    "Dites-nous tout sur votre projet :",
    "Entrer votre contact :",
    "Entrer d'autre information sur votre projet :"
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <Form1 formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Form2 formData={formData} setFormData={setFormData} />;
    } else {
      return <Form3 formData={formData} setFormData={setFormData} />;
    }
  };

  

const handleSubmit = async () => {
  // ⚠️ Vérification des champs obligatoires
  if (
    !formData.ville ||
    !formData.typeBien ||
    !formData.service ||
    !formData.name ||
    !formData.telephone
  ) {
    Swal.fire({
      icon: 'warning',
      title: 'Champs requis manquants',
      text: 'Veuillez remplir tous les champs obligatoires avant de continuer.',
      confirmButtonColor: '#f27474'
    });
    return; // ⛔ empêcher l'envoi
  }

  // 📦 Préparer les données
  const data = new FormData();
  data.append("nom_client", formData.name);
  data.append("telephone", formData.telephone);
  data.append("ville", formData.ville);
  data.append("type_bien", formData.typeBien);
  data.append("service", formData.service);

  formData.files.forEach((file) => {
    data.append("fichiers", file);
  });

  try {
    const res = await fetch("http://localhost:5000/api/projets", {
      method: "POST",
      body: data,
    });

    const result = await res.json();

    if (res.status === 201) {
      Swal.fire({
        icon: 'success',
        title: 'Projet enregistré avec succès',
        // text: `Projet #${result.projetId}`,
        confirmButtonColor: '#3dcf33ff'
      });

      setFormData({
        ville: "",
        typeBien: "",
        service: "",
        name: "",
        telephone: "",
        files: []
      });
      setPage(0);
    } else {
      throw new Error(result.message || "Erreur inconnue");
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Erreur',
      text: error.message,
    });
  }
};


  return (
    <div className="col-lg-6">
      <div className="hero-visual" data-aos="fade-left" data-aos-delay={400}>
        <div className="visual-container">
          <div className="featured-property">
            <div className="search-container" data-aos="fade-up" data-aos-delay={300}>
              <div className="search-header">
                <h3>
                  {page !== 0 && (
                    <i
                      className="bi bi-arrow-left me-4"
                      style={{ fontSize: "2rem", cursor: "pointer" }}
                      onClick={() => setPage((currPage) => currPage - 1)}
                    ></i>
                  )}
                  {FormTitles[page]}
                </h3>
              </div>

              <div className="property-search-form">
                {PageDisplay()}

                <button
                  type="button"
                  className="search-btn"
                  onClick={() => {
                    if (page === FormTitles.length - 1) {
                      handleSubmit(); // dernière étape
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                >
                  {page === 0 && <i className="bi bi-search me-2" />}
                  <span>
                    {page === 0
                      ? "Décriver mon projet"
                      : page === 1
                      ? "Continuer"
                      : "Enregistrer mon projet"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPublierProjet;
