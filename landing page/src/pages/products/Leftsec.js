import React from 'react';
import { Link } from 'react-router-dom';


function Leftsec({ img, heading, text, linkOne, linkTwo }) {

    return (
        <div className="container  my-5" >
            <div className="row mt-5">
                <div className="col-md-8 col-12 text-decoration-none pt-5 "> <a className=" text-decoration-none" > <img src={img} className='left-sec-image'></img></a></div>
                <div className="col-md-4 col mt-5 pt-5">
                    <h3 className=''>{heading}</h3>
                    <p className=' text-muted '>{text}</p>

                     { linkOne && (<Link  to=''>{linkOne} <i class="fa-solid fa-arrow-right-long"></i></Link>)} &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
 
                     { linkTwo && (  <Link  to=''>{linkTwo}  <i class="fa-solid fa-arrow-right-long"></i></Link>)}

                    <br></br>
                    <br></br>
                    <a href=''> <img src='images\imgi_9_google-play-badge.svg'></img ></a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href=''><img src='images\appstore-badge.svg'></img></a>
                </div>
            </div>
        </div>
    );
}

export default Leftsec;