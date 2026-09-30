import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes?limit=100&skip=10&select=name,image,rating,cuisine")
      .then((res) => {
        setRecipes(res.data.recipes || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch recipes:", error);
        setLoading(false);
      });
  }, []);

  return { recipes, loading };
};
