// src/components/AddRecipeForm.jsx
import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required!");
      return;
    }

    const ingredientsList = ingredients.split(",").map((i) => i.trim());
    if (ingredientsList.length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    setError("");
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredientsList,
      instructions: steps.split("\n").map((s) => s.trim())
    };

    console.log("New Recipe Submitted:", newRecipe);
    alert("Recipe submitted successfully! (Check console)");

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>
      
      {error && (
        <div className="bg-red-100 text-red-600 p-3 rounded mb-4">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Ingredients (comma separated)
          </label>
          <textarea
            className="w-full border border-gray-300 rounded p-2 h-24 focus:ring-2 focus:ring-green-500 outline-none"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g. Tomatoes, Onions, Garlic"
          ></textarea>
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Preparation Steps (one per line)
          </label>
          <textarea
            className="w-full border border-gray-300 rounded p-2 h-32 focus:ring-2 focus:ring-green-500 outline-none"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Step 1:...\nStep 2:..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;
