import React from "react";

function Education() {
    return (
        <div className="container my-5 py-5 ">
            <div className="row flex-column-reverse flex-md-row">
                <div className="col-lg-6 text-decoration-none "> <a className=" text-decoration-none" > <img src="images\imgi_13_index-education.svg" width={"80%"}></img></a></div>
                <div className="col-lg-6">
                     <h3 className='mt-5'>Free and open market education</h3>
                     <p className=' text-muted '>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.                    </p>
                     <p className="mb-3"><a className='text-decoration-none' href=''>Varsity  <i class="fa-solid fa-arrow-right-long"></i></a></p>
                     <p className=' text-muted '>TradingQ&A, the most active trading and investment community in India for all your market related queries.                    </p>
                     <p className="mb-3"><a className='text-decoration-none  ' href=''>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a></p>
                </div>
            </div>
        </div>
     );
}

export default Education;