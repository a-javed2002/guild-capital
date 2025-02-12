import React, { useRef } from 'react'

import "../styles/what-we.css";


import header from '../assets/images/What-we-header.png';
import Investment1 from '../assets/images/Investment-Advisory1.png';
import Investment2 from '../assets/images/Investment2.png';
import Investment3 from '../assets/images/Investment3.png';
import useScrollLock3 from "../hook/useaboutScroll";
const categories = [
    {

        title: "Discretionary Investment",
        text: "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent. Commodo id amet mi.",

    },
    {

        title: "Structured Fund",
        text: "Our Structured Fund is an open-ended, risk- managed vehicle, balancing growth and capital preservation. With transparency at its core, it will offer semi-liquidity, allowing regular access to capital. Independently administered, audited, and regulated, it will uphold the highest standards of governance, ensuring investor confidence in performance and oversight.",

    },
    {

        title: "Fund of Funds",
        text: "Our upcoming Fund of Funds service will enable other funds to leverage our expertise under a white-label arrangement, providing customized investment solutions. This service will allow fund managers and financial institutions to integrate our expertise into their offerings, providing customized investment solutions under a white-label arrangement.",

    },

];


function What_We() {

    const images = categories.map(cat => cat.image);
    const texts = categories.map(cat => cat.text);

    const { currentIndex } = useScrollLock3(images, texts, "category-section-4");

    return (
        <div className='what-we'>

            <div className='container'>
                <header className='what-we-header '>
                    <h1 className='primary text-center '>What We Offer</h1>

                    <center>
                        <img src={header} className='header-img ' loading="lazy" />
                    </center>
                </header>

                <section className='financial-Future rem5-marginTop '>
                    <h1 className='primary text-center main font-3xl  '>Empowering Your Financial <br></br>
                        Future with Expertise</h1>
                    <p className='white-txt text-center fianancial-intro mt-4 font-xsm '>
                        At GUILD Capital, we specialize in strategic investment management tailored to your unique goals.<br></br> Our
                        experienced team is dedicated to optimizing returns while effectively
                        managing risk.
                    </p>
                    i want when user came to this section scroll lock ater cycle 0 the unlock
                    <div className='row left-hand gap-5 '>
                        <div className='col-lg-7 col-sm-6'>
                            <h1 className='primary text-start font-2xl '>{categories[currentIndex].title}</h1>
                            <div className='left-hand-intro' >
                                <p className='white-txt  text-start font-sm' >
                                    {categories[currentIndex].text}
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-6 right-hand'>

                            i want like by default 3 card show when i scroll move card disapear accordin to the index                            <div className="my-5 mx-4 rotation-img">
                                last
                                i wnat apply class like for this card if index ==0 card-1 if index ==1 card-2 if index ==2 card-3 
                                <div className= ${`financial-card card-1 currentIndex === index ? "active" : ""}`}>
                                    <img src={Investment3} alt="Image 3" loading="lazy" />
                                </div>
                                second
                                i wnat for this card if index ==0 card-2 if index ==1 card-3 if index ==2 card-1 
                                <div className= ${`financial-card card-2 currentIndex === index ? "active" : ""}`}>
                                    <img src={Investment2} loading="lazy" />
                                </div>
                                this is the front basically it is the forst image by default this is active

                                i wnat for this card if index ==0 card-3 if index ==1 card-1 if index ==2 card-2 
                                <div className= ${`financial-card card-3 currentIndex === index ? "active" : ""}`}>
                                    <img src={Investment1} alt="Image 1" loading="lazy" />
                                </div>
                            </div>
                        </div>

                    </div>


                </section>


                <section className='choose-us '>
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
