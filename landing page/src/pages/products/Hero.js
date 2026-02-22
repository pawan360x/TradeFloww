import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
              <div className='container text-center'>
        <div className='my-5 pt-5'>
            <h3>TradeFloww Products</h3>
            <p className='fs-5'>Sleek, modern, and intuitive trading platforms</p>
           <p >Check out our<Link className=' ' to='/products'> investment offerings <i class="fa-solid fa-arrow-right-long"></i></Link></p> 
        </div></div>
    );
}

export default Hero;