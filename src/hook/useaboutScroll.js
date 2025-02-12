import { useEffect, useState, useRef } from "react";

const useScrollLock = (categories, sectionId) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  let startY = 0;

  // Handle Mouse Scroll (Desktop)
  useEffect(() => {
    const handleScroll = (event) => {
      if (!isScrollLocked) return;
      event.preventDefault();

      if (event.deltaY > 0) {
        // Scroll Downward
        if (currentIndex < categories.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        } else {
          setIsScrollLocked(false);
        }
      } else if (event.deltaY < 0) {
        // Scroll Upward
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        } else {
          setIsScrollLocked(false);
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [isScrollLocked, currentIndex]);

  // Handle Touch Swipe (Mobile)
  useEffect(() => {
    const handleTouchStart = (event) => {
      startY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event) => {
      if (!isScrollLocked) return;
      const endY = event.changedTouches[0].clientY;
      const deltaY = startY - endY;

      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0) {
          // Swipe Up (Scroll Down)
          if (currentIndex < categories.length - 1) {
            setCurrentIndex((prev) => prev + 1);
          } else {
            setIsScrollLocked(false);
          }
        } else {
          // Swipe Down (Scroll Up)
          if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
          } else {
            setIsScrollLocked(false);
          }
        }
      }
    };

    const section = document.getElementById(sectionId);
    if (section) {
      section.addEventListener("touchstart", handleTouchStart);
      section.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (section) {
        section.removeEventListener("touchstart", handleTouchStart);
        section.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [isScrollLocked, currentIndex, sectionId]);

  // Intersection Observer to Lock Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
     
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 1.0) {
            setIsScrollLocked(true);
          }
        });
      },
      { threshold: 1.0 }
    );

    const section = document.getElementById(sectionId);
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [sectionId]);

  return { currentIndex, isScrollLocked };
};

export default useScrollLock;
