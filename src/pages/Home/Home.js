import React, { useRef, useState, useEffect, Suspense } from 'react';
import "../../styles/index.css";
import { useNavigate } from "react-router-dom";
import insight1 from '../../assets/images/insight1.png';
import insight2 from '../../assets/images/insight2.png';
import insight3 from '../../assets/images/insight3.png';

import vedio2 from '../../assets/vedio/home-two.mp4';
import vedio1 from '../../assets/vedio/home-one2.m4v';
import analytics from '../../assets/images/analytics-svg.svg';
import SecondSection from "./secondsection";
import bg from "../../assets/images/Index.jpg";
import vector from '../../assets/images/Vector.png';
import ExpandingSlider from "./ExpandableCards";
import decorartive1 from "../../assets/images/decroation/Index-10.svg";
import decorartive2 from "../../assets/images/decroation/Index-2.svg";
import decorartive3 from "../../assets/images/decroation/Index-3.svg";
import decorartive8 from "../../assets/images/decroation/Index-8.svg";
import decorartive9 from "../../assets/images/decroation/Index-9.svg";
import PartnerSection from "./partnership.js"
import FormSection from "./last-section.js"
import TestimonialsSection from "./testinomial.js"
const FeatureSection = React.lazy(() => import("./feature-section.js"));

const insights = {
    All: [
        { img: insight3, title: 'Goal Balancing – Saving for Multiple Financial Objectives Without Sacrifice' },
        { img: insight1, title: 'Retirement Timing – Choosing the Right Time to Retire for Financial Success' },
        { img: insight2, title: 'Savings Strategies – Building a Strong Foundation for Financial Security' },
    ],
    Borrowing: [{ img: insight2, title: 'Managing Debt Effectively – Strategies for Borrowing and Repaying' }],
    Earning: [{ img: insight3, title: 'Maximizing Earnings – How to Boost Your Income in Changing Times' }],
    Investing: [{ img: insight3, title: 'Smart Investing – Choosing the Right Investment Options for You' }],
    Planning: [{ img: insight1, title: 'Financial Planning – Building a Strategy for Long-Term Security' }],
    Saving: [{ img: insight2, title: 'Effective Saving – How to Build Your Emergency Fund Efficiently' }],
};

const Home = () => {
    const [bgLoaded, setBgLoaded] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/Insight"); // Change this to your desired route
    };

    useEffect(() => {
        const img = new Image();
        img.src = { bg };
        img.onload = () => setBgLoaded(true);
    }, []);
    const [activeTab, setActiveTab] = useState('All');

    const handleTabClick = (tab) => {
        if (tab !== activeTab) setActiveTab(tab);
    };

    // useEffect(() => {
    //     const zoomEffect = () => {
    //         document.body.style.zoom = "120%";
    //         setTimeout(() => {
    //             document.body.style.zoom = "100%";
    //         }, 500);
    //     };

    //     zoomEffect();


    //     const handleVisibilityChange = () => {
    //         if (document.visibilityState === "visible") {
    //             zoomEffect();
    //         }
    //     };

    //     document.addEventListener("visibilitychange", handleVisibilityChange);

    //     return () => {
    //         document.removeEventListener("visibilitychange", handleVisibilityChange);
    //     };
    // }, []);

    useEffect(() => {
        document.querySelector(".Home").style.visibility = "visible";
    }, []);

    return (

        <div className="Home">
            <div className="decorative-img">
                <img src={decorartive1} alt="Decorative" />
            </div>
            <div className="decorative-img2">
                <img src={decorartive2} alt="Decorative" />
            </div>
            {/* <div className="decorative-img3">
                <img src={decorartive3} alt="Decorative" />
            </div> */}

            <div className="decorative-img4">
                <img src={decorartive8} alt="Decorative" />
            </div>
            {/* <div className="decorative-img5">
                <img src={decorartive9} alt="Decorative" />
            </div> */}
            <div className="content1 container">
                <section className='home-header rem7-marginTop' >
                    <h1 className="primary text-center">
                        Unlock Your Investment <br></br>
                        Potential Today
                    </h1>

                    <p className="white-txt text-center">
                        Join our platform to streamline your investments and enhance your engagement. Experience real-time <br></br> tracking of agent performance and make informed decisions with ease.
                    </p>

                    <div className='video-container mt-4'>
                        <div className={`vedio1-container `}>
                            <LazyVideo src={vedio1} className='vedio1' />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center btn-container gap-3">
                        <button className="outline-button">Facts Sheet</button>
                        <button className="outline-button">Join Now</button>
                    </div>
                </section>

                <PartnerSection />
                <Suspense fallback={<div>Loading...</div>}>
                    <SecondSection />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <FeatureSection />
                </Suspense>
                <ExpandingSlider />
                <CustomerExperienceSection />

                <InsightsSection activeTab={activeTab} handleTabClick={handleTabClick} handleClick={handleClick} />


                <TestimonialsSection />


                <FormSection />
            </div>
        </div>
    );
};

export default Home;


const LazyVideo = ({ src, className }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const handleVisibilityChange = () => {
            if (document.visibilityState === "visible") {
                videoElement.play();
            } else {
                videoElement.pause();
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);


    return (
        <video ref={videoRef} autoPlay loop muted className={className}>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};


// const PartnerSection = () => (

//     <div className='home-second rem7-marginTop'>
//         <h1 className="primary text-center">Our Diverse Network of Partners</h1>
//         <div className='partners-container'>
//             <div className="partners-list d-flex gap-4 justify-content-center mt-5 ">
//                 <div className="d-flex gap-2 ">
//                     <img src='/assets/images/Shape.png' className="network-icon" loading="lazy" alt="Shape" />

//                     <span className="white-txt ">Boltshift</span>
//                 </div>
//                 <div className="d-flex gap-2">
//                     <img src='/assets/images/Shape2.png' className="network-icon" loading="lazy" alt="Shape" />

//                     <span className="white-txt ">Lightbox</span>
//                 </div>
//                 <div className="d-flex gap-2">
//                     <img src='/assets/images/Shape3.png' className="network-icon" loading="lazy" alt="Shape" />

//                     <span className="white-txt">FeatherDev</span>
//                 </div>
//                 <div className="d-flex gap-2">
//                     <img src='/assets/images/Shape4.png' className="network-icon" loading="lazy" alt="Shape" />

//                     <span className="white-txt ">Spherule</span>
//                 </div>
//                 <div className="d-flex gap-2">
//                     <img src='/assets/images/Shape5.png' className="network-icon" loading="lazy" alt="Shape" />

//                     <span className="white-txt ">Nietzsche</span>
//                 </div>
//                 <div className="d-flex gap-2 ">
//                     <img src='/assets/images/Shape.png' className="network-icon" loading="lazy" alt="Shape" />

//                     <span className="white-txt ">Boltshift</span>
//                 </div>
//                 <div className="d-flex gap-2">
//                     <img src='/assets/images/Shape2.png' className="network-icon" loading="lazy" alt="Shape" />

//                     <span className="white-txt ">Lightbox</span>
//                 </div>
//                 <div className="d-flex gap-2">
//                     <img src='/assets/images/Shape3.png' className="network-icon" loading="lazy" alt="Shape" />

//                     <span className="white-txt">FeatherDev</span>
//                 </div>
//                 <div className="d-flex gap-2">
//                     <img src='/assets/images/Shape4.png' className="network-icon" loading="lazy" alt="Shape" />

//                     <span className="white-txt ">Spherule</span>
//                 </div>
//                 <div className="d-flex gap-2">
//                     <img src='/assets/images/Shape5.png' className="network-icon" loading="lazy" alt="Shape" />

//                     <span className="white-txt ">Nietzsche</span>
//                 </div>

//             </div></div>
//     </div>
// );


const CustomerExperienceSection = () => (
    <section className='rem5-marginTop customer-experience'>
        <h1 className='primary text-center'> Improves Customer Experiences</h1>
        <p className='white-txt text-center customer-experience-intro mt-3'>
            Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. Nibh est vitae<br></br> suspendisse parturient sed lorem eu.
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

        <div className='d-flex justify-content-center mt-5'>

            <div className='d-flex justify-content-center vedio2-container'>
                <video autoPlay loop muted className='vedio2 '  >
                    <source src={vedio2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <button className="fill-button mt-5 join-now-btn">Join Now</button>
            </div>



        </div>

    </section>

);


const InsightsSection = ({ activeTab, handleTabClick, handleClick }) => (

    <div className='rem5-marginTop insight-section'>
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

        <div className='mt-5 insight-content d-flex justify-content-center flex-wrap gap-4'>
            {insights[activeTab].map((insight, index) => (
                <div key={index} className='insight-card'>
                    <img src={insight.img} loading="lazy" className="" alt={insight.title} />
                    <h5 className='white-txt text-start'>{insight.title}</h5>
                    <div className='d-flex justify-content-start'>
                        <button className="fill-button mt-3 ">Read</button>
                    </div>
                </div>
            ))}
        </div>

        <div className='d-flex justify-content-center  btn-container mt-5'>
            <button className="fill-button " onClick={handleClick}>Explore All</button>
        </div>
    </div>

);


// const TestimonialsSection = () => (
//     <div className="rem5-marginTop testinomial">
//         <h1 className="primary text-center"> Nextronium Testimonials</h1>

//         <div className="container">
//             {/* Quote and Intro */}
//             <center>
//                 <div className="row mt-4 align-items-center quote">
//                     {/* Quote Image */}
//                     <div className="col-lg-3 col-md-4 col-sm-12 text-center">
//                         <img src='/assets/images/Vector.png' loading="lazy" className="Testimonials-quote-img" alt="Quote" />
//                     </div>

//                     {/* Testimonial Text */}
//                     <div className="col-lg-8 col-md-8 col-sm-12 intro">
//                         <p className="white-txt p-3">
//                             "Joining this platform was a game-changer for me. The educational resources helped me understand crypto trading, and the community support is invaluable. Highly recommended!"
//                         </p>
//                     </div>
//                 </div>
//             </center>

//             {/* Testimonial Cards */}
//             <div className="d-flex flex-wrap gap-4 justify-content-center mt-0">
//             i wnat effect like auto image like by default like this card show then 
//                 <div className="testinomial-card">
//                     <img src='/assets/images/testinomial1.png' loading="lazy" className="img-fluid first" alt="Testimonial 1" />
//                     <div className="mx-4">
//                         <h5 className="white-txt">Constance Julien</h5>
//                         <p>Chief Factors Technician</p>
//                     </div>
//                 </div>
// then this 
//                 <div className="testinomial-card d-flex flex-column justify-content-end">
//                     <img src='/assets/images/testinomial2.png' loading="lazy" className="second img-fluid " alt="Testimonial 2" />
//                     <div className="mx-4">
//                         <h5 className="white-txt">Constance Julien</h5>
//                         <p>Chief Factors Technician</p>
//                     </div>
//                 </div>
// the this 
//                 <div className="testinomial-card d-flex flex-column justify-content-end">
//                     <img src='/assets/images/testinomial3.png' loading="lazy" className="second img-fluid" alt="Testimonial 3" />
//                     <div className="mx-4">
//                         <h5 className="white-txt">Constance Julien</h5>
//                         <p>Chief Factors Technician</p>
//                     </div>
//                 </div>

//                 but after 5 second it change it postion but note i wnat smooth beautifule not glitch jerky
//             </div>
//         </div>
//     </div>


// );


const FinalCTA = () => (
    <section className="last-section mt-5 mb-5">
        <div className="container">
            <h1 className="primary text-center">
                Discover the Guild Platform:
            </h1>
            <h1 className="primary text-center">
                Your Gateway to Smart Investment Solutions
            </h1>
            <div className="row box mt-5 align-items-center">
                {/* Left Column - Text Section */}
                <div className="col-lg-6 col-md-6 col-sm-12 p-3 p-md-5  text-md-start">
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
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                    <img src='/assets/images/analytics-svg.svg' className="img-fluid" loading="lazy" alt="Shape" />
                </div>
            </div>
        </div>
    </section>
);
