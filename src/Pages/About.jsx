import React, { useState } from "react";
import "./About.css";
import bgImg from "../assets/banner-shape.png";
import aboutImg from "../assets/about-us.jpg";
import caseImg1 from "../assets/case-image1.jpg";
import Img1 from "../assets/about-two-user1.png";
import Img2 from "../assets/about-two-user2.png";
import Img3 from "../assets/about-two-user3.png";
import Img4 from "../assets/about-two-user4.png";
import Img5 from "../assets/A-image1.jpg";
import Img6 from "../assets/A-image2.jpg";
import Img7 from "../assets/team-three-image1.jpg";
import Img8 from "../assets/team-three-image2.jpg";
import Img9 from "../assets/team-three-image3.jpg";
import Img10 from "../assets/team-three-image4.jpg";
import Img11 from "../assets/contact-image.png"
import Blog1 from "../assets/blog-two-image1.jpg";
import Blog2 from "../assets/blog-two-image2.jpg";
import Blog3 from "../assets/blog-two-image3.jpg";
// import Txt from "../assets/team-three-text.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa6";
import Shape from "../assets/funface-four-shape.png";
import Accordion from 'react-bootstrap/Accordion';
import { useInView } from "react-intersection-observer";

import CountUp from "react-countup";
import { Container, Row, Col, Button } from "react-bootstrap";
function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      title: "Business Strategy",
      desc: "Whether it's creating a visually captivating brand identity, designing immersive digital experiences, or developing strategic marketing campaigns",
    },
    { title: "Strategic Planning", desc: "Planning long-term growth strategies for your business success." },
    { title: "Marketing & Branding", desc: "Building strong brand presence and marketing strategies." },
    { title: "Sales Consulting", desc: "Improving your sales funnel and conversion rates." },
    { title: "Financial Consulting", desc: "Helping you manage finances and investments smartly." },
  ];

  const [activeTab, setActiveTab] = useState("BusinessAnalysis");
  const tabData = {
  BusinessAnalysis: {
    title: "Essential Features for Business Analysis",
    desc: "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium totam aperiame eaque.",
    points: [
      "Optimized Sprint Planning",
      "Continuous Improvement",
      "Incremental Delivery Approach",
      "Delivering Innovative"
    ]
  },

  BusinessStrategy: {
    title: "Essential Features for Business Strategy",
    desc: "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium totam aperiame eaque.",
    points: [
      "Strong Market Research",
      "Smart Growth Planning",
      "Revenue Optimization",
      "Competitive Advantage"
    ]
  },

  FinalExecution: {
    title: "Essential Features for Final Execution",
    desc: "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium totam aperiame eaque.",
    points: [
      "Optimized Sprint Planning",
      "Continuous Improvement",
      "Incremental Delivery Approach",
      "Delivering Innovative"
    ]
  }
};
  return (
    <>
      {/* HERO */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="overlay"></div>

        <div className="container">
          <div className="content">
            <p className="breadcrumb">
              <span>Home</span> › About Us
            </p>
            <h1>About Us</h1>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section" ref={ref}>
        <div className="container">
          <div className="about-wrapper">

            {/* LEFT */}
            <div className="about-left">
              <img src={aboutImg} alt="about" className="about-img" />

              <p className="about-text">
                Consumers today increasingly rely on digital channels to research
                products. We analyze brands and their offerings.
              </p>

              <div className="about-bottom">
                <button className="about-btn">More About ↗</button>

                <div className="impact">
                  <div className="avatars">
                    <img src={Img1} alt="" />
                    <img src={Img2} alt="" />
                    <img src={Img3} alt="" />
                    <img src={Img4} alt="" />
                  </div>
                  <p>10M+ Impact Across the World.</p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="about-right">
              <span className="tag">ABOUT US</span>

              <h2>
                We Provide <b>Brilliant Idea</b><br />
                To Grow The <span>Consulting</span><br />
                Agency <b>Your Sharp Brand</b>
              </h2>

              <div className="counter-box">

                <div className="counter">
                  <h3>
                    15+
                  </h3>
                  <p>Experience Team</p>
                  <span>Help you</span>
                </div>

                <div className="counter">
                  <h3>
                    18M
                  </h3>
                  <p>We helped to get</p>
                  <span>companies</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Service section  */}
      <section className="services-section">
        <div className="container">
          <div className="services-wrapper">

            {/* LEFT SIDE */}
            <div className="services-left">
              <span className="tag">SERVICES</span>

              <h2>
                Solutions Drive Business <br />
                Sustain Growth
              </h2>

              <p>
                Business consulting is a dynamic and multifaceted field that plays
                a pivotal role in helping organizations thrive in today's
                competitive landscape.
              </p>

              <ul>
                <li>✔ Optimized Sprint Planning</li>
                <li>✔ Incremental Delivery Approach</li>
                <li>✔ Continuous Improvement</li>
                <li>✔ Delivering Innovative</li>
              </ul>

              <button className="service-btn">View All Services →</button>
            </div>

            {/* RIGHT SIDE ACCORDION */}
            <div className="services-right">
              {services.map((item, index) => (
                <div
                  key={index}
                  className={`accordion-item ${activeIndex === index ? "active" : ""
                    }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="accordion-header">
                    <span>{item.title}</span>
                    <span className="number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {activeIndex === index && (
                    <p className="accordion-content">{item.desc}</p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      {/* growth section  */}
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
        <div className="people bg-white position-relative z-index-2">
          <div className="left">
            <h2 className="fw-bold">We help Real <br /> People Do More <br />Business Plan</h2>

          </div>
          <div className="right">
            <div className="one">
              <img src={Shape} alt="" />
              <h1>90%</h1>
              <h2>Clients Satisfactions</h2>
            </div>
            <div className="one">
              <img src={Shape} alt="" />
              <h1>40%</h1>
              <h2>Decrease Expense</h2>
            </div>
            <div className="one">
              <img src={Shape} alt="" />
              <h1>7M</h1>
              <h2>Money Flow Users</h2>
            </div>
          </div>


        </div>
      </section>

      {/* process section */}
      <section className="process-section py-5">
  <div className="process-container">

    <span className="tag">PROCESS</span>

    <h1>
      Ensure The Success Of <br />
      Your Business Venture.
    </h1>

    {/* Tabs */}
    <div className="tabs">
      <div
        className={activeTab === "BusinessAnalysis" ? "tab-item active" : "tab-item"}
        onClick={() => setActiveTab("BusinessAnalysis")}
      >
        Business Analysis
      </div>

      <div
        className={activeTab === "BusinessStrategy" ? "tab-item active" : "tab-item"}
        onClick={() => setActiveTab("BusinessStrategy")}
      >
        Business Strategy
      </div>

      <div
        className={activeTab === "FinalExecution" ? "tab-item active" : "tab-item"}
        onClick={() => setActiveTab("FinalExecution")}
      >
        Final Execution
      </div>
    </div>

    {/* Dynamic Content */}
    <div className="process-content">

      <div className="left-content">
        <h2>{tabData[activeTab].title}</h2>
        <p>{tabData[activeTab].desc}</p>

        <div className="checklist">
          {tabData[activeTab].points.map((item, index) => (
            <div key={index}>✔ {item}</div>
          ))}
        </div>
      </div>

      <div className="right-content">
        <img src={Img5} alt="Project Cost" className="img5" />
        <img src={Img6} alt="Expense" className="img6" />
      </div>

    </div>
  </div>
</section>

{/* team member section  */}

<section className="team-section">
  <div className="container">

    {/* Top */}
    <div className="team-header">
      <div>
        <span className="tag">TEAM MEMBER</span>
        <h2>The Visionaries Driving <br /> Our Success</h2>
      </div>

      <button className="team-btn">
        Get Started <IoIosArrowForward className="ms-2" />
      </button>
    </div>

    {/* Cards */}
    <div className="team-grid">

      {/* Card */}
      <div className="team-card">
        <div className="img-box">
          <img src={Img7} alt="" />

          {/* Hover Icons */}
          <div className="overlay">
            <div className="icons">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
        </div>

        <h4>Ronald Richards</h4>
        <p>CEO & Founder</p>
      </div>

      <div className="team-card">
        <div className="img-box">
          <img src={Img8} alt="" />
          <div className="overlay">
            <div className="icons">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
        </div>
        <h4>Marvin McKinney</h4>
        <p>Senior Manager</p>
      </div>

      <div className="team-card">
        <div className="img-box">
          <img src={Img9} alt="" />
          <div className="overlay">
            <div className="icons">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
        </div>
        <h4>Kathryn Murphy</h4>
        <p>Web Designer</p>
      </div>

      <div className="team-card">
        <div className="img-box">
          <img src={Img10} alt="" />
          <div className="overlay">
            <div className="icons">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
        </div>
        <h4>Dianne Russell</h4>
        <p>Junior Manager</p>
      </div>

    </div>
  </div>
</section>
{/* new blog section */}

 {/* BLOG SECTION */}
<section className="blog-section">
  <div className="container">

    {/* Header */}
    <div className="blog-header">
      <div>
        <span className="tag">NEW & BLOGS</span>
        <h2>
          Read All Our Consulting <br />
          News & Blogs
        </h2>
      </div>

      <button className="blog-btn">
        Contact Us
      </button>
    </div>

    {/* Blog Cards */}
    <div className="blog-grid">

      {/* Card 1 */}
      <div className="blog-card">
        <div className="blog-img-box">
          <img src={Blog1} alt="" />
          <div className="date-badge">15 December,2025</div>
        </div>

        <div className="blog-content">
          <h6>
            <CiUser /> By admin &nbsp;&nbsp;
            <FaRegComments /> Comments (05)
          </h6>

          <h3>
            We Focus On The Solutions Not <br />
            On The Problems
          </h3>

          <button className="read-btn">
            Read More <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="blog-card">
        <div className="blog-img-box">
          <img src={Blog2} alt="" />
          <div className="date-badge">20 December,2025</div>
        </div>

        <div className="blog-content">
          <h6>
            <CiUser /> By admin &nbsp;&nbsp;
            <FaRegComments /> Comments (05)
          </h6>

          <h3>
            How To Create Viral Content <br />
            That Drives Sales
          </h3>

          <button className="read-btn">
            Read More <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="blog-card">
        <div className="blog-img-box">
          <img src={Blog3} alt="" />
          <div className="date-badge">31 December,2025</div>
        </div>

        <div className="blog-content">
          <h6>
            <CiUser /> By admin &nbsp;&nbsp;
            <FaRegComments /> Comments (05)
          </h6>

          <h3>
            How AI Is Changing The Future <br />
            Of Online Shopping
          </h3>

          <button className="read-btn">
            Read More <IoIosArrowForward />
          </button>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Contact section  */}
<section className="contact-section pt-120 pb-120">
  <div className="contact-image">
    <img src={Img11} alt="contact" />
  </div>

  <div className="container">
    <div className="outer-box">
      <div className="row g-5">

        {/* Left Side */}
        <div className="col-lg-5 content-column">
          <div className="inner-column">

            <div className="sec-title mb-30">
              <h6 className="sub-title">Contact us</h6>
              <h2 className="title">Let's Work Together</h2>
              <p className="text">
                We condemn with rightful anger and, like those who have been misled.
              </p>
            </div>

            <ul className="info">
              <li className="icon">📞</li>
              <li>
                <p className="sub-title">Call For Inquiry</p>
                <h4 className="title">+00 (002) 896 22</h4>
              </li>
            </ul>

            <ul className="info mt-4">
              <li className="icon">✉️</li>
              <li>
                <p className="sub-title">Send Us Email</p>
                <h4 className="title">theme@gmail.com</h4>
              </li>
            </ul>

          </div>
        </div>

        {/* Right Side Form */}
        <div className="col-lg-7">
          <div className="contact-block">

            <div className="head">
              <h3 className="title">Need Help For Project!</h3>
              <p className="sub-title">
                Let's collaborate and create something amazing together!
              </p>
            </div>

            <form>
              <div className="row g-4">
                <div className="col-sm-6">
                  <input type="text" placeholder="Your Name" className="form-control" />
                </div>

                <div className="col-sm-6">
                  <input type="email" placeholder="Email Address" className="form-control" />
                </div>
              </div>

              <select className="form-select mt-4">
                <option>Choose Our Service</option>
                <option>UI/UX Design</option>
                <option>Web Developer</option>
                <option>Marketing Manager</option>
                <option>Web Designer</option>
                <option>Financial Advice</option>
              </select>

              <textarea
                className="form-control mt-4"
                rows="5"
                placeholder="Write a Message"
              ></textarea>

              <button type="submit" className="btn-two-rounded mt-4">
                Send Message Us →
              </button>
            </form>

          </div>
        </div>

      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default About;