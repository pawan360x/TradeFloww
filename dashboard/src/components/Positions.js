import React from "react";
// import { positions } from "../data/data";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const Positions = () => {
  const [allpositions, setAllPositions] = useState([]);

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_SERVER}/positions/data`).then((res)=>{
      setAllPositions(res.data);
    })
  },[])

  return (
    <>
      <h3 className="title">Positions ({allpositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allpositions.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty;
              const profClass = isProfit >=0.0 ? "profit" : "loss";
              const dayClass = Number(stock.day)<0.0 ? "loss" : "profit";

              return (
                <tr key={index}>

                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>

                </tr>)
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
