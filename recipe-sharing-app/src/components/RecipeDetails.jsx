// src/components/RecipeDetails.jsx
import { useParams, Link, useNavigate } from 'react-router-dom'
import useRecipeStore from '../recipeStore'

function RecipeDetails() {
  const { id } = useParams()
  const recipeId = Number(id)
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === recipeId)
  )
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)
  const navigate = useNavigate()

  if (!recipe) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Recipe not found</h2>
        <Link to="/">Back to list</Link>
      </div>
    )
  }

  const handleDelete = () => {
    // optional confirm
    if (window.confirm('Delete this recipe?')) {
      deleteRecipe(recipeId)
      navigate('/') // go home after delete
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{recipe.title}</h1>
      <p style={{ whiteSpace: 'pre-wrap' }}>{recipe.description}</p>

      <div style={{ marginTop: 16 }}>
        <Link to={`/edit/${recipeId}`} style={{ marginRight: 10 }}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete} style={{ marginRight: 10 }}>
          Delete
        </button>
        <Link to="/">Back to list</Link>
      </div>
    </div>
  )
}

export default RecipeDetails
