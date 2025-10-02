// src/App.jsx
import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <HomePage />
      </main>
    </div>
  );
}

export default App;

