import { Link, useParams } from "react-router-dom";
import { useRestaurantMenu } from "../../utils/app-data";
import { MenuShimmer } from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { menu, loading } = useRestaurantMenu(resId);

  if (loading) {
    return <MenuShimmer />;
  }

  if (!menu) {
    return (
      <div className="p-4">
        <p className="font-bold mb-2">Restaurant not found</p>
        <Link to="/" className="underline">
          Back to restaurants
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-2xl">
      <Link to="/" className="underline">
        ← Back
      </Link>
      <img
        src={menu.image}
        alt={menu.name}
        className="w-full h-72 object-cover bg-gray-200 rounded-lg my-4"
      />
      <h1 className="text-2xl font-bold mb-2">{menu.name}</h1>
      <p className="mb-1">Cuisine : {menu.cuisine}</p>
      <p className="mb-1">Rating : {menu.rating}</p>
      <p className="mb-4">
        Prep time : {menu.prepTimeMinutes} min · Cook time : {menu.cookTimeMinutes} min
      </p>

      <h2 className="text-xl font-bold mb-2">Ingredients</h2>
      <ul className="list-disc pl-6 mb-4">
        {menu.ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mb-2">Instructions</h2>
      <ol className="list-decimal pl-6">
        {menu.instructions.map((step, index) => (
          <li key={index} className="mb-1">
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RestaurantMenu;
