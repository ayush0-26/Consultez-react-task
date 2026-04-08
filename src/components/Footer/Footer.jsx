import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaPinterestP, FaVimeoV } from "react-icons/fa";
import "./footer.css";
import React from 'react'

function Footer() {
    return (
        <div>
            <section className="footer">
                <div className="footer-wrapper">

                    {/* LEFT SIDE */}
                    <div className="footer-left">

                        {/* TOP CONTACT */}
                        <div className="footer-top">
                            <div className="contact-item">
                                <FaPhoneAlt />
                                <div>
                                    <p>Call Us:</p>
                                    <h6>+1-2345-2345-54</h6>
                                </div>
                            </div>

                            <div className="contact-item">
                                <FaEnvelope />
                                <div>
                                    <p>Email Us:</p>
                                    <h6>info@help.com</h6>
                                </div>
                            </div>

                            <div className="contact-item">
                                <FaMapMarkerAlt />
                                <div>
                                    <p>Hours:</p>
                                    <h6>Daily: 8 AM to 5 PM</h6>
                                </div>
                            </div>
                        </div>

                        {/* MAIN GRID */}
                        <div className="footer-grid">

                            <div>
                                <h4>Services</h4>
                                <ul>
                                    <li>Digital Marketing</li>
                                    <li>Innovation Space</li>
                                    <li>Competitive Analysis</li>
                                    <li>Market Research</li>
                                    <li>HR Management</li>
                                </ul>
                            </div>

                            <div>
                                <h4>Pages</h4>
                                <ul>
                                    <li>Our Blog</li>
                                    <li>Success Stories</li>
                                    <li>Customers Review</li>
                                    <li>Contact Us</li>
                                    <li>About Us</li>
                                </ul>
                            </div>

                            <div>
                                <h4>Signup Newsletter</h4>

                                <input type="email" placeholder="Email Address" />

                                <button className="subscribe-btn">
                                    Sign Up Now →
                                </button>

                                <div className="social">
                                    <FaFacebook />

                                    <FaTwitter />   
                                    <FaVimeoV />
                                    <FaPinterestP />
                                </div>
                            </div>

                        </div>

                        {/* COPYRIGHT */}
                        <div className="footer-bottom">
                            © Copyright 2025. All Right by <span>Kodesolution</span>
                        </div>

                    </div>

                    {/* RIGHT SIDE CTA */}
                    <div className="footer-right">
                        <h2>Have a Project in your Mind?</h2>

                        <div className="circle-btn">
                            Contact Us ↗
                        </div>

                        <p className="time">
                            09 : 00 AM – 10 : 30 PM <br />
                            <span>Saturday – Thursday</span>
                        </p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Footer

