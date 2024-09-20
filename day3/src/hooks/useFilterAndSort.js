import { useState } from 'react';

const useFilterAndSort = (items) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  const filteredItems = items.filter(item => {
    const itemName = item.name.toLowerCase();
    const itemDescription = item.description.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();
    return itemName.includes(searchTermLower) || itemDescription.includes(searchTermLower);
  });

  const sortedItems = filteredItems.sort((a, b) => {
    if (sortOption === 'name') {
      if (sortDirection === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    } else {
      if (sortDirection === 'asc') {
        return a.description.localeCompare(b.description);
      } else {
        return b.description.localeCompare(a.description);
      }
    }
  });

  return { searchTerm, setSearchTerm, sortOption, setSortOption, sortDirection, setSortDirection, sortedItems };
};

export default useFilterAndSort;