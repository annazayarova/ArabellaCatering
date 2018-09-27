import React from "react";
import Swiper from "react-id-swiper";
import Reveal from "react-reveal/Reveal";
import ScrollToTopOnMount from "./helpers/ScrollToTopOnMount";
import images from "../data/images";

class Gallery extends React.Component {
  render() {
    const params = {
      mousewheel: false,
      speed: 1000,
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      effect: "fade"
    };

    return (
      <div className="main-content">
        <ScrollToTopOnMount />

        <Reveal effect="width">
          <div className="bg-white" />
        </Reveal>

        <div className="slider">
          <Swiper {...params}>
            {images.map(image => (
              <div
                key={image.id}
                style={{
                  backgroundImage: `url(${image.img})`,
                  backgroundColor: "white",
                  backgroundSize: "cover",
                  backgroundPosition: "top center"
                }}
              >
                <div className="gallery">
                  <div className="gallery-title">{image.title}</div>

                  <div className="gallery-subtitle">{image.subtitle}</div>
                </div>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }
}

export default Gallery;
