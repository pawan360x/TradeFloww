import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='container text-center'>
            <div className='my-5 py-5'>
                <h3>Charges</h3>
                <p className='fs-5 text-body-tertiary'>List of all charges and taxes</p>
            </div>
            <div className='row my-5 pt-md-5'>
                <div className='col-md-4'>
                    <img src='images\imgi_11_pricing-eq.svg' width={"70%"} ></img>
                    <div className='my-5'>
                        <h3>Free equity delivery</h3>
                        <p className='text-center mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <img src='images\imgi_12_other-trades.svg' width={"70%"}></img>
                    <div className='my-5'>
                        <h3>Intraday and F&O trades</h3>
                        <p className='text-center mt-3 '>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <img src='images\imgi_11_pricing-eq.svg' width={"70%"}></img>
                    <div className='my-5'>
                        <h3>Free direct MF</h3>
                        <p className='text-center mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero