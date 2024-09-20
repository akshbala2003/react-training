import { createContext, useReducer, useEffect } from 'react';

const initialState = {
  items: []
};

const itemReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case 'LOAD_ITEMS':
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemReducer, initialState
  );

  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    console.log('Loaded items from localStorage:', storedItems);

    if (storedItems) {
      dispatch({ type: 'LOAD_ITEMS', payload: JSON.parse(storedItems) });
    }
  },[]);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(state.items));
  }, [state.items]);

  return (
    <ItemContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
};

export { ItemProvider, ItemContext };
