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
function About() {
    const [activeCategory, setActiveCategory] = useState(0);
    const thirdSectionRef = useRef(null);

    const categories = [
        {
            id: 0,
            title: "Client Centric Focus",
            text: "Our clients' goals are central to our operations. We tailor our services to meet your unique needs and aspirations, ensuring that our solutions are aligned with your financial objectives and long-term success.",
            image: vector5
        },
        {
            id: 1,
            title: "Innovation Fuel Sucess ",
            text: "Embracing technological advancements and creative strategies enables us to provide cutting-edge solutions and achieve superior performance.  Innovation is at the heart of our approach, driving us to continually evolve and stay ahead of market trends.",
            image: vector6
        },
        {
            id: 2,
            title: "Innovation Fuel Sucess ",
            text: "Embracing technological advancements and creative strategies enables us to provide cutting-edge solutions and achieve superior performance.Innovation is at the heart of our approach, driving us to continually evolve and stay ahead of market trends.",
            image: vector7
        },
        {
            id: 3,
            title: "Our Philosophy",
            text: "At GUILD Capital, we are driven by core principles that guide our approach to investment management and client relationships. Our commitment to these values ensures that we consistently deliver outstanding results and maintain the highest standards of integrity and excellence.",
            image: vector8
        },
        {
            id: 4,
            title: "Client Centric Focus",
            text: "Our clients' goals are central to our operations. We tailor our services to meet your unique needs and aspirations, ensuring that our solutions are aligned with your financial objectives and long-term success.",
            image: vector9
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!thirdSectionRef.current) return;

            // Get the third section's position relative to the document
            const thirdSectionTop = thirdSectionRef.current.offsetTop;
            const thirdSectionHeight = thirdSectionRef.current.offsetHeight;

            // We choose to check using the middle of the viewport:
            const viewportMiddle = window.scrollY + window.innerHeight / 2;

            // Only update if the viewport's middle is within the third section
            if (viewportMiddle < thirdSectionTop || viewportMiddle > (thirdSectionTop + thirdSectionHeight)) {
                return;
            }

            // Calculate progress inside the third section (0 to 1)
            const progress = (viewportMiddle - thirdSectionTop) / thirdSectionHeight;

            // Determine the active category based on progress:
            // Multiply progress by the number of categories and floor it.
            const index = Math.floor(progress * categories.length);

            // Ensure the index is within valid bounds
            const activeIndex = Math.min(categories.length - 1, Math.max(0, index));

            console.log("Viewport progress:", progress, "Active category index:", activeIndex);
            setActiveCategory(activeIndex);
        };

        window.addEventListener("scroll", handleScroll);

        // Run on mount in case the third section is already in view
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [categories.length]);

    return (
        <div className='About ' style={{backgroundColor:'red'}}>
            <div className='container'>
                <header className='about-header '>
                    <h1 className='primary text-center'>
                        About US
                    </h1>
                    <p className='text-center white-txt'>
                        At GUILD Capital, we are at the forefront of asset management, dedicated to transforming the investment landscape through innovation and expertise. Our specialization in commodities and currencies allows us to navigate complex market dynamics and consistently deliver superior investment outcomes.
                        <br></br>
                        <br></br>

                        We pride ourselves on our strategic partnerships with leading regulated brokers, which ensures that your investments are secure and managed with the utmost efficiency. Our targeted focus on key assets such as gold and the euro, combined with our advanced technological tools and in-depth market insights, positions us uniquely to drive your financial success.
                        <br></br>
                        <br></br>
                        Our team of seasoned professionals brings a wealth of experience and a commitment to excellence in every aspect of asset management. By leveraging state-of-the-art technology and strategic analysis, we tailor our approach to meet your individual investment goals and adapt to the ever-evolving financial landscape.
                        <br></br>
                        <br></br>
                        At GUILD Capital, our mission is to provide you with exceptional investment solutions that are both innovative and effective. We are committed to delivering not only strong financial performance but also an investment experience that reflects our dedication to your success.
                    </p>
                </header>

                <section className='second-section mt-5'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <h1 className='primary text-start'>
                                Experience Unmatched
                                Investment Opportunities with Us
                            </h1>
                            <p className='mt-3 white-txt text-start'>
                                At GUILD Capital, we redefine asset management through innovative strategies and deep market insights. Our strategic partnerships ensure your investments are secure and optimized for success.
                            </p>

                        </div>
                        <div className='col-md-4'>
                            <img src={fund} />
                        </div>
                        <div className='d-flex  mt-0 second-section-btn'>
                            <button className='fill-button'>
                                Learn More
                            </button>
                            <button className='mx-3 outline-button'>
                                Join Now
                            </button>
                        </div>
                    </div>
                </section>






                <section className='third-section  mt-5' ref={thirdSectionRef} >
                    <div className="innovation-container">

                        <div className="sidebar mt-3">

                            {categories.map((cat, index) => (
                                <div
                                    key={cat.id}
                                    className={`icon ${activeCategory === index ? "active" : ""}`}
                                >
                                    <img src={cat.image} alt={cat.title} />
                                </div>
                            ))}
                        </div>

                        <div className="content">


                            <h1>
                                <span className="italic white-txt">{categories[activeCategory].title}</span><br />
                                <span className="bold white-txt">Fuel Success</span>
                            </h1>
                            <p className='white-txt'>{categories[activeCategory].text}</p>
                            <p className='white-txt'>
                                Innovation is at the heart of our approach, driving us to continually
                                evolve and stay ahead of market trends.
                            </p>
                            <button className="fill-button">Join now →</button>
                        </div>
                    </div>
                </section>













                <section className='last-section mb-5 mt-5'>
                    <h1 className='primary text-center last-h1'>
                        What Makes Us Different ?
                    </h1>
                    <div className="row main mt-4">
                        <div className="left-hand col-md-6 d-flex align-items-stretch  align-items-center mt-2 ">

                            <div className="last-card d-flex flex-column   w-100   justify-content-center">

                                <center>

                                    <img src={aboutLast1} alt="Performance" />

                                </center>
                                <div className='d-flex flex-column justify-content-start'>
                                    <h1 className="white-txt text-start fst-italic">
                                        Performance <br></br>
                                        Based Model
                                    </h1>
                                    <p className="white-txt text-start">
                                        We offer tailored risk management solutions, including stop-loss limits and diversified strategies, to protect your capital and optimize returns.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="right-hand col-md-6 d-flex flex-column justify-content-start mt-2">
                            <div className="last-card mb-3">
                                <div className='d-flex align-items-center flex-wrap'>
                                    <img src={aboutLast2} alt="Performance" className='' />

                                    <h1 className="white-txt text-start fst-italic">
                                        Customized
                                        Risk Management
                                    </h1>
                                </div>

                                <p className="white-txt text-start">
                                    We offer tailored risk management solutions, including stop-loss limits and diversified strategies, to protect your capital and optimize returns.
                                </p>
                            </div>
                            <div className="last-card">
                                <div className='d-flex align-items-center flex-wrap'>
                                    <img src={aboutLast4} alt="Performance" />

                                    <h1 className="white-txt text-start fst-italic">
                                        Transparency &
                                        Communication
                                    </h1>      </div>
                                <p className="white-txt text-start">
                                    We prioritize clear, transparent communication with regular updates and detailed reports, ensuring you are always informed about your investments.
                                </p>
                            </div>
                        </div>
                        <div className=' col-md-12  mt-3'>
                            <div className="last-card row gap-3">
                                <div className=" col-md-3">
                                    <img src={aboutLast3} alt="Performance" />
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
