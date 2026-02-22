

import { useState, useEffect, useContext } from "react";
import GeneralContext from "../context/GeneralContext";


import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Tooltip from "@mui/material/Tooltip";
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { DoughnutChart } from "./DoughnutChart";
import { getWatchlist } from "../api/api";


const WatchList = () => {
  const [allwatchlist, setallwatchlist] = useState([]);

  useEffect(() => {

    const getData = async () => {
      const { data } = await getWatchlist();
        setallwatchlist(data);
    }
    getData();
  }, []);

  //// doughnut chart data
  const data = {
    labels: allwatchlist.map((subArr) => subArr["name"]),
    datasets: [
      {
        label: 'Price',
        data: allwatchlist.map((d) => d.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  //// doughnut chart data/

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {allwatchlist.length} / 50</span>
      </div>
      <ul className="list">
        {allwatchlist.map((stock, index) => {
          return (
            <>
              <WatchlistItem stock={stock} />
            </>
          )
        })}
      </ul>
      <DoughnutChart data={data} />
    </>

  );
};

export default WatchList;


const WatchlistItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchListActions(true);
  }
  const handleMouseLeave = () => {
    setShowWatchListActions(false);
  }


  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p>{stock.name}</p>
        <div className={stock.day < 0.0 ? "item-info down" : "item-info up"} >
          <span style={{ color: stock.day < 0.0 ? "red" : "green" }} className="percent">{stock.day}</span>
          {stock.day < 0.0 ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          <span style={{ color: stock.day < 0.0 ? "red" : "green" }} className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListAction name={stock.name} price={stock.price} />}
    </li>
  );
};


const WatchListAction = ({ name, price }) => {

  const generalContext = useContext(GeneralContext); //// buy button window
  const handleBuyClick = () => {  //// buy button window
    generalContext.openBuyWindow(name, price);
  };
  const handleSellClick = () => {  //// 
    generalContext.openSellWindow(name, price);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy" placement="top" arrow >
          <button onClick={handleBuyClick} className="buy">Buy </button>  {/* buy button window */}
        </Tooltip>
        <Tooltip title="Sell" placement="top" arrow >
          <button onClick={handleSellClick} className="sell">Sell </button>
        </Tooltip>
        <Tooltip title="Analytic" placement="top" arrow >
          <button className="action"><BarChartIcon className="icon" /></button>
        </Tooltip>
        <Tooltip title="More" placement="bottom" arrow >
          <button className="action"><MoreHorizIcon className="icon" /></button>
        </Tooltip>
      </span>
    </span>

  )
}