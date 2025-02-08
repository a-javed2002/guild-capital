import React, { useRef, useState, useEffect } from 'react';

import "../styles/index.css";


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
import vector from '../assets/images/Vector.png';
import vedio1 from '../assets/vedio/home-one2.m4v';
import vedio2 from '../assets/vedio/home-two.mp4';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/Footer';
import useScrollSwipe from "./useScrollSwipe";
function Home() {





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
    //  useEffect(() => {
    //         const handleScroll = () => {
    //             if (!secondSectionRef.current) return;
    //             const secondSectionTop = secondSectionRef.current.offsetTop;
    //             const secondSectionHeight = secondSectionRef.current.offsetHeight;
    //             const viewportMiddle = window.scrollY + window.innerHeight / 2;
    //             if (viewportMiddle < secondSectionTop || viewportMiddle > (secondSectionTop + secondSectionHeight)) {
    //                 return;
    //             }
    //             const progress = (viewportMiddle - secondSectionTop) / secondSectionHeight;
    //             const index = Math.floor(progress * categories.length);
    //             const activeIndex = Math.min(categories.length - 1, Math.max(0, index));

    //             console.log("Viewport progress:", progress, "Active category index:", activeIndex);
    //             setActiveCategory(activeIndex);
    //         };

    //         window.addEventListener("scroll", handleScroll);
    //         handleScroll();
    //         return () => window.removeEventListener("scroll", handleScroll);
    //     }, [categories.length]);





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


    // const [isFullScreen, setIsFullScreen] = useState(true);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY < 50) {
    //             setIsFullScreen(true);  // Return to full screen when scrolled to top
    //         } else {
    //             setIsFullScreen(false); // Shrink video after scrolling
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [shrunkIndex, setShrunkIndex] = useState([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (!swiperRef.current) return;

        const swiper = new window.Swiper(swiperRef.current, {
            slidesPerView: 3,  // Number of visible slides (desktop)
            spaceBetween: 20,  // Space between slides
            loop: true,  // Infinite loop
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                1024: { slidesPerView: 3 }, // Large screens
                768: { slidesPerView: 2 }, // Tablets
                480: { slidesPerView: 1 },  // Mobile
            },
        });

        return () => {
            if (swiper) {
                swiper.destroy();
            }
        };
    }, []);

    // Hover effect functions
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
        // Add all other slides except the hovered one to shrunkIndex
        setShrunkIndex((prev) => {
            return [...prev, ...Array.from({ length: 6 }).map((_, i) => i).filter(i => i !== index)];
        });
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setShrunkIndex([]);  // Reset shrunk effect when mouse leaves
    };
    return (

        <div className="Home " >
            <Navbar />

            <section style={{ position: 'relative' }} className='home-header rem7-marginTop'>

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
                    {/* <div className={`vedio1-container ${isFullScreen ? "fullscreen" : "normal"}`}> */}

                    <div className={`vedio1-container `}>


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

                        <span className="white-txt ">Boltshift</span>
                    </div>
                    <div className="d-flex gap-2">
                        <img src={ShapeImage2} className="network-icon" alt="Shape" />

                        <span className="white-txt ">Lightbox</span>
                    </div>
                    <div className="d-flex gap-2">
                        <img src={ShapeImage3} className="network-icon" alt="Shape" />

                        <span className="white-txt">FeatherDev</span>
                    </div>
                    <div className="d-flex gap-2">
                        <img src={ShapeImage4} className="network-icon" alt="Shape" />

                        <span className="white-txt ">Spherule</span>
                    </div>
                    <div className="d-flex gap-2">
                        <img src={ShapeImage5} className="network-icon" alt="Shape" />

                        <span className="white-txt ">Nietzsche</span>
                    </div>

                    <div className="d-flex gap-2">
                        <img src={ShapeImage} className="network-icon" alt="Shape" />

                        <span className="white-txt  ">Boltshift</span>
                    </div>
                    <div className="d-flex gap-2">
                        <img src={ShapeImage2} className="network-icon" alt="Shape" />

                        <span className="white-txt">Lightbox</span>
                    </div>
                    <div className="d-flex gap-2">
                        <img src={ShapeImage3} className="network-icon" alt="Shape" />

                        <span className="white-txt  ">FeatherDev</span>
                    </div>
                    <div className="d-flex gap-2">
                        <img src={ShapeImage4} className="network-icon" alt="Shape" />

                        <span className="white-txt  ">Spherule</span>
                    </div>
                    <div className="d-flex gap-2">
                        <img src={ShapeImage5} className="network-icon" alt="Shape" />

                        <span className="white-txt  ">Nietzsche</span>
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

                <div className="ani">
                    {/* <div className="container" >
                        <div className="left-panel">
                            {categories.map((cat, index) => (
                                <div key={index} className={`category ${index === currentIndex ? "active" : ""}`}>
                                    {cat}
                                </div>
                            ))}
                        </div>
                        <div className="right-panel">
                            <img src={images[currentIndex]} alt="Category" />
                        </div>
                    </div> */}
                </div>


                <div className="row fund-section mt-5" id="category-section-2">


                    <div className="col-lg-6 left-hand right-panel">

                        <img src={images[currentIndex]} alt="Category Image" />

                    </div>

                    <div className="col-lg-6 right-hand">
                        <h1 className="white-txt">Founding and Early Years</h1>
                        {categories.map((cat, index) => (
                            <div className={`d-flex gap-4 mt-5 ${index === currentIndex ? "active" : ""}`} key={index}>
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
                    <div className="col-lg-5 left-hand mt-2">
                        {categories2.map((category) => (

                            <div className={`d-flex gap-4  ${activeCategory2 === category.id ? "active" : ""}`} key={category.id}>
                                <img src={category.first} className="investment-img" alt="Investment" />
                                <h2 className="white-txt investment-txt align-content-center">
                                    {category.text}
                                </h2>
                            </div>
                        ))}

                    </div>

                    <div className="col-lg-7 mt-2">
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
                <div className="slider-container mt-5" >
                    {/* 
                    <Slider {...settings} ref={sliderRef} className='row'>
                        {[slider1, slider2, slider3, slider3, slider3, slider3, slider3].map((slider, index) => (
                            <div
                                key={index}
                                className={`slider-card d-flex flex-column justify-content-center align-items-center ${hoveredIndex === index ? "hovered" : ""}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <img src={slider} className="slider-image" />
                                <h2 className="white-txt text-center"> Unlock Your Investment</h2>
                                <p className="white-txt text-center">
                                    Enhanced User Engagement for Better Outcomes Enhanced User Engagement for Better Outcomes.
                                </p>
                            </div>
                        ))}
                    </Slider> */}

                    <div className="swiper mySwiper" ref={swiperRef}>
                        <div className="swiper-wrapper">
                            {[slider1, slider2, slider3,].map((sliderImage, index) => (
                                <div
                                    key={index}
                                    className={`swiper-slide d-flex flex-column justify-content-center align-items-center ${hoveredIndex === index ? 'hovered' : ''} ${shrunkIndex.includes(index) ? 'shrunk' : ''}`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img src={sliderImage} alt={`Slide ${index + 1}`} />
                                    <h2 className="white-txt text-center"> Unlock Your Investment</h2>
                                    <p className="white-txt text-center">
                                        Enhanced User Engagement for Better Outcomes Enhanced User Engagement for Better Outcomes.
                                    </p>
                                </div>
                            ))}
                        </div>


                        <div className="swiper-pagination" />
                    </div>
                </div>



            </div>

            <section className='rem7-marginTop customer-experience'>
                <h1 className='primary text-center'> Improves Customer Experiences</h1>
                <p className='white-txt text-center customer-experience-intro mt-3'>
                    Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. <br></br> Nibh est vitae suspendisse parturient sed lorem eu.
                </p>

                <div className='d-flex justify-content-center flex-wrap mt-5  counter '>
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
                    <div className='mt-5 insight-content d-flex justify-content-center flex-wrap gap-4'>
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
            <div className="rem7-marginTop testinomial">
                <h1 className="primary text-center"> Nextronium Testimonials</h1>

                <div className="container">
                    {/* Quote and Intro */}
                    <div className="row mt-5 align-items-center">
                        {/* Quote Image */}
                        <div className="col-lg-3 col-md-4 col-sm-12 text-center">
                            <img src={vector} className="Testimonials-quote-img" alt="Quote" />
                        </div>

                        {/* Testimonial Text */}
                        <div className="col-lg-8 col-md-8 col-sm-12 intro">
                            <p className="white-txt p-3">
                                "Joining this platform was a game-changer for me. The educational resources helped me understand crypto trading, and the community support is invaluable. Highly recommended!"
                            </p>
                        </div>
                    </div>

                    {/* Testimonial Cards */}
                    <div className="d-flex flex-wrap justify-content-center mt-3">
                        <div className="testinomial-card">
                            <img src={testinomial1} className="img-fluid" alt="Testimonial 1" />
                            <div className="mx-4">
                                <h5 className="white-txt">Constance Julien</h5>
                                <p>Chief Factors Technician</p>
                            </div>
                        </div>

                        <div className="testinomial-card d-flex flex-column justify-content-end">
                            <img src={testinomial2} className="second img-fluid" alt="Testimonial 2" />
                            <div className="mx-4">
                                <h5 className="white-txt">Constance Julien</h5>
                                <p>Chief Factors Technician</p>
                            </div>
                        </div>

                        <div className="testinomial-card d-flex flex-column justify-content-end">
                            <img src={testinomial3} className="second img-fluid" alt="Testimonial 3" />
                            <div className="mx-4">
                                <h5 className="white-txt">Constance Julien</h5>
                                <p>Chief Factors Technician</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="last-section mt-5 mb-5">
                <div className="container">
                    <div className="row box mt-5 align-items-center">
                        {/* Left Column - Text Section */}
                        <div className="col-lg-6 col-md-6 p-3 p-md-5  text-md-start">
                            <h2 className="white-txt">
                                Unlock Your <br />
                                Investment Potential <br></br> with Us
                            </h2>
                            <p className="white-txt">
                                Experience a seamless investment journey with our platform.
                                We prioritize user engagement and provide tools to track your
                                performance effectively.
                            </p>
                            <div className="d-flex justify-content-md-start justify-content-center">
                                <button className="fill-button mt-4">Get Started Now</button>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                            <img src={analytics} className="img-fluid" alt="Shape" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>


    );
}

export default Home;
