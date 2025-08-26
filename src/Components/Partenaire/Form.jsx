import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Form() {
  return (
    <>
      <div className="search-grid">
        {/* Nom et prénom */}
        <div className="search-field full-width has-icon">
          <label className="field-label" htmlFor="fullName">Nom et prénom</label>
          <i className="bi bi-person field-icon" aria-hidden="true" />
          <input
            id="fullName"
            type="text"
            name="name"
            placeholder="Entrer votre nom complet"
            className="form-control with-icon"
          />
        </div>

        {/* Téléphone */}
        <div className="search-field full-width has-icon">
          <label className="field-label" htmlFor="phone">Numéro de téléphone</label>
          <i className="bi bi-telephone field-icon" aria-hidden="true" />
          <PhoneInput
            inputProps={{ id: "phone", name: "phone", required: true }}
            country={"ma"}
            containerClass="phone-wrapper"
            inputClass="form-control with-icon"
            buttonClass="phone-flag-btn"
            inputStyle={{ width: "100%" }}
          />
        </div>

        {/* Email */}
        <div className="search-field full-width has-icon">
          <label className="field-label" htmlFor="email">Adresse Email</label>
          <i className="bi bi-envelope field-icon" aria-hidden="true" />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="exemple@domaine.com"
            className="form-control with-icon"
          />
        </div>

        {/* Ville */}
        <div className="search-field full-width has-icon">
          <label className="field-label" htmlFor="city">La ville</label>
          <i className="bi bi-geo-alt field-icon" aria-hidden="true" />
          <input
            id="city"
            type="text"
            name="city"
            placeholder="Ex. Agadir"
            className="form-control with-icon"
          />
        </div>

        {/* Type */}
        <div className="search-field has-icon">
          <label className="field-label" htmlFor="type">Type</label>
          <i className="bi bi-buildings field-icon" aria-hidden="true" />
          <select id="type" name="type" required className="form-select with-icon">
            <option value="">Sélectionnez</option>
            <option value="entreprise">Entreprise</option>
            <option value="entrepreneur">Entrepreneur</option>
            <option value="crafter">Professionnel</option>
            <option value="crafter">Autre..</option>
          </select>
        </div>

        {/* Service */}
        <div className="search-field has-icon">
          <label className="field-label" htmlFor="service">Service</label>
          <i className="bi bi-tools field-icon" aria-hidden="true" />
          <select id="service" name="service" required className="form-select with-icon">
            <option value="">Sélectionnez</option>
            <option value="construction-maisons">Construction</option>
            <option value="renovation-amenagement">Rénovation globale</option>
            <option value="menuiserie">Menuiserie</option>
            <option value="electricite">Électricité</option>
            <option value="plomberie">Plomberie</option>
            <option value="jardinage">Jardinage</option>
            <option value="peinture">Peinture</option>
            <option value="revetement-sol">Revêtement de sol</option>
            <option value="construction-piscines">Construction de piscines</option>
            <option value="construction-generale">Construction générale</option>
            <option value="services-environnementaux">Services environnementaux</option>
          </select>
        </div>
      </div>

      <br />
    </>
  );
}

export default Form;
