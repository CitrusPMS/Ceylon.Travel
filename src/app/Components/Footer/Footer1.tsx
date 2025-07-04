"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';

const Footer1 = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <footer className="footer-section fix bg-cover" data-background="/assets/img/footer/footer-bg.jpg">
            <div className="container">
                <div className="footer-widget-wrapper-new">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-8 col-sm-6 wow fadeInUp wow" data-wow-delay=".2s">
                            <div className="single-widget-items text-center">
                                <div className="widget-head">
                                    <a href="#">
                                        <img src="/assets/img/logo/white-log.svg" alt="img" />
                                    </a>
                                </div>
                                <div className="footer-content">
                                    <h3>Subscribe Newsletter</h3>
                                    <p>Get Our Latest Deals and Update</p>
                                    <div className="footer-input">
                                        <input type="email" id="email2" placeholder="Your email address" />
                                        <button className="newsletter-btn theme-btn" type="submit">
                                            Subscribe <i className="bi bi-arrow-right"></i>
                                        </button>
                                    </div>
                                    <div className="social-icon d-flex align-items-center justify-content-center">
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-twitter-x"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 ps-lg-5 wow fadeInUp wow" data-wow-delay=".4s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                   <h4>Quick Links</h4>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <Link href="/">
                                            Home 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            About Us  
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service">
                                            Services 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/tour">
                                            Tour 
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ps-lg-5 wow fadeInUp wow" data-wow-delay=".6s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                   <h4>Services</h4>
                                </div>
                                <ul className="list-items">
                                    <li>
                                    <Link href="/tour/tour-details">
                                            Wanderlust Adventures  
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/tour/tour-details">
                                            Globe Trotters Travel
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/tour/tour-details">
                                            Odyssey Travel Services
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/tour/tour-details">
                                            Jet Set Journeys
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/tour/tour-details">
                                            Dream Destinations Travel
                                    </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ps-xl-5 wow fadeInUp wow" data-wow-delay=".6s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                   <h4>Contact Us</h4>
                                </div>
                                <div className="contact-info">
                                    <div className="contact-items">
                                        <div className="icon">
                                        <i className="bi bi-geo-alt-fill"></i>
                                        </div>
                                        <div className="content">
                                            <h6>9550 Bolsa Ave #126, <br/>
                                                United States
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="contact-items">
                                        <div className="icon">
                                        <i className="bi bi-envelope-fill"></i>
                                        </div>
                                        <div className="content">
                                         <h6>
                                             <a href="mailto:info@touron.com">info@touron.com</a> 
                                         </h6>
                                      </div>
                                    </div>
                                    <div className="contact-items">
                                       <div className="icon">
                                       <i className="bi bi-telephone-fill"></i>
                                       </div>
                                       <div className="content">
                                           <h6>
                                               <a href="tel:+256214203215">+256 214 203 215</a> <br/>
                                               <a href="tel:+10987654321">+1 098 765 4321</a>
                                           </h6>
                                       </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-wrapper">
                        <p className="wow fadeInUp" data-wow-delay=".3s">
                            Copyright © <span>Turmet,</span> All Rights Reserved.
                        </p>
                        <ul className="bottom-list wow fadeInUp" data-wow-delay=".5s">
                            <li>Terms of use</li>
                            <li>Privacy Environmental Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer1;