import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { getFunds } from "../api/api";
import { useContext } from "react";
import GeneralContext from "../context/GeneralContext";

const Funds = () => {
  const [funds, setFunds] = useState({});
  const { count } = useContext(GeneralContext);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getFunds();
      setFunds(data[0]);
    }
    getData();
  }, [count]);



  return (
    <>
      <div className="funds d-flex flex-column justify-content-center justify-content-md-end flex-md-row ">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link className="btn btn-green">Add funds</Link>
        <Link className="btn btn-blue">Withdraw</Link>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <span>
            <h3>Equity</h3>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{funds.availableMargin}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">{funds.usedMargin}</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{funds.availableCash}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>{funds.openingBalance}</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
