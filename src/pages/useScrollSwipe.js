import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { debounce } from "lodash";

const useScrollSwipe = (images, categories, sectionId) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  let startY = 0;

  // Handle Mouse Scroll (Desktop)
  useEffect(() => {
    const handleScroll = (event) => {
      if (!isScrollLocked) return;
      event.preventDefault();
      
      if (event.deltaY > 0 && currentIndex < categories.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (event.deltaY < 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
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
        }
      }
    };

    const categorySection = document.getElementById(sectionId);

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
  }, [isScrollLocked, currentIndex, sectionId]);

  // GSAP Image Transition
  useEffect(() => {
    gsap.to(`#${sectionId} .right-panel img`, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        document.querySelector(`#${sectionId} .right-panel img`).src = images[currentIndex];
        gsap.to(`#${sectionId} .right-panel img`, { opacity: 1, duration: 0.5 });
      }
    });
  }, [currentIndex, sectionId, images]);

  // Detect if Section is in View to Lock Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsScrollLocked(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById(sectionId);
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [sectionId]);

  return { currentIndex, setCurrentIndex, isScrollLocked };
};

export default useScrollSwipe;
