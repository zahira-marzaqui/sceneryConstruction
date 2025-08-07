import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const images = [
  "assets/img/realisation/3.webp",
  "assets/img/realisation/3.webp",
  "assets/img/realisation/3.webp",
  "assets/img/realisation/3.webp",
  "assets/img/realisation/3.webp",
  "assets/img/realisation/3.webp",
];

function RealisationDetails() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section id="property-details" className="property-details section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row">
            <div className="col-lg-7">
              <div className="property-hero mb-5" data-aos="fade-up" data-aos-delay={200}>
                <div className="hero-image-container position-relative">
                  <Swiper
                    modules={[Navigation, Thumbs]}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev"
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    className="property-gallery-slider swiper init-swiper"
                  >
                    {images.map((img, index) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <img
                          src={img}
                          className="img-fluid hero-image"
                          alt={`Slide ${index + 1}`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </div>
                <div className="thumbnail-gallery mt-3">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    // spaceBetween={10}
                    slidesPerView={5}
                    loop={true}
                    watchSlidesProgress={true}
                    className="property-thumbnails-slider swiper init-swiper"
                  >
                    {images.map((img, index) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <img
                          src={img}
                          className="img-fluid thumbnail-img"
                          alt={`Thumbnail ${index + 1}`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="sticky-sidebar">
                <div className="agent-card mb-4" data-aos="fade-up" data-aos-delay={350}>
                  <div className="agent-contact">
                    <div className="contact-item">
                      <i className="bi bi-telephone" />
                      <span>+212663-039059</span>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-envelope" />
                      <span>contact@scenery-construction.com</span>
                    </div>
                  </div>
                  <div className="agent-actions mt-3">
                    <div>
                      <Link to="/devis" className="btn w-100 mb-2 projetbtn">
                        Obtenir un devis
                      </Link>
                    </div>
                    <div className="w-100">
                      <a
                        href="https://wa.me/212663039059"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline w-100"
                      >
                        <i className="bi bi-chat-dots" />
                        <span>Envoyer un message</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* End Sidebar */}
          </div>
        </div>
      </section>
    </>
  );
}

export default RealisationDetails;
