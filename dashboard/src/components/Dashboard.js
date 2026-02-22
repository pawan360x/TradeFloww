
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "../context/GeneralContext";

const Dashboard = ({ userInfo }) => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <div className="watchlist-container d-none d-md-block">
          <WatchList />
        </div>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Summary username={userInfo.user} />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/watchlist-mobile" element={<div className="watchlist-container d-md-none"><WatchList /></div>  } />
          </Routes>
        </div>
      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;
