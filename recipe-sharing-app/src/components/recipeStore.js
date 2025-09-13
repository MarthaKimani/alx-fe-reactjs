// src/components/recipeStore.js
import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  selectedRecipe: null,
  searchTerm: "", // <-- Added state for search term
  setRecipes: (recipes) => set({ recipes }),
  setSelectedRecipe: (recipe) => set({ selectedRecipe: recipe }),
  setSearchTerm: (term) => set({ searchTerm: term }), // <-- Added setter for search term
}));

export default useRecipeStore;

