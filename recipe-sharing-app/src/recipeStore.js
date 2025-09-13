// src/components/recipeStore.js

// Temporary in-memory storage (you might replace this with API/database later)
let recipes = [];

// Update a recipe by id
export function updateRecipe(id, updatedData) {
  const index = recipes.findIndex(recipe => recipe.id === id);
  if (index !== -1) {
    recipes[index] = { ...recipes[index], ...updatedData };
    return recipes[index];
  }
  return null; // not found
}

// Delete a recipe by id
export function deleteRecipe(id) {
  const index = recipes.findIndex(recipe => recipe.id === id);
  if (index !== -1) {
    const deleted = recipes.splice(index, 1);
    return deleted[0]; // return deleted recipe
  }
  return null; // not found
}

// Optional: getter to check what’s in store (for testing/debugging)
export function getRecipes() {
  return recipes;
}

// Optional: add new recipe (so you can test updates/deletes easily)
export function addRecipe(recipe) {
  recipes.push(recipe);
  return recipe;
}

