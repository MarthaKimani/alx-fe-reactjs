import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";

// Create a new instance of QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the QueryClient to your entire app
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>React Query Demo</h1>
        <p>Fetching posts from JSONPlaceholder API using React Query</p>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;

