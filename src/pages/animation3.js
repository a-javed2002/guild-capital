import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import insight11 from "../assets/images/Insight11.png";
import insight12 from "../assets/images/Insight12.png";
import insight13 from "../assets/images/Insight13.png";
import insight14 from "../assets/images/Insight14.png";
import insight15 from "../assets/images/Insight15.png";

const images = [insight11, insight12, insight13, insight14, insight15];

export default function VerticalImageSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-scroll every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-80 h-96 overflow-hidden rounded-2xl shadow-xl bg-black rem11-marginTop ">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          alt="Slider Image"
          className="absolute w-full h-full object-cover"
          initial={{ y: direction === 1 ? "100%" : "-100%", opacity: 0.8 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: direction === 1 ? "-100%" : "100%", opacity: 0.8 }}
          transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth & fast
        />
      </AnimatePresence>
      <div className="absolute bottom-4 flex w-full justify-between px-4">
        <button onClick={prevSlide}>⬆️</button>
        <button onClick={nextSlide}>⬇️</button>
      </div>
    </div>
  );
}
