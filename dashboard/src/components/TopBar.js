
import Menu from "./Menu";
import { useState } from "react";
import { useEffect } from "react";
import { getNifty } from "../api/api";

const TopBar = ({userInfo}) => {

  const [nifty , setNifty] = useState(0);

  async function getinfo() {
    try {
      let {data} = await getNifty(); 
      setNifty(data)
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
      <div className="indices-container d-none d-md-flex">
        <div className="nifty">
          <p className="index p">NIFTY 50</p>
          <p className="index-points">{nifty} </p>
          <p className="percent"></p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{200}</p>
          <p className="percent"></p>
        </div>
      </div>
      <Menu userInfo={userInfo} />
    </div>
  );
};

export default TopBar;
