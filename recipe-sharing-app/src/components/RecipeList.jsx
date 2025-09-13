import useRecipeStore from '../recipeStore'

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes)

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>📖 Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one above!</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default RecipeList
