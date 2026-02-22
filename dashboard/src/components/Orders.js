import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { getOrders } from "../api/api";
import { useContext } from "react";
import GeneralContext from "../context/GeneralContext";

const Orders = () => {

  const [alloOrders, setOrders] = useState([]);
  const {count} = useContext(GeneralContext); 
  
  useEffect(() => {
     const getData = async () => {
      const { data } = await getOrders();
      setOrders(data);
    }
    getData();
  }, [count]);



  return ( 
    <div className="orders">

      {alloOrders.length<1 ? (
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div> ):  (<>

  <h3 className="title">Orders ({alloOrders.length})</h3>
  <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Type</th>
              <th>Product</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>Status</th>
            
            </tr></thead>
          <tbody>
            {alloOrders.map((stock, index) => {


              return (
                <tr key={index} className={stock.mode=="BUY"?"stock-order-buy":"stock-order-sell"}>
                  <td>{stock.time }</td>
                  <td>{stock.mode}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td className={stock.complete ? "profit" : "loss"}>{stock.complete ? "Complete" : "Pending"}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div></>)
}

    </div>
  );
};

export default Orders;
