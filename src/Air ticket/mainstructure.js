import React, { useState, useEffect } from 'react'
import Getofferdeal from './getofferdeal'
import { Link } from 'react-router-dom'
import Showsbooking from './Showsbooking'

const Mainstructure = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="main-structure-wrapper">
      {/* Scroll to top button with animation */}
      <button 
        className={`scroll-top scroll-to-target ${isVisible ? "show" : ""}`} 
        data-target="html" 
        onClick={scrollToTop}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20L12 4M12 4L5 11M12 4L19 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Main content */}
      <main>
        {/* Hero Slider Section */}
        <section className="slider-area">
          <div className="slider-active">
            <div className="single-slider slider-bg" data-background="assets/img/slider/slider_bg01.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-10">
                    <div className="slider-content">
                      <h2 className="title animate-fade-in-up" data-animation="fadeInUp" data-delay=".2s">
                        A Lifetime of Discounts? It's Genius.
                      </h2>
                      <p className="animate-fade-in-up" data-animation="fadeInUp" data-delay=".4s">
                        Get rewarded for your travels – unlock instant savings of 10% or more with a free Geairinfo.com account
                      </p>
                  <Link to="/register">
                      <a className="btn btn-primary animate-fade-in-up" data-animation="fadeInUp" data-delay=".6s">
                        Sign in / Register
                        <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                  </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-shape">
                <svg width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,0 C50,100 50,100 100,0 L100,100 L0,100 Z" fill="#fff" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Area */}
        <div className="booking-area" style={{zIndex: 1}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="booking-tag">
                  <ul>
                    <li>
                      <a href="booking-list.html">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.8 19.4L16 5.4C15.9 4.5 15.2 3.8 14.3 3.8H9.70001C8.80001 3.8 8.10001 4.5 8.00001 5.4L6.20001 19.4C6.10001 19.8 6.20001 20.3 6.50001 20.6C6.80001 20.9 7.20001 21.1 7.70001 21.1H16.3C16.8 21.1 17.2 20.9 17.5 20.6C17.8 20.2 17.9 19.8 17.8 19.4Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
                          <path d="M9.5 3.8V3.5C9.5 2.7 10.1 2 10.9 2H13.1C13.9 2 14.5 2.6 14.5 3.5V3.8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
                          <path d="M15.5 9.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                          <path d="M12 9.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                          <path d="M8.5 9.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                        </svg>
                        Flights
                      </a>
                    </li>
                    <li>
                      <a href="booking-list.html">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 17H20C21.1 17 22 16.1 22 15V11C22 10.5 21.8 10 21.5 9.6L18.7 5.6C18.2 5.2 17.6 5 17 5H4C2.9 5 2 5.9 2 7V15C2 16.1 2.9 17 4 17H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4 9H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7 17C8.65685 17 10 15.6569 10 14C10 12.3431 8.65685 11 7 11C5.34315 11 4 12.3431 4 14C4 15.6569 5.34315 17 7 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M17 17C18.6569 17 20 15.6569 20 14C20 12.3431 18.6569 11 17 11C15.3431 11 14 12.3431 14 14C14 15.6569 15.3431 17 17 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Car Rentals
                      </a>
                    </li>
                    <li>
                      <a href="booking-list.html">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 9.5C22 12 20 13.5 17.5 13.5C16.5 14.5 14 16 12 16C10 16 7.5 14.5 6.5 13.5C4 13.5 2 12 2 9.5C2 6.5 5.5 4 12 4C18.5 4 22 6.5 22 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15 13.5C15 15.5 14 19 12 19C10 19 9 15.5 9 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10.5 5.5C11 5.5 12.5 6.5 13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Attractions
                      </a>
                    </li>
                    <li>
                      <a href="booking-list.html">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 17H20C21.1 17 22 16.1 22 15V11C22 10.5 21.8 10 21.5 9.6L18.7 5.6C18.2 5.2 17.6 5 17 5H4C2.9 5 2 5.9 2 7V15C2 16.1 2.9 17 4 17H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4 9H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7 17C8.65685 17 10 15.6569 10 14C10 12.3431 8.65685 11 7 11C5.34315 11 4 12.3431 4 14C4 15.6569 5.34315 17 7 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M17 17C18.6569 17 20 15.6569 20 14C20 12.3431 18.6569 11 17 11C15.3431 11 14 12.3431 14 14C14 15.6569 15.3431 17 17 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Airport Taxis
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="booking-wrap">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="bOOKing-tab" data-bs-toggle="tab" data-bs-target="#bOOKing-tab-pane" type="button"
                          role="tab" aria-controls="bOOKing-tab-pane" aria-selected="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.8 19.4L16 5.4C15.9 4.5 15.2 3.8 14.3 3.8H9.70001C8.80001 3.8 8.10001 4.5 8.00001 5.4L6.20001 19.4C6.10001 19.8 6.20001 20.3 6.50001 20.6C6.80001 20.9 7.20001 21.1 7.70001 21.1H16.3C16.8 21.1 17.2 20.9 17.5 20.6C17.8 20.2 17.9 19.8 17.8 19.4Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
                          <path d="M9.5 3.8V3.5C9.5 2.7 10.1 2 10.9 2H13.1C13.9 2 14.5 2.6 14.5 3.5V3.8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
                          <path d="M15.5 9.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                          <path d="M12 9.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                          <path d="M8.5 9.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                        </svg>
                        air BOOKing
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="trips-tab" data-bs-toggle="tab" data-bs-target="#trips-tab-pane" type="button"
                          role="tab" aria-controls="trips-tab-pane" aria-selected="false">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16 17H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16 13H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 9H9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        my trips
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="check-tab" data-bs-toggle="tab" data-bs-target="#check-tab-pane" type="button"
                          role="tab" aria-controls="check-tab-pane" aria-selected="false">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        check-in
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="flight-tab" data-bs-toggle="tab" data-bs-target="#flight-tab-pane" type="button"
                          role="tab" aria-controls="flight-tab-pane" aria-selected="false">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M20 2L22 4L17.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15 5L19 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Flight status
                      </button>
                    </li>
                  </ul>
                  
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="bOOKing-tab-pane" role="tabpanel" aria-labelledby="bOOKing-tab" tabIndex="0">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="tab-content-wrap">
                            <div className="content-top">
                              <ul>
                                <li>Flights</li>
                                <li><span>Just from $12</span>Geair Stopover</li>
                              </ul>
                            </div>
                            <form className="booking-form">
                              <ul>
                                <li>
                                  <div className="form-grp">
                                    <input type="text" placeholder="From" />
                                  </div>
                                </li>
                                <li>
                                  <div className="form-grp">
                                    <input type="text" placeholder="To" />
                                    <button className="exchange-icon">
                                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 4L20 8L16 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M20 8H10.5C8.01472 8 6 10.0147 6 12.5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 20L4 16L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M4 16H13.5C15.9853 16 18 13.9853 18 11.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    </button>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-grp select">
                                    <label htmlFor="shortBy">Trip</label>
                                    <select id="shortBy" name="select" className="form-select" aria-label="Default select example">
                                      <option value="">Tour type</option>
                                      <option>Adventure Travel</option>
                                      <option>Family Tours</option>
                                      <option>Newest Item</option>
                                      <option>Nature & wildlife</option>
                                    </select>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-grp date">
                                    <ul>
                                      <li>
                                        <label htmlFor="departDate">Depart</label>
                                        <input type="text" className="date" id="departDate" placeholder="Select Date" />
                                      </li>
                                      <li>
                                        <label htmlFor="returnDate">Return</label>
                                        <input type="text" className="date" id="returnDate" placeholder="Select Date" />
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-grp economy">
                                    <label htmlFor="passengerClass">Passenger/ Class</label>
                                    <input type="text" id="passengerClass" placeholder="1 Passenger, Economy" />
                                  </div>
                                </li>
                              </ul>
                            </form>
                            <div className="content-bottom">
                              <a href="booking-details.html" className="promo-code">+ Add Promo code</a>
                              <Link to="/Flight">
                                <a href="booking-details.html" className="btn btn-primary">
                                  Show Flights 
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8 19.4L16 5.4C15.9 4.5 15.2 3.8 14.3 3.8H9.70001C8.80001 3.8 8.10001 4.5 8.00001 5.4L6.20001 19.4C6.10001 19.8 6.20001 20.3 6.50001 20.6C6.80001 20.9 7.20001 21.1 7.70001 21.1H16.3C16.8 21.1 17.2 20.9 17.5 20.6C17.8 20.2 17.9 19.8 17.8 19.4Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
                                    <path d="M9.5 3.8V3.5C9.5 2.7 10.1 2 10.9 2H13.1C13.9 2 14.5 2.6 14.5 3.5V3.8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
                                    <path d="M15.5 9.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M12 9.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M8.5 9.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                                  </svg>
                                </a>
                              </Link>    
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Area */}
        <section className="features-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-6 col-sm-10">
                <div className="features-item animate-fade-in">
                  <div className="features-icon">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#c240b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.09 9.00001C9.3251 8.33167 9.78915 7.76811 10.4 7.40914C11.0108 7.05016 11.7289 6.91894 12.4272 7.03872C13.1255 7.15849 13.7588 7.52153 14.2151 8.06353C14.6713 8.60554 14.9211 9.29153 14.92 10C14.92 12 11.92 13 11.92 13" stroke="#c240b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 17H12.01" stroke="#c240b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="features-content">
                    <h6 className="title">We are now available</h6>
                    <p>Call +1 555 666 888 for contact with us</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-sm-10">
                <div className="features-item animate-fade-in" data-delay="0.2s">
                  <div className="features-icon">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.8 19.4L16 5.4C15.9 4.5 15.2 3.8 14.3 3.8H9.70001C8.80001 3.8 8.10001 4.5 8.00001 5.4L6.20001 19.4C6.10001 19.8 6.20001 20.3 6.50001 20.6C6.80001 20.9 7.20001 21.1 7.70001 21.1H16.3C16.8 21.1 17.2 20.9 17.5 20.6C17.8 20.2 17.9 19.8 17.8 19.4Z" stroke="#c240b7" strokeWidth="1.5" strokeMiterlimit="10"/>
                      <path d="M9.5 3.8V3.5C9.5 2.7 10.1 2 10.9 2H13.1C13.9 2 14.5 2.6 14.5 3.5V3.8" stroke="#c240b7" strokeWidth="1.5" strokeMiterlimit="10"/>
                      <path d="M15.5 9.5V16.5" stroke="#c240b7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                      <path d="M12 9.5V16.5" stroke="#c240b7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                      <path d="M8.5 9.5V16.5" stroke="#c240b7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="features-content">
                    <h6 className="title">International Flight</h6>
                    <p>Call +1 555 666 888 for booking assistance</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-sm-10">
                <div className="features-item animate-fade-in" data-delay="0.4s">
                  <div className="features-icon">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#c240b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 10L10 15" stroke="#c240b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 10H10.01" stroke="#c240b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 15H15.01" stroke="#c240b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="features-content">
                    <h6 className="title">Check Refund</h6>
                    <p>Call +1 555 666 888 for check refund status</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Getofferdeal />

        {/* Destination Area */}
        <section className="destination-area destination-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="section-title">
                  <span className="sub-title">Offer Deals</span>
                  <h2 className="title">Your Great Destination</h2>
                </div>
                <div className="destination-content">
                  <p>Get rewarded for your travels – unlock instant savings of 10% or more with a free <span>Geairinfo.com</span> account</p>
                  <ul>
                    <li>
                      <div className="counter-item animate-count">
                        <div className="counter-content">
                          <h2 className="count"><span className="odometer" data-count="5830">0</span>+</h2>
                          <p>Happy Customers</p>
                        </div>
                        <div className="counter-icon">
                          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="counter-item animate-count" data-delay="0.2s">
                        <div className="counter-content">
                          <h2 className="count"><span className="odometer" data-count="100">0</span>%</h2>
                          <p>Client Satisfied</p>
                        </div>
                        <div className="counter-icon">
                          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 3C13.4546 4.78777 14.4237 6.93613 14.8 9.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 12C19.108 11.3592 17.1075 11.0287 15.09 11.03" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.19 21.06C15.77 19.77 15.91 18.09 16.74 16.74" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 12H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M20 5L13.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="content-bottom">
                    <p>Discover the latest offers & news and start planning</p>
                    <a href="contact.html" className="btn btn-outline">contact us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fly Next Area */}
        <section className="fly-next-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <span className="sub-title">Flynext Package</span>
                  <h2 className="title">Your Great Destination</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="fly-next-nav">
                  <button className="active" data-filter="*">
                    Flights 
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.8 19.4L16 5.4C15.9 4.5 15.2 3.8 14.3 3.8H9.70001C8.80001 3.8 8.10001 4.5 8.00001 5.4L6.20001 19.4C6.10001 19.8 6.20001 20.3 6.50001 20.6C6.80001 20.9 7.20001 21.1 7.70001 21.1H16.3C16.8 21.1 17.2 20.9 17.5 20.6C17.8 20.2 17.9 19.8 17.8 19.4Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
                      <path d="M9.5 3.8V3.5C9.5 2.7 10.1 2 10.9 2H13.1C13.9 2 14.5 2.6 14.5 3.5V3.8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
                      <path d="M15.5 9.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                      <path d="M12 9.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                      <path d="M8.5 9.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <button className="" data-filter=".cat-one">
                    Car Rentals 
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 17H20C21.1 17 22 16.1 22 15V11C22 10.5 21.8 10 21.5 9.6L18.7 5.6C18.2 5.2 17.6 5 17 5H4C2.9 5 2 5.9 2 7V15C2 16.1 2.9 17 4 17H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 9H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 17C8.65685 17 10 15.6569 10 14C10 12.3431 8.65685 11 7 11C5.34315 11 4 12.3431 4 14C4 15.6569 5.34315 17 7 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17 17C18.6569 17 20 15.6569 20 14C20 12.3431 18.6569 11 17 11C15.3431 11 14 12.3431 14 14C14 15.6569 15.3431 17 17 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="" data-filter=".cat-two">
                    Taxis 
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 17H20C21.1 17 22 16.1 22 15V11C22 10.5 21.8 10 21.5 9.6L18.7 5.6C18.2 5.2 17.6 5 17 5H4C2.9 5 2 5.9 2 7V15C2 16.1 2.9 17 4 17H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 9H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 17C8.65685 17 10 15.6569 10 14C10 12.3431 8.65685 11 7 11C5.34315 11 4 12.3431 4 14C4 15.6569 5.34315 17 7 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17 17C18.6569 17 20 15.6569 20 14C20 12.3431 18.6569 11 17 11C15.3431 11 14 12.3431 14 14C14 15.6569 15.3431 17 17 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <Showsbooking />
          </div>
        </section>

        {/* Brand Area */}
        <div className="brand-area">
          <div className="container">
            <div className="brand-list">
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <div key={item} className="brand-item animate-fade-in" style={{animationDelay: `${item * 0.1}s`}}>
                  <img 
                    src={`assets/img/brand/brand_img0${item}.png`} 
                    alt={`Brand ${item}`} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Service Area */}
        <section className="service-area">
          <div className="container">
            <div className="row align-items-end mb-50">
              <div className="col-md-8">
                <div className="section-title">
                  <span className="sub-title">Why Air geair</span>
                  <h2 className="title">Our Great Flight Options</h2>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-nav"></div>
              </div>
            </div>
            <div className="row service-active">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="col-lg-4">
                  <div className="service-item animate-fade-in-up" style={{animationDelay: `${item * 0.1}s`}}>
                    <div className="service-icon">
                      <img src={`assets/img/icon/service_icon0${item > 3 ? 2 : item}.png`} alt=""/>
                    </div>
                    <div className="service-content">
                      <span>Service 0{item}</span>
                      <h2 className="title">
                        {item === 1 && "Pre-Book Your Baggage"}
                        {item === 2 && "Reserve preferred seat!"}
                        {item === 3 && "Enjoy stress-free travel"}
                        {item === 4 && "Reserve preferred seat!"}
                      </h2>
                      <div className="service-list">
                        <ul>
                          {item === 1 && (
                            <>
                              <li>Pre-book your baggage <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#c240b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></li>
                              <li>Allowance now and save up <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#c240b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></li>
                              <li>90% of baggage charges <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#c240b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></li>
                            </>
                          )}
                          {item === 2 && (
                            <>
                              <li>What will it be, window or aisle? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#c240b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></li>
                              <li>Select your preferred seat prior <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#c240b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></li>
                              <li>Reserved for you. <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#c240b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></li>
                            </>
                          )}
                          {item === 3 && (
                            <>
                              <li>Travel stress-free by getting<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#c240b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></li>
                              <li>Covered for flight modification <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#c240b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></li>
                              <li>Cancellation, accident & medical <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#c240b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></li>
                            </>
                          )}
                          {item === 4 && (
                            <>
                              <li>What will it be, window or aisle? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#c240b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></li>
                              <li>Select your preferred seat prior <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#c240b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></li>
                              <li>Reserved for you. <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#c240b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Area */}
        <section className="blog-area blog-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <span className="sub-title">our News Feeds</span>
                  <h2 className="title">Latest News Update</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-53">
                <div className="blog-item animate-fade-in">
                  <div className="blog-thumb">
                    <a href="blog-details.html">
                      <img src="assets/img/blog/blog_img01.jpg" alt=""/>
                      <div className="blog-overlay"></div>
                    </a>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <ul>
                        <li>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <a href="#">Emely Watson</a>
                        </li>
                        <li>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          February 19, 2022
                        </li>
                      </ul>
                    </div>
                    <h2 className="title">
                      <a href="blog-details.html">Depending on your departure point and destination flights</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-47">
                {[2, 3, 4].map((item) => (
                  <div key={item} className="blog-item small-item animate-fade-in" style={{animationDelay: `${item * 0.1}s`}}>
                    <div className="blog-thumb">
                      <a href="blog-details.html">
                        <img src={`assets/img/blog/blog_img0${item}.jpg`} alt=""/>
                        <div className="blog-overlay"></div>
                      </a>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <ul>
                          <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <a href="#">Emely Watson</a>
                          </li>
                          <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M16 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            February 19, 2022
                          </li>
                        </ul>
                      </div>
                      <h2 className="title">
                        <a href="blog-details.html">
                          {item === 2 && "Happy International Country Flight Attendant Day"}
                          {item === 3 && "The US is a Large Country and Climate Varies by Region"}
                          {item === 4 && "But There are Dozen of Low-cost Airlines Including"}
                        </a>
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .main-structure-wrapper {
          position: relative;
          overflow-x: hidden;
        }
        
        /* Scroll to top button */
        .scroll-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          background: #c240b7;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 999;
          border: none;
          box-shadow: 0 4px 15px rgba(194, 64, 183, 0.3);
        }
        
        .scroll-top.show {
          opacity: 1;
          visibility: visible;
        }
        
        .scroll-top:hover {
          background: #a5329b;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(194, 64, 183, 0.4);
        }
        
        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translate3d(0, 40px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
        }
        
        /* Button styles */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          background: #c240b7;
          color: white;
          padding: 12px 25px;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(194, 64, 183, 0.3);
        }
        
        .btn-primary:hover {
          background: #a5329b;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(194, 64, 183, 0.4);
        }
        
        .btn-primary .btn-arrow {
          margin-left: 8px;
          transition: transform 0.3s ease;
        }
        
        .btn-primary:hover .btn-arrow {
          transform: translateX(4px);
        }
        
        .btn-outline {
          display: inline-block;
          border: 2px solid #c240b7;
          color: #c240b7;
          padding: 10px 20px;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .btn-outline:hover {
          background: #c240b7;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(194, 64, 183, 0.4);
        }
        
        /* Slider area enhancements */
        .slider-area {
          position: relative;
        }
        
        .slider-shape {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 2;
        }
        
        /* Brand area */
        .brand-area {
          background: #c240b7;
          padding: 40px 0;
        }
        
        .brand-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 30px;
        }
        
        .brand-item {
          flex: 0 0 calc(14.2857% - 30px);
          max-width: calc(14.2857% - 30px);
          text-align: center;
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        
        .brand-item:hover {
          opacity: 1;
          transform: translateY(-5px);
        }
        
        .brand-item img {
          max-width: 100%;
          height: auto;
          filter: brightness(0) invert(1);
        }
        
        /* Responsive styles */
        @media (max-width: 1200px) {
          .brand-item {
            flex: 0 0 calc(25% - 30px);
            max-width: calc(25% - 30px);
          }
        }
        
        @media (max-width: 768px) {
          .brand-item {
            flex: 0 0 calc(33.333% - 30px);
            max-width: calc(33.333% - 30px);
          }
          
          .scroll-top {
            bottom: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
          }
        }
        
        @media (max-width: 576px) {
          .brand-item {
            flex: 0 0 calc(50% - 30px);
            max-width: calc(50% - 30px);
          }
        }
        
        /* Counter animation */
        .animate-count {
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease;
        }
        
        .animate-count.in-view {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          // Animation on scroll
          document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-fade-in-up');
            
            function checkIfInView() {
              animatedElements.forEach(function(element) {
                const position = element.getBoundingClientRect();
                
                if(position.top < window.innerHeight && position.bottom >= 0) {
                  element.style.opacity = 1;
                  element.style.transform = 'translateY(0)';
                  
                  // Handle delay if specified
                  const delay = element.getAttribute('data-delay');
                  if(delay) {
                    element.style.animationDelay = delay;
                  }
                }
              });
              
              // Counter animation
              const counterElements = document.querySelectorAll('.animate-count');
              counterElements.forEach(function(element) {
                const position = element.getBoundingClientRect();
                
                if(position.top < window.innerHeight && position.bottom >= 0) {
                  element.classList.add('in-view');
                  
                  // Initialize counter if exists
                  const odometer = element.querySelector('.odometer');
                  if(odometer) {
                    const target = parseInt(odometer.getAttribute('data-count'));
                    let count = 0;
                    const duration = 2000; // in milliseconds
                    const frameDuration = 1000 / 60; // 60 fps
                    const totalFrames = Math.round(duration / frameDuration);
                    let frame = 0;
                    
                    const counter = setInterval(function() {
                      frame++;
                      const progress = frame / totalFrames;
                      const currentCount = Math.round(target * progress);
                      
                      if(parseInt(odometer.innerHTML) !== currentCount) {
                        odometer.innerHTML = currentCount;
                      }
                      
                      if(frame === totalFrames) {
                        clearInterval(counter);
                      }
                    }, frameDuration);
                  }
                }
              });
            }
            
            window.addEventListener('scroll', checkIfInView);
            window.addEventListener('load', checkIfInView);
            checkIfInView();
          });
        `
      }} />
    </div>
  )
}

export default Mainstructure