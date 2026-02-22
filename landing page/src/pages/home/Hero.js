import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    
    return ( 
        <div className='container text-center'>
            <div className='mb-5'>
            <img src="images\imgi_8_landing.svg" alt="" width={"60%"}></img>
            </div>

            <div className='mb-5'>
              <h2>Invest in everything</h2>
              <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
              <Link class="btn btn-primary rounded-1 mt-4 fs-5 px-4"  to="/signup">Sign up for free</Link>
            </div>
        </div>
     );
}

export default Hero;