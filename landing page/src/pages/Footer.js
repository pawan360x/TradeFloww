import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (

        <footer className='bg-light border-top'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-6 col-md-3'>
                        <img src='images\tradefloww.png' width={"85%"}></img> <br></br><br></br>
                        <small>© 2010 - 2025, TradeFloww Broking Ltd.<br></br> All rights reserved.</small><br></br>
                        <div className='d-flex footer-social-links mb-2 pt-2'>
                            <a href=''><img src='images\linkdn.svg'></img></a>
                            <a href=''><img src='images\facebook.svg'></img></a>
                            <a href=''><img src='images\imgi_16_x-twitter.svg'></img></a>
                            <a href=''><img src='images\insta.svg'></img></a>
                        </div>
                        <div className='d-flex footer-social-links border-top mb-2 pt-2'>
                            <a href=''><img src='images\imgi_18_whatsapp-logo.svg'></img></a>
                            <div className='link-youtube d-flex footer-social-links'>
                                <a href=''><img src='images\imgi_17_youtube.svg'></img></a>
                                <a href=''><img src='images\telegram.svg'></img></a>
                            </div>
                        </div>

                    </div>
                    <div className='col'>
                        <h5 className='mb-4'>Account</h5>
                        <ul className='hey'>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Open demat account</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Minor demat account</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>NRI demat account</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Commodity</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Dematerialisation</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Fund transfer</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>MTF</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Referral program</Link></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h5 className='mb-4'>Support</h5>
                        <ul className='hey'>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Contact us</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to='/support'>Support portal</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>How to file a complaint?</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Status of your complaints</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Bulletin</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Circular</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Z-Connect blog</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Downloads</Link></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h5 className='mb-4'>Company</h5>
                        <ul className='hey'>
                            <li className='footer-text-links'><Link className=" text-muted" to='/about'>About</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Philosophy</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Press & media</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Careers</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>TradeFloww Cares (CSR)</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>TradeFloww.tech</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Open source</Link></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h5 className='mb-4'>Quick links</h5>
                        <ul className='hey'>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Upcoming IPOs</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Brokerage charges</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Market holidays</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Economic calendar</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Calculators</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Markets</Link></li>
                            <li className='footer-text-links'><Link className=" text-muted" to=''>Sectors</Link></li>
                        </ul>
                    </div>
                </div>


                <div className='footer-last-text'>
                    <p>pha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through TradeFloww Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: TradeFloww Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF </p>

                    <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                    <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                    <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                    <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of TradeFloww and offering such services, please create a ticket here.</p>
                </div>
                
                <div className='footer-last-link text-center'>
                    <a href='' className='text-decoration-none text-muted'>NSE</a>
                    <a href='' className='text-decoration-none text-muted'>BSE</a>
                    <a href='' className='text-decoration-none text-muted'>MCX</a>
                    <a href='' className='text-decoration-none text-muted'>Terms & conditions</a>
                    <a href='' className='text-decoration-none text-muted'>Policies & procedures </a>
                    <a href='' className='text-decoration-none text-muted'>Privacy policy</a>
                    <a href='' className='text-decoration-none text-muted'> Disclosure</a>
                    <a href='' className='text-decoration-none text-muted'>For investor's attention </a>
                    <a href='' className='text-decoration-none text-muted'>Investor charter</a>
                </div>
                </div>

        </footer>
    );
}

export default Footer;