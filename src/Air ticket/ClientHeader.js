import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './context';

const ClientHeader = () => {

const { logout } = useContext(UserContext);

  return (
    <div>
       <header>
            <div class="header-top">
                <div class="container custom-container">
                    <div class="row">
                        <div class="col-xl-4">
                            <div class="header-top-left">
                                <a href="#"><i class="fa-solid fa-plane"></i> COVID-19 update & travel requirements</a>
                            </div>
                        </div>
                        <div class="col-xl-8">
                            <div class="header-top-right">
                                <ul>
                                    <li><a href="contact.html">Corporate Club</a></li>
                                    <li><a href="contact.html">Miles&Smiles</a></li>
                                    <li><a href="about.html"><i class="fa-solid fa-comments"></i>Feedback</a></li>
                                    <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i>Search</a></li>
                                    <li><a href="contact.html"><i class="fa-solid fa-dollar-sign"></i>Currency</a></li>
                                    <li><a href="booking-list.html"><i class="fa-solid fa-earth-asia"></i>EN - INT</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="sticky-header" class="menu-area menu-style-two">
                <div class="container custom-container">
                    <div class="row">
                        <div class="col-12">
                            <div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
                            <div class="menu-wrap">
                                <nav class="menu-nav">
                                    <div class="logo"><a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a></div>
                                    <div class="navbar-wrap main-menu d-none d-lg-flex">
                                        <ul class="navigation">
                                    <Link to="/"><li><a href="index.html">Home</a></li></Link>
                                            <li><a href="about.html">About</a></li>
                                            <li class="active menu-item-has-children"><a href="#">Pages</a>
                                                <ul class="submenu">
                                                    <li class="active"><a href="booking-list.html">Booking List</a></li>
                                                    <li><a href="booking-details.html">Booking Details</a></li>
                                                </ul>
                                            </li>
                                         <Link to="/blog">   <li class="menu-item-has-children"><a >Blog</a>
                                                <ul class="submenu">
                                                    <li><a href="blog.html">Our Blog</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li></Link>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </div>
                                    <div class="header-action d-none d-md-block">
                                        <ul>
                                    
                                            <li class="country"><a href="#">INR <img src="assets/img/icon/indin-flag.png"  style={{height:'25px'}}alt=""/></a></li>
                                            <li class="question"><a href="contact.html">?</a></li>
                                  <li class="header-btn"><a class="btn" onClick={logout}>LogOut</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            {/* <!-- Mobile Menu  --> */}
                            <div class="mobile-menu">
                                <nav class="menu-box">
                                    <div class="close-btn"><i class="fa-solid fa-xmark"></i></div>
                                    <div class="nav-logo"><a href="index.html"><img src="assets/img/logo/logo_02.png" alt="" title=""/></a>
                                    </div>
                                    <div class="menu-outer">
                                        {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                                    </div>
                                    <div class="social-links">
                                        <ul class="clearfix">
                                            <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                                            <li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
                                            <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                                            <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                                            <li><a href="#"><span class="fab fa-youtube"></span></a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div class="menu-backdrop"></div>
                            {/* <!-- End Mobile Menu --> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default ClientHeader
