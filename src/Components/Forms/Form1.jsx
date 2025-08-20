function Form1({ formData, setFormData }) {
  return (
    <div className="search-grid">
      <div className="search-field full-width">
        <label className="field-label">Ville</label>
        <select
          name="ville"
          value={formData.ville}
          onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
          required
        >
          <option value="">Sélectionnez une ville</option>
                         <option value="agadir">Agadir</option>
                           <option value="inezgane">Inezgane</option>
                           <option value="ait-melloul">Aït Melloul</option>
                           <option value="taroudant">Taroudant</option>
                           <option value="tiznit">Tiznit</option>
                           <option value="chtouka-ait-baha">Chtouka Aït Baha</option>
                           <option value="tafraout">Tafraout</option>
                           <option value="biougra">Biougra</option>
                           <option value="ouarzazate">Marrakech</option>
          {/* autres options */}
        </select>
        <i className="bi bi-geo-alt field-icon" />
      </div>

      <div className="search-field">
        <label className="field-label">Type de bien</label>
        <select
          name="typeBien"
          value={formData.typeBien}
          onChange={(e) => setFormData({ ...formData, typeBien: e.target.value })}
          required
        >
          <option value="">Sélectionnez</option>
                          <option value="villa">Villa</option>
                           <option value="Maison">Maison</option>
                           <option value="apartment">Appartement</option>
                           <option value="commercial">Local Commercial</option>
        </select>
        <i className="bi bi-building field-icon" />
      </div>

      <div className="search-field">
        <label className="field-label">Service</label>
        <select
          name="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          required
        >
         <option value="">Sélectionnez</option>
                     <option value="construction-maisons">Construction</option>
                     <option value="renovation-amenagement">Rénovation global</option>
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
        <i className="bi bi-tools field-icon" />
      </div>
    </div>
  );
}

export default Form1;


