import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>React Router Advanced</h1>
        <nav>
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/blog/1">Blog 1</Link>
          {" | "}
          <Link to="/blog/2">Blog 2</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* Dynamic route */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

