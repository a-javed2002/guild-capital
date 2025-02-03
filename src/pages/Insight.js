import React from "react";
import "../styles/insight.css";
import insight4 from "../assets/images/Insight4.png";
import insight5 from "../assets/images/Insight5.png";
import insight6 from "../assets/images/Insight6.png";
import insight7 from "../assets/images/Insight7.png";
import insight8 from "../assets/images/Insight8.png";
import insight9 from "../assets/images/Insight9.png";
import insight10 from "../assets/images/Insight10.png";


function Insight() {
    return (
        <div className="insight">
            <div className="container">
                <header className="insight-header">
                    <h1 className="primary text-center fst-italic">
                        Explore Our Comprehensive Financial Services Tailored Just for You
                    </h1>
                    <p>
                        Discover innovative solutions tailored to your financial needs. Start your journey towards smarter savings, investing, and planning.
                    </p>

                    <center>
                        <div className="grid grid-cols-2 lg:grid-cols-4 max-w-3xl mx-auto header-img">
                            <img alt loading="lazy" data-nimg={1} style={{ color: 'transparent' }} src={insight4} />
                            <img alt loading="lazy" data-nimg={1} style={{ color: 'transparent' }} src={insight5} />
                            <img alt loading="lazy" data-nimg={1} style={{ color: 'transparent' }} src={insight6} />
                            <img alt loading="lazy" data-nimg={1} style={{ color: 'transparent' }} src={insight7} />
                        </div>

                    </center>

                </header>

                <section className="insight-second mt-5">
                    <h1 className="primary text-center fst-italic">
                        Insights
                    </h1>
                    <div className="second-tabs mt-4 d-flex justify-content-center gap-5 flex-wrap">
                        <button className="outline-button active">
                            All
                        </button>
                        <button className="outline-button">
                            Borrowing
                        </button>
                        <button className="outline-button">
                            Earning
                        </button>
                        <button className="outline-button">
                            Investing
                        </button>
                        <button className="outline-button">
                            Planning
                        </button>
                        <button className="outline-button">
                            Saving
                        </button>

                    </div>

                    <div className=" d-flex insight-container gap-3  mt-5  flex-wrap  justify-content-center">
                        <div className="insight-card ">
                            <img src={insight9} />
                            <h4 className="primary text-start mt-2">
                                Savings Strategies – Building a Strong Foundation for Financial Security
                            </h4>
                            <p className="white-txt mt-3">
                                Strategies : Tops Tips for Building Financial Security Through Smart Saving and High-Yield Accounts .
                            </p>
                        </div>
                        <div className="insight-card ">
                            <img src={insight8} />
                            <h4 className="primary text-start mt-2">
                                Goal Balancing – Saving for Multiple Financial Objectives Without Sacrifice
                            </h4>
                            <p className="white-txt mt-3">
                                Goal Balancing : Effective Strategies for Saving Toward Multiple Financial Objectives Simultaneously.
                            </p>
                        </div>
                        <div className="insight-card ">
                            <img src={insight10} />
                            <h4 className="primary text-start mt-2">
                                Retirement Timing – Choosing the Right Time to Retire for Financial Success
                            </h4>
                            <p className="white-txt mt-3">
                                Retirement Timing : Key factors for Deciding When to Retire and Achieve Financial Independence.


                            </p>
                        </div>



                        <div className="insight-card ">
                            <img src={insight9} />
                            <h4 className="primary text-start mt-2">
                                Savings Strategies – Building a Strong Foundation for Financial Security
                            </h4>
                            <p className="white-txt mt-3">
                                Strategies : Tops Tips for Building Financial Security Through Smart Saving and High-Yield Accounts .
                            </p>
                        </div>
                        <div className="insight-card ">
                            <img src={insight8} />
                            <h4 className="primary text-start mt-2">
                                Goal Balancing – Saving for Multiple Financial Objectives Without Sacrifice
                            </h4>
                            <p className="white-txt mt-3">
                                Goal Balancing : Effective Strategies for Saving Toward Multiple Financial Objectives Simultaneously.
                            </p>
                        </div>
                        <div className="insight-card">
                            <img src={insight10} />
                            <h4 className="primary text-start mt-2">
                                Retirement Timing – Choosing the Right Time to Retire for Financial Success
                            </h4>
                            <p className="white-txt mt-3">
                                Retirement Timing : Key factors for Deciding When to Retire and Achieve Financial Independence.


                            </p>
                        </div>



                        <div className="insight-card ">
                            <img src={insight9} />
                            <h4 className="primary text-start mt-2">
                                Savings Strategies – Building a Strong Foundation for Financial Security
                            </h4>
                            <p className="white-txt mt-3">
                                Strategies : Tops Tips for Building Financial Security Through Smart Saving and High-Yield Accounts .
                            </p>
                        </div>
                        <div className="insight-card ">
                            <img src={insight8} />
                            <h4 className="primary text-start mt-2">
                                Goal Balancing – Saving for Multiple Financial Objectives Without Sacrifice
                            </h4>
                            <p className="white-txt mt-3">
                                Goal Balancing : Effective Strategies for Saving Toward Multiple Financial Objectives Simultaneously.
                            </p>
                        </div>
                        <div className="insight-card ">
                            <img src={insight10} />
                            <h4 className="primary text-start mt-2">
                                Retirement Timing – Choosing the Right Time to Retire for Financial Success
                            </h4>
                            <p className="white-txt mt-3">
                                Retirement Timing : Key factors for Deciding When to Retire and Achieve Financial Independence.


                            </p>
                        </div>

                    </div>
                </section>

                <section className="insight-third mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <h1 className="white-txt text-start fst-italic">
                                Stay Updated with Our Insights
                            </h1>
                        </div>

                        <div className="col-md-6">
                            <p className="white-txt text-start">
                                Join our newsletter to receive the latest updates and valuable insights directly in your inbox. Don't miss out on tips and strategies to enhance your financial journey.
                            </p>
                            <div className="insight-subcribtion d-flex gap-3">
                                <input type="email" placeholder="Your Email" />
                                <button className="fill-button">Join Now</button>
                            </div>
                            <p className="white-txt text-start">
                                By clicking Join Now, you agree to our Terms and Conditions.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Insight;
