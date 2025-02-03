import { useState, useEffect } from "react";

const VideoComponent = ({ videoSrc }) => {
  const [isFullScreen, setIsFullScreen] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 50) {
        setIsFullScreen(false);
        setHasScrolled(true); // Prevent further changes on scroll
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <div className={`video-container ${isFullScreen ? "fullscreen" : "normal"}`}>
      <video autoPlay loop muted className="video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
