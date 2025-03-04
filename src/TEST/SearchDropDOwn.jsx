import React, { useState } from "react";
const searchData = [
  "Apple",
  "Apple MacBook",
  "Apple iPhone",
  "Apple Watch",
  "Apple AirPods",
  "Apple Store",
  "Apple Music",
  "Apple TV",
];
const SearchDropDOwn = () => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilteredResults([]);
      setShowDropdown(false);
      return;
    }

    const results = searchData.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredResults(results);
    setShowDropdown(results.length > 0);
  };

  const handleSelect = (item) => {
    setQuery(item);
    setShowDropdown(false);
  };
  return (
    <div className="relative w-72">
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Dropdown Results */}
      {showDropdown && (
        <div className="absolute w-full bg-white border mt-1 rounded-md shadow-lg">
          {filteredResults.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect(item)}
              className="p-2 cursor-pointer hover:bg-gray-100"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchDropDOwn;
