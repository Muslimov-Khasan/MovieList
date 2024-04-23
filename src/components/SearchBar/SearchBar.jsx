import React from 'react';

 function SearchBar({ searchTerm, handleChange, handleSearch }) {
  return (
    <header>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search movie"
          autoComplete="off"
          className="search"
        />
      </form>
    </header>
  );
}
export default SearchBar;