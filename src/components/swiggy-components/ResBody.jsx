import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { useFetchRecipes } from "../../utils/app-data";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../../utils/app-data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const ResBody = () => {
  const { recipes, loading } = useFetchRecipes();
  const [showTopRatedOnly, setShowTopRatedOnly] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const onlineStatus = useOnlineStatus();

  const handleClear = () => {
    setSearchText("");
    setSearchQuery("");
  };

  const displayedRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!showTopRatedOnly || recipe.rating >= 4.5),
  );

  if (!onlineStatus) {
    return (
      <Alert variant="destructive" className="m-4 w-auto">
        <AlertTitle>You are offline</AlertTitle>
        <AlertDescription>Check your internet connection.</AlertDescription>
      </Alert>
    );
  }

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="gap-4 p-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 m-2">
          <Input
            type="text"
            placeholder="Search"
            className="w-56"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if (!e.target.value) {
                setSearchQuery("");
              }
            }}
          />
          <Button variant="outline" onClick={() => setSearchQuery(searchText)}>
            Search
          </Button>
          {(searchText || searchQuery) && (
            <Button variant="ghost" onClick={handleClear}>
              Clear
            </Button>
          )}
        </div>

        <Toggle
          variant="outline"
          pressed={showTopRatedOnly}
          onPressedChange={setShowTopRatedOnly}
        >
          Top Rated Restaurants
        </Toggle>
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
