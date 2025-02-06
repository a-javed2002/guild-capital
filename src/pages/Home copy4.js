import React, { useRef, useState, useEffect } from 'react';
import Slider from "react-slick";
import "../styles/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ShapeImage from '../assets/images/Shape.png';
import ShapeImage2 from '../assets/images/Shape2.png';
import ShapeImage3 from '../assets/images/Shape3.png';
import ShapeImage4 from '../assets/images/Shape4.png';
import ShapeImage5 from '../assets/images/Shape5.png';
import fund from '../assets/images/Funds-of-funds.png';
import feature from '../assets/images/Feature1.png';
import Investment1 from '../assets/images/Investment-Advisory1.png';
import Investment2 from '../assets/images/Investment2.png';
import Investment3 from '../assets/images/Investment3.png';
import slider1 from '../assets/images/Slider1.png';
import slider2 from '../assets/images/Slider2.png';
import slider3 from '../assets/images/Slider3.png';
import insight1 from '../assets/images/insight1.png';
import insight2 from '../assets/images/insight2.png';
import insight3 from '../assets/images/insight3.png';
import testinomial1 from '../assets/images/testinomial1.png';
import testinomial2 from '../assets/images/testinomial2.png';
import testinomial3 from '../assets/images/testinomial3.png';
import analytics from '../assets/images/analytics-svg.svg';
import vector1 from '../assets/images/vector1.png';
import vector2 from '../assets/images/vector2.png';
import vector3 from '../assets/images/vector3.png';
import vector4 from '../assets/images/vector4.png';
import vector from '../assets/images/Vector.png';
import vedio1 from '../assets/vedio/home-one2.m4v';
import vedio2 from '../assets/vedio/home-two.mp4';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/Footer';
function Home() {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(1);  // Default to the middle slide on load

    const settings = {
        dots: true,
        infinite: true,
        speed: 1,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        initialSlide: -1,
        autoplay: false,
        //   autoplaySpeed: 1000,
        afterChange: (index) => {
            setCurrentSlide(index);
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '200',
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0',
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: '120',
                },
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: '140',
                },
            },
        ],

    };
    useEffect(() => {
        const slickSliderInstance = sliderRef.current;
        if (slickSliderInstance && slickSliderInstance.innerSlider) {
            const slickTrack = slickSliderInstance.innerSlider.list;
            if (!slickTrack) return;

            const slickSlides = slickTrack.querySelectorAll('.slick-slide');
            if (!slickSlides.length) return;

            // Check screen width using window.innerWidth
            if (window.innerWidth > 425) {
                slickSlides.forEach((slide) => {
                    slide.classList.remove('slider-middle');
                });

                slickSlides.forEach((slide, i) => {
                    if (slide.classList.contains('slick-current')) {
                        const nextSlide = slickSlides[i + 1];
                        if (nextSlide) {
                            nextSlide.classList.add('slider-middle');
                        }
                    }
                });

                const dots = document.querySelectorAll('.slick-dots li');
                if (!dots.length) return;

                const activeDot = Array.from(dots).find(dot => dot.classList.contains('slick-active'));

                if (activeDot) {
                    console.log("Active Dot: ", activeDot);
                    dots.forEach((dot) => dot.classList.remove('slider-dot-middle'));

                    const activeIndex = Array.from(dots).indexOf(activeDot);
                    console.log("Active Dot Index: ", activeIndex);

                    const nextDot = dots[activeIndex + 1] || dots[activeIndex];
                    if (nextDot) {
                        nextDot.classList.add('slider-dot-middle');
                    }
                }
            } else {
                slickSlides.forEach((slide) => {
                    slide.classList.remove('slider-middle');
                });

                slickSlides.forEach((slide) => {
                    if (slide.classList.contains('slick-current')) {
                        slide.classList.add('slider-middle');
                    }
                });

                const dots = document.querySelectorAll('.slick-dots li');
                if (!dots.length) return;

                const activeDot = Array.from(dots).find(dot => dot.classList.contains('slick-active'));

                if (activeDot) {
                    console.log("Active Dot: ", activeDot);
                    dots.forEach((dot) => dot.classList.remove('slider-dot-middle'));

                    const activeIndex = Array.from(dots).indexOf(activeDot);
                    console.log("Active Dot Index: ", activeIndex);

                    const nextDot = dots[activeIndex] || dots[activeIndex];
                    if (nextDot) {
                        nextDot.classList.add('slider-dot-middle');
                    }
                }
            }

            // Handle dots

        }
    }, [currentSlide]);

    const handleLeftHover = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };
    const handleRightHover = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };







    const [activeCategory, setActiveCategory] = useState(0);
    const secondSectionRef = useRef(null);

    const categories = [
        {
            id: 0,
            title: "2005",
            text: "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent. Commodo id amet mi.",
            image: fund
        },
        {
            id: 1,
            title: "2007",
            text: "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent. Commodo id amet mi.",
            image: fund
        },
        {
            id: 2,
            title: "2009",
            text: "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent. Commodo id amet mi.",
            image: fund
        },

    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!secondSectionRef.current) return;
            const secondSectionTop = secondSectionRef.current.offsetTop;
            const secondSectionHeight = secondSectionRef.current.offsetHeight;
            const viewportMiddle = window.scrollY + window.innerHeight / 2;
            if (viewportMiddle < secondSectionTop || viewportMiddle > (secondSectionTop + secondSectionHeight)) {
                return;
            }
            const progress = (viewportMiddle - secondSectionTop) / secondSectionHeight;
            const index = Math.floor(progress * categories.length);
            const activeIndex = Math.min(categories.length - 1, Math.max(0, index));

            console.log("Viewport progress:", progress, "Active category index:", activeIndex);
            setActiveCategory(activeIndex);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [categories.length]);





    const [activeCategory2, setActiveCategory2] = useState(0);
    const thirdSectionRef = useRef(null);

    const categories2 = [
        {
            id: 0,
            first: Investment1,
            text: "Advanced Security Measures",
            image: feature
        },
        {
            id: 1,
            first: Investment2,
            text: "Customizable Integrations",
            image: fund
        },
        {
            id: 2,
            first: Investment3,
            text: "Real-time Analytics Dashboard",
            image: insight2
        },

    ];
    useEffect(() => {
        const handleScroll2 = () => {
            if (!thirdSectionRef.current) return;

            const thirdSectionTop = thirdSectionRef.current.offsetTop;
            const thirdSectionHeight = thirdSectionRef.current.offsetHeight;
            const viewportMiddle = window.scrollY + window.innerHeight / 2;

            // Ensure the viewport is within the section
            if (viewportMiddle < thirdSectionTop || viewportMiddle > thirdSectionTop + thirdSectionHeight) {
                return;
            }


            const progress2 = (viewportMiddle - thirdSectionTop) / thirdSectionHeight;
            const index2 = Math.floor(progress2 * categories2.length);
            const activeIndex = Math.min(categories2.length - 1, Math.max(0, index2));

            console.log("Viewport progress2:", activeIndex, "Active category index2:", index2);
            setActiveCategory2(index2);
        };

        window.addEventListener("scroll", handleScroll2);
        handleScroll2();

        return () => window.removeEventListener("scroll", handleScroll2);
    }, [categories2.length]);



    const [activeTab, setActiveTab] = useState('All');

    const insights = {
        All: [
            {
                img: insight3,
                title: 'Goal Balancing – Saving for Multiple Financial Objectives Without Sacrifice',
            },
            {
                img: insight1,
                title: 'Retirement Timing – Choosing the Right Time to Retire for Financial Success',
            },
            {
                img: insight2,
                title: 'Savings Strategies – Building a Strong Foundation for Financial Security',
            },
        ],
        Borrowing: [
            {
                img: insight2,
                title: 'Managing Debt Effectively – Strategies for Borrowing and Repaying',
            },
        ],
        Earning: [
            {
                img: insight3,
                title: 'Maximizing Earnings – How to Boost Your Income in Changing Times',
            },
        ],
        Investing: [
            {
                img: insight3,
                title: 'Smart Investing – Choosing the Right Investment Options for You',
            },
        ],
        Planning: [
            {
                img: insight1,
                title: 'Financial Planning – Building a Strategy for Long-Term Security',
            },
        ],
        Saving: [
            {
                img: insight2,
                title: 'Effective Saving – How to Build Your Emergency Fund Efficiently',
            },
        ],
    };
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    const [isFullScreen, setIsFullScreen] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 50) {
                setIsFullScreen(true);  // Return to full screen when scrolled to top
            } else {
                setIsFullScreen(false); // Shrink video after scrolling
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (

        <div className="Home " >
            <Navbar />
            <section style={{ position: 'relative' }} className='home-header'>

                <h1 className="primary text-center">
                    Unlock Your Investment
                </h1>
                <h1 className="primary text-center">
                    Potential Today
                </h1>

                <p className="white-txt text-center">
                    Join our platform to streamline your investments and enhance your engagement. Experience real-time <br></br> tracking of agent performance and make informed decisions with ease.
                </p>
                <div className='video-container mt-5'>
                    <div className={`vedio1-container ${isFullScreen ? "fullscreen" : "normal"}`}>


                        <video autoPlay loop muted className='vedio1' >
                            <source src={vedio1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="d-flex justify-content-center gap-3 mt-5">
                    <button
                        className="fill-button "
                    >
                        Facts Sheet
                    </button>
                    <button
                        className="outline-button "
                    >
                        Join Now
                    </button>
                </div>
            </section>

            <div className='home-second rem7-marginTop'>
                <h1 className="primary text-center">Our Diverse Network of Partners</h1>
                <div className="d-flex gap-4 justify-content-center mt-5 flex-wrap">
                    <div className="d-flex gap-2 ">
                        <img src={ShapeImage} className="network-icon" alt="Shape" />

                        <span className="white-txt mt-1">Boltshift</span>
                    </div>
                    <div className="d-flex gap-2">
                        <img src={ShapeImage2} className="network-icon" alt="Shape" />

                        <span className="white-txt mt-1">Lightbox</span>
                    </div>
                    <div className="d-flex gap-2">
                        <img src={ShapeImage3} className="network-icon" alt="Shape" />

                        <span className="white-txt mt-1">FeatherDev</span>
                    </div>
                    <div className="d-flex gap-2">
                        <img src={ShapeImage4} className="network-icon" alt="Shape" />

                        <span className="white-txt mt-1">Spherule</span>
                    </div>
                    <div className="d-flex gap-2">
                        <img src={ShapeImage5} className="network-icon" alt="Shape" />

                        <span className="white-txt mt-1">Nietzsche</span>
                    </div>

                    <div className="d-flex gap-2">
                        <img src={ShapeImage} className="network-icon" alt="Shape" />

                        <span className="white-txt  mt-1">Boltshift</span>
                    </div>
                    <div className="d-flex gap-2">
                        <img src={ShapeImage2} className="network-icon" alt="Shape" />

                        <span className="white-txt mt-1">Lightbox</span>
                    </div>
                    <div className="d-flex gap-2">
                        <img src={ShapeImage3} className="network-icon" alt="Shape" />

                        <span className="white-txt  mt-1">FeatherDev</span>
                    </div>
                    <div className="d-flex gap-2">
                        <img src={ShapeImage4} className="network-icon" alt="Shape" />

                        <span className="white-txt  mt-1">Spherule</span>
                    </div>
                    <div className="d-flex gap-2">
                        <img src={ShapeImage5} className="network-icon" alt="Shape" />

                        <span className="white-txt  mt-1">Nietzsche</span>
                    </div>
                </div>
            </div>

            <section className="rem7-marginTop container second-section">
                <h1 className="text-center primary">
                    Unveiling Guilds Story
                </h1>
                <p className="text-center white-txt mt-4 intro">
                    The platform streamlines investments, enhances user engagement, and tracks agent <br></br> performance, catering to users, sales agents, and administrators.
                </p>
                i want when i came to this section main scroll scroll but screen not move only category index update till categories.length or categories[0]
                <div className="row fund-section mt-5" ref={secondSectionRef} style={{ minHeight: '400px' }}>


                    <div className="col-lg-6 left-hand">
                        {categories[activeCategory].image && (
                            <img src={categories[activeCategory].image} alt={`Image for ${categories[activeCategory].title}`} />
                        )}
                    </div>

                    <div className="col-lg-6 right-hand">
                        <h1 className="white-txt">Founding and Early Years</h1>

                        {categories.map((cat) => (
                            <div className={`d-flex gap-4 mt-5 ${activeCategory === cat.id ? "active" : ""}`} key={cat.id}>
                                <div className="fund-years">{cat.title}</div>
                                <p className="white-txt fund-txt">{cat.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="mt-5 feature-section container ">
                <h1 className="text-center primary">
                    Guild’s Key Features
                </h1>

                <div className="row mt-5 justify-content-center" ref={thirdSectionRef} style={{ minHeight: '400px' }}>
                    <div className="col-lg-6 left-hand mt-2">
                        {categories2.map((category) => (

                            <div className={`d-flex gap-4  ${activeCategory2 === category.id ? "active" : ""}`} key={category.id}>
                                <img src={category.first} className="investment-img" alt="Investment" />
                                <h2 className="white-txt investment-txt align-content-center">
                                    {category.text}
                                </h2>
                            </div>
                        ))}

                    </div>

                    <div className="col-lg-6 mt-2">
                        {categories2[activeCategory2] && (
                            <img src={categories2[activeCategory2].image} className="feature-image" alt="Feature" />
                        )}
                        <p className="white-txt text-center feature-image-txt mt-2">Experience a seamless investment journey with.</p>
                    </div>

                    <button className="fill-button mt-5">Get Started</button>
                </div>
            </div>

            <div className="potiential-setion container mt-5">
                <h1 className="primary text-center">
                    Unlock Your Investment Potential with Us
                </h1>
                <p className="white-txt text-center potiential-intro mt-4">
                    Experience a seamless investment journey with our platform. We prioritize user engagement and provide tools<br></br>
                    to track your performance effectively.
                </p>

                <div className="slider-container mt-5" style={{ position: 'relative' }}>
                    <div
                        className="hover-zone left-zone"
                        onMouseEnter={handleLeftHover}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '100%',
                            width: '20%',
                            zIndex: 2,
                        }}
                    />
                    <div
                        className="hover-zone right-zone"
                        onMouseEnter={handleRightHover}
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            height: '100%',
                            width: '20%',
                            zIndex: 2,
                        }}
                    />
                    <Slider {...settings} ref={sliderRef} className='row'>
                        <div className=" slider-card d-flex flex-column justify-content-center align-items-center">
                            <img src={slider1} className="slider-image" />
                            <h2 className="white-txt text-center"> Unlock Your Investment</h2>
                            <p className="white-txt text-center">
                                Enhanced User Engagement for Better Outcomes Enhanced User Engagement for Better Outcomes.
                            </p>
                        </div>
                        <div className="slider-card d-flex flex-column justify-content-center align-items-center">
                            <img src={slider2} className="slider-image" />
                            <h2 className="white-txt text-center"> Unlock Your Investment</h2>
                            <p className="white-txt text-center">
                                Enhanced User Engagement for Better Outcomes Enhanced User Engagement for Better Outcomes.
                            </p>
                        </div>
                        <div className="slider-card d-flex flex-column justify-content-center align-items-center">
                            <img src={slider3} className="slider-image" />
                            <h2 className="white-txt text-center"> Unlock Your Investment</h2>
                            <p className="white-txt text-center">
                                Enhanced User Engagement for Better Outcomes Enhanced User Engagement for Better Outcomes.
                            </p>
                        </div>
                    </Slider>

                    {/* You can add a visual indicator for the active slide */}
                    {/* <div>
                        <h3 className='white-txt'>Current Slide Index: {currentSlide}</h3>
                    </div> */}
                </div>
            </div>

            <section className='rem7-marginTop customer-experience'>
                <h1 className='primary text-center'> Improves Customer Experiences</h1>
                <p className='white-txt text-center customer-experience-intro mt-3'>
                    Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. <br></br> Nibh est vitae suspendisse parturient sed lorem eu.
                </p>

                <div className='d-flex justify-content-around flex-wrap rem7-marginTop  counter '>
                    <div>
                        <h1 className='primary text-center'>41.5%</h1>
                        <p className='white-txt'>Bitcoin Dominance</p>
                    </div>
                    <div>
                        <h1 className='primary text-center'>$2.5 T</h1>
                        <p className='white-txt'>Total Market Capitalization</p>
                    </div>
                    <div>
                        <h1 className='primary text-center'>$300 B</h1>
                        <p className='white-txt'>24-Hour Trading Volume</p>
                    </div>
                </div>

                <div className='d-flex justify-content-center rem7-marginTop'>
                    <div className='d-flex justify-content-center vedio2-container'>
                        <video autoPlay loop muted className='vedio2 '  >
                            <source src={vedio2} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button className="fill-button mt-5 join-now-btn">Join Now</button>
                    </div>



                </div>

            </section>



            <div className='rem7-marginTop insight-section'>
                <h1 className='primary text-center'>Insights</h1>

                <div className='d-flex gap-5 justify-content-center flex-wrap mt-5'>
                    {['All', 'Borrowing', 'Earning', 'Investing', 'Planning', 'Saving'].map((tab) => (
                        <button
                            key={tab}
                            className={`insight-tab fill-button ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <center>
                    <div className='mt-5 insight-content d-flex justify-content-center flex-wrap gap-5'>
                        {insights[activeTab].map((insight, index) => (
                            <div key={index} className='insight-card'>
                                <img src={insight.img} className="" alt={insight.title} />
                                <h5 className='white-txt text-start'>{insight.title}</h5>
                                <div className='d-flex justify-content-start'>
                                    <button className="fill-button mt-3 ">Read</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </center>
                <div className='d-flex justify-content-center  btn-container'>
                    <button className="fill-button ">Explore All</button>
                </div>
            </div>

            <div className='rem7-marginTop testinomial container'>
                <h1 className='primary text-center'> Nextronium Testimonials</h1>
                <div className='row mt-5  '>
                    <div className='col-lg-4 col-sm-2 mb-2 mx-3 d-flex justify-content-center align-item-center'>
                        <img src={vector} className="Testimonials-quote-img " />

                    </div>
                    <div className='col-lg-7 col-sm-10 intro'>
                        <p className='white-txt p-3 ' >
                            "Joining this platform was a game-changer for me. The educational resources helped me understand crypto trading, and the community support is invaluable. Highly recommended!"
                        </p>
                    </div>
                </div>

                <div className='   d-flex flex-wrap justify-content-center mt-3 '>
                    <div className='testinomial-card '>
                        <img src={testinomial1} className="" />
                        <div className='mx-4'>
                            <h5 className='white-txt'>
                                Constance Julien
                            </h5>
                            <p>Chief Factors Technician</p>
                        </div>
                    </div>

                    <div className="testinomial-card  d-flex flex-column justify-content-end ">

                        <img src={testinomial2} className="" style={{ width: '380px' }} />
                        <br></br>
                        <div className='mx-4'>
                            <h5 className='white-txt'>
                                Constance Julien
                            </h5>
                            <p>Chief Factors Technician</p>
                        </div>


                    </div>
                    <div className="testinomial-card   d-flex flex-column justify-content-end">
                        <img src={testinomial3} className="" style={{ width: '380px' }} />
                        <div className='mx-4'>
                            <h5 className='white-txt'>
                                Constance Julien
                            </h5>
                            <p>Chief Factors Technician</p>
                        </div>
                    </div>
                </div>

            </div>

            <section className='last-section mt-5 mb-5'>


                <h1 className='primary text-center'>
                    Discover the Guild Platform:
                </h1>
                <h1 className='primary text-center'>
                    Your Gateway to Smart Investment Solutions
                </h1>

                <center>
                    <div className='row box mt-5 justify-content-center'>
                        <div className='col-lg-5 p-2 p-md-5 d-flex flex-column justify-content-center align-items-center'>
                            <h2 className='white-txt text-start'>
                                Unlock Your
                                Investment Potential
                                with Us
                            </h2>
                            <p className='white-txt text-start'>

                                Experience a seamless investment journey with our platform. We prioritize user engagement and provide tools to track your performance effectively.
                            </p>

                            <div className='d-flex justify-content-start btn-container'>
                                <button
                                    className="fill-button mt-5"
                                >
                                    Get Started Now
                                </button>
                            </div>
                        </div>
                        <div className='col-lg-7 d-flex justify-content-center'>
                            <img src={analytics} className="" alt="Shape" />
                        </div>
                    </div>
                </center>

            </section>

            <Footer />
        </div>


    );
}

export default Home;
