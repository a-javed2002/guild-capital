import { useEffect, useState } from "react";
import { gsap } from "gsap";
const useScrollSwipe = (images, categories, sectionId) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [unlockCount, setUnlockCount] = useState(0);
  let startY = 0;

  useEffect(() => {
    const handleScroll = (event) => {
      if (!isScrollLocked) return;
      event.preventDefault();

      if (event.deltaY > 0) {
        // Scroll Downward
        if (currentIndex < categories.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        } else {
          setIsScrollLocked(false); // Unlock after reaching last item
        }
      } else if (event.deltaY < 0) {
        // Scroll Upward
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        } else {
          setIsScrollLocked(false); // Unlock after reaching first item
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [isScrollLocked, currentIndex]);

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

  useEffect(() => {
    if (unlockCount >= 1) {
      setIsScrollLocked(false);
    }
  }, [unlockCount]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsScrollLocked(true);
            setUnlockCount(0);
            const scrollDirection = window.scrollY > entry.boundingClientRect.top ? "down" : "up";

            if (scrollDirection === "down") {
              setCurrentIndex(0); // Enter from top, start at 0
            } else {
              setCurrentIndex(categories.length - 1); // Enter from bottom, start at last index
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById(sectionId);
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [sectionId, categories.length]);

  return { currentIndex, setCurrentIndex, isScrollLocked };
};

export default useScrollSwipe;


