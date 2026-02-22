import React from 'react';
import { Link } from 'react-router-dom';

function Stats() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-5 '>
                    <h3 className='mt-5'>Trust with confidence</h3>
                    <br></br>
                    <h5>Customer-first always</h5>
                    <p className='mb-4 text-muted '>That's why 1.6+ crore customers trust TradeFloww with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h5>No spam or gimmicks</h5>
                    <p className='mb-4 text-muted '>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h5>The TradeFloww universe</h5>
                    <p className='mb-4 text-muted '>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h5>Do better with money</h5>
                    <p className='mb-4 text-muted '>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>

                <div className='col-lg-7  text-center '>
                    <img src='images\imgi_9_ecosystem.png ' width={"100%"} alt='' ></img>
                    <br></br>
                    <Link className='text-decoration-none me-5' to='/products'>Explore our Products  <i class="fa-solid fa-arrow-right-long"></i></Link>
                    <Link className='text-decoration-none' to={process.env.REACT_APP_DASHBOARD}>Try Floww Demo  <i class="fa-solid fa-arrow-right-long"></i></Link>

                </div>
                <a href='' className='text-decoration-none text-center mt-5 mb-5'><img src='images\imgi_10_press-logos.png' width={"75%"}></img></a>
            </div>




        </div>
    );
}

export default Stats;