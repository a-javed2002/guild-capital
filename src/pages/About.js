import React, { useRef, useState, useEffect } from 'react';

import "../styles/about.css";


import header from '../assets/images/What-we-header.png';
import fund from '../assets/images/Funds-of-funds 1.png';
import vector5 from '../assets/images/vector5.png';
import vector6 from '../assets/images/vector6.png';
import vector7 from '../assets/images/vector7.png';
import vector8 from '../assets/images/vector8.png';
import vector9 from '../assets/images/vector9.png';
import aboutLast1 from '../assets/images/About-Last1.png';
import aboutLast2 from '../assets/images/About-Last2.png';
import aboutLast3 from '../assets/images/About-Last3.png';
import aboutLast4 from '../assets/images/About-Last4.png';
import useScrollLock from "../hook/useaboutScroll";
import deco1 from "../assets/images/decroation/what-we/deco1.svg";
import deco2 from "../assets/images/decroation/what-we/deco2.svg";
import deco3 from "../assets/images/decroation/what-we/deco3.svg";
import deco4 from "../assets/images/decroation/what-we/deco4.svg";
import deco9 from "../assets/images/decroation/what-we/deco9.svg";
function About() {


    const categories = [
        {
            id: 0,
            title: ["Innovation", <br key="br1" />, "Fuel Success"],
            text: [
                "Embracing technological advancements and creative strategies enables us to provide cutting-edge solutions and achieve superior performance.",
                <br key="br2" />, <br key="br9" />,
                "Innovation is at the heart of our approach, driving us to continually evolve and stay ahead of market trends."
            ],
            image: vector5
        },
        {
            id: 1,
            title: ["Our", <br key="br3" />, "Philosophy"],
            text: [
                "At GUILD Capital, we are driven by core principles that guide our approach to investment management and client relationships.",
                <br key="br4" />, <br key="br9" />,
                "Our commitment to these values ensures that we consistently deliver outstanding results and maintain the highest standards of integrity and excellence."
            ],
            image: vector6
        },
        {
            id: 2,
            title: ["Client Centric", <br key="br5" />, "Focus"],
            text: "Our clients' goals are central to our operations. We tailor our services to meet your unique needs and aspirations, ensuring that our solutions are aligned with your financial objectives and long-term success.",
            image: vector7
        },
        {
            id: 3,
            title: ["Innovation", <br key="br6" />, "Fuel Success"],
            text: [
                "Embracing technological advancements and creative strategies enables us to provide cutting-edge solutions and achieve superior performance.",
                <br key="br7" />, <br key="br9" />,
                "Innovation is at the heart of our approach, driving us to continually evolve and stay ahead of market trends."
            ],
            image: vector8
        },
        {
            id: 4,
            title: ["Client Centric", <br key="br8" />, "Focus"],
            text: "Our clients' goals are central to our operations. We tailor our services to meet your unique needs and aspirations, ensuring that our solutions are aligned with your financial objectives and long-term success.",
            image: vector9
        }
    ];

    const sectionRef = useRef(null);
    const { currentIndex, isScrollLocked, setIsScrollLocked } = useScrollLock(categories, "third-section");

    useEffect(() => {
        if (isScrollLocked) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isScrollLocked]);


    return (
        <div className='About ' >
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
            <div className="decorative-img5">
                <img src={deco9} alt="Decorative" />
            </div> */}
            <div className='container content3'>
                <header className='about-header rem7-marginTop'>
                    <h1 className='primary text-center font-7xl'>
                        About US
                    </h1>
                    <center>
                        <div className='container-para d-flex flex-column align-items-center'>
                            <p className='text-center white-txt mt-5 '>
                                At GUILD Capital, we are at the forefront of asset management, dedicated to transforming the <br></br> investment landscape through innovation and expertise. Our specialization in commodities and  <br></br> currencies allows us to navigate complex market dynamics and consistently deliver superior <br></br>  investment outcomes.
                            </p>
                            <br></br>
                            <p className='text-center white-txt  '>
                                We pride ourselves on our strategic partnerships with leading regulated brokers, which ensures that your  <br></br> investments are secure and managed with the utmost efficiency. Our targeted focus on key  <br></br>assets such as gold and the euro, combined with our advanced technological tools and in-depth  <br></br>market insights, positions us uniquely to drive your financial success.
                            </p>
                            <br></br>
                            <p className='text-center white-txt  '>
                                Our team of seasoned professionals brings a wealth of experience and a commitment to excellence        <br></br> in every aspect of asset management. By leveraging state-of-the-art technology and strategic        <br></br> analysis, we tailor our approach to meet your individual investment goals and adapt to the ever-<br></br>evolving financial landscape.
                            </p>
                            <br></br>
                            <p className='text-center white-txt  '>
                                At GUILD Capital, our mission is to provide you with exceptional investment solutions that are both <br></br>innovative and effective. We are committed to delivering not only strong financial performance but <br></br>also an investment experience that reflects our dedication to your success.
                            </p>
                        </div>
                    </center>
                </header>

                <section className='second-section rem11-marginTop '>
                    <div className='row second-content'>
                        <div className='col-lg-7 col-md-12 col-sm-12'>
                            <h1 className='primary text-start   '>
                                Experience Unmatched <br></br>
                                Investment Opportunities with Us
                            </h1>
                            <p className='mt-3 white-txt text-start font-base '>
                                At GUILD Capital, we redefine asset management through <br></br> innovative strategies and deep market insights. Our strategic <br></br> partnerships ensure your investments are secure and optimized for  success.
                            </p>
                            <div className='d-flex  mt-5 second-section-btn justify-content-center'>
                                <button className='fill-button'>
                                    Learn More
                                </button>
                                <button className='mx-3 outline-button'>
                                    Join Now
                                </button>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12 d-flrc justify-content-center'>
                            <img src={fund} loading="lazy" />
                        </div>

                    </div>
                </section>




                <section
                    id="third-section"
                    ref={sectionRef}
                    className={`third-section rem7-marginTop ${isScrollLocked ? "fixed" : ""}`}
                >
                    <div className="innovation-container">
                        <div className="sidebar mt-3">
                            {categories.map((cat, index) => (
                                <div key={cat.id} className={`icon ${currentIndex === index ? "active" : ""}`}>
                                    <img src={cat.image} alt={cat.title} loading="lazy" />
                                </div>
                            ))}
                        </div>
                        <div className="content">
                            <h1>
                                <span className="italic white-txt">{categories[currentIndex].title}</span><br />

                            </h1>
                            <p className='white-txt font-basex2 mt-4'>{categories[currentIndex].text}</p>
                            <button className="fill-button mt-5">Join now →</button>
                        </div>
                    </div>
                </section>










                <section className='last-section rem11-marginTop  rem7-marginbottom '>
                    <h1 className='primary text-center last-h1'>
                        What Makes Us Different ?
                    </h1>

                    <div className="row main mt-5  d-flex  justify-content-center last-content">
                        <div className="left-hand col-lg-4 col-sm-5 d-flex align-items-stretch  align-items-center mt-2 ">

                            <div className="last-card d-flex flex-column   w-100   justify-content-center">

                                <center>

                                    <img src={aboutLast1} alt="Performance" loading="lazy" />

                                </center>
                                <div className='d-flex flex-column justify-content-start'>
                                    <h1 className="white-txt text-start fst-italic">
                                        Performance <br></br>
                                        Based Model
                                    </h1>
                                    <p className="white-txt text-start mt-2">
                                        We offer tailored risk management solutions, including stop-loss limits and diversified strategies, to protect your capital and optimize returns.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="right-hand col-lg-6 col-sm-7  d-flex flex-column justify-content-start mt-2">
                            <div className="last-card mb-3">
                                <div className='d-flex align-items-center flex-wrap'>
                                    <img src={aboutLast2} alt="Performance" className='' loading="lazy" />

                                    <div>
                                        <h1 className="white-txt text-start fst-italic">
                                            Customized <br></br>
                                            Risk Management
                                        </h1>
                                    </div>
                                </div>

                                <p className="white-txt text-start">
                                    We offer tailored risk management solutions, including stop-loss limits and diversified strategies, to protect your capital and optimize  returns.
                                </p>
                            </div>
                            <div className="last-card">
                                <div className='d-flex align-items-center flex-wrap'>
                                    <img src={aboutLast4} alt="Performance" loading="lazy" />

                                    <h1 className="white-txt text-start fst-italic">
                                        Transparency & <br></br>
                                        Communication
                                    </h1>      </div>
                                <p className="white-txt text-start">
                                    We prioritize clear, transparent communication with regular updates and detailed reports, ensuring you are always informed about your investments.
                                </p>
                            </div>
                        </div>
                        <div className=' col-lg-10 col-sm-12  mt-3'>
                            <div className="last-card row gap-3">
                                <div className=" col-md-3">
                                    <img src={aboutLast3} alt="Performance" loading="lazy" />
                                </div>

                                <div className="col-md-8 mt-5">
                                    <h1 className="white-txt text-start fst-italic">
                                        Expertise & <br></br>
                                        Innovation
                                    </h1>
                                    <p className="white-txt text-start">
                                        Our team of seasoned professionals utilizes cutting-edge technology and innovative strategies to stay ahead of market trends and deliver exceptional results.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>



                </section>
            </div >

        </div >

    );
}

export default About;
