import React, { useState, useEffect } from "react";
import foodMenu from "../data/food_menu.json";
import { TrophySpin } from "react-loading-indicators";

const Menu = () => {
  const [allItems, setAllItems] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(1500);
  const [loading, setLoading] = useState(true);

  const categories = ["All", ...Object.keys(foodMenu.menu)];

  // Load data once
  useEffect(() => {
    setLoading(true);

    // Simulate async loading (remove setTimeout for instant JSON load)
    setTimeout(() => {
      const loadedItems = Object.values(foodMenu.menu).flat();
      setAllItems(loadedItems);
      setDisplayedItems(loadedItems);
      setLoading(false);
    }, 800); // fake delay for spinner effect
  }, []);

  // Filter items when filters change
  useEffect(() => {
    if (allItems.length === 0) return;

    let filtered =
      selectedCategory === "All"
        ? allItems
        : foodMenu.menu[selectedCategory];

    filtered = filtered.filter((item) => {
      const searchMatch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const priceMatch = item.price <= maxPrice;
      return searchMatch && priceMatch;
    });

    setDisplayedItems(filtered);
  }, [selectedCategory, searchQuery, maxPrice, allItems]);

  return (
    <div className="p-4 max-w-6xl mx-auto scroll-smooth bg-pink-50">
      {/* Category bar */}
      <div className="flex gap-3 flex-wrap overflow-x-auto pb-4 border-b mb-6 sm:flex-wrap shadow p-2 rounded-2xl">
        <span className="font-semibold text-2xl">Categories:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2.5 rounded whitespace-nowrap capitalize ${selectedCategory === cat
                ? "bg-orange-500 text-white"
                : "border hover:bg-pink-200 hover:text-orange-500"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search + Price */}
      <div className="flex flex-wrap gap-6 mb-6 items-center shadow p-3 rounded-2xl">
        <input
          type="text"
          placeholder="Search by name or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-1 p-2 rounded w-full sm:w-1/2 "
        />
        <div className="flex flex-col w-full sm:w-auto">
          <label className="text-sm font-medium">
            Max Price: ₹{maxPrice}
          </label>
          <input
            type="range"
            min={0}
            max={1500}
            step={10}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-64 "
          />
        </div>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <TrophySpin
            color="#de353f"
            size="large"
            text=""
            textColor="#d1c3c3"
          />
        </div>
      ) : (
        // Items Grid
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedItems.length > 0 ? (
            displayedItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="transition-transform duration-300 hover:scale-105">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h1 className="text-xl font-semibold text-gray-900">
                    {item.name}
                  </h1>
                  <p className="mt-1 text-sm text-gray-600 font-medium">
                    {item.description}
                  </p>
                  <p className="text-lg font-bold text-green-600">
                    ₹{item.price}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-gray-500 text-center">
              No matching items found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
