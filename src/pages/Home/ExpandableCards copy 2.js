import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import slider1 from '../../assets/images/Slider1.png';
import slider2 from '../../assets/images/Slider2.png';
import slider3 from '../../assets/images/Slider3.png';
import slider4 from '../../assets/images/About-Last2.png';

const cardData = [
  { id: 1, title: "Expertise & Innovation", image: slider2, description: "Our team of seasoned professionals utilizes cutting-edge technology and innovative strategies to stay ahead of market trends and deliver exceptional results." },
  { id: 2, title: "Performance Based Model", image: slider1, description: "We align our interests with yours through a performance-based compensation structure, where our fees are tied to the profits we generate." },
  { id: 3, title: "Customized Risk Management", image: slider4, description: "We offer tailored risk management solutions, including stop-loss limits and diversified strategies, to protect your capital and optimize returns." },
  { id: 4, title: "Transparency & Communication", image: slider3, description: "We prioritize clear, transparent communication with regular updates and detailed reports, ensuring you are always informed about your investments." }
];

const ExpandableCards = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [typedText, setTypedText] = useState("");

  const toggleCard = (id, fullText) => {
    if (expandedCard === id) {
      setExpandedCard(null);
      setTypedText("");
      return;
    }
    setExpandedCard(id);
    typeText(fullText);
  };

  const typeText = (text, index = 0) => {
    if (index >= text.length) return;
    setTypedText(text.substring(0, index + 1));
    setTimeout(() => typeText(text, index + 1), 10);
  };

  return (
    <div className="home-slider container rem7-marginTop">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={expandedCard ? 1 : 4} // Default is 4 slides
        navigation={false}
        pagination={false}
        centeredSlides={false}
        loop={false}
        breakpoints={{
          0: { slidesPerView: expandedCard ? 1 : 1, spaceBetween: 10 }, // Always 1 slide for mobile
          426: { slidesPerView: expandedCard ? 1 : 2, spaceBetween: 20 }, // 2 slides for tablets
          768: { slidesPerView: expandedCard ? 1 : 2, spaceBetween: 30 }, // Fixed at 2 slides for 768px
          1025: { slidesPerView: expandedCard ? 1 : 4, spaceBetween: 30 } // 4 slides for large screens
        }}
        key={expandedCard} 
      >

        {cardData.map((card) => (
          <SwiperSlide key={card.id} className={`col-lg-${expandedCard ? (expandedCard === card.id ? "12" : "0") : "3"} 
          ${expandedCard && expandedCard !== card.id ? "hide" : ""}`}>
            <div
              className={`card rounded-5 ${expandedCard === card.id ? "expanded" : ""}`}
              onClick={() => toggleCard(card.id, card.description)}
            >
              <div className="row g-0 p-3">
                <div className={`card-img-container col-lg-${expandedCard === card.id ? "4" : "12"}`}>
                  <img className="card-img-top" src={card.image} alt={card.title} />
                </div>
                <div className={`card-body-container d-flex flex-column justify-content-center col-lg-${expandedCard === card.id ? "6" : "12"}`}>
                  <div className="card-body">
                    <h4 className="card-title text-center">{card.title}</h4>
                    {expandedCard === card.id && (
                      <p className="description">{typedText}<span className="typing">|</span></p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExpandableCards;
