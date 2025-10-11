import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BlogPost from "./components/BlogPost";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Advanced React Router Demo</h1>
        <p>Demonstrating nested, protected, and dynamic routes</p>

        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Dynamic Route for Blog */}
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Protected Route for Profile */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            {/* Nested Routes inside Profile */}
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Login Route */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

