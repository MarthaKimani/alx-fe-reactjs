// src/components/RecipeDetails.jsx
import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeDetails = () => {
  const { id } = useParams(); // get recipe ID from URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

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

