import { createContext, useContext, useState, useEffect } from "react";

// Create auth context
const AuthContext = createContext();

// Hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider component
export function AuthProvider({ children }) {
  // Create mock user data
  const mockUser = {
    id: "mock-user-id",
    display_name: "Demo User",
    images: [{ url: "https://i.pravatar.cc/300" }],
    country: "US",
    product: "premium",
    email: "demo@example.com",
  };

  const [currentUser, setCurrentUser] = useState(mockUser);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Skip authentication checks and set mock user data
  useEffect(() => {
    setLoading(false);
  }, []);

  // Mock functions
  const login = () => {
    setCurrentUser(mockUser);
  };

  const logout = () => {
    // Even with logout, we maintain the mock user
    setCurrentUser(mockUser);
  };

  // Context value
  const value = {
    currentUser,
    loading,
    error,
    login,
    logout,
    isAuthenticated: true,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
