import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

function PartenaireForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",       // e.g. +212...
    email: "",
    city: "",
    type: "",
    service: "",
  });
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  // URL API : .env (dev/prod)
  const API_URL =
    import.meta?.env?.VITE_API_URL ||
    process.env.REACT_APP_API_URL ||
    "http://localhost:5000";

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onPhoneChange = (value/*, country, e, formattedValue*/) => {
    // value est déjà en E.164 sans "+"
    // react-phone-input-2 renvoie souvent sans le '+', on l’ajoute si besoin
    const normalized = value.startsWith("+") ? value : `+${value}`;
    setForm((f) => ({ ...f, phone: normalized }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", msg: "Envoi en cours..." });

    try {
      const { data } = await axios.post(`${API_URL}/api/partenaires`, form, {
        headers: { "Content-Type": "application/json" },
      });
      if (data.success) {
        setStatus({ state: "success", msg: data.message || "Candidature envoyée ✅" });
        setForm({ name: "", phone: "", email: "", city: "", type: "", service: "" });
      } else {
        setStatus({ state: "error", msg: data.message || "Une erreur est survenue." });
      }
    } catch (err) {
      setStatus({ state: "error", msg: "Erreur réseau/serveur. Réessayez plus tard." });
    }
  };

  return (
    <form onSubmit={onSubmit}>
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
            value={form.name}
            onChange={onChange}
            required
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
            value={form.phone}
            onChange={onPhoneChange}
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
            value={form.email}
            onChange={onChange}
            required
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
            value={form.city}
            onChange={onChange}
          />
        </div>

        {/* Type */}
        <div className="search-field has-icon">
          <label className="field-label" htmlFor="type">Type</label>
          <i className="bi bi-buildings field-icon" aria-hidden="true" />
          <select
            id="type"
            name="type"
            required
            className="form-select with-icon"
            value={form.type}
            onChange={onChange}
          >
            <option value="">Sélectionnez</option>
            <option value="entreprise">Entreprise</option>
            <option value="entrepreneur">Entrepreneur</option>
            <option value="professionnel">Professionnel</option>
            <option value="autre">Autre…</option>
          </select>
        </div>

        {/* Service */}
        <div className="search-field has-icon">
          <label className="field-label" htmlFor="service">Service</label>
          <i className="bi bi-tools field-icon" aria-hidden="true" />
          <select
            id="service"
            name="service"
            required
            className="form-select with-icon"
            value={form.service}
            onChange={onChange}
          >
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
       <button
         type="submit"
         className="search-btn"
         >
       <span>
           Envoyer
       </span>
       </button>
        <div className="mt-2" role="status" aria-live="polite">
          {status.state === "loading" && "Envoi en cours…"}
          {status.state === "success" && <span className="text-success">{status.msg}</span>}
          {status.state === "error" && <span className="text-danger">{status.msg}</span>}
        </div>

      
    </form>
  );
}

export default PartenaireForm;
