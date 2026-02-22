import React from 'react';
import { Link } from 'react-router-dom';

function Openaccount() {
    return (
        <div className='container text-center'>
        <div className='mb-5'>
            <h4 className='mb-3 mt-5'>Open a TradeFloww account</h4>
            <p className='fs-6'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Link to="signup" className='btn btn-primary rounded-1 mt-4 fs-5 px-4'>Sign up for free</Link>
        </div></div>
    );
}

export default Openaccount;