import React, { useState, } from 'react';
import "../styles/insight.css";
import insight4 from "../assets/images/Insight4.png";
import insight5 from "../assets/images/Insight5.png";
import insight6 from "../assets/images/Insight6.png";
import insight7 from "../assets/images/Insight7.png";
import insight8 from "../assets/images/Insight8.png";
import insight9 from "../assets/images/Insight9.png";
import insight10 from "../assets/images/Insight10.png";
import insight11 from "../assets/images/Insight11.png";
import insight12 from "../assets/images/Insight12.png";
import insight13 from "../assets/images/Insight13.png";
import insight14 from "../assets/images/Insight14.png";
import insight15 from "../assets/images/Insight15.png";
const insights = {
    All: [
        { img: insight9, title: 'Savings Strategies – Building a Strong Foundation for Financial Security ', text: '  Retirement Timing : Key factors for Deciding When to Retire and Achieve Financial Independence.' },
        { img: insight8, title: 'Goal Balancing – Saving for Multiple Financial Objectives Without Sacrifice', text: '  Strategies : Tops Tips for Building Financial Security Through Smart Saving and High-Yield Accounts .', text: 'Goal Balancing : Effective Strategies for Saving Toward Multiple Financial Objectives Simultaneously.' },
        { img: insight10, title: 'Retirement Timing – Choosing the Right Time to Retire for Financial Success', text: 'Retirement Timing : Key factors for Deciding When to Retire and Achieve Financial Independence..' },


        { img: insight11, title: 'Automated Savings - The Key to Effortless Wealth Building', text: 'Automated Savings : Effortlessly Build Wealth Tops Tips for Building Financial Security Through Smart Saving and High-Yield Accounts .' },
        { img: insight12, title: 'Sustainable Investing – Aligning Your Portfolio with Environmental and Social Goals', text: 'Sustainable Investing : Align your Portfolio with ESG Goals for Ethical and Financial Growth.' },
        { img: insight13, title: 'Milestone Adjustments – How to Stay on Track with Your Financial Goals', text: 'Milestone Adjustments : Adapting Financial Goals to Life Changes gor Ongoing Financial Success.' },
        { img: insight11, title: 'Emerging Markets High-Risk, High-Reward Investment Opportunities', text: 'Emerging Markets : Investing In High Growth Developing Economies For Diversified, High Reward Opportunities .' },
        { img: insight14, title: 'Income Boosts – Proven Strategies to Elevate Your Earnings', text: 'Emerging Markets : Investing In High Growth Developing Economies For Diversified, High Reward Opportunities .' },
        { img: insight15, title: 'Diversified Portfolio – Building a Strong Investment Strategy for Long-Term Success', text: 'Diversified Portfolio : Essential Strategies for Balanced Investment, Risk Management, and Long Term Financial Growth.' },

    ],
    Borrowing: [{ img: insight10, title: 'Managing Debt Effectively – Strategies for Borrowing and Repaying' }],
    Earning: [   { img: insight11, title: 'Emerging Markets High-Risk, High-Reward Investment Opportunities', text: 'Emerging Markets : Investing In High Growth Developing Economies For Diversified, High Reward Opportunities .' }, { img: insight11, title: 'Automated Savings - The Key to Effortless Wealth Building', text: 'Automated Savings : Effortlessly Build Wealth Tops Tips for Building Financial Security Through Smart Saving and High-Yield Accounts .' },
        { img: insight12, title: 'Sustainable Investing – Aligning Your Portfolio with Environmental and Social Goals', text: 'Sustainable Investing : Align your Portfolio with ESG Goals for Ethical and Financial Growth.' },],
    Planning: [{ img: insight10, title: 'Retirement Timing – Choosing the Right Time to Retire for Financial Success', text: 'Retirement Timing : Key factors for Deciding When to Retire and Achieve Financial Independence..' },
        , { img: insight15, title: 'Diversified Portfolio – Building a Strong Investment Strategy for Long-Term Success', text: 'Diversified Portfolio : Essential Strategies for Balanced Investment, Risk Management, and Long Term Financial Growth.' },
    ],
    Investing: [{ img: insight10, title: 'Retirement Timing – Choosing the Right Time to Retire for Financial Success', text: 'Retirement Timing : Key factors for Deciding When to Retire and Achieve Financial Independence..' },
    ],
    Saving: [{ img: insight9, title: 'Savings Strategies – Building a Strong Foundation for Financial Security ', text: '  Retirement Timing : Key factors for Deciding When to Retire and Achieve Financial Independence.' },],
};

function Insight() {

    const [activeTab, setActiveTab] = useState('All');

    const handleTabClick = (tab) => {
        if (tab !== activeTab) setActiveTab(tab);
    };
    return (
        <div className="insight">
            <div className="container">
                <header className="insight-header">
                    <h1 className="primary text-center fst-italic container">
                        Explore Our Comprehensive <br></br> Financial Services Tailored  Just <br></br> for You
                    </h1>
                    <p className="white-txt text-center mt-5 font-base container">
                        Discover innovative solutions tailored to your financial needs. Start your journey towards smarter savings, <br></br> investing, and planning.
                    </p>

                    <center className="mt-5">
                        <div className="grid grid-cols-2 lg:grid-cols-4 max-w-3xl mx-auto header-img">
                            <img alt loading="lazy" data-nimg={1} style={{ color: 'transparent' }} src={insight4} />
                            <img alt loading="lazy" data-nimg={1} style={{ color: 'transparent' }} src={insight5} />
                            <img alt loading="lazy" data-nimg={1} style={{ color: 'transparent' }} src={insight6} />
                            <img alt loading="lazy" data-nimg={1} style={{ color: 'transparent' }} src={insight7} />
                        </div>

                    </center>

                </header>

                <section className="insight-second rem7-marginTop ">
                    <h1 className="primary text-center fst-italic">
                        Insights
                    </h1>
                    <center>
                        <div className="second-tabs mt-5 d-flex justify-content-center gap-5 flex-wrap">

                            {['All', 'Borrowing', 'Earning', 'Investing', 'Planning', 'Saving'].map((tab) => (
                                <button
                                    key={tab}
                                    className={`outline-button ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => handleTabClick(tab)}
                                >
                                    {tab}
                                </button>
                            ))}



                        </div>
                    </center>

                    <div className=" d-flex insight-container gap-3  mt-5  flex-wrap  justify-content-center">

                        {insights[activeTab].map((insight, index) => (
                            <div key={index} className='insight-card'>
                                <img src={insight.img} className="" alt={insight.title} />
                                <h4 className='primary text-start mt-3'>{insight.title}</h4 >
                                <p className="white-txt mt-3">
                                    {insight.text}
                                </p>
                            </div>



                        ))}

                        {/* <div className="insight-card ">
                            <img src={insight9} loading="lazy" />
                            <h4 className="primary text-start mt-2">
                                Savings Strategies – Building a Strong Foundation for Financial Security
                            </h4>
                            <p className="white-txt mt-3">
                                Strategies : Tops Tips for Building Financial Security Through Smart Saving and High-Yield Accounts .
                            </p>
                        </div>
                        <div className="insight-card ">
                            <img src={insight8} loading="lazy" />
                            <h4 className="primary text-start mt-2">
                                Goal Balancing – Saving for Multiple Financial Objectives Without Sacrifice
                            </h4>
                            <p className="white-txt mt-3">
                                Goal Balancing : Effective Strategies for Saving Toward Multiple Financial Objectives Simultaneously.
                            </p>
                        </div>
                        <div className="insight-card">
                            <img src={insight10} loading="lazy" />
                            <h4 className="primary text-start mt-2">
                                Retirement Timing – Choosing the Right Time to Retire for Financial Success
                            </h4>
                            <p className="white-txt mt-3">
                                Retirement Timing : Key factors for Deciding When to Retire and Achieve Financial Independence.


                            </p>
                        </div>



                        <div className="insight-card ">
                            <img src={insight9} loading="lazy" />
                            <h4 className="primary text-start mt-2">
                                Savings Strategies – Building a Strong Foundation for Financial Security
                            </h4>
                            <p className="white-txt mt-3">
                                Strategies : Tops Tips for Building Financial Security Through Smart Saving and High-Yield Accounts .
                            </p>
                        </div>
                        <div className="insight-card ">
                            <img src={insight8} loading="lazy" />
                            <h4 className="primary text-start mt-2">
                                Goal Balancing – Saving for Multiple Financial Objectives Without Sacrifice
                            </h4>
                            <p className="white-txt mt-3">
                                Goal Balancing : Effective Strategies for Saving Toward Multiple Financial Objectives Simultaneously.
                            </p>
                        </div>
                        <div className="insight-card ">
                            <img src={insight10} loading="lazy" />
                            <h4 className="primary text-start mt-2">
                                Retirement Timing – Choosing the Right Time to Retire for Financial Success
                            </h4>
                            <p className="white-txt mt-3">
                                Retirement Timing : Key factors for Deciding When to Retire and Achieve Financial Independence.


                            </p>
                        </div> */}

                    </div>
                </section>

                <section className="insight-third rem7-marginTop d-flex justify-content-center ">
                    <div className="row insight-box">
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <h1 className="white-txt text-start fst-italic">
                                Stay Updated with Our  <br></br>Insights
                            </h1>
                        </div>

                        <div className="col-md-6">
                            <p className="white-txt text-start first">
                                Join our newsletter to receive the latest updates and valuable insights directly in your inbox. Don't miss out on tips and strategies to enhance  your  financial journey.
                            </p>
                            <div className="insight-subcribtion d-flex gap-3 mt-4 flex-wrap">
                                <input type="email" placeholder="Your Email" />
                                <button className="fill-button">Join Now</button>
                            </div>
                            <p className="white-txt text-start  second mt-4">
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
