import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {



    return (
        <div>

            <div className='bg-body-tertiary support-page-hero pt-5'>
                <div className='container'>
                    <div className='d-flex'>
                        <h1>Support Portal</h1>
                        <a className='btn btn-primary  text-center ms-auto my-ticket-btn'>My Tickets</a>
                    </div>

                    <form class=" pb-5 ads" role="search">
                        <i class="fa-solid fa-magnifying-glass search-icon"></i> <input class="form-control  p-3 ps-5 " type="search" placeholder="Eg: How do I open my account, How do i activate F&O..." aria-label="Search" />
                    </form>

                </div>
            </div>

        </div>
    );
}

export default Hero;