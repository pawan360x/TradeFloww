import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: ( name , price) => { },
  openSellWindow: ( name , price) => { },
  closeWindow: () => { },
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWidowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockName, setSelectedStockName] = useState("");
  const [price , setprice] = useState(0);

  const handleOpenBuyWindow = (name,price) => {
    if(isSellWidowOpen==false){
    setIsBuyWindowOpen(true);
    setSelectedStockName(name);
    setprice(price);}
  };

  const handleCloseWindow = () => {
    setIsBuyWindowOpen(false);
    setIsSellWindowOpen(false);
    setSelectedStockName("");
    setprice(null);
  };

   const handleOpenSellWindow = (name,price) => {
    if(isBuyWindowOpen==false){
    setIsSellWindowOpen(true);
    setSelectedStockName(name);
    setprice(price);}
  };

  return (
    <GeneralContext.Provider value={{ openBuyWindow: handleOpenBuyWindow,openSellWindow:handleOpenSellWindow, closeWindow: handleCloseWindow, }}>
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow name={selectedStockName} price={price} />}
      {isSellWidowOpen && <SellActionWindow name={selectedStockName} price={price} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
