import { useSelector } from "react-redux";
import { PortfolioItem } from "./PortfolioItem";

export const Portfolio = () => {

  const portfolio = useSelector(state => state.user.portfolio);

  const calculateNetworth = () => {
    return portfolio.reduce((acc, stock) => {
      return acc + (stock.quantity * stock.price);
    }, 0).toFixed(2);
  };

  return (
    <div className="flex-column gap-1">
      <h2>
        <span>Portfolio</span>
        { portfolio.length > 0 && <span> - Networth: {calculateNetworth()}</span> }
      </h2>

      <ul className="flex-column gap-1">
        {portfolio.map((stock) => (
          <PortfolioItem key={stock.id} stock={stock}>
          </PortfolioItem>
        ))}
      </ul>
    </div>
  );
};
