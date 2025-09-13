// src/components/recipeStore.js

let recipes = [];

// Update a recipe by id
export function updateRecipe(id, updatedData) {
  const index = recipes.findIndex(recipe => recipe.id === id);
  if (index !== -1) {
    recipes[index] = { ...recipes[index], ...updatedData };
    return recipes[index];
  }
  return null;
}

// Delete a recipe by id
export function deleteRecipe(id) {
  const index = recipes.findIndex(recipe => recipe.id === id);
  if (index !== -1) {
    const deleted = recipes.splice(index, 1);
    return deleted[0];
  }
  return null;
}

// Optional helpers
export function addRecipe(recipe) {
  recipes.push(recipe);
  return recipe;
}

export function getRecipes() {
  return recipes;
}

