import { useState } from "react";
import { Link } from "react-router-dom";

function Library() {
  const [activeFilter, setActiveFilter] = useState("playlists");

  // Mock user's library data
  const libraryItems = {
    playlists: [
      {
        id: 1,
        name: "Liked Songs",
        description: "Your liked songs",
        image: "https://misc.scdn.co/liked-songs/liked-songs-640.png",
        type: "Playlist",
        owner: "You",
        tracks: 427,
      },
      {
        id: 2,
        name: "My Playlist #1",
        description: "Personal collection of favorites",
        image:
          "https://i.scdn.co/image/ab67706c0000da84c0d37b7d63c097075b5f5b5b",
        type: "Playlist",
        owner: "You",
        tracks: 53,
      },
      {
        id: 3,
        name: "Chill Vibes",
        description: "Easy listening and relaxing tunes",
        image:
          "https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146",
        type: "Playlist",
        owner: "You",
        tracks: 87,
      },
      {
        id: 4,
        name: "Workout Mix",
        description: "High energy beats to keep you motivated",
        image:
          "https://i.scdn.co/image/ab67706c0000da84b787079d8bc733d8bfa30d8d",
        type: "Playlist",
        owner: "You",
        tracks: 45,
      },
      {
        id: 5,
        name: "Daily Mix 1",
        description: "Made for you",
        image:
          "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb6be070445e03e0b41803501a/1/en/default",
        type: "Daily Mix",
        owner: "Spotify",
        tracks: 50,
      },
    ],
    artists: [
      {
        id: 1,
        name: "The Weeknd",
        type: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5eb62a5742e93dbe21b5fce8590",
      },
      {
        id: 2,
        name: "Dua Lipa",
        type: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5eb232d490f15425d6ad91df82f",
      },
      {
        id: 3,
        name: "Drake",
        type: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebee452d5ed22d6cd6e5f5ebb0",
      },
      {
        id: 4,
        name: "Taylor Swift",
        type: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5eb5a00969a4698c3132a15fbb0",
      },
      {
        id: 5,
        name: "Coldplay",
        type: "Artist",
        image:
          "https://i.scdn.co/image/ab6761610000e5eb989ed05e1f0570cc4726c2d3",
      },
    ],
    albums: [
      {
        id: 1,
        name: "After Hours",
        artist: "The Weeknd",
        type: "Album",
        image:
          "https://i.scdn.co/image/ab67616d00001e02ef12a4e3bfac7c2745a6ec29",
        year: "2020",
      },
      {
        id: 2,
        name: "Future Nostalgia",
        artist: "Dua Lipa",
        type: "Album",
        image:
          "https://i.scdn.co/image/ab67616d00001e02bd26ede1ae69327010d49946",
        year: "2020",
      },
      {
        id: 3,
        name: "Certified Lover Boy",
        artist: "Drake",
        type: "Album",
        image:
          "https://i.scdn.co/image/ab67616d00001e02cd945b4e3de57edd28481ad3",
        year: "2021",
      },
      {
        id: 4,
        name: "Evermore",
        artist: "Taylor Swift",
        type: "Album",
        image:
          "https://i.scdn.co/image/ab67616d00001e0290fd9741e1838115cd90b3b6",
        year: "2020",
      },
      {
        id: 5,
        name: "Music Of The Spheres",
        artist: "Coldplay",
        type: "Album",
        image:
          "https://i.scdn.co/image/ab67616d00001e02ec10f247b100da1ce0d80b6d",
        year: "2021",
      },
    ],
    podcasts: [
      {
        id: 1,
        name: "The Joe Rogan Experience",
        creator: "Joe Rogan",
        type: "Podcast",
        image:
          "https://i.scdn.co/image/ab6765630000ba8a09bf4814c6585e1f88f4399f",
      },
      {
        id: 2,
        name: "Crime Junkie",
        creator: "audiochuck",
        type: "Podcast",
        image:
          "https://i.scdn.co/image/ab6765630000ba8a30a9a4e9eac298fe09bfca67",
      },
      {
        id: 3,
        name: "Call Her Daddy",
        creator: "Alex Cooper",
        type: "Podcast",
        image:
          "https://i.scdn.co/image/ab6765630000ba8a350dd5c2d266602068e8c598",
      },
    ],
  };

  const filters = [
    { id: "playlists", name: "Playlists" },
    { id: "artists", name: "Artists" },
    { id: "albums", name: "Albums" },
    { id: "podcasts", name: "Podcasts" },
  ];

  return (
    <div className="text-spotify-white pb-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Your Library</h1>
        <div className="flex items-center">
          <button className="text-spotify-grey hover:text-spotify-white mr-4">
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
          </button>
          <button className="text-spotify-grey hover:text-spotify-white">
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`py-1.5 px-4 rounded-full text-sm font-medium whitespace-nowrap ${
              activeFilter === filter.id
                ? "bg-white text-black"
                : "bg-spotify-dark-grey text-white hover:bg-opacity-80"
            }`}
          >
            {filter.name}
          </button>
        ))}
      </div>

      {/* Sort options */}
      <div className="flex justify-end mb-4">
        <button className="flex items-center text-spotify-grey hover:text-white text-sm">
          <span className="mr-1 font-medium">Recents</span>
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Library items grid/list */}
      {activeFilter === "playlists" && (
        <div className="grid grid-cols-1 gap-4 mb-8">
          {libraryItems.playlists.map((item) => (
            <Link
              key={item.id}
              to={`/playlist/${item.id}`}
              className="flex items-center p-2 hover:bg-spotify-dark-grey rounded-md transition-colors"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-12 w-12 md:h-16 md:w-16 object-cover shadow mr-4"
              />
              <div className="flex-grow">
                <h3 className="font-bold text-white">{item.name}</h3>
                <p className="text-sm text-spotify-grey">
                  {item.type} • {item.owner}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {activeFilter === "artists" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {libraryItems.artists.map((artist) => (
            <Link
              key={artist.id}
              to={`/artist/${artist.id}`}
              className="bg-spotify-dark-grey p-4 rounded-lg hover:bg-opacity-80 transition-all"
            >
              <div className="mb-4">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full aspect-square object-cover shadow-lg rounded-full"
                />
              </div>
              <h3 className="font-bold text-base mb-1 truncate">
                {artist.name}
              </h3>
              <p className="text-spotify-grey text-sm">{artist.type}</p>
            </Link>
          ))}
        </div>
      )}

      {activeFilter === "albums" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {libraryItems.albums.map((album) => (
            <Link
              key={album.id}
              to={`/album/${album.id}`}
              className="bg-spotify-dark-grey p-4 rounded-lg hover:bg-opacity-80 transition-all"
            >
              <div className="mb-4">
                <img
                  src={album.image}
                  alt={album.name}
                  className="w-full aspect-square object-cover shadow-lg"
                />
              </div>
              <h3 className="font-bold text-base mb-1 truncate">
                {album.name}
              </h3>
              <p className="text-spotify-grey text-sm">
                {album.year} • {album.artist}
              </p>
            </Link>
          ))}
        </div>
      )}

      {activeFilter === "podcasts" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {libraryItems.podcasts.map((podcast) => (
            <Link
              key={podcast.id}
              to={`/podcast/${podcast.id}`}
              className="bg-spotify-dark-grey p-4 rounded-lg hover:bg-opacity-80 transition-all"
            >
              <div className="mb-4">
                <img
                  src={podcast.image}
                  alt={podcast.name}
                  className="w-full aspect-square object-cover shadow-lg rounded"
                />
              </div>
              <h3 className="font-bold text-base mb-1 truncate">
                {podcast.name}
              </h3>
              <p className="text-spotify-grey text-sm">
                Show • {podcast.creator}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Library;
