import { useState } from 'react';
import { Link } from 'react-router-dom';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  // Mock browse categories
  const categories = [
    { id: 1, name: 'Podcasts', color: 'from-purple-700 to-purple-900', image: 'https://i.scdn.co/image/ab6765630000ba8a25c835a7341092dad8b4e0e7' },
    { id: 2, name: 'Live Events', color: 'from-green-500 to-green-700', image: 'https://concerts.spotifycdn.com/images/live-events_category-image.jpg' },
    { id: 3, name: 'Made For You', color: 'from-blue-500 to-blue-700', image: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe' },
    { id: 4, name: 'New Releases', color: 'from-pink-500 to-pink-700', image: 'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112' },
    { id: 5, name: 'Pop', color: 'from-red-500 to-red-700', image: 'https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768' },
    { id: 6, name: 'Hip-Hop', color: 'from-yellow-500 to-yellow-700', image: 'https://i.scdn.co/image/ab67fb8200005caf7e11c8413dc33c00740579c1' },
    { id: 7, name: 'Rock', color: 'from-gray-700 to-gray-900', image: 'https://i.scdn.co/image/ab67fb8200005cafae7e69beb88f16969641b53e' },
    { id: 8, name: 'Latin', color: 'from-orange-500 to-orange-700', image: 'https://i.scdn.co/image/ab67fb8200005caf271f9d895003c5f5561c1354' },
    { id: 9, name: 'Workout', color: 'from-green-600 to-green-800', image: 'https://i.scdn.co/image/ab67706f000000029249b35f23fb195468995e04' },
    { id: 10, name: 'R&B', color: 'from-blue-600 to-blue-800', image: 'https://i.scdn.co/image/ab67fb8200005caf3c51a2d6f720e2f03beb4f3e' },
    { id: 11, name: 'Country', color: 'from-indigo-500 to-indigo-700', image: 'https://i.scdn.co/image/ab67fb8200005caf5c1d8f88bfa0e2139dcc13a5' },
    { id: 12, name: 'Electronic', color: 'from-purple-600 to-purple-800', image: 'https://i.scdn.co/image/ab67fb8200005caf047ddd2487ad2f115c5a8b50' },
  ];

  // Mock implementation of search function
  const handleSearch = (query) => {
    setSearchQuery(query);
    
    // In a real app, this would be an API call to Spotify
    if (query.trim() !== '') {
      // Mock search results
      setSearchResults({
        tracks: [
          { id: 1, name: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20', image: 'https://i.scdn.co/image/ab67616d00001e02ef12a4e3bfac7c2745a6ec29' },
          { id: 2, name: 'Save Your Tears', artist: 'The Weeknd', album: 'After Hours', duration: '3:35', image: 'https://i.scdn.co/image/ab67616d00001e02ef12a4e3bfac7c2745a6ec29' },
          { id: 3, name: 'Starboy', artist: 'The Weeknd, Daft Punk', album: 'Starboy', duration: '3:50', image: 'https://i.scdn.co/image/ab67616d00001e02011bf5451c9f4f06de8008a8' },
        ],
        artists: [
          { id: 1, name: 'The Weeknd', followers: '54.5M', image: 'https://i.scdn.co/image/ab6761610000e5eb62a5742e93dbe21b5fce8590' },
        ],
        albums: [
          { id: 1, name: 'After Hours', artist: 'The Weeknd', year: '2020', image: 'https://i.scdn.co/image/ab67616d00001e02ef12a4e3bfac7c2745a6ec29' },
          { id: 2, name: 'Starboy', artist: 'The Weeknd', year: '2016', image: 'https://i.scdn.co/image/ab67616d00001e02011bf5451c9f4f06de8008a8' },
        ],
        playlists: [
          { id: 1, name: 'This Is The Weeknd', description: 'All his biggest hits and essential tracks.', image: 'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO4eXcRP-default.jpg' },
        ]
      });
    } else {
      setSearchResults(null);
    }
  };

  return (
    <div className="text-spotify-white pb-10">
      {/* Mobile search input - only visible on small screens */}
      <div className="block md:hidden mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="What do you want to listen to?"
            className="bg-white py-3 pl-10 pr-4 rounded-full w-full focus:outline-none text-black"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      {searchResults ? (
        // Search results view
        <div>
          <h1 className="text-2xl font-bold mb-6">Search Results for "{searchQuery}"</h1>
          
          {searchResults.artists.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Top result</h2>
              <div className="bg-spotify-dark-grey bg-opacity-60 rounded-lg p-5 max-w-sm">
                <img src={searchResults.artists[0].image} alt={searchResults.artists[0].name} className="w-28 h-28 rounded-full shadow-lg mb-4" />
                <h3 className="text-2xl font-bold mb-1">{searchResults.artists[0].name}</h3>
                <p className="text-spotify-grey text-sm mb-4">Artist • {searchResults.artists[0].followers} followers</p>
                <button className="spotify-button text-sm py-2 px-4">Play</button>
              </div>
            </section>
          )}
          
          {searchResults.tracks.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Songs</h2>
              <div className="bg-spotify-dark-grey bg-opacity-30 rounded-lg">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-spotify-grey border-b border-spotify-light-grey">
                    <tr>
                      <th className="px-6 py-3">#</th>
                      <th className="px-6 py-3">Title</th>
                      <th className="px-6 py-3">Album</th>
                      <th className="px-6 py-3 text-right">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.tracks.map((track, index) => (
                      <tr key={track.id} className="hover:bg-spotify-light-grey cursor-pointer">
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <img src={track.image} alt={track.name} className="h-10 w-10 mr-3" />
                            <div>
                              <p className="font-medium">{track.name}</p>
                              <p className="text-spotify-grey">{track.artist}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-spotify-grey">{track.album}</td>
                        <td className="px-6 py-4 text-right text-spotify-grey">{track.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
          
          {searchResults.albums.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Albums</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {searchResults.albums.map(album => (
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
                    <h3 className="font-bold text-base mb-1 truncate">{album.name}</h3>
                    <p className="text-spotify-grey text-sm">{album.year} • {album.artist}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
          
          {searchResults.playlists.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Playlists</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {searchResults.playlists.map(playlist => (
                  <Link 
                    key={playlist.id}
                    to={`/playlist/${playlist.id}`}
                    className="bg-spotify-dark-grey p-4 rounded-lg hover:bg-opacity-80 transition-all"
                  >
                    <div className="mb-4">
                      <img 
                        src={playlist.image} 
                        alt={playlist.name} 
                        className="w-full aspect-square object-cover shadow-lg"
                      />
                    </div>
                    <h3 className="font-bold text-base mb-1 truncate">{playlist.name}</h3>
                    <p className="text-spotify-grey text-sm line-clamp-2">{playlist.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      ) : (
        // Browse view (when no search query)
        <div>
          <h1 className="text-2xl font-bold mb-6">Browse all</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {categories.map(category => (
              <Link 
                key={category.id}
                to={`/genre/${category.id}`}
                className={`rounded-lg overflow-hidden relative h-44 bg-gradient-to-br ${category.color}`}
              >
                <h3 className="font-bold text-2xl p-4">{category.name}</h3>
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="absolute bottom-0 right-0 w-1/2 h-1/2 transform rotate-25 translate-x-1/4 translate-y-1/4 object-cover shadow-lg"
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search; 