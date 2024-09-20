import logo from './logo.svg';
import './App.css';
import { ItemProvider } from './contexts/ItemContext';
import ItemManager from './components/ItemManager';


function App() {
  return (
    <ItemProvider>
    <ItemManager />
   </ItemProvider>
  );
}

export default App;
