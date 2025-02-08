import React, { useRef } from 'react'

import "../styles/what-we.css";


import header from '../assets/images/What-we-header.png';
import Investment1 from '../assets/images/Investment-Advisory1.png';
import Investment2 from '../assets/images/Investment2.png';
import Investment3 from '../assets/images/Investment3.png';


function What_We() {

    return (
        <div className='what-we'>
   
            <div className='container'>
                <header className='what-we-header '>
                    <h1 className='primary text-center font-8xl '>What We Offer</h1>

                    <center>
                        <img src={header} className='header-img '   loading="lazy"/>
                    </center>
                </header>

                <section className='financial-Future rem7-marginTop mb-5'>
                    <h1 className='primary text-center main font-6xl '>Empowering Your Financial <br></br>
                        Future with Expertise</h1>
                    <p className='white-txt text-center fianancial-intro mt-4 font-sm '>
                        At GUILD Capital, we specialize in strategic investment management tailored to your unique goals. Our <br></br>
                        experienced team is dedicated to optimizing returns while effectively
                        managing risk.
                    </p>
                    <div className='row left-hand gap-5 '>
                        <div className='col-md-7'>
                            <h1 className='primary text-start font-5xl '>Discretionary Investment</h1>
                            <div className='left-hand-intro' >
                                <p className='white-txt  text-start font-basex2' >
                                    At GUILD Capital, we specialize in strategic investment management tailored to your unique goals. Our experienced team is dedicated to optimizing returns while effectively   <br /> managing risk.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="my-5 mx-4 rotation-img">
                                <div className='financial-card card-1'>
                                    <img src={Investment3} alt="Image 3"  loading="lazy" />
                                </div>
                                <div className='financial-card card-2'  loading="lazy">
                                    <img src={Investment2} />
                                </div>
                                <div className='financial-card card-3'>
                                    <img src={Investment1} alt="Image 1"   loading="lazy"/>
                                </div>
                            </div>
                        </div>

                    </div>


                </section>


                <section className='choose-us mt-5 '>
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
