// src/components/RecipeDetails.jsx
import { useParams } from "react-router-dom";
import { getRecipes } from "./recipeStore";

const RecipeDetails = () => {
  const { id } = useParams(); // grab recipe id from the route
  const recipes = getRecipes();
  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p><strong>ID:</strong> {recipe.id}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
    </div>
  );
};

export default RecipeDetails;

