import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { DiCssTricks } from "react-icons/di";

const useScrollSwipe = (images, categories, sectionId) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const prevIndexRef = useRef(0); // Track previous index
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
          setTimeout(() => {
            requestAnimationFrame(() => setIsScrollLocked(false));
          }, 100);
          again same issue it scroll one more time additionl time it is any DiCssTricksto solve this issue
        }
      } else if (event.deltaY < 0) {
        // Scroll Upward
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        } else {
          setTimeout(() => {
            requestAnimationFrame(() => setIsScrollLocked(false));
          }, 100);
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
          // Swipe Up (Scroll Downward)
          if (currentIndex < categories.length - 1) {
            setCurrentIndex((prev) => prev + 1);
          } else {
            setIsScrollLocked(false);
          }
        } else {
          // Swipe Down (Scroll Upward)
          if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
          } else {
            setIsScrollLocked(false);
          }
        }
      }
    };

    const categorySection = document.getElementById(sectionId);
    if (categorySection) {
      categorySection.addEventListener("touchstart", handleTouchStart);
      categorySection.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (categorySection) {
        categorySection.removeEventListener("touchstart", handleTouchStart);
        categorySection.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [isScrollLocked, currentIndex, sectionId]);

  // GSAP Image Transition Effect
  useEffect(() => {
    const imgElement = document.querySelector(`#${sectionId} .right-panel img`);
    if (!imgElement) return;

    const previousIndex = prevIndexRef.current;
    const direction = currentIndex > previousIndex ? "100%" : "-100%";

    gsap.fromTo(
      imgElement,
      { y: direction, opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.4, ease: "power2.out" }
    );

    imgElement.src = images[currentIndex];

    prevIndexRef.current = currentIndex; // Update previous index
  }, [currentIndex, sectionId, images]);

  // Intersection Observer for Locking Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.9) {
            setIsScrollLocked(true);
          }
        });
      },
      { threshold: 0.9 }
    );

    const section = document.getElementById(sectionId);
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [sectionId]);

  return { currentIndex, setCurrentIndex, isScrollLocked };
};

export default useScrollSwipe;
