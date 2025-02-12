import React, { useState } from "react";

import slider1 from '../../assets/images/Slider1.png';
import slider2 from '../../assets/images/Slider2.png';
import slider3 from '../../assets/images/Slider3.png';
import slider4 from '../../assets/images/About-Last2.png';

const cardData = [
  {
    id: 1,
    title: "Expertise & Inovation",
    image: slider2,
    description: "Our team of seasoned professionals utilizes cutting-edge technology and innovative strategies to stay ahead of market trends and deliver exceptional results.",
  },
  {
    id: 2,
    title: "Performance Based Model",
    image: slider1,
    description:
      "We align our interests with yours through a performance-based compensation structure, where our fees are tied to the profits we generate.",
  },

  {
    id: 3,
    title: "Customized Risk Managment",
    image: slider4,
    description: "We offer tailored risk management solutions, including stop-loss limits and diversified strategies, to protect your capital and optimize returns.",
  },
  {
    id: 4,
    title: "Transparency& Communication",
    image: slider3,
    description: "We prioritize clear, transparent communication with regular updates and detailed reports, ensuring you are always informed about your investments.",
  },
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
    <div className="home-slider2 container rem7-marginTop">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="row w-100">
              <div className=" img-container">
                <img src={slider2} />
              </div>
              <div className="text-container">
                <h4>Expertise & Inovation</h4>
                <p>We align our interests with yours through a performance-based compensation structure.</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="row w-100">
              <div className=" img-container">
                <img src={slider1} />
              </div>
              <div className="text-container">
                <h4>Performance Based Model</h4>
                <p>We align our interests with yours through a performance-based compensation structure, where
                  our fees are tied to the profits we generate.</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="row w-100">
              <div className="col-lg-12 img-container">
                <img src={slider4} />
              </div>
              <div className="text-container">
                <h4>Customized Risk Managment</h4>
                <p>We offer tailored risk management solutions, including stop-loss limits and diversified strategies, to protect your capital and optimize returns.",
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="row w-100">
              <div className="col-lg-12 img-container">
                <img src={slider3} />
              </div>
              <div className="text-container">
                <h4>Transparency& Communication</h4>
                <p>We prioritize clear, transparent communication with regular updates and detailed reports, ensuring you are always informed about your investments.",
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ExpandableCards;
