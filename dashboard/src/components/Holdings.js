
import { useState, useEffect } from "react";
import { VerticleGraph } from "./VerticleChart";
import { getAllHoldings } from "../api/api";
import { useContext } from "react";
import GeneralContext from "../context/GeneralContext";

export const Red = "hello red";


const Holdings = () => {

  const [allHoldings, setAllHoldings] = useState([]);
    const {count} = useContext(GeneralContext); 

  useEffect(() => {
    const getData = async () => {
      const {data}= await getAllHoldings();
      setAllHoldings(data);
    }
    getData(); 
  }, [count]);


 let investment = allHoldings.reduce((sum, obj) => sum + (obj.avg*obj.qty), 0);

 let investmentInteger = Math.floor(investment);
 let investmentDecimal = investment - investmentInteger ;

 let currentValue = allHoldings.reduce((sum, obj) => sum + (obj.price*obj.qty), 0);
 
 let currentValueInteger = Math.floor(currentValue);
 let currentValueDecimal = (currentValue-currentValueInteger);

  //// backend close /--

  // // chart data 
  const labels = allHoldings.map((subArr) => subArr.name);

  const data = {
    labels,
    datasets: [
      {
        label: 'Stock Price',
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  // // chart data /

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr></thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.day<0.0 ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profClass}>{(currValue - stock.avg * stock.qty).toFixed(2)}</td>
                  <td className={profClass}>{stock.net}%</td>
                  <td className={dayClass}>{stock.day}%</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {investmentInteger}.<span>{(investmentDecimal).toFixed(2)*100}</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {currentValueInteger}.<span>{((currentValueDecimal)*100).toFixed(0)}</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>{(currentValue-investment).toFixed(2)} ({(((currentValue/investment)*100)-100).toFixed(2)}%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticleGraph data={data} />
    </>
  );
};

export default Holdings;
