import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaAngleRight } from 'react-icons/fa';
import './navbar.css';
import logoImg from "../../assets/logo.png";
const Header = () => {
    return (
        <header className="fixed-top shadow-sm">

            <div className="topbar d-none d-lg-block bg-light border-bottom">
                <Container fluid className="px-5">
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <div className="d-flex gap-4 info-text">
                            <span><FaEnvelope className="me-2 icon-green" /> needhelp@company.com</span>
                            <span><FaMapMarkerAlt className="me-2 icon-green" /> 6391 Elgin St. Celina, Delaware 10299</span>
                        </div>
                        <div className="d-flex align-items-center gap-3 top-links">
                            <a href="#">About</a>
                            <a href="#">Faqs</a>
                            <a href="#">Contact</a>
                            <div className="social-icons ms-3 d-flex gap-3">
                                <FaFacebookF /> <FaInstagram /> <FaTwitter /> <FaLinkedinIn />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* --- MAIN NAVBAR Section --- */}
            <Navbar bg="white" expand="lg" className="main-navbar py-3">
                <Container fluid className="px-5">
                  <Navbar.Brand href="#home">
            <img
              src={logoImg} // Import ki hui image yahan use karein
              alt="Consultez Logo"
              height="35" // Logo ki height adjust karein image ke hisaab se
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

                    <Navbar.Toggle aria-controls="header-nav" />

                    <Navbar.Collapse id="header-nav">
                        <Nav className="mx-auto fw-bold custom-nav">
                            <NavDropdown title="Home" id="home-drop">
                                <NavDropdown.Item>Home Page 01</NavDropdown.Item>
                                <NavDropdown.Item>Home Page 02</NavDropdown.Item>
                                <NavDropdown.Item>Home Page 03</NavDropdown.Item>
                                <NavDropdown.Item>Home Page 04</NavDropdown.Item>
                                <NavDropdown.Item>Home Page 05</NavDropdown.Item>
                                <NavDropdown.Item>Home Page 06</NavDropdown.Item>
                                <NavDropdown.Item>Home Page 07</NavDropdown.Item>
                                <div className="submenu-item">
                                    Single Style <FaAngleRight className="float-end mt-1" />
                                    <ul className="nested-menu shadow">
                                        <li>Single Style 1</li>
                                        <li>Single Style 2</li>
                                        <li>Single Style 3</li>
                                        <li>Single Style 4</li>
                                        <li>Single Style 5</li>
                                        <li>Single Style 6</li>
                                        <li>Single Style 7</li>


                                    </ul>
                                </div>
                                <div className="submenu-item">
                                    Dark Style<FaAngleRight className="float-end mt-1" />
                                    <ul className="nested-menu shadow">
                                        <li>Dark Style 1</li>
                                        <li>Dark Style 2</li>
                                        <li>Dark Style 3</li>
                                        <li>Dark Style 4</li>
                                        <li>Dark Style 5</li>
                                        <li>Dark Style 6</li>
                                        <li>Dark Style 7</li>
                                    </ul>
                                </div>


                            </NavDropdown>

                            {/* Multi-level Dropdown (Pages) */}
                            <NavDropdown title="Pages" id="pages-drop" className="has-submenu">
                                <NavDropdown.Item>About</NavDropdown.Item>
                                <NavDropdown.Item>Faq</NavDropdown.Item>
                                <NavDropdown.Item>Pricing</NavDropdown.Item>
                                <div className="submenu-item">
                                    Team <FaAngleRight className="float-end mt-1" />
                                    <ul className="nested-menu shadow">
                                        <li>Team List</li>
                                        <li>Team Details</li>
                                    </ul>
                                </div>
                                <div className="submenu-item">
                                    Shop <FaAngleRight className="float-end mt-1" />
                                    <ul className="nested-menu shadow">
                                        <li>Products</li>
                                        <li>Cart</li>
                                    </ul>
                                </div>
                            </NavDropdown>

                            <NavDropdown title="Services" id="services-drop">
                                <NavDropdown.Item>Services</NavDropdown.Item>
                                <NavDropdown.Item>Services Details</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Portfolio" id="port-drop">
                                <NavDropdown.Item>Portfolio</NavDropdown.Item>
                                <NavDropdown.Item>Portfolio Details</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="News" id="news-drop">
                                <NavDropdown.Item>News Grid</NavDropdown.Item>
                                <NavDropdown.Item>News Details</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>

                        {/* Right Side Info */}
                        <div className="d-flex align-items-center action-area">
                            <div className="d-flex align-items-center me-4">
                                <div className="phone-circle me-2"><FaPhoneAlt /></div>
                                <div>
                                    <small className="d-block text-muted" style={{ fontSize: '10px' }}>PHONE:</small>
                                    <span className="fw-bold">+00 2222 222 00</span>
                                </div>
                            </div>
                            <button className="btn btn-dark-green px-4 py-2 rounded-0">Contact Now</button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;