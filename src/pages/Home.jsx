import { Link } from "react-router-dom";
import { mockPlaylists } from "../services/spotify";
import ImageWithFallback from "../components/ImageWithFallback";

function Home() {
  // Use mock data from spotify service
  const recentlyPlayed = mockPlaylists.recentlyPlayed;
  const featuredPlaylists = mockPlaylists.featuredPlaylists;

  return (
    <div className="text-spotify-white pb-10">
      {/* Greeting based on time of day */}
      <h1 className="text-3xl font-bold mb-6">
        {new Date().getHours() < 12
          ? "Good morning"
          : new Date().getHours() < 18
          ? "Good afternoon"
          : "Good evening"}
      </h1>

      {/* Recently played section - grid layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {recentlyPlayed.slice(0, 6).map((item) => (
          <Link
            key={item.id}
            to={`/playlist/${item.id}`}
            className="bg-spotify-dark-grey bg-opacity-60 hover:bg-opacity-80 transition-all rounded flex items-center overflow-hidden"
          >
            <ImageWithFallback
              src={item.image}
              alt={item.name}
              className="h-12 w-12 shadow-lg"
            />
            <span className="font-bold text-sm ml-4">{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Made for you section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Made For You</h2>
          <Link
            to="/made-for-you"
            className="text-sm font-bold uppercase text-spotify-grey hover:underline"
          >
            Show all
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {recentlyPlayed.slice(0, 6).map((item) => (
            <Link
              key={item.id}
              to={`/playlist/${item.id}`}
              className="bg-spotify-dark-grey p-4 rounded-lg hover:bg-opacity-80 transition-all group"
            >
              <div className="mb-4 relative">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-square object-cover shadow-lg rounded"
                />
                <button className="absolute bottom-2 right-2 p-3 rounded-full bg-spotify-green text-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="font-bold text-base mb-1 truncate">{item.name}</h3>
              <p className="text-spotify-grey text-sm line-clamp-2">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Playlists section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Featured Playlists</h2>
          <Link
            to="/featured-playlists"
            className="text-sm font-bold uppercase text-spotify-grey hover:underline"
          >
            Show all
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {featuredPlaylists.map((playlist) => (
            <Link
              key={playlist.id}
              to={`/playlist/${playlist.id}`}
              className="bg-spotify-dark-grey p-4 rounded-lg hover:bg-opacity-80 transition-all group"
            >
              <div className="mb-4 relative">
                <ImageWithFallback
                  src={playlist.image}
                  alt={playlist.name}
                  className="w-full aspect-square object-cover shadow-lg rounded"
                />
                <button className="absolute bottom-2 right-2 p-3 rounded-full bg-spotify-green text-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="font-bold text-base mb-1 truncate">
                {playlist.name}
              </h3>
              <p className="text-spotify-grey text-sm line-clamp-2">
                {playlist.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
