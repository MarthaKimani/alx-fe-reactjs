import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // ✅ QueryClient + QueryClientProvider
import PostsComponent from "./components/PostsComponent"; // ✅ PostsComponent

const queryClient = new QueryClient(); // ✅ queryClient

function App() {
  return (
    <QueryClientProvider client={queryClient}> {/* ✅ client={queryClient} */}
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>React Query Demo</h1>
        <p>Fetching and caching posts using React Query</p>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
