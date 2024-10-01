import { useSelector } from "react-redux";

export const Navbar = () => {

  const funds = useSelector(state => state.user.funds);

  return (
    <nav className="flex-row flex-space-between">
      <h1 style={{ fontWeight: 'bold' }}>Stock Market</h1>
      <h1>Balance: {funds.toFixed(2)}</h1>
    </nav>
  );
};
