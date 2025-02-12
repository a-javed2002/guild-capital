import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { id: 1, img: "http://bhf.34e.myftpupload.com/wp-content/uploads/2024/08/Expertise-Innovation-big.png", title: "Expertise & Innovation" },
  { id: 2, img: "http://bhf.34e.myftpupload.com/wp-content/uploads/2024/08/Performance-Based-Model-big.png", title: "Performance Based Model" },
  { id: 3, img: "http://bhf.34e.myftpupload.com/wp-content/uploads/2024/08/Customer-Risk-Management-big.png", title: "Customized Risk Management" },
  { id: 4, img: "http://bhf.34e.myftpupload.com/wp-content/uploads/2024/08/Transparency-and-Communication-big.png", title: "Transparency & Communication" },
];

const ExpandingSlider = () => {
  const [expanded, setExpanded] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(4);

  const toggleExpand = (id) => {
    if (expanded === id) {
      setExpanded(null);
      setSlidesToShow(4); // Reset to 4 slides
    } else {
      setExpanded(id);
      setSlidesToShow(1); // Show only the expanded slide
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow, // Dynamically change slidesToShow
    slidesToScroll: 1,
    centeredSlides:true,
    spaceBetween:20,
    autoplay: false,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: slidesToShow === 1 ? 1 : 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <motion.div
            key={slide.id}
            className="slide-item"
            onClick={() => toggleExpand(slide.id)}
            animate={{ width: expanded === slide.id ? "100%" : "300px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="slide-content">
              <img src={slide.img} alt={slide.title} className="slide-image" />
              <div className="slide-text">
                <h4>{slide.title}</h4>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default ExpandingSlider;
