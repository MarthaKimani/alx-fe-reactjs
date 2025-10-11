import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";

// Create a new QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the QueryClient to your entire app
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>React Query Demo</h1>
        <p>Fetching and caching posts using React Query</p>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;

