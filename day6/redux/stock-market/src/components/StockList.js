import { StockListItem } from './StockListItem';
import { useSelector } from 'react-redux';

export const StockList = () => {

  const stocks = useSelector(state => state.stocks);

  return (
    <div className="flex-column gap-1">
      <h2>Stock List</h2>

      <ul className="flex-column gap-1">
        {stocks.map((stock) => (
          <StockListItem key={stock.id} stock={stock}>
          </StockListItem>
        ))}
      </ul>
    </div>
  );
};
