import React from 'react';
import { Link } from 'react-router-dom';


function Rightsec({ img, heading, text, linkOne }) {
    return (
        <div className="container  my-5" >
            <div className="row flex-column-reverse flex-md-row mt-5">
                <div className="col-md-4 col-12 mt-5 pt-5">
                    <h3 className=''>{heading}</h3>
                    <p className=' text-muted '>{text}</p>
                    {linkOne && (<Link to=''>{linkOne} <i class="fa-solid fa-arrow-right-long"></i></Link>)}
                </div>
                <div className='col-md-2'></div>
                <div className="col-md-6  text-decoration-none"> <a className=" text-decoration-none" > <img className='right-sec-image' src={img} ></img></a></div>
            </div>
        </div>
    );
}

export default Rightsec;