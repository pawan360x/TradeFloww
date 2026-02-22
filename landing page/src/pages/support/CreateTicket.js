import React, { useState } from 'react';

function CreateTicket() {


    let [activetabs, setactivetabs] = useState([
        { tab: "account-opening", open: "" },
        { tab: "zerodha-account", open: "" },
        { tab: "kite", open: "" },
        { tab: "funds", open: "" },
        { tab: "console", open: "" },
        { tab: "coin", open: "" },

    ]);

    function tabFunction(tab) {
        setactivetabs((prev) => (prev.map((t) => t.tab === tab ? { ...t, open: !t.open } : t)))
    }

    return (


        <div className='container'>
            <div className='row flex-column-reverse flex-md-row'>
                <div className='col-md-8'>


                    <div className='account-opening tabs pb-5'>
                        <div onClick={() => tabFunction("account-opening")} className='form-control py-0 ticket-tabs '>
                            <div className='row d-flex'>
                                 <div className='col-1 py-3 pe-5 pe-md-0 m-0'><span><i class="fa-regular fa-square-plus"></i></span></div>
                                <div className='col d-flex'>
                                    <h5 >Account Opening</h5>
                                    <i class="fa-solid fa-angle-down fs-5 ms-auto pt-4"></i>
                                </div>
                            </div>
                        </div>
                        {activetabs.some((t) => t.tab === "account-opening" && t.open) && (
                            <ul className='border py-4 px-5' >
                                <a href=''><li> Resident individual</li></a>
                                <a href=''><li> Minor</li></a>
                                <a href=''><li>Non Resident Indian (NRI)</li></a>
                                <a href=''><li> Company, Partnership, HUF and LLP</li></a>
                                <a href=''><li>Company, Partnership, HUF and LLP</li></a>
                            </ul>)}
                    </div>







                    <div className='zerodha-account tabs pb-5'>
                        <div onClick={() => tabFunction("zerodha-account")} className='form-control py-0 ticket-tabs '>
                            <div className='row d-flex'>
                                <div className='col-1 py-3 pe-5 pe-md-0 m-0'><span><i class="fa-regular fa-square-plus"></i></span></div>
                                <div className='col d-flex'>
                                    <h5 >Your TradeFloww Account</h5>
                                    <i class="fa-solid fa-angle-down fs-5 ms-auto pt-4"></i>
                                </div>
                            </div>
                        </div>
                        {activetabs.some((t) => t.tab === "zerodha-account" && t.open) && (
                            <ul className='border py-4 px-5'>
                                <a href=''><li> Resident individual</li></a>
                                <a href=''><li> Minor</li></a>
                                <a href=''><li>Non Resident Indian (NRI)</li></a>
                                <a href=''><li> Company, Partnership, HUF and LLP</li></a>
                                <a href=''><li>Company, Partnership, HUF and LLP</li></a>
                            </ul>)}
                    </div>




                    <div className='kite tabs pb-5'>
                        <div onClick={() => tabFunction("kite")} className='form-control py-0 ticket-tabs '>
                            <div className='row d-flex'>
                                 <div className='col-1 py-3 pe-5 pe-md-0 m-0'><span><i class="fa-regular fa-square-plus"></i></span></div>
                                <div className='col d-flex'>
                                    <h5 >Floww</h5>
                                    <i class="fa-solid fa-angle-down fs-5 ms-auto pt-4"></i>
                                </div>
                            </div>
                        </div>
                        {activetabs.some((t) => t.tab === "kite" && t.open) && (
                            <ul className='border py-4 px-5'>
                                <a href=''><li> Resident individual</li></a>
                                <a href=''><li> Minor</li></a>
                                <a href=''><li>Non Resident Indian (NRI)</li></a>
                                <a href=''><li> Company, Partnership, HUF and LLP</li></a>
                                <a href=''><li>Company, Partnership, HUF and LLP</li></a>
                            </ul>)}
                    </div>




                    <div className='funds tabs pb-5'>
                        <div onClick={() => tabFunction("funds")} className='form-control py-0 ticket-tabs '>
                            <div className='row d-flex'>
                                 <div className='col-1 py-3 pe-5 pe-md-0 m-0'><span><i class="fa-regular fa-square-plus"></i></span></div>
                                <div className='col d-flex'>
                                    <h5 >Funds</h5>
                                    <i class="fa-solid fa-angle-down fs-5 ms-auto pt-4"></i>
                                </div>
                            </div>
                        </div>
                        {activetabs.some((t) => t.tab === "funds" && t.open) && (
                            <ul className='border py-4 px-5'>
                                <a href=''><li> Resident individual</li></a>
                                <a href=''><li> Minor</li></a>
                                <a href=''><li>Non Resident Indian (NRI)</li></a>
                                <a href=''><li> Company, Partnership, HUF and LLP</li></a>
                                <a href=''><li>Company, Partnership, HUF and LLP</li></a>
                            </ul>)}
                    </div>



                    <div className='console tabs pb-5'>
                        <div onClick={() => tabFunction("console")} className='form-control py-0 ticket-tabs '>
                            <div className='row d-flex'>
                                 <div className='col-1 py-3 pe-5 pe-md-0 m-0'><span><i class="fa-regular fa-square-plus"></i></span></div>
                                <div className='col d-flex'>
                                    <h5 >Console</h5>
                                    <i class="fa-solid fa-angle-down fs-5 ms-auto pt-4"></i>
                                </div>
                            </div>
                        </div>
                        {activetabs.some((t) => t.tab === "console" && t.open) && (
                            <ul className='border py-4 px-5'>
                                <a href=''><li> Resident individual</li></a>
                                <a href=''><li> Minor</li></a>
                                <a href=''><li>Non Resident Indian (NRI)</li></a>
                                <a href=''><li> Company, Partnership, HUF and LLP</li></a>
                                <a href=''><li>Company, Partnership, HUF and LLP</li></a>
                            </ul>)}
                    </div>



                    <div className='coin tabs pb-5'>
                        <div onClick={() => tabFunction("coin")} className='form-control py-0 ticket-tabs '>
                            <div className='row d-flex'>
                                 <div className='col-1 py-3 pe-5 pe-md-0 m-0'><span><i class="fa-regular fa-square-plus"></i></span></div>
                                <div className='col d-flex'>
                                    <h5 >Coin</h5>
                                    <i class="fa-solid fa-angle-down fs-5 ms-auto pt-4"></i>
                                </div>
                            </div>
                        </div>
                        {activetabs.some((t) => t.tab === "coin" && t.open) && (
                            <ul className='border py-4 px-5'>
                                <a href=''><li> Resident individual</li></a>
                                <a href=''><li> Minor</li></a>
                                <a href=''><li>Non Resident Indian (NRI)</li></a>
                                <a href=''><li> Company, Partnership, HUF and LLP</li></a>
                                <a href=''><li>Company, Partnership, HUF and LLP</li></a>
                            </ul>)}
                    </div>


                </div>

{/* righ side ============================================== */}

                <div className='col-md-4 mb-5'>


                    <div className='support-right-1 d-flex mb-3'>
                        <div className='orange-div'></div>
                        <ul>
                            <a href=''><li><u>MCX option contract expiry – November 2025</u></li></a>
                            <a href=''><li><u>MCX Base metals contract expiry – November 2025</u></li></a>
                        </ul>
                    </div>
                    <div className='support-right-2 border'>
                          <p className='bg-body-tertiary p-3 mb-0'>Quick Links</p>
                            <ul>
                            <li className='border-bottom'>1. Track account opening</li>
                            <li className='border-bottom'>2. Track segment activation</li>
                            <li className='border-bottom'>3. Intraday margins</li>
                            <li className='border-bottom'>4. Floww user manual</li>
                            <li>5. Learn how to create a ticket</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CreateTicket;