import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return (
        <div className='container text-center '>
            <h3 className=''>The TradeFloww Universe</h3>
            <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms</p>

            <div className='row lh-1 my-5'>

                <div className='col-md-4 px-5 py-4 py-md-0'>
                    <a href=''>
                        <img className='universe-img' src='images\imgi_15_zerodhafundhouse.png' ></img><br></br>
                        <small className='text-body-tertiary'>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.</small>
                    </a>
                </div>
                <div className='col-md-4 px-5 py-4 py-md-0 '>
                    <a href=''>
                        <img className='universe-img' src='images\imgi_17_sensibull-logo.svg' ></img><br></br>
                        <small className='text-body-tertiary'>Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.
                        </small>
                    </a>
                </div>
                <div className='col-md-4 px-5 py-4 py-md-0'>
                    <a href=''>
                        <img className='universe-img' src='images\imgi_19_tijori.svg' ></img><br></br>
                        <small className='text-body-tertiary'>Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more.</small>
                    </a>
                </div>
            </div>
            <div className='row lh-1 my-md-5'>
                <div className='col-md-4 px-5 py-4 py-md-0'>
                    <a href=''>
                        <img className='universe-img' src='images\imgi_16_streak-logo.png' ></img><br></br>
                        <small className='text-body-tertiary'>Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.</small>
                    </a>
                </div>
                <div className='col-md-4 px-5 py-4 py-md-0'>
                    <a href=''>
                        <img className='universe-img' src='images\imgi_18_smallcase-logo.png' ></img><br></br>
                        <small className='text-body-tertiary'>Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs.</small>
                    </a>
                </div>
                <div className='col-md-4 px-5 py-4 py-md-0'>
                    <a href=''>
                        <img className='universe-img' src='images\imgi_20_ditto-logo.png' ></img><br></br>
                        <small className='text-body-tertiary'>Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.
                            Sign up for free</small>
                    </a>
                </div>
            </div>
            <Link to="/signup" className='btn btn-primary rounded-1 my-5  fs-5 px-4'>Sign up for free</Link>
        </div>

    );
}

export default Universe;