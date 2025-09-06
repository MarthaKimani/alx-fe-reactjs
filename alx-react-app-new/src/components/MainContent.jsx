import React from "react";
import UserProfile from "./UserProfile";

function MainContent() {
  return (
    <main style={{ padding: "20px", backgroundColor: "#eef2f3" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "darkgreen" }}>
        Meet Our Users
      </h2>
      <UserProfile name="Alice Johnson" age={28} bio="Loves hiking and outdoor adventures." />
      <UserProfile name="Bob Smith" age={34} bio="A foodie who enjoys exploring new cuisines." />
      <UserProfile name="Charlie Brown" age={22} bio="Tech enthusiast and avid gamer." />
    </main>
  );
}

export default MainContent;
