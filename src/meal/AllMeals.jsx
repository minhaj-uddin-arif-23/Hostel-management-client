import React, { useState } from "react";
import useMeal from "../Hook/useMeal";
import MealCard from "./MealCard";
import InfiniteScroll from "react-infinite-scroll-component";

export default function AllMeals() {
  const [meal] = useMeal(); // Assuming this hook provides initial meal data
  const [items, setItems] = useState(meal || []); // Initialize state with meal or an empty array
  const [hasMore, setHasMore] = useState(true); // Track if more items can be loaded

  const fetchMoreData = () => {
    setTimeout(() => {
      if (items.length >= 50) { // Example: stop after loading 50 items
        setHasMore(false);
        return;
      }
      // Add 5 more mock items
      const newItems = Array.from({ length: 5 }, (_, i) => ({
        _id: items.length + i + 1, // Unique ID
        name: `Meal ${items.length + i + 1}`, // Example meal name
      }));
      setItems((prevItems) => [...prevItems, ...newItems]);
    }, 500); // Simulate a delay
  };

  return (
    <div>
      {/* SEARCH FUNCTIONALITY & FILTER FUNCTIONALITY */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-7">
        <InfiniteScroll
          dataLength={items.length} // Number of items already displayed
          next={fetchMoreData} // Function to fetch more items
          hasMore={hasMore} // Whether to fetch more items
          loader={<h4>Loading...</h4>} // Loader component
        >
          {items?.map((item) => (
            <MealCard key={item._id} items={item} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}
