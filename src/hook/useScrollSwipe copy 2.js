import { useEffect, useState } from "react";
import { gsap } from "gsap";

const useScrollSwipe = (images, categories, sectionId) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [prevY, setPrevY] = useState(null);
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
          setIsScrollLocked(false); // Unlock after last item
        }
      } else if (event.deltaY < 0) {
        // Scroll Upward
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        } else {
          setIsScrollLocked(false); // Unlock after first item
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

  // Optimized GSAP Image Transition
  useEffect(() => {
    const imgElement = document.querySelector(`#${sectionId} .right-panel img`);
    if (!imgElement) return;

    gsap.to(imgElement, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      onComplete: () => {
        imgElement.src = images[currentIndex];
        gsap.fromTo(
          imgElement,
          { opacity: 0, scale: 1.2 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
        );
      },
    });
  }, [currentIndex, sectionId, images]);

  // Detect If Section is Fully Visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio === 1) {
            setIsScrollLocked(true);

            // Determine scroll direction
            if (prevY !== null) {
              const direction = entry.boundingClientRect.y > prevY ? "up" : "down";
              if (direction === "down") {
                setCurrentIndex(0); // Enter from top, start at 0
              } else {
                setCurrentIndex(categories.length - 1); // Enter from bottom, start at last index
              }
            }

            setPrevY(entry.boundingClientRect.y);
          }
        });
      },
      { threshold: 1 } // Fully visible
    );

    const section = document.getElementById(sectionId);
    console.log(`Checking Section ID: ${sectionId}`, section);
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [sectionId, categories.length, prevY]);
  useEffect(() => {
    console.log("Hook Re-rendered for:", sectionId);
    console.log("Current Index:", currentIndex);
    console.log("Images:", images);
  }, [currentIndex, sectionId, images]);

  return { currentIndex, setCurrentIndex, isScrollLocked };
};

export default useScrollSwipe;
