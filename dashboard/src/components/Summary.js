import axios from "axios";
import { useEffect, useState } from "react";
import { getAllHoldings, getFunds } from "../api/api";
import GeneralContext from "../context/GeneralContext";
import { useContext } from "react";

const Summary = ({ username }) => {

  const [allHoldings, setAllHoldings] = useState([]);
  const [funds, setFunds] = useState({});
  const { count } = useContext(GeneralContext);

  useEffect(() => {
    const getData = async () => {
      const holdingData = await getAllHoldings();
      setAllHoldings(holdingData.data);

      const fundData = await getFunds();
      setFunds(fundData.data[0]);
    }
    getData();
  }, [count]);

  let investment = allHoldings.reduce((sum, obj) => sum + (obj.avg * obj.qty), 0);
  let currentValue = allHoldings.reduce((sum, obj) => sum + (obj.price * obj.qty), 0);

  return (
    <div className="w-100">
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
            <h3>{((funds.availableMargin) / 1000).toFixed(2)}k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>{((funds.usedMargin) / 1000).toFixed(2)}k</span>{" "}
            </p>
            <p>
              Opening balance <span>{((funds.openingBalance) / 1000).toFixed(2)}k</span>{" "}
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
              {((currentValue - investment) / 1000).toFixed(2)}k <small>({(((currentValue / investment) * 100) - 100).toFixed(2)}%)</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{(currentValue / 1000).toFixed(2)}k</span>{" "}
            </p>
            <p>
              Investment <span>{(investment / 1000).toFixed(2)}k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </div>
  );
};

export default Summary;
