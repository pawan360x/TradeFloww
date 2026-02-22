import React from 'react';
function Team() {
    return ( 
        <div className='container mb-5'>
           <h4 className='text-center mb-5'>People</h4>

            <div className='row mx-md-5 px-md-5'>
                <div className='col-12 col-md-5  text-center my-3'>
                     <img src='images\imgi_8_nithin-kamath.jpg' className='rounded-circle w-75 mb-3'></img>

                    <p>Nithin Kamath</p>
                    <small>Founder, CEO</small>

                </div>
                
                <div className='col col-md-7   my-3'>
                    <p>
                      Nithin bootstrapped and founded TradeFloww in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, TradeFloww has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). </p>

                    <p>Playing basketball is his zen. 
                    </p>
                   <p>Connect on <a href=''> Homepage</a> / <a href=''> TradingQnA</a> / <a href=''> Twitter</a> 
                    </p>
                    </div>
            </div>

        </div>
    );
}

export default Team;