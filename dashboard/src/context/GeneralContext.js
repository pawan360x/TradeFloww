import React, { useState } from "react";

import BuyActionWindow from "../components/BuyActionWindow";
import SellActionWindow from "../components/SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (name, price) => { },
  openSellWindow: (name, price) => { },
  closeWindow: () => { },
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWidowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockName, setSelectedStockName] = useState("");
  const [price, setprice] = useState(0);
  const [count, setCount] = useState(0);

  const handleOpenBuyWindow = (name, price) => {
    if (isSellWidowOpen === false && isBuyWindowOpen === false) {
      setIsBuyWindowOpen(true);
      setSelectedStockName(name);
      setprice(price);
    }
  };

  const handleCloseWindow = () => {
    setIsBuyWindowOpen(false);
    setIsSellWindowOpen(false);
    setSelectedStockName("");
    setprice(null);
  };

  const handleOpenSellWindow = (name, price) => {
    if (isBuyWindowOpen === false && isSellWidowOpen === false) {
      setIsSellWindowOpen(true);
      setSelectedStockName(name);
      setprice(price);
      setCount(prev => prev+1); 
    }
  };
  const handleRerender= ()=> setCount(prev => prev+1); 
  
  return (
    <GeneralContext.Provider value={{ openBuyWindow: handleOpenBuyWindow, openSellWindow: handleOpenSellWindow, closeWindow: handleCloseWindow, count, handleRerender}}>
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow name={selectedStockName} price={price} />}
      {isSellWidowOpen && <SellActionWindow name={selectedStockName} price={price} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
