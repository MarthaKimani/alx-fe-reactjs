import React from "react";
import { useQuery } from "react-query";

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

function PostsComponent() {
  // useQuery handles fetching, caching, and updating automatically
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery("posts", fetchPosts, {
    staleTime: 10000, // Data remains "fresh" for 10 seconds
    cacheTime: 300000, // Cache is kept for 5 minutes
  });

  // Loading state
  if (isLoading) return <p>⏳ Loading posts...</p>;

  // Error state
  if (isError) return <p style={{ color: "red" }}>⚠️ Error: {error.message}</p>;

  // Render posts once data is fetched
  return (
    <div style={{ marginTop: "20px" }}>
      <button
        onClick={() => refetch()}
        style={{
          marginBottom: "15px",
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        🔄 Refresh Posts
      </button>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            style={{
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ margin: "0 0 5px 0" }}>{post.title}</h3>
            <p style={{ margin: 0 }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
