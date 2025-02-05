import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaTimesCircle } from "react-icons/fa";
import "../styles/main.css";
import logo from '../assets/images/logo.png';
import footerIcon1 from '../assets/images/footer-icon1.png';
import footerIcon2 from '../assets/images/footer-icon2.png';
import footerIcon3 from '../assets/images/footer-icon3.png';
const Footer = () => {

    return (
        <footer className="footer" >
            <div className="footer-container row">

                <div className="footer-left col-md-4 col-sm-12">
                    <img src={logo} alt="Logo" className="footer-logo" />
                    <p className="white-txt footer-intro">Integer sit quisque sed at. Fermentum nunc aliquet cursus eget. Egestas ornare.</p>

                </div>

                <div className="col-md-2">

                </div>
                <div className="footer-right  col-md-6 col-sm-12">
                    <div className="d-flex flex-column align-items-start">

                        <div className="footer-main-head">
                            <h1>Stay Connected:</h1>
                            <h1 className='text-start'>Subscribe to Guilds Updates</h1>
                        </div>


                        <div className="subscribe-form d-flex mt-2 flex-wrap">
                            <input type="email" className="form-control me-2" placeholder="Your Email" />
                            <button className="btn  fill-button">Subscribe</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row  link-main">
                <div className="col-lg-1 col-md-1  footer-spacing"></div>
                <div className="col-lg-3 footer-links  col-md-4 d-flex justify-content-around" >
                    <div>
                        <p>About Us</p>
                        <p>What we offer</p>
                        <p>Performance</p>
                    </div>
                    <div>
                        <p>Insights</p>
                        <p>Help</p>
                        <p>Privacy</p>
                    </div>
                </div>
                <div className="center-spacing">

                </div>
                <div className='col-lg-4 mt-3 col-md-4 mx-2 contact-info'>
                    <p className='text-start'>Contact Us</p>
                    <div className='d-flex '>
                        <p className="contact-info text-start"> info@guild.capital <br></br>| +971 569 55 66 88</p>
                        <div className="social-icons mx-4 mt-4">
                            <img src={footerIcon1} />
                            <img src={footerIcon2} />
                            <img src={footerIcon3} />

                        </div>
                    </div>
                </div>

            </div>
            <center>
                <div className="footer-bottom text-start mx-3" style={{ maxWidth: '1200px' }}>
                    <p>
                        Guild Capital is a company incorporated in the Dubai Integrated Economic Zones Authority (DIEZA) and Dubai Economy and Tourism (DET) license for asset management. Our registered office is at Office 705, 7th floor, Building 8, Bay Square, Business Bay, Dubai, United Arab Emirates.
                    </p>
                    <p>
                        This website and its content are intended for informational purposes only and do not constitute investment advice or an offer to buy or sell any financial products. The information provided is for general purposes and should not be relied upon for making investment decisions. Any past performance figures are not indicative of future results and should not be considered as a guarantee of future returns.
                    </p>
                    <p>
                        By using this website, you acknowledge and agree that you have read, understood, and accept the terms of this disclaimer.
                    </p>
                    <p className='mx-3'>© 2024 Guild. All rights reserved.</p>
                </div>
            </center>
        </footer>
    );
};

export default Footer;
