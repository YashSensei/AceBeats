import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import PlaylistDetail from "./pages/PlaylistDetail";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Main routes wrapped in Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="library" element={<Library />} />
          <Route path="playlist/:id" element={<PlaylistDetail />} />
          <Route path="album/:id" element={<PlaylistDetail />} />
          <Route path="artist/:id" element={<PlaylistDetail />} />
        </Route>

        {/* Fallback route for any unknown path */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
