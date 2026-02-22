import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "../context/GeneralContext";

import "./BuyActionWindow.css";
import { newOrder } from "../api/api";

const BuyActionWindow = ({ name, price }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(price);
  const { closeWindow, handleRerender } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    const data = {
      name: name,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    }

    await newOrder(data);
    handleRerender();
    closeWindow();
  };

  const handleCancelClick = () => {
    closeWindow();
  };

  return (
    <div className="order-container" id="buy-window" draggable="true">
      <div className="regular-order">{name}
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice} />

          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockPrice * stockQuantity).toFixed(2)}</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;


