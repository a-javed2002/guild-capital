import React from "react";
import "../styles/perfomance.css";
import perfomance1 from "../assets/images/perfomance1.png";
import perfomance2 from "../assets/images/perfomance2.png";
import perfomance3 from "../assets/images/perfomance3.png";
import perfomance4 from "../assets/images/perfomance4.png";
import perfomance5 from "../assets/images/perfomance5.png";
import perfomance6 from "../assets/images/perfomance6.png";
import perfomance7 from "../assets/images/perfomance7.png";
import perfomance8 from "../assets/images/perfomance8.png";
import Navbar from '../layouts/navbar';
import Footer from '../layouts/Footer';
function Performance() {
    return (
        <div className="perfomance-main">         <Navbar />
            <div className="container">
                <header className="perfomance-header">
                    <h1 className="primary text-start fst-italic font-8xl">
                        Empower Your Financial Future with Us
                    </h1>
                    <div className="row mt-3">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-7">
                            <p className="white-txt text-start font-base">Welcome to our platform, where we prioritize your financial growth and success. Join us on a journey to achieve your investment goals with confidence and expertise.</p>
                        </div>
                    </div>

                    <div className="d-flex flex-wrap mt-5">
                        <div className="col-md-4 perfomace-card ">
                            <img src={perfomance2} />
                            <p className="white-txt text-start font-basex2 ">
                                Experience the power of informed trading decisions. Our innovative tools and strategies empower you to maximize your profits.
                            </p>
                        </div>
                        <div className="col-md-4 perfomace-card font-basex2 ">
                            <button className="fill-button mb-3">
                                Join Now
                            </button>
                            <img src={perfomance1} />

                        </div>
                        <div className="col-md-4 perfomace-card font-basex2 ">
                            <img src={perfomance3} />
                            <p className="white-txt text-start">
                                Experience the power of informed trading decisions. Our innovative tools and strategies empower you to maximize your profits.
                            </p>
                        </div>

                    </div>
                </header>

                <section className="perfomance-second ">
                    <h1 className="primary text-center fst-italic">
                        Unlock Your Financial Potential with Us
                    </h1>
                    <div className="row perfomance-container mt-5">
                        <div className="col-md-4 perfomance-card2">
                            <img src={perfomance6} />
                            <h2 className="white-txt text-start mt-5 font-lg ">Track Your Trading Performance Effortlessly</h2>
                            <p className="white-txt text-start font-base">Monitor your winning vs. losing trades with ease.</p>
                        </div>
                        <div className="col-md-4 perfomance-card2">
                            <img src={perfomance5} />
                            <h2 className="white-txt text-start mt-5 font-lg ">Visualize Your Growth with Our Charts</h2>
                            <p className="white-txt text-start font-base">Our growth charts provide clear insights into your progress.</p>
                        </div>
                        <div className="col-md-4 perfomance-card2">
                            <img src={perfomance4} />
                            <h2 className="white-txt text-start mt-5 font-lg ">Maximize Your Profit Factor Today</h2>
                            <p className="white-txt text-start font-base">Achieve a higher profit factor with our expert guidance.</p>
                        </div>

                    </div>
                </section>

                <section className=" perfomance-third mb-5">
                    <h1 className="white-txt text-center fst-italic main">
                        See Our Success
                    </h1>
                    <h1 className="primary text-center fst-italic main2 mt-3">
                        Live Account Performance
                    </h1>
                    <h3 className="white-txt text-center main3 m-1">
                        Are you ready to take control of your financial future?
                    </h3>


                    <div className="row perfomance-container3 gap-4">
                        <div className="col-md-4 d-flex flex-column mt-3 ">
                            <div className="sidebar-card mt-4">
                                <h2 className="white-txt text-center">
                                    ROI: 30% | Duration: 6 months | Capital: AED 100,000
                                </h2>
                            </div>
                            <div className="sidebar-card mt-4">
                                <h2 className="white-txt text-center active">
                                    1.64 times more Profit than Losses, in Summation
                                </h2>
                            </div>
                            <div className="sidebar-card mt-4">
                                <h2 className="white-txt text-center">
                                    Win/Loss Ratio of trades : 65% winning trades
                                </h2>
                            </div>
                        </div>
                      
                        <div className="col-md-7 d-flex justify-content-around right-hand flex-wrap mt-3">
                            <div className="d-flex flex-column justify-content-center ">
                                <img src={perfomance7} />
                                <p className="white-txt text-center">Profit Factor</p>
                                <h1 className="white-txt">1.57</h1>
                            </div>
                            {/* <hr style={{ backgroundColor: '#FFFFFF', width: '3px' }} /> */}
                            <div
                                className="mt-2 last-divider "

                            />

                            <div className="d-flex flex-column justify-content-center ">
                                <img src={perfomance8} />
                                <p className="white-txt text-center">Average Annual Gross Profit</p>
                                <h1 className="white-txt">67%</h1>
                            </div>
                        </div>

                    </div>
                </section>
            </div>         <Footer />
        </div>
    );
}

export default Performance;
