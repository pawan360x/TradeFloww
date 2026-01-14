import axios from "axios";
import {useEffect,useState} from "react";

const Summary = ({username}) => {

    const [allHoldings, setAllHoldings] = useState([]);
    const [funds, setFunds] = useState({});
    

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER}/holdings/data`).then((res) => {
      setAllHoldings(res.data);
    });

    axios.get(`${process.env.REACT_APP_SERVER}/fund/data`).then((res) => {
      setFunds(res.data[0]);
    });


  }, []);
  
  let investment = allHoldings.reduce((sum, obj) => sum + (obj.avg*obj.qty), 0);
   let currentValue = allHoldings.reduce((sum, obj) => sum + (obj.price*obj.qty), 0);

  return (
    <>
      <div className="username">
        <h6>Hi, {username} !</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{((funds.availableMargin)/1000).toFixed(2)}k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>{((funds.usedMargin)/1000).toFixed(2)}k</span>{" "}
            </p>
            <p>
              Opening balance <span>{((funds.openingBalance)/1000).toFixed(2)}k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              {((currentValue-investment)/1000).toFixed(2)}k <small>({(((currentValue/investment)*100)-100).toFixed(2)}%)</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{(currentValue/1000).toFixed(2)}k</span>{" "}
            </p>
            <p>
              Investment <span>{(investment/1000).toFixed(2)}k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
