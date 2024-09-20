import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import useFilterAndSort from '../hooks/useFilterAndSort';

const ItemManager = () => {
  const { state, dispatch } = React.useContext(ItemContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const searchInputRef = useRef(null);
  const { searchTerm, setSearchTerm, sortOption, setSortOption, sortDirection, setSortDirection, sortedItems } = useFilterAndSort(state.items);

  useLayoutEffect(() => {
    searchInputRef.current.focus();
  }, []);

  useEffect(() => {
    console.log('Item list updated:', state.items);
    console.log(localStorage.getItem('items'));

  }, [state.items]);

  const handleAddItem = () => {
    const newItem = { id: Date.now(), name, description };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
    setName('');
    setDescription('');
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleSortChange = (option) => {
    if (sortOption === option) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortOption(option);
      setSortDirection('asc');
    }
  };

  return (
    <div>
      <h1>Item Manager</h1>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="button" onClick={handleAddItem}>
          Add Item
        </button>
      </form>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        ref={searchInputRef}
      />
      <table>
        <thead>
          <tr>
            <th>
              <button type="button" onClick={() => handleSortChange('name')}>
                Name {sortOption === 'name' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
              </button>
            </th>
            <th>
              <button type="button" onClick={() => handleSortChange('description')}>
                Description {sortOption === 'description' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
              </button>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button type="button" onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemManager;


