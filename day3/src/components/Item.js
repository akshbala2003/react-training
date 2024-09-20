import React from 'react';

const Item = ({ item, handleRemoveItem }) => {
  return (
    <li>
      <span>{item.name}</span>
      <span>{item.description}</span>
      <button type="button" onClick={() => handleRemoveItem(item.id)}>
        Remove
      </button>
    </li>
  );
};

export default Item;