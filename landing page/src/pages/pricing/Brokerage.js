import React, { act } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Brokerage() {

    let [activetab, setActivetab] = useState("equity");



    return (
        <div className='container tbs'>
            <div className='d-flex border-bottom table-p'>
                <p onClick={() => setActivetab("equity")} className={activetab === "equity" && "active-table"} ><h3 className='px-3'>Equity</h3></p>
                <p onClick={() => setActivetab("fandO")} className={activetab === "fandO" && "active-table"}><h3 className='px-3 d-md-none '>F&O</h3></p>
                <p onClick={() => setActivetab("currency")} className={activetab === "currency" && "active-table"} ><h3 className='px-3'>Currency</h3></p>
                <p onClick={() => setActivetab("commodity")} className={activetab === "commodity" && "active-table"} ><h3 className='px-3'>Commodity</h3></p>
            </div>

            {activetab === "equity" && (
                <div className='equity-table my-5 border'>
                    <table className='w-100'>
                        <thead>
                            <tr>
                                <th>&nbsp;</th>
                                <th>Equity delivery</th>
                                <th>Equity intraday</th>
                                <th className='d-none d-md-table-cell'>F&O - Futures</th>
                                <th className='d-none d-md-table-cell'>F&O - Options</th>
                            </tr>
                        </thead>
                        <tbody className='border-top'>
                            <tr >
                                <td>Brokerage</td>
                                <td>Zero Brokerage</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td className='d-none d-md-table-cell'>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td className='d-none d-md-table-cell'>Flat Rs. 20 per executed order</td>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>0.1&#37; on buy &#38; sell</td>
                                <td>0.025% on the sell side</td>
                                <td className='d-none d-md-table-cell'>0.02% on the sell side</td>
                                <td className='d-none d-md-table-cell'>
                                    <ul>
                                        <li>
                                            0.125% of the intrinsic value on options that are bought and exercised
                                        </li>
                                        <li>
                                            0.1% on sell side (on premium)
                                        </li>
                                    </ul>
                                </td >
                            </tr>
                            <tr>
                                <td>Transaction charges</td>
                                <td>NSE: 0.00297&#37;<br />BSE: 0.00375&#37;</td>
                                <td>NSE: 0.00297&#37;<br />BSE: 0.00375&#37;</td>
                                <td className='d-none d-md-table-cell'>NSE: 0.00173&#37;<br />BSE: 0</td>
                                <td className='d-none d-md-table-cell'>NSE: 0.03503% (on premium)<br />BSE: 0.0325% (on premium)</td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td>18&#37; on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18&#37; on (brokerage + SEBI charges + transaction charges)</td>
                                <td className='d-none d-md-table-cell'>18&#37; on (brokerage + SEBI charges + transaction charges)</td>
                                <td className='d-none d-md-table-cell'>18&#37; on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI charges</td>
                                <td>&#8377;10 / crore</td>
                                <td>&#8377;10 / crore</td>
                                <td className='d-none d-md-table-cell'>&#8377;10 / crore</td>
                                <td className='d-none d-md-table-cell'>&#8377;10 / crore</td>
                            </tr>
                            <tr>
                                <td>Stamp charges</td>
                                <td>0.015% or &#8377;1500 / crore on buy side</td>
                                <td>0.003% or &#8377;300 / crore on buy side</td>
                                <td className='d-none d-md-table-cell'>0.002% or &#8377;200 / crore on buy side</td>
                                <td className='d-none d-md-table-cell'>0.003% or &#8377;300 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            )}
            {activetab === "fandO" && (
                <div className='fandO-table my-5 border d-md-none'>
                    <table className='w-100'>
                        <thead>
                            <tr>
                                <th>&nbsp;</th>
                                <th >F&O - Futures</th>
                                <th >F&O - Options</th>
                            </tr>
                        </thead>
                        <tbody className='border-top'>
                            <tr >
                                <td>Brokerage</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>Flat Rs. 20 per executed order</td>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>0.02% on the sell side</td>
                                <td>
                                    <ul>
                                        <li>
                                            0.125% of the intrinsic value on options that are bought and exercised
                                        </li>
                                        <li>
                                            0.1% on sell side (on premium)
                                        </li>
                                    </ul>
                                </td >
                            </tr>
                            <tr>
                                <td>Transaction charges</td>
                                <td>NSE: 0.00173&#37;<br />BSE: 0</td>
                                <td>NSE: 0.03503% (on premium)<br />BSE: 0.0325% (on premium)</td>
                            </tr>
                            <tr>
                                <td>GST</td>

                                <td>18&#37; on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18&#37; on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI charges</td>
                                <td>&#8377;10 / crore</td>
                                <td>&#8377;10 / crore</td>
                            </tr>
                            <tr>
                                <td>Stamp charges</td>
                                <td>0.002% or &#8377;200 / crore on buy side</td>
                                <td>0.003% or &#8377;300 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            )}

            {activetab === "currency" && (
                <div className='currency-table my-5 border'>
                    <table className='w-100'>
                        <thead>
                            <tr>
                                <th>&nbsp;</th>
                                <th>Currency futures</th>
                                <th>Currency options</th>
                            </tr>
                        </thead>
                        <tbody className='border-top'>
                            <tr>
                                <td>Brokerage</td>
                                <td>0.03% or &#8377; 20/executed order whichever is lower</td>
                                <td>&#8377; 20/executed order</td>
                            </tr>
                            <tr class="grey-back">
                                <td>STT/CTT</td>
                                <td>No STT</td>
                                <td>No STT</td>
                            </tr>
                            <tr>
                                <td>Transaction charges</td>
                                <td>NSE: 0.00035%<br />BSE: 0.00045%</td>
                                <td>NSE: 0.0311%<br />BSE: 0.001%</td>
                            </tr>
                            <tr class="grey-back">
                                <td>GST</td>
                                <td>18&#37; on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18&#37; on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI charges</td>
                                <td>&#8377;10 / crore</td>
                                <td>&#8377;10 / crore</td>
                            </tr>
                            <tr class="grey-back">
                                <td>Stamp charges</td>
                                <td>0.0001% or &#8377;10 / crore on buy side</td>
                                <td>0.0001% or &#8377;10 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {activetab === "commodity" && (
                <div className='commodity-table my-5 border'>
                    <table className='w-100'>
                        <thead>
                            <tr>
                                <th>&nbsp;</th>
                                <th>Commodity futures</th>
                                <th>Commodity options</th>
                            </tr>
                        </thead>
                        <tbody className='border-top'>
                            <tr>
                                <td>Brokerage</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>&#8377; 20/executed order</td>
                            </tr>
                            <tr class="grey-back">
                                <td>STT/CTT</td>
                                <td>0.01% on sell side (Non-Agri)</td>
                                <td>0.05% on sell side</td>
                            </tr>
                            <tr>
                                <td>Transaction charges</td>
                                <td>MCX: 0.0021%<br />NSE: 0.0001%</td>
                                <td>MCX: 0.0418%<br />NSE: 0.001%</td>
                            </tr>
                            <tr class="grey-back">
                                <td>GST</td>
                                <td>18&#37; on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18&#37; on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI charges</td>
                                <td><strong>Agri:</strong><br />&#8377;1 /
                                    crore<br /><strong>Non-agri:</strong><br />&#8377;10 / crore</td>
                                <td>&#8377;10 / crore</td>
                            </tr>
                            <tr class="grey-back" colspan="2">
                                <td>Stamp charges</td>
                                <td>0.002% or &#8377;200 / crore on buy side</td>
                                <td>0.003% or &#8377;300 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
            <p className="my-5  fs-4 text-center"><Link to="">Calculate your costs upfront </Link>using our brokerage calculator</p>
        </div>
    );
}

export default Brokerage;

