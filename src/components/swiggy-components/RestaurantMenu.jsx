import { Link, useParams } from "react-router-dom";
import { useRestaurantMenu } from "../../utils/app-data";
import { MenuShimmer } from "./Shimmer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
        <Button variant="link" asChild className="px-0">
          <Link to="/">Back to restaurants</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-2xl">
      <Button variant="link" asChild className="px-0">
        <Link to="/">← Back</Link>
      </Button>
      <img
        src={menu.image}
        alt={menu.name}
        className="w-full h-72 object-cover bg-gray-200 rounded-lg my-4"
      />
      <h1 className="text-2xl font-bold mb-2">{menu.name}</h1>
      <div className="flex gap-2 mb-2">
        <Badge variant="secondary">Cuisine : {menu.cuisine}</Badge>
        <Badge>Rating : {menu.rating}</Badge>
      </div>
      <p className="mb-4">
        Prep time : {menu.prepTimeMinutes} min · Cook time : {menu.cookTimeMinutes} min
      </p>

      <Separator className="mb-4" />
      <h2 className="text-xl font-bold mb-2">Ingredients</h2>
      <ul className="list-disc pl-6 mb-4">
        {menu.ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <Separator className="mb-4" />
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
