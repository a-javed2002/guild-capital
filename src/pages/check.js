import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fund from "../assets/images/Funds-of-funds.png";
import aboutLast1 from "../assets/images/About-Last1.png";
import aboutLast2 from "../assets/images/About-Last2.png";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { title: "2005", text: "Dignissim ipsum quisque mauris diam.", image: fund },
  { title: "2007", text: "Amet odio purus orci cursus cursus praesent.", image: aboutLast1 },
  { title: "2009", text: "Commodo id amet mi.", image: aboutLast2 },
];

const FundSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollingDown = true; // Track scroll direction

    const updateIndex = (self) => {
      const progressIndex = Math.round(self.progress * (categories.length - 1));
      setCurrentIndex(progressIndex);
    };

    const trigger = ScrollTrigger.create({
      trigger: ".fund-section",
      start: "top 10%",
      end: "bottom 10%",
      scrub: 1,
      pin: true,
      pinSpacing: true,
      onUpdate: updateIndex,
      onEnter: () => setCurrentIndex(scrollingDown ? 0 : 2), // Set index when entering from top
      onLeaveBack: () => setCurrentIndex(0), // Reset to 0 when leaving to the top
      onEnterBack: () => setCurrentIndex(2), // Reset to 2 when entering from bottom
    });

    const trackScrollDirection = () => {
      scrollingDown = window.scrollY > lastScrollY;
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", trackScrollDirection);

    return () => {
      trigger.kill();
      window.removeEventListener("scroll", trackScrollDirection);
    };
  }, []);

  return (
    <>
      <div className="navbar">Navbar</div>
      <div className="normal-section">Normal Section 1</div>
      <section className="mt-5 container second-section ">
        <h1 className="text-center primary">
          Unveiling Guilds Story
        </h1>
        <p className="text-center white-txt mt-4 intro">
          The platform streamlines investments, enhances user engagement, and tracks agent <br></br> performance, catering to users, sales agents, and administrators.
        </p>
        <div className="row fund-section mt-5" id="category-section-2">
          {/* Left Side: Sticky Image */}
          <div className="col-lg-6 left-hand">
            <img src={categories[currentIndex].image} alt="Category" className="fund-image" />
          </div>

          {/* Right Side: Scrollable Content */}
          <div className="col-lg-6 right-hand">
            <h1 className="white-txt">Founding and Early Years</h1>
            {categories.map((cat, index) => (
              <div
                className={`d-flex gap-3 fund-div ${index === currentIndex ? "active" : ""}`}
                key={index}
              >
                <div className="fund-years">{cat.title}</div>
                <p className="white-txt fund-txt">{cat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="normal-section">Normal Section 2</div>
      <div className="footer">Footer</div>
    </>
  );
};

export default FundSection;
