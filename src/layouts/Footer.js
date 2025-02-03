import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaTimesCircle } from "react-icons/fa";
import "../styles/main.css";
import logo from '../assets/images/logo.png';
const Footer = () => {

    return (
        <footer className="footer" >
            <div className="footer-container row">
                {/* Left Section */}
                <div className="footer-left col-md-6 col-sm-12">
                    <img src={logo} alt="Logo" className="footer-logo" />
                    <p>Integer sit quisque sed at. Fermentum nunc aliquet cursus eget. Egestas ornare.</p>
                    <div className="footer-links mx-3">
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
                </div>

                {/* Right Section */}
                <div className="footer-right  col-md-6 col-sm-12">
                    <div className="d-flex flex-column align-items-start">

                        <div>
                            <h1>Stay Connected:</h1>
                            <p className='text-start'>Subscribe to Guilds Updates</p>
                        </div>


                        <div className="subscribe-form d-flex mt-2">
                            <input type="email" className="form-control me-2" placeholder="Your Email" />
                            <button className="btn  fill-button">Subscribe</button>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h6 className='text-start'>Contact Us</h6>
                        <div className='d-flex '>
                            <p className="contact-info text-start"> info@guild.capital <br></br>| +971 569 55 66 88</p>
                            <div className="social-icons mx-2 mt-4">
                                <FaLinkedin />
                                <FaInstagram />
                                <FaTimesCircle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Disclaimer */}
            <div className="footer-bottom text-start">
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
        </footer>
    );
};

export default Footer;
