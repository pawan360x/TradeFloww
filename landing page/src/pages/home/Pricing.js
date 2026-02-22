import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
    return ( 
        <div className='container mb-5 '>
            
            <div className='row'>
                <h3 className='mt-5'>Unbeatable pricing</h3>
                <div className='col-md-5'>
                     <p className='mb-4 text-muted '>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                </div>
                <div className='col-md-7 '>
                    <div className='row'>
                   <span className=' col-4 d-flex '><img src='images\imgi_11_pricing-eq.svg' width={"50%"} style={{marginTop:"-10%"}}></img><p style={{  fontSize:"10px" , left:"-10%", position:"relative", top:"30%"}}> Free account opening</p></span>
                   <span className=' col-4 d-flex '><img src='images\imgi_11_pricing-eq.svg' width={"50%"}style={{marginTop:"-10%"}}></img><p style={{  fontSize:"10px" , left:"-10%" ,position:"relative", top:"30%"}}>  Free equity delivery <br></br> and direct mutual fund </p></span>
                   <span className=' col-4 d-flex '><img src='images\imgi_12_other-trades.svg'width={"50%"}style={{marginTop:"-10%"}} ></img><p style={{ fontSize:"10px" , left:"-5%" ,position:"relative", top:"30%"}}>  Intraday and <br></br>F&O</p></span>
               </div> </div>
                  <Link className='text-decoration-none' to='/pricings'>See pricing  <i class="fa-solid fa-arrow-right-long"></i></Link>
            </div>
        </div>
    );
}

export default Pricing;