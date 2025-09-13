// src/components/EditRecipeForm.jsx
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useRecipeStore from '../recipeStore'

function EditRecipeForm() {
  const { id } = useParams()
  const recipeId = Number(id)
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === recipeId)
  )
  const updateRecipe = useRecipeStore((s) => s.updateRecipe)
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title)
      setDescription(recipe.description)
    }
  }, [recipe])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) {
      alert('Please fill both fields')
      return
    }
    updateRecipe({ id: recipeId, title, description })
    navigate(`/recipes/${recipeId}`)
  }

  if (!recipe) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Recipe not found</h2>
      </div>
    )
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={{ display: 'block', margin: '10px 0', padding: 8, width: '100%' }}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe title"
        />
        <textarea
          style={{ display: 'block', margin: '10px 0', padding: 8, width: '100%', minHeight: 120 }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe description"
        />
        <button type="submit" style={{ marginRight: 10 }}>Save</button>
        <button type="button" onClick={() => navigate(-1)}>Cancel</button>
      </form>
    </div>
  )
}

export default EditRecipeForm
