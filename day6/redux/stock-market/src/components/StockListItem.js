import { useDispatch } from "react-redux";
import { buyStockFromMarket } from "../store/store";

export const StockListItem = ({ stock }) => {

  const dispatch = useDispatch();

  const handleBuy = () => {
    dispatch(buyStockFromMarket({ id: stock.id }));
  }

  return (
    <li className="stock-list-item" key={stock.id}>
      <div className="stock-name">{stock.name}</div>
      <div>${stock.price.toFixed(2)}</div>
      <button className="buy-button" onClick={handleBuy}>Buy</button>
    </li>
  );
}