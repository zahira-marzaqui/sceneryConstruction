function Form3({ formData, setFormData }) {
  const handleFileChange = (e) => {
    setFormData({ ...formData, files: Array.from(e.target.files) });
  };

  return (
    <div className="search-grid">
      <div className="search-field full-width">
        <div className="upload-box">
          <i className="bi bi-cloud-arrow-up" />
          <p><strong>Joignez des plans, photos, etc. de votre projet</strong></p>
          <div className="file-upload-wrapper">
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
            <label htmlFor="fileInput" className="custom-upload-btn">
              Choisir des images
            </label>
          </div>

          {/* ✅ Phrase simple */}
          {formData.files.length > 0 && (
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#555' }}>
              {formData.files.length} fichier{formData.files.length > 1 ? 's' : ''} sélectionné{formData.files.length > 1 ? 's' : ''}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}


export default Form3;
