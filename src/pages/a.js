import React from "react";
import useScrollSwipe from "./useScrollSwipe";
import "../styles/animation.css";
const images = [
  "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmgkix4DEJoToCFKP-g8ztCYa9bIuxAC3pA&s"
];

const categories = ["Space", "Science"];

const CategorySection2 = () => {
  const { currentIndex } = useScrollSwipe(images, categories, "category-section-2");

  return (
  
    <div className="ani">
        <div className="container" id="category-section-2">
      <div className="left-panel">
        {categories.map((cat, index) => (
          <div key={index} className={`category ${index === currentIndex ? "active" : ""}`}>
            {cat}
          </div>
        ))}
      </div>
      <div className="right-panel">
        <img src={images[currentIndex]} alt="Category" />
      </div>
    </div>
    </div>
  );
};

export default CategorySection2;
