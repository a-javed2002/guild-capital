import React, { useRef } from 'react'
import Slider from "react-slick";
import "../styles/what-we.css";


import header from '../assets/images/What-we-header.png';
import Investment1 from '../assets/images/Investment-Advisory1.png';
import Investment2 from '../assets/images/Investment2.png';
import Investment3 from '../assets/images/Investment3.png';


function What_We() {

    return (
        <div className='what-we'>
            <div className='container'>
                <header className='what-we-header mb-5'>
                    <h1 className='primary text-center '>What We Offer</h1>

                    <img src={header} className='header-img ' />
                </header>

                <section className='financial-Future mt-5 mb-5'>
                    <h1 className='primary text-center main'>Empowering Your Financial
                        Future with Expertise</h1>
                    <p className='white-txt text-center fianancial-intro'>
                        At GUILD Capital, we specialize in strategic investment management tailored to your unique goals. Our
                        experienced team is dedicated to optimizing returns while effectively managing risk.
                    </p>
                    <div className='row left-hand gap-5'>
                        <div className='col-md-7'>
                            <h1 className='primary text-start'>Discretionary Investment</h1>
                            <div className='left-hand-intro' >
                                <p className='white-txt  text-start' >
                                    At GUILD Capital, we specialize in strategic investment management tailored to your unique goals. Our experienced team is dedicated to optimizing returns while effectively managing risk.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="my-5 mx-4 rotation-img">
                                <div className='financial-card card-1'>
                                    <img src={Investment3} alt="Image 3" />
                                </div>
                                <div className='financial-card card-2'>
                                    <img src={Investment2} />
                                </div>
                                <div className='financial-card card-3'>
                                    <img src={Investment1} alt="Image 1" />
                                </div>
                            </div>
                        </div>

                    </div>


                </section>


                <section className='choose-us mb-5 '>
                    <h1 className='text-center primary mb-5'>Why Choose Us ?</h1>
                    <center>
                        <div className=''>
                            <div className='question '>
                                <h6 className='text-center white-txt'>
                                    Decades of combined expertise in financial management.
                                </h6>
                            </div>
                            <div className='question mt-3'>
                                <h6 className='text-center white-txt'>
                                    Commitment to innovation and investor-first principles.
                                </h6>
                            </div>
                            <div className='question mt-3'>
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
