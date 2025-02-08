import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import "../styles/animation.css";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6zoRR_FPG7f2knECoYTgOuETejMYPg71vg&s",
  "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1pb-qVaXaLJyJJAWV6jsx1yHQ-0iZS_PzAg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmgkix4DEJoToCFKP-g8ztCYa9bIuxAC3pA&s",
  "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg"
];

const categories = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(true); // Initially locked
  const [unlockCount, setUnlockCount] = useState(0);
  let startY = 0;

  // Handle Mouse Scroll (Desktop)
  useEffect(() => {
    const handleScroll = (event) => {
      if (!isScrollLocked) return; // If unlocked, allow normal scrolling

      event.preventDefault();

      if (event.deltaY > 0 && currentIndex < categories.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (event.deltaY < 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      } else {
        // Unlock scroll after completing full cycle
        setUnlockCount((prev) => prev + 1);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [isScrollLocked, currentIndex]);

  // Handle Touch Swipe (Mobile) & Prevent Page Scroll
  useEffect(() => {
    const handleTouchStart = (event) => {
      startY = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      if (isScrollLocked) {
        event.preventDefault(); // Stop page scrolling while swiping
      }
    };

    const handleTouchEnd = (event) => {
      if (!isScrollLocked) return;

      const endY = event.changedTouches[0].clientY;
      const deltaY = startY - endY;

      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0 && currentIndex < categories.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        } else if (deltaY < 0 && currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        } else {
          setUnlockCount((prev) => prev + 1);
        }
      }
    };

    const categorySection = document.getElementById("category-section");

    if (categorySection) {
      categorySection.addEventListener("touchstart", handleTouchStart);
      categorySection.addEventListener("touchmove", handleTouchMove, { passive: false });
      categorySection.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (categorySection) {
        categorySection.removeEventListener("touchstart", handleTouchStart);
        categorySection.removeEventListener("touchmove", handleTouchMove);
        categorySection.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [isScrollLocked, currentIndex]);

  // Unlock scroll after completing one cycle
  useEffect(() => {
    if (unlockCount >= 1) {
      setIsScrollLocked(false);
    }
  }, [unlockCount]);

  // GSAP Image Transition
  useEffect(() => {
    gsap.to(".right-panel img", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        document.querySelector(".right-panel img").src = images[currentIndex];
        gsap.to(".right-panel img", { opacity: 1, duration: 0.5 });
      }
    });
  }, [currentIndex]);

  // Detect if Section is in View to Lock Scroll Again
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsScrollLocked(true); // Lock scroll when in section
            setUnlockCount(0); // Reset unlock count
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(document.getElementById("category-section"));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="ani">
      <section className="section1"><h2>Section 1: Random Facts</h2><p>Did you know? Honey never spoils.</p></section>
      <section className="section2"><h2>Section 2: Quote of the Day</h2><p>"The only way to do great work is to love what you do." – Steve Jobs</p></section>
      <section className="section3"><h2>Section 3: Fun Trivia</h2><p>Sharks have been around longer than trees.</p></section>



      <div className="container" id="category-section">
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
 
      <section className="section4"><h2>Section 4: Random Joke</h2><p>Why don’t skeletons fight each other? They don’t have the guts!</p></section>
      <section className="section5"><h2>Section 5: Interesting News</h2><p>NASA’s Perseverance Rover landed on Mars.</p></section>
    </div>
  );
};

export default App;
