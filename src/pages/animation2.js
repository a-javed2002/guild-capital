import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import vedio1 from "../assets/vedio/home-one.mp4";

const VideoScrollEffect = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden .Home">
      {/* Video Section (Above Everything on Fullscreen) */}


      <motion.div
        className={`fixed top-0 left-0 w-full h-screen flex justify-center items-center transition-all duration-500 ease-in-out ${isScrolled ? "z-120000" : "z-[150000]"
          }`}
      >
        <center>

        <div className="text-dein">
              <h1 className="primary text-center rem7-marginTop ">
                Unlock Your Investment
              </h1>
              <h1 className="primary text-center">
                Potential Today
              </h1>

              <p className="white-txt text-center">
                Join our platform to streamline your investments and enhance your engagement. Experience real-time <br></br> tracking of agent performance and make informed decisions with ease.
              </p>
            </div>
          <motion.video
            className="object-cover w-full h-full "
            autoPlay
            loop
            muted
            initial={{ width: "100vw", height: "100vh" }}
            animate={{
              width: isScrolled ? "500px" : "100%",
              height: isScrolled ? "500px" : "",
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >

         
            <source src={vedio1} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        </center>
      </motion.div>

      {/* Content Section */}
      <div className="relative z-20 mt-[100vh] flex flex-col items-center p-10 bg-white shadow-lg max-w-2xl mx-auto rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Scroll Down to See Effect</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        <p className="text-gray-600 mt-2">Keep scrolling to see the effect.</p>
      </div>
    </div>
  );
};

export default VideoScrollEffect;
