// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'
import './App.css'

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>🍳 Recipe Sharing App</h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />

          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />

          {/* fallback route */}
          <Route
            path="*"
            element={
              <div style={{ padding: 20 }}>
                <h2>Page not found</h2>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App

