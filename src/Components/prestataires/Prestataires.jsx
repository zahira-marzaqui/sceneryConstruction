function Prestataires() {
    return ( 
        <>
                {/* prestataire Section */}
        <section id="properties" className="properties section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="search-bar mb-5" data-aos="fade-up" data-aos-delay={150}>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                <div className="search-wrapper">
                    <div className="row g-3">
                    <div className="col-lg-3 col-md-6">
                        <div className="search-field">
                        <label>Location</label>
                        <input type="text" className="form-control" placeholder="Enter city or zip" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="search-field">
                        <label>Type</label>
                        <select className="form-select">
                            <option>Any Type</option>
                            <option>House</option>
                            <option>Apartment</option>
                            <option>Condo</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="search-field">
                        <label>Price</label>
                        <select className="form-select">
                            <option>Any Price</option>
                            <option>$0 - $500k</option>
                            <option>$500k - $1M</option>
                            <option>$1M+</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="search-field">
                        <label>Bedrooms</label>
                        <div className="bedroom-quick">
                            <button className="bed-btn" data-beds="any">Any</button>
                            <button className="bed-btn" data-beds={1}>1+</button>
                            <button className="bed-btn" data-beds={2}>2+</button>
                            <button className="bed-btn" data-beds={3}>3+</button>
                            <button className="bed-btn" data-beds={4}>4+</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-12">
                        <div className="search-field">
                        <label>&nbsp;</label>
                        <button className="btn btn-primary w-100 search-btn">
                            <i className="bi bi-search" /> Search
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="results-header mb-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="row align-items-center">
                <div className="col-lg-6">
                <div className="results-info">
                    <h5>124 Prestataires trouvé</h5>
                    <p className="text-muted">Showing prestataire in Beverly Hills, CA</p>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="results-controls">
                    {/* <div className="d-flex gap-3 align-items-center justify-content-lg-end">
                    <div className="sort-dropdown">
                        <select className="form-select form-select-sm">
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Newest First</option>
                        <option>Largest Size</option>
                        </select>
                    </div>
                    <div className="view-toggle">
                        <button className="view-btn active" data-view="masonry">
                        <i className="bi bi-grid" />
                        </button>
                        <button className="view-btn" data-view="rows">
                        <i className="bi bi-view-stacked" />
                        </button>
                    </div>
                    </div> */}
                </div>
                </div>
            </div>
            </div>
            {/* <div className="properties-container">
            <div className="properties-masonry view-masonry active" data-aos="fade-up" data-aos-delay={250}>
                <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                    <div className="property-item">
                    <a href="property-details.html" className="property-link">
                        <div className="property-image-wrapper">
                        <img src="assets/img/real-estate/property-exterior-2.webp" alt="Luxury Villa" className="img-fluid" />
                        <div className="property-status">
                            <span className="status-badge featured">Featured</span>
                            <span className="status-badge sale">For Sale</span>
                        </div>
                        <div className="property-actions">
                            <button className="action-btn favorite-btn" data-toggle="tooltip" title="Add to Favorites">
                            <i className="bi bi-heart" />
                            </button>
                            <button className="action-btn share-btn" data-toggle="tooltip" title="Share Property">
                            <i className="bi bi-share" />
                            </button>
                            <button className="action-btn gallery-btn" data-toggle="tooltip" title="View Gallery">
                            <i className="bi bi-images" />
                            <span className="gallery-count">14</span>
                            </button>
                        </div>
                        </div>
                    </a>
                    <div className="property-details"><a href="property-details.html" className="property-link">
                        <div className="property-header">
                            <div className="property-price">$1,850,000</div>
                            <div className="property-type">House</div>
                        </div>
                        <h4 className="property-title">Luxury Modern Villa with Pool</h4>
                        <p className="property-address">
                            <i className="bi bi-geo-alt" />
                            3458 Sunset Boulevard, Beverly Hills, CA 90210
                        </p>
                        <div className="property-specs">
                            <div className="spec-item">
                            <i className="bi bi-house-door" />
                            <span>5 Bedrooms</span>
                            </div>
                            <div className="spec-item">
                            <i className="bi bi-droplet" />
                            <span>4 Bathrooms</span>
                            </div>
                            <div className="spec-item">
                            <i className="bi bi-arrows-angle-expand" />
                            <span>3,400 sq ft</span>
                            </div>
                        </div>
                        </a>
                        <div className="property-agent-info"><a href="property-details.html" className="property-link">
                            <div className="agent-avatar">
                            <img src="assets/img/real-estate/agent-2.webp" alt="Agent" />
                            </div>
                            <div className="agent-details">
                            <strong>Jennifer Miller</strong>
                            <span>Prime Realty Group</span>
                            </div>
                        </a>
                        <div className="agent-contact"><a href="property-details.html" className="property-link">
                            </a><a href="tel:+15551234567" className="contact-btn">
                            <i className="bi bi-telephone" />
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>End Property Item
                <div className="col-lg-4 col-md-6">
                    <div className="property-item">
                    <a href="property-details.html" className="property-link">
                        <div className="property-image-wrapper">
                        <img src="assets/img/real-estate/property-interior-1.webp" alt="Modern Apartment" className="img-fluid" />
                        <div className="property-status">
                            <span className="status-badge new">New Listing</span>
                            <span className="status-badge rent">For Rent</span>
                        </div>
                        <div className="property-actions">
                            <button className="action-btn favorite-btn" data-toggle="tooltip" title="Add to Favorites">
                            <i className="bi bi-heart" />
                            </button>
                            <button className="action-btn share-btn" data-toggle="tooltip" title="Share Property">
                            <i className="bi bi-share" />
                            </button>
                            <button className="action-btn gallery-btn" data-toggle="tooltip" title="View Gallery">
                            <i className="bi bi-images" />
                            <span className="gallery-count">9</span>
                            </button>
                        </div>
                        </div>
                    </a>
                    <div className="property-details"><a href="property-details.html" className="property-link">
                        <div className="property-header">
                            <div className="property-price">$5,200<span>/month</span></div>
                            <div className="property-type">Apartment</div>
                        </div>
                        <h4 className="property-title">Downtown Modern Penthouse</h4>
                        <p className="property-address">
                            <i className="bi bi-geo-alt" />
                            1247 Broadway Street, Manhattan, NY 10001
                        </p>
                        <div className="property-specs">
                            <div className="spec-item">
                            <i className="bi bi-house-door" />
                            <span>3 Bedrooms</span>
                            </div>
                            <div className="spec-item">
                            <i className="bi bi-droplet" />
                            <span>2 Bathrooms</span>
                            </div>
                            <div className="spec-item">
                            <i className="bi bi-arrows-angle-expand" />
                            <span>2,100 sq ft</span>
                            </div>
                        </div>
                        </a>
                        <div className="property-agent-info"><a href="property-details.html" className="property-link">
                            <div className="agent-avatar">
                            <img src="assets/img/real-estate/agent-4.webp" alt="Agent" />
                            </div>
                            <div className="agent-details">
                            <strong>Robert Thompson</strong>
                            <span>Urban Living Realty</span>
                            </div>
                        </a>
                        <div className="agent-contact"><a href="property-details.html" className="property-link">
                            </a><a href="tel:+15552345678" className="contact-btn">
                            <i className="bi bi-telephone" />
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>End Property Item
                <div className="col-lg-4 col-md-6">
                    <div className="property-item">
                    <a href="property-details.html" className="property-link">
                        <div className="property-image-wrapper">
                        <img src="assets/img/real-estate/property-exterior-5.webp" alt="Family Home" className="img-fluid" />
                        <div className="property-status">
                            <span className="status-badge sale">For Sale</span>
                        </div>
                        <div className="property-actions">
                            <button className="action-btn favorite-btn" data-toggle="tooltip" title="Add to Favorites">
                            <i className="bi bi-heart" />
                            </button>
                            <button className="action-btn share-btn" data-toggle="tooltip" title="Share Property">
                            <i className="bi bi-share" />
                            </button>
                            <button className="action-btn gallery-btn" data-toggle="tooltip" title="View Gallery">
                            <i className="bi bi-images" />
                            <span className="gallery-count">11</span>
                            </button>
                        </div>
                        </div>
                    </a>
                    <div className="property-details"><a href="property-details.html" className="property-link">
                        <div className="property-header">
                            <div className="property-price">$975,000</div>
                            <div className="property-type">House</div>
                        </div>
                        <h4 className="property-title">Charming Family Home with Garden</h4>
                        <p className="property-address">
                            <i className="bi bi-geo-alt" />
                            892 Maple Grove Avenue, Austin, TX 73301
                        </p>
                        <div className="property-specs">
                            <div className="spec-item">
                            <i className="bi bi-house-door" />
                            <span>4 Bedrooms</span>
                            </div>
                            <div className="spec-item">
                            <i className="bi bi-droplet" />
                            <span>3 Bathrooms</span>
                            </div>
                            <div className="spec-item">
                            <i className="bi bi-arrows-angle-expand" />
                            <span>2,650 sq ft</span>
                            </div>
                        </div>
                        </a>
                        <div className="property-agent-info"><a href="property-details.html" className="property-link">
                            <div className="agent-avatar">
                            <img src="assets/img/real-estate/agent-6.webp" alt="Agent" />
                            </div>
                            <div className="agent-details">
                            <strong>Lisa Anderson</strong>
                            <span>Texas Home Solutions</span>
                            </div>
                        </a>
                        <div className="agent-contact"><a href="property-details.html" className="property-link">
                            </a><a href="tel:+15553456789" className="contact-btn">
                            <i className="bi bi-telephone" />
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>End Property Item
                <div className="col-lg-4 col-md-6">
                    <div className="property-item">
                    <a href="property-details.html" className="property-link">
                        <div className="property-image-wrapper">
                        <img src="assets/img/real-estate/property-interior-6.webp" alt="Studio Loft" className="img-fluid" />
                        <div className="property-status">
                            <span className="status-badge open">Open House</span>
                            <span className="status-badge rent">For Rent</span>
                        </div>
                        <div className="property-actions">
                            <button className="action-btn favorite-btn" data-toggle="tooltip" title="Add to Favorites">
                            <i className="bi bi-heart" />
                            </button>
                            <button className="action-btn share-btn" data-toggle="tooltip" title="Share Property">
                            <i className="bi bi-share" />
                            </button>
                            <button className="action-btn gallery-btn" data-toggle="tooltip" title="View Gallery">
                            <i className="bi bi-images" />
                            <span className="gallery-count">7</span>
                            </button>
                        </div>
                        </div>
                    </a>
                    <div className="property-details"><a href="property-details.html" className="property-link">
                        <div className="property-header">
                            <div className="property-price">$3,400<span>/month</span></div>
                            <div className="property-type">Loft</div>
                        </div>
                        <h4 className="property-title">Industrial Style Studio Loft</h4>
                        <p className="property-address">
                            <i className="bi bi-geo-alt" />
                            567 Warehouse District, Brooklyn, NY 11201
                        </p>
                        <div className="property-specs">
                            <div className="spec-item">
                            <i className="bi bi-house-door" />
                            <span>Studio</span>
                            </div>
                            <div className="spec-item">
                            <i className="bi bi-droplet" />
                            <span>1 Bathroom</span>
                            </div>
                            <div className="spec-item">
                            <i className="bi bi-arrows-angle-expand" />
                            <span>1,200 sq ft</span>
                            </div>
                        </div>
                        </a>
                        <div className="property-agent-info"><a href="property-details.html" className="property-link">
                            <div className="agent-avatar">
                            <img src="assets/img/real-estate/agent-8.webp" alt="Agent" />
                            </div>
                            <div className="agent-details">
                            <strong>Marcus Johnson</strong>
                            <span>Brooklyn Properties</span>
                            </div>
                        </a>
                        <div className="agent-contact"><a href="property-details.html" className="property-link">
                            </a><a href="tel:+15554567890" className="contact-btn">
                            <i className="bi bi-telephone" />
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>End Property Item
                <div className="col-lg-4 col-md-6">
                    <div className="property-item">
                    <a href="property-details.html" className="property-link">
                        <div className="property-image-wrapper">
                        <img src="assets/img/real-estate/property-exterior-7.webp" alt="Townhouse" className="img-fluid" />
                        <div className="property-status">
                            <span className="status-badge sale">For Sale</span>
                        </div>
                        <div className="property-actions">
                            <button className="action-btn favorite-btn" data-toggle="tooltip" title="Add to Favorites">
                            <i className="bi bi-heart" />
                            </button>
                            <button className="action-btn share-btn" data-toggle="tooltip" title="Share Property">
                            <i className="bi bi-share" />
                            </button>
                            <button className="action-btn gallery-btn" data-toggle="tooltip" title="View Gallery">
                            <i className="bi bi-images" />
                            <span className="gallery-count">16</span>
                            </button>
                        </div>
                        </div>
                    </a>
                    <div className="property-details"><a href="property-details.html" className="property-link">
                        <div className="property-header">
                            <div className="property-price">$725,000</div>
                            <div className="property-type">Townhouse</div>
                        </div>
                        <h4 className="property-title">Contemporary Waterfront Townhouse</h4>
                        <p className="property-address">
                            <i className="bi bi-geo-alt" />
                            234 Harbor Drive, Miami, FL 33101
                        </p>
                        <div className="property-specs">
                            <div className="spec-item">
                            <i className="bi bi-house-door" />
                            <span>3 Bedrooms</span>
                            </div>
                            <div className="spec-item">
                            <i className="bi bi-droplet" />
                            <span>2 Bathrooms</span>
                            </div>
                            <div className="spec-item">
                            <i className="bi bi-arrows-angle-expand" />
                            <span>1,950 sq ft</span>
                            </div>
                        </div>
                        </a>
                        <div className="property-agent-info"><a href="property-details.html" className="property-link">
                            <div className="agent-avatar">
                            <img src="assets/img/real-estate/agent-9.webp" alt="Agent" />
                            </div>
                            <div className="agent-details">
                            <strong>Sofia Martinez</strong>
                            <span>Coastal Realty</span>
                            </div>
                        </a>
                        <div className="agent-contact"><a href="property-details.html" className="property-link">
                            </a><a href="tel:+15555678901" className="contact-btn">
                            <i className="bi bi-telephone" />
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>End Property Item
                <div className="col-lg-4 col-md-6">
                    <div className="property-item">
                    <a href="property-details.html" className="property-link">
                        <div className="property-image-wrapper">
                        <img src="assets/img/real-estate/property-interior-8.webp" alt="Condo" className="img-fluid" />
                        <div className="property-status">
                            <span className="status-badge reduced">Price Reduced</span>
                            <span className="status-badge sale">For Sale</span>
                        </div>
                        <div className="property-actions">
                            <button className="action-btn favorite-btn" data-toggle="tooltip" title="Add to Favorites">
                            <i className="bi bi-heart" />
                            </button>
                            <button className="action-btn share-btn" data-toggle="tooltip" title="Share Property">
                            <i className="bi bi-share" />
                            </button>
                            <button className="action-btn gallery-btn" data-toggle="tooltip" title="View Gallery">
                            <i className="bi bi-images" />
                            <span className="gallery-count">12</span>
                            </button>
                        </div>
                        </div>
                    </a>
                    <div className="property-details"><a href="property-details.html" className="property-link">
                        <div className="property-header">
                            <div className="property-price">$645,000 <span className="old-price">$695,000</span></div>
                            <div className="property-type">Condo</div>
                        </div>
                        <h4 className="property-title">High-Rise Condo with City Views</h4>
                        <p className="property-address">
                            <i className="bi bi-geo-alt" />
                            789 Skyline Tower, Seattle, WA 98101
                        </p>
                        <div className="property-specs">
                            <div className="spec-item">
                            <i className="bi bi-house-door" />
                            <span>2 Bedrooms</span>
                            </div>
                            <div className="spec-item">
                            <i className="bi bi-droplet" />
                            <span>2 Bathrooms</span>
                            </div>
                            <div className="spec-item">
                            <i className="bi bi-arrows-angle-expand" />
                            <span>1,450 sq ft</span>
                            </div>
                        </div>
                        </a>
                        <div className="property-agent-info"><a href="property-details.html" className="property-link">
                            <div className="agent-avatar">
                            <img src="assets/img/real-estate/agent-10.webp" alt="Agent" />
                            </div>
                            <div className="agent-details">
                            <strong>James Wilson</strong>
                            <span>Pacific Northwest Realty</span>
                            </div>
                        </a>
                        <div className="agent-contact"><a href="property-details.html" className="property-link">
                            </a><a href="tel:+15556789012" className="contact-btn">
                            <i className="bi bi-telephone" />
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>End Property Item
                </div>
            </div>
            <div className="properties-rows view-rows">
                <div className="row g-4">
                <div className="col-12">
                    <div className="property-row-item">
                    <a href="property-details.html" className="property-row-link">
                        <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="property-image-wrapper">
                            <img src="assets/img/real-estate/property-exterior-2.webp" alt="Luxury Villa" className="img-fluid" />
                            <div className="property-status">
                                <span className="status-badge featured">Featured</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="property-row-content">
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                <div className="property-info">
                                    <div className="property-header">
                                    <h4 className="property-title">Luxury Modern Villa with Pool</h4>
                                    <div className="property-type-price">
                                        <span className="property-type">House</span>
                                        <span className="property-price">$1,850,000</span>
                                    </div>
                                    </div>
                                    <p className="property-address">
                                    <i className="bi bi-geo-alt" />
                                    3458 Sunset Boulevard, Beverly Hills, CA 90210
                                    </p>
                                    <div className="property-specs">
                                    <span><i className="bi bi-house-door" /> 5 Bed</span>
                                    <span><i className="bi bi-droplet" /> 4 Bath</span>
                                    <span><i className="bi bi-arrows-angle-expand" /> 3,400 sq ft</span>
                                    </div>
                                    <div className="property-agent">
                                    <img src="assets/img/real-estate/agent-2.webp" alt="Agent" className="agent-avatar" />
                                    <span>Jennifer Miller, Prime Realty Group</span>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-4">
                                <div className="property-actions">
                                    <div className="action-buttons">
                                    <button className="action-btn favorite-btn">
                                        <i className="bi bi-heart" /> Save
                                    </button>
                                    <button className="action-btn contact-btn">
                                        <i className="bi bi-telephone" /> Call
                                    </button>
                                    <button className="action-btn gallery-btn">
                                        <i className="bi bi-images" /> 14 Photos
                                    </button>
                                    </div>
                                    <span className="btn btn-primary view-details-btn">View Details</span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>
                </div>End Property Row Item
                <div className="col-12">
                    <div className="property-row-item">
                    <a href="property-details.html" className="property-row-link">
                        <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="property-image-wrapper">
                            <img src="assets/img/real-estate/property-interior-1.webp" alt="Modern Apartment" className="img-fluid" />
                            <div className="property-status">
                                <span className="status-badge new">New</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="property-row-content">
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                <div className="property-info">
                                    <div className="property-header">
                                    <h4 className="property-title">Downtown Modern Penthouse</h4>
                                    <div className="property-type-price">
                                        <span className="property-type">Apartment</span>
                                        <span className="property-price">$5,200<small>/month</small></span>
                                    </div>
                                    </div>
                                    <p className="property-address">
                                    <i className="bi bi-geo-alt" />
                                    1247 Broadway Street, Manhattan, NY 10001
                                    </p>
                                    <div className="property-specs">
                                    <span><i className="bi bi-house-door" /> 3 Bed</span>
                                    <span><i className="bi bi-droplet" /> 2 Bath</span>
                                    <span><i className="bi bi-arrows-angle-expand" /> 2,100 sq ft</span>
                                    </div>
                                    <div className="property-agent">
                                    <img src="assets/img/real-estate/agent-4.webp" alt="Agent" className="agent-avatar" />
                                    <span>Robert Thompson, Urban Living Realty</span>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-4">
                                <div className="property-actions">
                                    <div className="action-buttons">
                                    <button className="action-btn favorite-btn">
                                        <i className="bi bi-heart" /> Save
                                    </button>
                                    <button className="action-btn contact-btn">
                                        <i className="bi bi-telephone" /> Call
                                    </button>
                                    <button className="action-btn gallery-btn">
                                        <i className="bi bi-images" /> 9 Photos
                                    </button>
                                    </div>
                                    <span className="btn btn-primary view-details-btn">View Details</span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>
                </div>End Property Row Item
                <div className="col-12">
                    <div className="property-row-item">
                    <a href="property-details.html" className="property-row-link">
                        <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="property-image-wrapper">
                            <img src="assets/img/real-estate/property-exterior-5.webp" alt="Family Home" className="img-fluid" />
                            <div className="property-status">
                                <span className="status-badge sale">For Sale</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="property-row-content">
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                <div className="property-info">
                                    <div className="property-header">
                                    <h4 className="property-title">Charming Family Home with Garden</h4>
                                    <div className="property-type-price">
                                        <span className="property-type">House</span>
                                        <span className="property-price">$975,000</span>
                                    </div>
                                    </div>
                                    <p className="property-address">
                                    <i className="bi bi-geo-alt" />
                                    892 Maple Grove Avenue, Austin, TX 73301
                                    </p>
                                    <div className="property-specs">
                                    <span><i className="bi bi-house-door" /> 4 Bed</span>
                                    <span><i className="bi bi-droplet" /> 3 Bath</span>
                                    <span><i className="bi bi-arrows-angle-expand" /> 2,650 sq ft</span>
                                    </div>
                                    <div className="property-agent">
                                    <img src="assets/img/real-estate/agent-6.webp" alt="Agent" className="agent-avatar" />
                                    <span>Lisa Anderson, Texas Home Solutions</span>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-4">
                                <div className="property-actions">
                                    <div className="action-buttons">
                                    <button className="action-btn favorite-btn">
                                        <i className="bi bi-heart" /> Save
                                    </button>
                                    <button className="action-btn contact-btn">
                                        <i className="bi bi-telephone" /> Call
                                    </button>
                                    <button className="action-btn gallery-btn">
                                        <i className="bi bi-images" /> 11 Photos
                                    </button>
                                    </div>
                                    <span className="btn btn-primary view-details-btn">View Details</span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>
                </div>End Property Row Item
                </div>
            </div>
            </div>
            <nav className="pagination-wrapper mt-5" data-aos="fade-up" data-aos-delay={350}>
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-6">
                <div className="pagination-info">
                    <p>Showing <strong>1-6</strong> of <strong>124</strong> properties</p>
                </div>
                </div>
                <div className="col-lg-6">
                <ul className="pagination justify-content-lg-end">
                    <li className="page-item disabled">
                    <a className="page-link" href="#">
                        <i className="bi bi-chevron-left" />
                    </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">...</a></li>
                    <li className="page-item"><a className="page-link" href="#">21</a></li>
                    <li className="page-item">
                    <a className="page-link" href="#">
                        <i className="bi bi-chevron-right" />
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </nav> */}
        </div>
        </section>{/* /prestataire Section */}

        </>
     );
}

export default Prestataires;