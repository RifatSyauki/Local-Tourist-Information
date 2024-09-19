import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari lokasi atau wisata..."
        className="border border-slate-100 h-9 rounded-lg"
      />
      <button className="bg-lime-700 text-white p-1.5 rounded-lg" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;