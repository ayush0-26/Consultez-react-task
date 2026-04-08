import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import test1 from "../assets/owner.jpg";
import test2 from "../assets/ceo.jpg";
import "./Home.css";
import banner from "../assets/banner-shape.png";
import img1 from "../assets/about-image1.jpg";   // main image
import img2 from "../assets/about-image2.jpg";
import img3 from "../assets/about-info.png";
import mission from "../assets/choose-image1.jpg";
import strategy from "../assets/strategy-image-.jpg";
import info from "../assets/strategy-info.png";
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import caseImg1 from "../assets/case-image1.jpg";
import caseImg2 from "../assets/case-image2.jpg";
import caseImg3 from "../assets/case-image3.jpg";
import caseImg4 from "../assets/case-image4.jpg";
import faqImg from "../assets/faq-image1.jpg";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";
import blog1 from "../assets/blog-image1.jpg";
import blog2 from "../assets/blog-image2.jpg";
import blog3 from "../assets/blog-image3.jpg";

import { LuLightbulbOff } from "react-icons/lu";
import { FaPencilRuler } from "react-icons/fa";
import { Container, Row, Col, Button } from 'react-bootstrap';


const Hero = () => {
    const [activeTab, setActiveTab] = useState("vision");
    return (
        <>
            {/* HERO SECTION */}
            <section
                className="hero"
                style={{ backgroundImage: `url(${banner})` }}
            >
                <div className="overlay"></div>

                <div className="hero-content">
                    <p className="subtitle">GROWTH, INNOVATION, AND SUCCESS</p>

                    <h1>
                        Transforming <br />
                        Business Growth <br />
                        <span>Drive Success</span>
                    </h1>

                    <button className="cta-btn">Free Consultation</button>
                </div>

                <div className="right-text">
                    <p>
                        Take your brand to new heights <br />
                        Agency offering everything <br />
                        from strategy business.
                    </p>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="about">
                <div className="container about-container">

                    {/* LEFT */}
                    <div className="about-left">
                        <img src={img1} alt="team" className="main-img" />

                        <div className="small-img-box">
                            <img src={img2} alt="small" />
                        </div>

                        <div className="team-card">
                            <p>Skilled Team</p>
                            <div className="avatars">
                                <img src={img3} alt="info" />

                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="about-right">
                        <span className="tag">ABOUT US</span>

                        <h2>
                            The Journey Behind Our <br />
                            Business Success
                        </h2>

                        <p className="desc">
                            Consultez is the go-to hub for early adopters and innovation
                            enthusiasts, offering cutting-edge technology
                        </p>

                        <div className="feature">

                            <h4> <LuLightbulbOff />{" "} Creative Solutions</h4>
                            <p>
                                In today's competitive business landscape, the need for efficient IT
                                solutions has been more critical.
                            </p>
                        </div>

                        <div className="feature">
                            <h4> <FaPencilRuler />{" "}Actionable Solutions</h4>
                            <p>
                                Innovation is the key to staying ahead in a changing world.
                            </p>
                        </div>

                        <div className="progress">

                            <p>Business Success</p>
                            <div className="bar">
                                <div className="fill"></div>
                            </div>
                        </div>

                        <button className="btn">Find Services</button>

                    </div>

                </div>
            </section>

            {/* Empowering Your Brand Innovative Solutions */}


            { /*mission and vision section will be here */}

            <section className="mission">
                <div className="container mission-vision">

                    {/* LEFT CONTENT */}
                    <div className="mv-left">
                        <span className="tag">MISSION & VISION</span>

                        <h2>
                            We Handle Complexities,<br />
                            So You Can Drive Growth<br />
                            And Success.
                        </h2>

                        {/* Tabs */}
                        <div className="tabs">
                            <span
                                className={activeTab === "about" ? "active" : ""}
                                onClick={() => setActiveTab("about")}
                            >
                                About Us
                            </span>

                            <span
                                className={activeTab === "mission" ? "active" : ""}
                                onClick={() => setActiveTab("mission")}
                            >
                                Our Mission
                            </span>

                            <span
                                className={activeTab === "vision" ? "active" : ""}
                                onClick={() => setActiveTab("vision")}
                            >
                                Our Vision
                            </span>
                        </div>

                        {/* Dynamic Description */}
                        <p className="desc">
                            {activeTab === "about" && "At veroeos accusamus dignissimos ducimus blanditiis volupta delenite atque corrupti quos dolores et quas molestias excepturi sint occaecatie"}
                            {activeTab === "mission" && "At veroeos accusamus dignissimos ducimus blanditiis volupta delenite atque corrupti quos dolores et quas molestias excepturi sint occaecatie."}
                            {activeTab === "vision" && "At veroeos accusamus dignissimos ducimus blanditiis volupta delenite atque corrupti quos dolores et quas molestias excepturi sint occaecatie"}
                        </p>

                        {/* Dynamic Checklist */}
                        <div className="checklist">

                            {activeTab === "about" && (
                                <>
                                    <div>✔ Skilled Team</div>
                                    <div>✔ Strong Experience</div>
                                    <div>✔ Client Focus</div>
                                    <div>✔ Trusted Results</div>
                                </>
                            )}

                            {activeTab === "mission" && (
                                <>
                                    <div>✔ Optimized Sprint Planning</div>
                                    <div>✔ Continuous Improvement</div>
                                    <div>✔ Agile Development</div>
                                    <div>✔ Quality Assurance</div>
                                </>
                            )}

                            {activeTab === "vision" && (
                                <>
                                    <div>✔ Incremental Delivery</div>
                                    <div>✔ Innovation Focus</div>
                                    <div>✔ Global Growth</div>
                                    <div>✔ Future Ready</div>
                                </>
                            )}

                        </div>

                        <button className="btn">Discover More</button>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="mv-right">
                        <img src={mission} alt="mission" />

                        <div className="stats-box">
                            <div className="stat">
                                <h3>95%</h3>
                                <p>Project Done</p>
                            </div>

                            <hr />

                            <div className="stat">
                                <h3>50%</h3>
                                <p>Complete Project</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* BuildingC onnections forGrowth Limit less Opportunities. */}

            <section className="growth-section py-5 text-white" style={{ backgroundImage: `url(${caseImg1})` }}>
                <div className="growth-overlay"></div>

                <Container className="position-relative z-index-2">
                    <Row className="align-items-center mb-5">
                        <Col lg={8}>
                            <span className="strategy-tag mb-3">GROWTH RATE</span>
                            <h2 className="display-4 fw-bold">
                                Building Connections For Grow <br />
                                Limitless Opportunities.
                            </h2>
                        </Col>
                        <Col lg={4} className="text-lg-end mt-4 mt-lg-0">
                            <Button variant="light" className="px-5 py-3 rounded-0 fw-bold">
                                Discover More
                            </Button>
                        </Col>
                    </Row>

                    <Row className="mt-5 g-4">
                        {/* --- Progress Item 1 --- */}
                        <Col md={4} className="text-center">
                            <div className="progress-item d-flex align-items-center gap-3 text-start">
                                <div className="circular-progress">
                                    <div className="inner-circle">90%</div>
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1">Scalable Solutions</h5>
                                    <p className="small text-light-50">End to end fiber optic cable nnectivity for stable</p>
                                </div>
                            </div>
                        </Col>

                        {/* --- Progress Item 2 --- */}
                        <Col md={4} className="text-center">
                            <div className="progress-item d-flex align-items-center gap-3 text-start">
                                <div className="circular-progress percentage-95">
                                    <div className="inner-circle">95%</div>
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1">Automation Features</h5>
                                    <p className="small text-light-50">End to end fiber optic cable nnectivity for stable</p>
                                </div>
                            </div>
                        </Col>

                        {/* --- Progress Item 3 --- */}
                        <Col md={4} className="text-center">
                            <div className="progress-item d-flex align-items-center gap-3 text-start">
                                <div className="circular-progress percentage-75">
                                    <div className="inner-circle">75%</div>
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1">24/7 Support</h5>
                                    <p className="small text-light-50">End to end fiber optic cable nnectivity for stable</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            {/* HOW IT WORKS SECTION */}
            <section className="how">
                <div className="container">

                    <span className="tag">HOW IT WORKS</span>

                    <h2>
                        Connect, Collaborate, & Create <br />
                        Limitless Opportunities.
                    </h2>

                    <div className="steps">

                        <div className="step-card">
                            <h1 className="step-number">01</h1>
                            <h4>Strategic Growth</h4>
                            <p>Your Source for Market Trends & Business Intelligence</p>
                        </div>

                        <div className="step-card">
                            <h1 className="step-number">02</h1>
                            <h4>Fuel Innovation</h4>
                            <p>Sparking Innovation, Shaping Tomorrow successful</p>
                        </div>

                        <div className="step-card">
                            <h1 className="step-number">03</h1>
                            <h4>Financial Planning</h4>
                            <p>Helping You Stay on Track with Accurate Estimates</p>
                        </div>

                        <div className="step-card">
                            <h1 className="step-number">04</h1>
                            <h4>Sustainable Success</h4>
                            <p>Amazing Support! with lot of demos to choose from top</p>
                        </div>

                    </div>

                    <p className="bottom-text">
                        Embrace Innovation, Adapt Quickly, and Lead with Confidence.{" "}
                        <span>Consult Now</span>
                    </p>


                </div>
            </section>

            {/* Case study */}

            <section className="case-study py-5 text-center">
                <div className="container">
                    <span className="tag">CASE STUDY</span>
                    <h2 className="display-5 fw-bold my-4">
                        Showcasing Project & Solutions <br />
                        For Clients Case Study.
                    </h2>

                    <div className="row g-4 mt-2">
                        {/* --- Card 1 --- */}
                        <div className="col-lg-3 col-md-6">
                            <div className="case-card">
                                <img src={caseImg1} alt="Cyber Security" className="img-fluid rounded-4" />
                                <div className="case-info text-start shadow">
                                    <small className="text-success fw-bold">Cyber Security</small>
                                    <h5 className="fw-bold mt-2">Revolutionizing Brand Strategy</h5>
                                </div>
                                {/* Floating Arrow on Hover */}
                                <div className="hover-arrow">
                                    <i className="bi bi-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>

                        {/* --- Card 2 --- */}
                        <div className="col-lg-3 col-md-6">
                            <div className="case-card">
                                <img src={caseImg2} alt="IT Solution" className="img-fluid rounded-4" />
                                <div className="case-info text-start shadow">
                                    <small className="text-success fw-bold">IT Solution</small>
                                    <h5 className="fw-bold mt-2">Technology and artificial Maintenance</h5>
                                </div>
                                <div className="hover-arrow">
                                    <i className="bi bi-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>

                        {/* --- Card 3 --- */}
                        <div className="col-lg-3 col-md-6">
                            <div className="case-card">
                                <img src={caseImg3} alt="Business Consultation" className="img-fluid rounded-4" />
                                <div className="case-info text-start shadow">
                                    <small className="text-success fw-bold">Business Consultation</small>
                                    <h5 className="fw-bold mt-2">Business Strategy to Cut Costs by 30%</h5>
                                </div>
                                <div className="hover-arrow">
                                    <i className="bi bi-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>

                        {/* --- Card 4 --- */}
                        <div className="col-lg-3 col-md-6">
                            <div className="case-card">
                                <img src={caseImg4} alt="Digital Agency" className="img-fluid rounded-4" />
                                <div className="case-info text-start shadow">
                                    <small className="text-success fw-bold">Digital Agency</small>
                                    <h5 className="fw-bold mt-2">Transforming Legacy Systems</h5>
                                </div>
                                <div className="hover-arrow">
                                    <i className="bi bi-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* business strategy */}
            <section className="business">
                <div className="container about-container">  {/* ✅ SAME as about */}

                    {/* LEFT */}
                    <div className="about-left">
                        <img src={strategy} alt="business-strategy" className="main-img" />

                        <div className="small-img-box">
                            <img src={info} alt="small" />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="about-right">
                        <span className="tag">Business Strategy</span>

                        <h2>
                            Driving Success Through <br />
                            Tailored Solutions And <br />
                            Proven Expertise.
                        </h2>

                        {/* ACCORDION */}
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Ensure Business Continuity</Accordion.Header>
                                <Accordion.Body>
                                    Drive innovation faster with world-class tech teams.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Browser Safety & Protection</Accordion.Header>
                                <Accordion.Body>
                                    Secure and protect your digital presence effectively.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Cutting-Edge IT Solutions</Accordion.Header>
                                <Accordion.Body>
                                    Modern solutions for growing businesses.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Expert Guidance & Assistance</Accordion.Header>
                                <Accordion.Body>
                                    Get expert help for better decision making.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                </div>
            </section>

            {/* Top Consultant */}
            <section className="team-section">
                <div className="container">

                    <span className="tag">TOP CONSULTANT</span>

                    <h2 className="section-title">
                        Enhance Your Experience With <br />
                        Expert Consulting
                    </h2>

                    <div className="team-grid">

                        {/* CARD 1 */}
                        <div className="team-card">
                            <img src={team1} alt="team" />

                            <div className="overlay"></div>

                            <div className="social-icons">
                                <FaFacebookF />
                                <FaInstagram />
                                <FaLinkedinIn />
                                <FaBehance />
                            </div>

                            <div className="plus-btn">+</div>

                            <div className="team-info">
                                <h4>Guy Hawkins</h4>
                                <p>Admin</p>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="team-card active">
                            <img src={team2} alt="team" />

                            <div className="overlay"></div>

                            <div className="social-icons">
                                <FaFacebookF />
                                <FaInstagram />
                                <FaLinkedinIn />
                                <FaBehance />
                            </div>

                            <div className="plus-btn">+</div>

                            <div className="team-info">
                                <h4>Jacob Jones</h4>
                                <p>Manager</p>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="team-card">
                            <img src={team3} alt="team" />

                            <div className="overlay"></div>

                            <div className="social-icons">
                                <FaFacebookF />
                                <FaInstagram />
                                <FaLinkedinIn />
                                <FaBehance />
                            </div>

                            <div className="plus-btn">+</div>

                            <div className="team-info">
                                <h4>Kristin Watson</h4>
                                <p>Consultant</p>
                            </div>
                        </div>

                        {/* CARD 4 */}
                        <div className="team-card">
                            <img src={team4} alt="team" />

                            <div className="overlay"></div>

                            <div className="social-icons">
                                <FaFacebookF />
                                <FaInstagram />
                                <FaLinkedinIn />
                                <FaBehance />
                            </div>

                            <div className="plus-btn">+</div>

                            <div className="team-info">
                                <h4>Bessie Cooper</h4>
                                <p>Founder</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* FAQ SECTION */}
            <section className="faq-section">
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT IMAGE */}
                        <div className="col-lg-4">
                            <div className="faq-left">
                                <img src={faqImg} alt="faq" className="img-fluid" />
                            </div>
                        </div>

                        {/* MIDDLE CONTENT */}
                        <div className="col-lg-4">
                            <div className="faq-middle">
                                <span className="tag">FAQ'S</span>

                                <h2>
                                    Frequently Asked <br /> Questions
                                </h2>

                                <p className="desc">
                                    Consultez is the hub for early adopters and innovation enthusiasts,
                                    offering vibrant, imaginative technology before it becomes mainstream.
                                </p>

                                <button className="btn">Get A Quote</button>
                            </div>
                        </div>

                        {/* RIGHT ACCORDION */}
                        <div className="col-lg-4">
                            <Accordion defaultActiveKey="0" className="faq-accordion">

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        How Can Business Consulting Benefit My Company?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Business consulting helps improve performance, efficiency,
                                        and growth with expert guidance.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        What Are the Costs of Your Consulting Services?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Costs vary depending on project scope and requirements.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        How Do You Measure the Success of a Project?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        We measure success using KPIs, ROI, and business growth metrics.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        Do You Provide Remote Consulting Services?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Yes, we provide both remote and on-site consulting services.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                        What Industries Do You Specialize In?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        We specialize in IT, finance, healthcare, and startups.
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </div>

                    </div>
                </div>
            </section>


            {/* new Blog section  */}

            <section className="blog-section py-5 text-center">
                <div className="container">
                    <span className="tag">NEWS & BLOGS</span>
                    <h2 className="display-5 fw-bold my-4">Our News & Blogs</h2>

                    <Carousel indicators controls={false} className="blog-carousel">

                        {/* Slide */}
                        <Carousel.Item>
                            <div className="row g-4 justify-content-center">

                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="blog-card">
                                        <img src={blog3} alt="" />
                                        <div className="blog-info">
                                            <small>Devoid.H • Comments (03)</small>
                                            <h5>Complete Guide Business Insurance Perfect</h5>
                                            <a href="#">Read More →</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="blog-card">
                                        <img src={blog1} alt="" />
                                        <div className="blog-info">
                                            <small>Robert.Q • Comments (03)</small>
                                            <h5>How Scale Your Business Without Losing Quality</h5>
                                            <a href="#">Read More →</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="blog-card">
                                        <img src={blog2} alt="" />
                                        <div className="blog-info">
                                            <small>Beckhum.H • Comments (03)</small>
                                            <h5>The Entrepreneur Guide To Work-Life Balance</h5>
                                            <a href="#">Read More →</a>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </Carousel.Item>

                    </Carousel>
                </div>
            </section>

            {/* orner section */}

            <section className="testimonial-section">
                <div className="container">

                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={{
                            nextEl: ".next-btn",
                            prevEl: ".prev-btn",
                        }}
                        pagination={{ clickable: true }}
                        loop={true}
                        spaceBetween={30}
                    >

                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="testimonial-box">

                                {/* LEFT IMAGE */}
                                <div className="testimonial-left">
                                    <div className="img-wrapper">
                                        <img src={test1} alt="user" />
                                        <div className="quote">❝</div>
                                    </div>

                                    <div className="stars">
                                        ⭐⭐⭐⭐⭐
                                    </div>
                                </div>

                                {/* RIGHT CONTENT */}
                                <div className="testimonial-right">
                                    <p className="text">
                                        Ascend the mountain not to plant your flag, but to embrace the challenge,
                                        savour the journey, and marvel at the view. Climb to experience the world,
                                        not for the world to notice you.
                                    </p>

                                    <h4>
                                        Jacob Jones <span>/ Business Owner</span>
                                    </h4>
                                </div>

                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="testimonial-box">
                                <div className="testimonial-left">
                                    <div className="img-wrapper">
                                        <img src={test2} alt="user" />
                                        <div className="quote">❝</div>
                                    </div>
                                    <div className="stars">⭐⭐⭐⭐⭐</div>
                                </div>

                                <div className="testimonial-right">
                                    <p className="text">
                                        Climb to experience the world, not for the world to notice you.
                                        This is why they stand out with exceptional quality and service.
                                    </p>
                                    <h4>
                                        Dianne Russell <span>/ CEO & Founder</span>
                                    </h4>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="testimonial-nav">
                        <button className="prev-btn">←</button>
                        <button className="next-btn">→</button>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Hero;

