import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const useScrollSwipe = (images, categories, sectionId) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const prevIndexRef = useRef(0);
  const isAnimating = useRef(false); // Prevents double updates
  let startY = 0;

  // Handle Mouse Scroll (Desktop)
  useEffect(() => {
    const handleScroll = (event) => {
      console.log("Scroll event detected");

      if (!isScrollLocked || isAnimating.current) {
        console.log("Scroll blocked - either not locked or animating");
        return;
      }

      event.preventDefault();

      if (event.deltaY > 0 && currentIndex < categories.length - 1) {
        console.log(`Scrolling down: ${currentIndex} -> ${currentIndex + 1}`);
        isAnimating.current = true;
        setCurrentIndex((prev) => prev + 1);
      } else if (event.deltaY < 0 && currentIndex > 0) {
        console.log(`Scrolling up: ${currentIndex} -> ${currentIndex - 1}`);
        isAnimating.current = true;
        setCurrentIndex((prev) => prev - 1);
      }

      setTimeout(() => {
        isAnimating.current = false;
        console.log("Animation lock released");
      }, 500);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [isScrollLocked, currentIndex]);

  // Handle Touch Swipe (Mobile)
  useEffect(() => {
    const handleTouchStart = (event) => {
      startY = event.touches[0].clientY;
      console.log("Touch started", startY);
    };

    const handleTouchEnd = (event) => {
      if (!isScrollLocked || isAnimating.current) {
        console.log("Touch move ignored - not locked or animating");
        return;
      }

      const endY = event.changedTouches[0].clientY;
      const deltaY = startY - endY;

      console.log("Touch ended", { startY, endY, deltaY });

      if (Math.abs(deltaY) > 50) {
        isAnimating.current = true;
        if (deltaY > 0 && currentIndex < categories.length - 1) {
          console.log(`Swipe Up: ${currentIndex} -> ${currentIndex + 1}`);
          setCurrentIndex((prev) => prev + 1);
        } else if (deltaY < 0 && currentIndex > 0) {
          console.log(`Swipe Down: ${currentIndex} -> ${currentIndex - 1}`);
          setCurrentIndex((prev) => prev - 1);
        }
      }

      setTimeout(() => {
        isAnimating.current = false;
        console.log("Animation lock released (touch)");
      }, 500);
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

  // GSAP Image Transition Effect
  useEffect(() => {
    console.log("Current Index Changed:", currentIndex);

    if (currentIndex < 0 || currentIndex >= categories.length) return;

    const imgElement = document.querySelector(`#${sectionId} .right-panel img`);
    if (!imgElement) {
      console.log("Image element not found");
      return;
    }

    const previousIndex = prevIndexRef.current;
    if (previousIndex === currentIndex) {
      console.log("Skipping duplicate animation");
      return;
    }

    console.log(`Animating image from ${previousIndex} -> ${currentIndex}`);

    const direction = currentIndex > previousIndex ? "100%" : "-100%";

    gsap.fromTo(
      imgElement,
      { y: direction, opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.4, ease: "power2.out" }
    );

    imgElement.src = images[currentIndex];
    prevIndexRef.current = currentIndex;
  }, [currentIndex, sectionId, images, categories.length]);

  // Intersection Observer for Locking Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Section in view, locking scroll");
            setTimeout(() => setIsScrollLocked(true), 200);
          } else {
            console.log("Section out of view, unlocking scroll");
            setIsScrollLocked(false);
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
