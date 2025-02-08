import React from 'react'



import fund from '../../assets/images/Funds-of-funds.png';
import useScrollSwipe from "../../hook/useScrollSwipe";

function SecondSection() {
    const categories = [
        {

            title: "2005",
            text: "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent. Commodo id amet mi.",
            image: fund
        },
        {

            title: "2007",
            text: "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent. Commodo id amet mi.",
            image: fund
        },
        {

            title: "2009",
            text: "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent. Commodo id amet mi.",
            image: fund
        },

    ];
    const images = categories.map(cat => cat.image);
    const texts = categories.map(cat => cat.text);

    const { currentIndex } = useScrollSwipe(images, texts, "category-section-2");


    return (

        <section className="rem11-marginTop container second-section mb-5">
            <h1 className="text-center primary">
                Unveiling Guilds Story
            </h1>
            <p className="text-center white-txt mt-4 intro">
                The platform streamlines investments, enhances user engagement, and tracks agent <br></br> performance, catering to users, sales agents, and administrators.
            </p>
            <div className="row fund-section mt-5" id="category-section-2">
                <div className="col-lg-6 left-hand right-panel">

                    <img src={images[currentIndex]} alt="Category Image" />
                </div>
                <div className="col-lg-6 right-hand">
                    <h1 className="white-txt">Founding and Early Years</h1>
                    {categories.map((cat, index) => (
                        <div className={`d-flex gap-4 mt-3 ${index === currentIndex ? "active" : ""}`} key={index}>
                            <div className="fund-years">{cat.title}</div>
                            <p className="white-txt fund-txt">{cat.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SecondSection;
