import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // ✅ Validation function
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Recipe title is required";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please enter at least two ingredients";
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const newRecipe = {
        title,
        ingredients,
        steps,
      };

      console.log("Recipe submitted:", newRecipe);

      // reset form
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 md:text-3xl">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2 md:p-3 focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-medium mb-1">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter ingredients, separated by commas"
            className="w-full border rounded p-2 md:p-3 focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block font-medium mb-1">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border rounded p-2 md:p-3 focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 md:py-3 rounded hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;

