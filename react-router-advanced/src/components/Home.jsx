import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the React Router Advanced demo.</p>
      <nav>
        <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/post/101">View Post 101</Link>
      </nav>
    </div>
  );
}

export default Home;
