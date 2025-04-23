import { Link } from "react-router-dom";
import { mockPlaylists } from "../services/spotify";
import ImageWithFallback from "./ImageWithFallback";

function Sidebar() {
  // Use mock playlists data from spotify service
  const playlists = mockPlaylists.userPlaylists;

  return (
    <div className="bg-black w-64 h-full flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <Link to="/" className="text-white text-2xl font-bold">
          AceBeats
        </Link>
      </div>

      {/* Navigation */}
      <nav className="px-2 mt-2">
        <ul className="space-y-2">
          <li>
            <Link to="/" className="sidebar-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link to="/search" className="sidebar-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search
            </Link>
          </li>
          <li>
            <Link to="/library" className="sidebar-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>
              Your Library
            </Link>
          </li>
        </ul>
      </nav>

      {/* Playlists section */}
      <div className="mt-8 px-2 flex-1 overflow-hidden flex flex-col">
        <div className="flex items-center mb-4">
          <button className="sidebar-item bg-spotify-dark-grey rounded-full p-1 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          <span className="text-spotify-grey font-medium">Create Playlist</span>
        </div>

        <div className="flex items-center mb-6">
          <div className="sidebar-item bg-gradient-to-br from-purple-800 to-purple-500 rounded-full p-1 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <span className="text-spotify-grey font-medium">Liked Songs</span>
        </div>

        <div className="border-t border-spotify-dark-grey pt-4 flex-1 overflow-y-auto">
          <ul className="space-y-2 pb-8">
            {playlists.map((playlist) => (
              <li key={playlist.id}>
                <Link
                  to={`/playlist/${playlist.id}`}
                  className="text-spotify-grey hover:text-spotify-white transition-colors duration-200 block py-1 flex items-center"
                >
                  <div className="w-8 h-8 mr-3 flex-shrink-0">
                    <ImageWithFallback
                      src={playlist.image}
                      alt={playlist.name}
                      className="w-full h-full rounded object-cover"
                    />
                  </div>
                  <span>{playlist.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
