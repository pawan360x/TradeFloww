import React from 'react';
import { Link } from 'react-router-dom';

function Pagenotfound() {
    return (
        <div className='container '>
        <div className='mb-5'>
            <h4 className='mb-3 mt-5'>404</h4>
            <h2 className='mb-3 mt-3'>Couldn’t find that page</h2>
            <p className='fs-5'>We couldn’t find the page you were looking for. <br/> 
            Visit <Link to="/">TradeFloww’s home page</Link> </p>
            
        </div></div>
    );
}

export default Pagenotfound;