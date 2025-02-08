import React from "react";
import fund from "../../assets/images/Funds-of-funds.png";
import useScrollSwipe from "../../hook/useScrollSwipe";
import feature from "../../assets/images/Feature1.png";
import insight2 from "../../assets/images/insight2.png";
import Investment1 from "../../assets/images/Investment-Advisory1.png";
import Investment2 from "../../assets/images/Investment2.png";
import Investment3 from "../../assets/images/Investment3.png";

function FeatureSection() {
  const categories2 = [
    { first: Investment1, text: "Advanced Security Measures", image: feature },
    { first: Investment2, text: "Customizable Integrations", image: fund },
    { first: Investment3, text: "Real-time Analytics Dashboard", image: insight2 },
  ];

  const images2 = categories2.map((cat) => cat.image);
  const texts2 = categories2.map((cat) => cat.text);

  const { currentIndex } = useScrollSwipe(images2, texts2, "category-section-3");

  return (
    <div className="rem15-marginTop feature-section container" >
      <h1 className="text-center primary">Guild’s Key Features</h1>


      <div className="row  gap-3 justify-content-center " id="category-section-3" >
        <div className="col-lg-5 left-hand mt-2">
          {categories2.map((category2, index2) => (
            <div
              className={`d-flex gap-4 ${index2 === currentIndex ? "active" : ""}`}
              key={index2}
            >
              <img src={category2.first} className="investment-img" alt="Investment" />
              <h2 className="white-txt investment-txt align-content-center">
                {category2.text}
              </h2>
            </div>
          ))}
        </div>

        <div className="col-lg-6 mt-2 right-panel">
          <img
            src={images2[currentIndex] || images2[0]}
            className="feature-image"
            alt="Category Image"
          />
          <p className="white-txt text-center feature-image-txt mt-2">
            Experience a seamless investment journey.
          </p>
        </div>
      </div>
      <center>
        <button className="fill-button mt-5">Get Started</button>

      </center>
    </div>
  );
}

export default FeatureSection;
