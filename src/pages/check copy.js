
import React, { useState, useEffect } from "react";

import fund from '../assets/images/Funds-of-funds.png';
const categories = [
  {
    title: "2005",
    text: "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent. Commodo id amet mi.",
    image: fund,
  },
  {
    title: "2007",
    text: "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent. Commodo id amet mi.",
    image: fund,
  },
  {
    title: "2009",
    text: "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent. Commodo id amet mi.",
    image: fund,
  },
];

const StickyScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let newIndex = 0;
      const sections = document.querySelectorAll(".section");
      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) {
          newIndex = i;
        }
      });
      setCurrentIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="navbar">Navbar</div>
      <div className="normal-section">Normal Section 1</div>
      <div className="scroll-container">
        <div className="left-sticky">{categories[currentIndex].title}</div>
        <div className="right-scroll">

       
          {categories.map((cat, index) => (
            <div className={`section ${index === currentIndex ? "active" : ""}`} key={index}>
              <h1>{cat.title}</h1>
              <p>{cat.text}</p>
              <img src={cat.image} alt={cat.title} style={{ width: "100px" }} />
            </div>
          ))}
        </div>
      </div>
      <div className="normal-section">Normal Section 2</div>
      <div className="footer">Footer</div>
    </>
  );
};

export default StickyScroll;
