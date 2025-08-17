import RestaurantCard from "./ResCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>search</button>
      </div>
      <div className="filter">
        <button
          className="filterButton"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.rating.aggregate_rating >= 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Restaurants having rating more than equal to 4
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
