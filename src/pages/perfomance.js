import { useRef } from "react";
import "../styles/perfomance.css";
import perfomance1 from "../assets/images/perfomance1.png";
import perfomance2 from "../assets/images/perfomance2.png";
import perfomance3 from "../assets/images/perfomance3.png";
import perfomance4 from "../assets/images/perfomance4.png";
import perfomance5 from "../assets/images/perfomance5.png";
import perfomance6 from "../assets/images/perfomance6.png";

import perfomance19 from "../assets/images/perfomance19.png";
import perfomance20 from "../assets/images/perfomance20.png";
import PerfomanceCards from "./perfomancecard"
import useScrollLock from "../hook/useaboutScroll";
import deco1 from "../assets/images/decroation/what-we/deco1.svg";
import deco2 from "../assets/images/decroation/what-we/deco2.svg";
import deco3 from "../assets/images/decroation/what-we/deco7.svg";
import deco4 from "../assets/images/decroation/what-we/deco4.svg";
import deco5 from "../assets/images/decroation/what-we/deco6.svg";

const categories = [
    {
        text: "ROI: 30% | Duration: 6 months | Capital: AED 100,000",
        content: <img src={perfomance20} alt="Performance 16" className="fade-content one" />,
    },
    {
        text: "1.64 times more Profit than Losses, in Summation",
        content: <PerfomanceCards className="fade-content" />,
    },
    {
        text: "Win/Loss Ratio of trades: 65% winning trades",
        content: <img src={perfomance19} alt="Performance 17" className="fade-content one" />,
    },
];

function Performance() {


    const sectionRef = useRef(null);
    const { currentIndex } = useScrollLock(categories, "third-section2");
    return (
        <div className="perfomance-main">

            <div className="decorative-img">
                <img src={deco1} alt="Decorative" />
            </div>
            <div className="decorative-img2">
                <img src={deco2} alt="Decorative" />
            </div>
            {/* <div className="decorative-img3">
                <img src={deco3} alt="Decorative" />
            </div>

            <div className="decorative-img4">
                <img src={deco4} alt="Decorative" />
            </div>
        */}


            
            <div className="container content4">
                <header className="perfomance-header ">

                    <h1 className="primary text-start fst-italic font-7xl ">
                        Empower Your Financial<br></br> Future with Us
                    </h1>

                    <div className="row mt-3">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-7">
                            <p className="white-txt text-start font-xsm">Welcome to our platform, where we prioritize your financial growth and <br></br>success. Join us on a journey to achieve your investment goals with <br></br>confidence and expertise.</p>
                        </div>
                    </div>

                    <center>
                        <div className="d-flex flex-wrap mt-4 card-container-1">
                            <div className="col-md-4 perfomace-card ">
                                <img src={perfomance2} loading="lazy" />
                                <p className="white-txt text-start font-sm ">
                                    Experience the power of informed trading decisions. Our innovative tools and strategies empower you to maximize your  profits.
                                </p>
                            </div>
                            <div className="col-md-4 perfomace-card font-sm">
                                <button className="fill-button mb-3">
                                    Join Now
                                </button>
                                <img src={perfomance1} loading="lazy" />

                            </div>
                            <div className="col-md-4 perfomace-card font-sm">
                                <img src={perfomance3} loading="lazy" />
                                <p className="white-txt text-start">
                                    Our services are designed to help you navigate the market effectively and achieve your financial goals.
                                </p>
                            </div>

                        </div>
                    </center>
                </header>

                <section className="perfomance-second d-flex  " >
                    <h1 className="primary text-center fst-italic font-6xl ">
                        Unlock Your Financial Potential<br></br> with Us
                    </h1>
                    <div className="row perfomance-container mt-5">
                        <div className="col-md-4 perfomance-card2">
                            <img src={perfomance6} loading="lazy" />
                            <h2 className="white-txt text-start mt-3 font-base">Track Your Trading Performance <br></br> Effortlessly</h2>
                            <p className="white-txt text-start mt-3 font-xsm">Monitor your winning vs. losing trades with ease.</p>
                        </div>
                        <div className="col-md-4 perfomance-card2">
                            <img src={perfomance5} loading="lazy" />
                            <h2 className="white-txt text-start mt-3 font-base ">Visualize Your Growth  <br></br>with Our Charts</h2>
                            <p className="white-txt text-start mt-3  font-xsm">Our growth charts provide clear insights into your progress.</p>
                        </div>
                        <div className="col-md-4 perfomance-card2">
                            <img src={perfomance4} loading="lazy" />
                            <h2 className="white-txt text-start mt-3 font-base">Maximize Your Profit  <br></br> Factor Today</h2>
                            <p className="white-txt text-start mt-3  font-xsm">Achieve a higher profit factor with our expert guidance.</p>
                        </div>

                    </div>
                </section>

                <section className=" perfomance-third rem7-marginbottom " >
                    <h1 className="white-txt text-center fst-italic font-6xl">
                        See Our Success
                    </h1>
                    <h1 className="primary text-center fst-italic main2 mt-3">
                        Live Account Performance
                    </h1>
                    <h3 className="white-txt text-center main3 m-1">
                        Are you ready to take control of your financial future?
                    </h3>


                    <div className="row perfomance-container3 gap-4" id="third-section2">

                        {/* Left Sidebar with Active Class */}
                        <div className="col-md-4 d-flex flex-column mt-3">
                            {categories.map((cat, index) => (
                                <div key={index} className={`sidebar-card mt-4 ${currentIndex === index ? "active" : ""}`}>
                                    <h2 className={`white-txt text-center transition-text ${currentIndex === index ? "active" : ""}`}>
                                        {cat.text}
                                    </h2>
                                </div>
                            ))}
                        </div>

                        {/* Right Content Area */}

                        <div className="fade-content col-md-7 d-flex justify-content-around right-hand flex-wrap mt-3">{categories[currentIndex].content}</div>

                    </div>
                </section>
            </div >
        </div >
    );
}

export default Performance;
