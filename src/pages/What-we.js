import React, { useRef, useState, useEffect } from 'react';

import "../styles/what-we.css";


import header from '../assets/images/What-we-header.png';
import Investment1 from '../assets/images/Investment-Advisory1.png';
import Investment2 from '../assets/images/Investment2.png';
import Investment3 from '../assets/images/Investment3.png';
import useScrollLock3 from "../hook/useaboutScroll";
import deco1 from "../assets/images/decroation/what-we/deco1.svg";
import deco2 from "../assets/images/decroation/what-we/deco2.svg";
import deco3 from "../assets/images/decroation/what-we/deco3.svg";
import deco4 from "../assets/images/decroation/what-we/deco4.svg";
import deco5 from "../assets/images/decroation/what-we/deco5.svg";

const categories = [


    {
        title: "Fund of Funds",
        text: "Our upcoming Fund of Funds service will enable other funds to leverage our expertise under a white-label arrangement, providing customized investment solutions.",
    },
    {
        title: "Structured Fund",
        text: "Our Structured Fund is an open-ended, risk-managed vehicle, balancing growth and capital preservation. With transparency at its core, it will offer semi-liquidity, allowing regular access to capital. Independently administered, audited, and regulated, it will uphold the highest standards of governance, ensuring investor confidence in performance and oversight.",
    },
    {
        title: "Discretionary Investment",
        text: [
            "At GUILD Capital, we specialize in",
            <br key="br1" />,
            "strategic investment management",
            <br key="br2" />,
            "tailored to your unique goals. Our",
            <br key="br3" />,
            "experienced team is dedicated to",
            <br key="br4" />,
            "optimizing returns while effectively",
            <br key="br5" />,
            "managing risk."
        ],
    },
];


function What_We() {
    const { currentIndex, isScrollLocked } = useScrollLock3(categories, "category-section-5");
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        setIsAnimated(true); // You can add conditions if needed
    }, []);


    return (
        <div className='what-we'>
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
            </div> */}
            {/* <div className="decorative-img5">
                <img src={deco5} alt="Decorative" />
            </div> */}
            <div className='content-2  container'>
                <header className='what-we-header '>
                    <h1 className='primary text-center '>What We Offer</h1>

                    <center>
                        <img src={header} className='header-img ' loading="lazy" />
                    </center>
                </header>

                <section className="financial-Future rem5-marginTop" >

                    <h1 className='primary text-center main font-4xl  '>Empowering Your Financial <br></br>
                        Future with Expertise</h1>
                    <p className='white-txt text-center fianancial-intro mt-4 font-sm2 '>
                        At GUILD Capital, we specialize in strategic investment management tailored to your unique goals. Our<br></br>
                        experienced team is dedicated to optimizing returns while effectively
                        managing risk.
                    </p>

                    <div className={`row left-hand gap-5"  ${isAnimated ? "animated" : ""}`} id="category-section-5" >
                        <div className="col-lg-7 col-sm-12">
                            <h1 className="primary text-start ">{categories[currentIndex].title}</h1>
                            <p className="white-txt text-start font-sm">{categories[currentIndex].text}</p>
                        </div>

                        <div className="col-lg-4  col-sm-12 right-hand" >
                            <div className="my-5 mx-4 rotation-img">
                                <div className={`financial-card card-${(currentIndex + 2) % 3 + 1} ${currentIndex === 0 ? "active" : ""}`}>
                                    <img src={Investment3} alt="Image 3" loading="lazy" />
                                </div>
                                <div className={`financial-card card-${(currentIndex + 1) % 3 + 1} ${currentIndex === 1 ? "active" : ""}`}>
                                    <img src={Investment2} alt="Image 2" loading="lazy" />
                                </div>
                                <div className={`financial-card card-${currentIndex + 1} ${currentIndex === 2 ? "active" : ""}`}>
                                    <img src={Investment1} alt="Image 1" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>


                </section>


                <section className='choose-us rem7-marginTop'>
                    <h1 className='text-center primary mb-5 font-7xl '>Why Choose Us ?</h1>
                    <center className='mt-3'>
                        <div className=''>
                            <div className='question '>
                                <h6 className='text-center white-txt'>
                                    Decades of combined expertise in financial management.
                                </h6>
                            </div>
                            <div className='question '>
                                <h6 className='text-center white-txt'>
                                    Commitment to innovation and investor-first principles.
                                </h6>
                            </div>
                            <div className='question '>
                                <h6 className='text-center white-txt'>
                                    A transparent, regulated, and client-centric approach.
                                </h6>
                            </div>
                        </div>
                    </center>
                </section>
            </div >
        </div >

    );
}

export default What_We;
