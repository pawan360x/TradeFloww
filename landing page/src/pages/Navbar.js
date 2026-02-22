import React, { useEffect, useReducer, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [navShow, setNavShow] = useState(false);
    const location = useLocation(); 
    const menuBox = useRef(null);
    const menuIcon = useRef();

    if (navShow) {
        menuBox.current.classList.add("show");
        document.addEventListener("mousedown", (e) => {
            closeBanner(e.target);
        })
    } else if (menuBox.current) menuBox.current.classList.remove("show");

    const closeBanner = (e) => {
        if (menuBox.current && !menuBox.current.contains(e)) {
            if (navShow && !menuIcon.current.contains(e)) {
                setNavShow(false);
                menuBox.current.classList.remove("show");
            }
        }
    };

    useEffect(()=>{
         if(navShow){
            setNavShow(false)
         }
    },[location.pathname])



    return (
        <>
            <nav class="navbar sticky-top navbar-expand bg-white border-bottom mt-0 mb-5">
                <div class="container-fluid  " >
                    <div className='container d-flex  '>
                        <Link class="navbar-brand p-0 me-0" to="/"> <img src='images\tradefloww.png' className='nav-logo-image' /></Link>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNav" >
                            <ul class="navbar-nav  align-items-center gap-4">
                                <li class="nav-item d-none d-lg-flex"> <Link class="nav-link" aria-current="page" to="/signup">Signup</Link></li>
                                <li class="nav-item d-none d-lg-flex"> <Link class="nav-link" aria-current="page" to="/about">About</Link></li>
                                <li class="nav-item d-none d-lg-flex"> <Link class="nav-link" aria-current="page" to="/products">Product</Link></li>
                                <li class="nav-item d-none d-lg-flex"> <Link class="nav-link" aria-current="page" to="/pricings">Pricing</Link></li>
                                <li class="nav-item d-none d-lg-flex"> <Link class="nav-link" aria-current="page" to="/support">Support</Link></li>
                                <li class="nav-item " ref={menuIcon}> <Link onClick={() => setNavShow(!navShow)} class="nav-link fs-5 " aria-current="page"><i class="fa-solid fa-bars"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>


            <div className='nav-menu' ref={menuBox}>

                <div className=' d-lg-none row list-unstyled p-4 mx-2 w-100'>
                    <div className='col-6'>
                        <li class="nav-item "> <Link class="nav-link" aria-current="page" to="/signup">Signup</Link></li>
                        <li class="nav-item "> <Link class="nav-link" aria-current="page" to="/about">About</Link></li>
                        <li class="nav-item "> <Link class="nav-link" aria-current="page" to="/products">Product</Link></li>
                    </div>
                    <div className='col-6'>
                        <li class="nav-item "> <Link class="nav-link" aria-current="page" to="/pricings">Pricing</Link></li>
                        <li class="nav-item "> <Link class="nav-link" aria-current="page" to="/support">Support</Link></li>
                    </div>
                </div>

                <div className='nav-menu-top menu'>
                    <Link className='menu-top-content' onClick={()=>window.location.href = process.env.REACT_APP_DASHBOARD}>
                        <img src='images\floww-icon.png' width={"50%"} />
                        <p>Floww</p>
                        <small>Trading platform</small>
                    </Link>
                    <Link className='menu-top-content '>
                        <img src='images\imgi_3_console.svg' width={"50%"} />
                        <p>Console</p>
                        <small>Backoffice</small>
                    </Link>
                    <Link className='menu-top-content'>
                        <img src='images\imgi_4_kite-connect.svg' width={"50%"} />
                        <p>Floww Connect</p>
                        <small>Trading APIs</small>
                    </Link>
                    <Link className='menu-top-content'>
                        <img src='images\imgi_5_coin.svg' width={"50%"} />
                        <p>Coin</p>
                        <small> Mutual funds</small>
                    </Link>
                </div>
                <div className='nav-menu-bottom  menu'>
                    <div className='menu-bottom-content'>
                        <p className=''>Utilities</p>
                        <Link className=''>Calculators</Link>
                        <Link className=''>Brokerage calculator</Link>
                        <Link className=''>Margin calculator</Link>
                        <Link className=''>SIP calculator</Link>
                    </div>

                    <div className='menu-bottom-content'>
                        <p className=''>Updates</p>
                        <Link className=''>Z-Connect blog</Link>
                        <Link className=''>Circulars / Bulletin</Link>
                        <Link className=''>IPOs</Link>
                        <Link className=''>Markets</Link>
                    </div>
                </div>
            </div></>
    );
}

export default Navbar;







// <div id="menu" class="navbar-menu text-left show">
//                 <ul class="navbar-links show-on-mobile">
//                   <li class="nav-links">
//                     <a href="https://zerodha.com/open-account/">Signup</a>
//                   </li>
//                   <li class="hide-on-small">
//                     <a class="nav-links" id="nav_acop" href="https://zerodha.com/open-account/">Open account</a>
//                   </li>
//                   <li>
//                     <a class="nav-links" href="https://zerodha.com/about/">About</a>
//                   </li>
//                   <li>
//                     <a class="nav-links" href="https://zerodha.com/products/">Products</a>
//                   </li>
//                   <li>
//                     <a class="nav-links" href="https://zerodha.com/pricing/">Pricing</a>
//                   </li>
//                   <li>
//                     <a target="_blank" href="https://support.zerodha.com">Support</a>
//                   </li>
//                 </ul>
//                 <div class="row between v-align products-list">
//                   <div class="three columns">
//                     <a class="text-center" href="https://kite.zerodha.com">
//                       <img src="https://zerodha.com/static/images/products/kite-logo.svg"><br class="hide-on-mobile">
//                       <span>
//                         <strong>Floww</strong>
//                       </span>
//                       <br class="hide-on-small">
//                       <span class="text-light-grey text-12 hide-on-small">
//                         Trading platform
//                       </span>
//                     </a>
//                   </div>
//                   <div class="three columns">
//                     <a class="text-center" href="https://console.zerodha.com">
//                       <img src="https://zerodha.com/static/images/products/console.svg"><br class="hide-on-mobile">
//                       <span>
//                         <strong>Console</strong>
//                       </span>
//                       <br class="hide-on-small">
//                       <span class="text-light-grey text-12 hide-on-small">
//                         Backoffice
//                       </span>
//                     </a>
//                   </div>
//                   <div class="three columns">
//                     <a class="text-center" href="/products/api/">
//                       <img src="https://zerodha.com/static/images/products/kite-connect.svg"><br class="hide-on-mobile">
//                       <span>
//                         <strong>Floww Connect</strong>
//                       </span>
//                       <br class="hide-on-small">
//                       <span class="text-light-grey text-12 hide-on-small">
//                         Trading APIs
//                       </span>
//                     </a>
//                   </div>
//                   <div class="three columns">
//                     <a class="text-center" href="https://coin.zerodha.com">
//                       <img src="https://zerodha.com/static/images/products/coin.svg"><br class="hide-on-mobile">
//                       <span>
//                         <strong>Coin</strong>
//                       </span>
//                       <br class="hide-on-small">
//                       <span class="text-light-grey text-12 hide-on-small">
//                         Mutual funds
//                       </span>
//                     </a>
//                   </div>
//                   <div class="three columns show-on-mobile">
//                     <a href="https://zerodha.com/varsity/" class="text-center">
//                       <img class="nav-edu-img" src="https://zerodha.com/static/images/products/varsity.png"><br>
//                       <span><strong>Varsity</strong></span>
//                     </a>
//                   </div>
//                   <div class="three columns show-on-mobile">
//                     <a href="https://tradingqna.com/" class="text-center">
//                       <img class="nav-edu-img" src="https://zerodha.com/static/images/products/tqna.png"><br>
//                       <span><strong>Trading Q&amp;A</strong></span>
//                     </a>
//                   </div>
//                 </div>
//                 <div class="menu-footer">
//                   <div class="row between">
//                     <div class="seven columns">
//                       <div class="row between">
//                         <div class="six columns">
//                           <p><strong>Utilities</strong></p>
//                           <a href="https://zerodha.com/calculators/">Calculators</a>
//                           <a href="https://zerodha.com/brokerage-calculator/">Brokerage calculator</a>
//                           <a href="https://zerodha.com/margin-calculator/">Margin calculator</a>
//                           <a href="https://zerodha.com/calculators/sip-calculator/">SIP calculator</a>
//                         </div>
//                         <div class="six columns">
//                           <p><strong>Updates</strong></p>
//                           <a href="https://zerodha.com/z-connect/">Z-Connect blog</a>
//                           <a href="https://zerodha.com/marketintel/bulletin/">Circulars / Bulletin</a>
//                           <a href="https://zerodha.com/ipo/">IPOs</a>
//                           <a href="https://zerodha.com/markets">Markets</a>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="five columns education hide-on-small">
//                       <p><strong>Education</strong></p>
//                       <a href="https://zerodha.com/varsity/" class="text-center">
//                         <img src="https://zerodha.com/static/images/products/varsity.png"><br>
//                         <span>Varsity</span>
//                       </a>
//                       <a href="https://tradingqna.com/" class="text-center">
//                         <img src="https://zerodha.com/static/images/products/tqna.png"><br>
//                         <span>Trading Q&amp;A</span>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="show-on-mobile nav-mobile-signup">
//                   <!-- <a href="https://zerodha.com/open-account/">Sign up <i class="icon icon-arrow-right"></i></a> -->
//                 </div>
//               </div>