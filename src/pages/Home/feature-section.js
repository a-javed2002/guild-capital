import React from "react";
import fund from "../../assets/images/Funds-of-funds.png";
import useScrollSwipe from "../../hook/useScrollSwipe";
import feature from "../../assets/images/Feature1.png";
import insight2 from "../../assets/images/insight2.png";
import Investment1 from "../../assets/images/Investment-Advisory1.png";
import Investment2 from "../../assets/images/Investment2.png";
import Investment3 from "../../assets/images/Investment3.png";
import perfomance19 from "../../assets/images/perfomance19.png";
import perfomance20 from "../../assets/images/perfomance20.png";
function FeatureSection() {
  const categories2 = [
    { first: Investment1, text: ["Advanced Security ", <br key="br1" />, "Measures"], image: feature },
    { first: Investment2, text: ["Customizable", <br key="br1" />, "Integrations"], image: perfomance19 },
    { first: Investment3, text: ["Real-time Analytics", <br key="br1" />, "Dashboard"], image: perfomance20 },
  ];

  const images2 = categories2.map((cat) => cat.image);
  const texts2 = categories2.map((cat) => cat.text);

  const { currentIndex } = useScrollSwipe(images2, texts2, "category-section-3");

  return (
    <div className="rem5-marginTop feature-section container" id="" >
      <h1 className="text-center primary">Guild’s Key Features</h1>
      <div className="row  justify-content-center mt-2" id="category-section-3" >
        <div className="col-lg-6 left-hand mt-2">
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

        <div className="col-lg-5 mt-2 right-panel">
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
        <button className="fill-button mt-">Get Started</button>

      </center>
    </div>
  );
}

export default FeatureSection;
