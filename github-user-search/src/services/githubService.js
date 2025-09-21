// github-user-search/src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

// Function to fetch a single GitHub user profile
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

// Function to search GitHub users with filters (location, minRepos, etc.)
export const searchUsers = async (query, location, minRepos) => {
  try {
    let searchQuery = `${query}`;
    if (location) searchQuery += `+location:${location}`;
    if (minRepos) searchQuery += `+repos:>=${minRepos}`;

    const response = await axios.get(
      `${BASE_URL}/search/users?q=${searchQuery}`
    );
    return response.data.items; // returns an array of users
  } catch (error) {
    throw new Error("Error fetching users");
  }
};
