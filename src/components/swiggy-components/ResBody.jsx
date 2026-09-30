import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { useFetchRecipes } from "../../utils/app-data";
import { useState } from "react";
import { Link } from "react-router-dom";

const ResBody = () => {
  const { recipes, loading } = useFetchRecipes();
  const [showTopRatedOnly, setShowTopRatedOnly] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) {
    return <Shimmer />;
  }

  const handleClear = () => {
    setSearchText("");
    setSearchQuery("");
  };

  const displayedRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!showTopRatedOnly || recipe.rating >= 4.5)
  );

  return (
    <div className="gap-4 p-4">
      <div className="flex gap-4">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border border-solid border-gray-300 p-2 m-2 rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if (!e.target.value) {
                setSearchQuery("");
              }
            }}
          />
          <button
            className="border border-solid border-gray-300 p-2 m-2 rounded-lg cursor-pointer"
            onClick={() => setSearchQuery(searchText)}
          >
            Search
          </button>
          {(searchText || searchQuery) && (
            <button
              className="border border-solid border-gray-300 p-2 m-2 rounded-lg cursor-pointer"
              onClick={handleClear}
            >
              Clear
            </button>
          )}
        </div>

        <button
          className="border border-solid border-gray-300 p-2 m-2 rounded-lg cursor-pointer"
          onClick={() => setShowTopRatedOnly((prev) => !prev)}
        >
          {showTopRatedOnly ? "Show All" : "Filter Top Rated Restaurants"}
        </button>
      </div>
      <div className="flex flex-wrap gap-3">
        {displayedRecipes.map((recipe) => (
          <Link key={recipe.id} to={`/restaurants/${recipe.id}`}>
            <ResCard
              resName={recipe.name}
              rating={recipe.rating}
              location={recipe.cuisine}
              imgUrl={recipe.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResBody;
