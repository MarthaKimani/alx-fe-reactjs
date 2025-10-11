import React from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>React Todo List</h1>
      <p>Manage your daily tasks efficiently!</p>
      <TodoList />
    </div>
  );
}

export default App;

