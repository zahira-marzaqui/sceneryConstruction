import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Form2({ formData, setFormData }) {
  return (
    <div className="search-grid">
      <div className="search-field full-width">
        <label className="field-label">Nom et prénom</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Entrer votre nom complet"
          className="form-control"
        />
        <i className="bi bi-person field-icon" />
      </div>

      <div className="search-field full-width">
        <label className="field-label">Numéro de téléphone</label>
        <PhoneInput
          country={'ma'} // 🇲🇦 par défaut
          value={formData.telephone}
          onChange={(phone) => setFormData({ ...formData, telephone: phone })}
          inputClass="form-control"
          inputStyle={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

export default Form2;
