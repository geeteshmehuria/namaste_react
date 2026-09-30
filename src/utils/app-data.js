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

export const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/recipes/${resId}`)
      .then((res) => {
        setMenu(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch restaurant menu:", error);
        setMenu(null);
        setLoading(false);
      });
  }, [resId]);

  return { menu, loading };
};
