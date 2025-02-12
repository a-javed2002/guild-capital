import { useEffect, useState } from "react";

const useScrollLock3= (categories, sectionId) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  let startY = 0;

  // Smooth transition handler
  const handleIndexChange = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  // Handle Mouse Scroll (Desktop)
  useEffect(() => {
    const handleScroll = (event) => {
      if (!isScrollLocked) return;
      event.preventDefault();

      if (event.deltaY > 0 && currentIndex < categories.length - 1) {
        handleIndexChange(currentIndex + 1);
      } else if (event.deltaY < 0 && currentIndex > 0) {
        handleIndexChange(currentIndex - 1);
      } else {
        setIsScrollLocked(false);
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
        if (deltaY > 0 && currentIndex < categories.length - 1) {
          handleIndexChange(currentIndex + 1);
        } else if (deltaY < 0 && currentIndex > 0) {
          handleIndexChange(currentIndex - 1);
        } else {
          setIsScrollLocked(false);
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
  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsAnimated(true);
                    observer.unobserve(entry.target); // Stop observing after first trigger
                }
            });
        },
        {
            threshold: 0.01, // Trigger animation when at least 20% of the section is visible
            rootMargin: "10px 0px", // Start animation slightly before appearing
        }
    );

    const target = document.getElementById("category-section-5");
    if (target) observer.observe(target);

    return () => observer.disconnect(); // Cleanup observer on unmount
}, []);


  return { currentIndex, isScrollLocked };
};

export default useScrollLock3;
