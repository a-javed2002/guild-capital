import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import slider1 from "../../assets/images/Slider1.png";
import slider2 from "../../assets/images/Slider2.png";
import slider3 from "../../assets/images/Slider3.png";
import slider4 from "../../assets/images/About-Last2.png";

const cardData = [
  { id: 1, title: "Expertise & Innovation", image: slider2, description: "Our team of seasoned professionals utilizes cutting-edge technology and innovative strategies to stay ahead of market trends and deliver exceptional results." },
  { id: 2, title: "Performance Based Model", image: slider1, description: "We align our interests with yours through a performance-based compensation structure, where our fees are tied to the profits we generate." },
  { id: 3, title: "Customized Risk Management", image: slider4, description: "We offer tailored risk management solutions, including stop-loss limits and diversified strategies, to protect your capital and optimize returns." },
  { id: 4, title: "Transparency & Communication", image: slider3, description: "We prioritize clear, transparent communication with regular updates and detailed reports, ensuring you are always informed about your investments." },
];

const ExpandableCards = () => {
  const [expandedSlide, setExpandedSlide] = useState(null);
  const [visibleDescription, setVisibleDescription] = useState(null);

  const handleSlideClick = (id) => {
    if (expandedSlide === id) {
      // If the same slide is clicked again (collapsing)
      setExpandedSlide(null);
      setTimeout(() => {
        setVisibleDescription(null);
      }, 1000);
    } else {
      // Expanding a new slide
      setExpandedSlide(id);
      setTimeout(() => {
        setVisibleDescription(id);
      }, 500);
    }
  };
  
  return (
    <div className="home-slider2  rem7-marginTop">
      <Swiper
        navigation={false}
        pagination={false}
        autoplay={false}
        centeredSlides={false}

        spaceBetween={20}
        loop={false}
        className="swiper-container"

        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },   // Mobile
          426: { slidesPerView: 1, spaceBetween: 20 }, // Small tablets
          768: { slidesPerView: 2, spaceBetween: 20 }, // Large tablets
          1025: { slidesPerView: 3, spaceBetween: 30 }, // Desktops
        }}
      >
        {cardData.map((card, index) => {
          let positionClass = "";

          if (expandedSlide !== null) {
            const expandedIndex = cardData.findIndex((item) => item.id === expandedSlide);
            if (index < expandedIndex) {
              positionClass = "hidden-left";
            } else if (index > expandedIndex) {
              positionClass = "hidden-right";
            }
          }

          return (
            <SwiperSlide
              key={card.id}
              className={`swiper-slide ${expandedSlide === card.id ? "expanded" : ""} ${positionClass}`}
              onClick={() => handleSlideClick(card.id)}
            >
              <div className="row w-100">
                <div className={`img-container ${expandedSlide === card.id ? "col-lg-4" : ""}`}>
                  <img src={card.image} alt={card.title} />
                </div>
                <div className={`text-container ${expandedSlide === card.id ? "col-lg-8" : ""}`}>
                  <h4>{card.title}</h4>
                  {/* ✅ Only `<p>` tag appears after 2 seconds */}
                  <p style={{ display: visibleDescription === card.id ? "block" : "none" }}>
                    {card.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ExpandableCards;
