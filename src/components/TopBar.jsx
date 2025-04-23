import { useLocation, useNavigate } from "react-router-dom";

function TopBar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Mock user data
  const user = {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=68",
  };

  return (
    <div className="bg-transparent h-16 flex items-center justify-between px-8">
      {/* Navigation arrows */}
      <div className="flex items-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-black bg-opacity-70 rounded-full p-1 mr-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-spotify-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => navigate(1)}
          className="bg-black bg-opacity-70 rounded-full p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-spotify-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Search bar - only show on search page */}
        {location.pathname === "/search" && (
          <div className="ml-4 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
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
            </div>
            <input
              type="text"
              placeholder="What do you want to listen to?"
              className="bg-white py-2 pl-10 pr-4 rounded-full w-80 focus:outline-none text-sm"
            />
          </div>
        )}
      </div>

      {/* User menu */}
      <div className="flex items-center">
        <div className="relative">
          <button className="bg-black bg-opacity-70 rounded-full p-0.5 flex items-center">
            <img
              src={user.avatar}
              alt="User profile"
              className="h-7 w-7 rounded-full"
            />
            <span className="text-spotify-white text-sm font-medium mx-2">
              {user.name}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-spotify-white mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
