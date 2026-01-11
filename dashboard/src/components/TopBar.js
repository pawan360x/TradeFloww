import axios from "axios";

import Menu from "./Menu";
import { useState } from "react";
import { useEffect } from "react";

const TopBar = () => {
  const [nifty , setNifty] = useState(0);
  async function getinfo() {
    try {
      let response = await axios.get(`${process.env.REACT_APP_SERVER}/nifty`);
      setNifty(response.data)
    }

    catch (err) {
      console.error("Error fetching data:", err);
    }

  }
  useEffect(() => {
    getinfo();
  }, [])
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{nifty} </p>
          <p className="percent"></p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{200}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
