import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PlaylistDetail() {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock API fetch with timeout to simulate loading
    const fetchPlaylist = async () => {
      setIsLoading(true);

      // In a real app, this would be an API call to Spotify
      setTimeout(() => {
        // Mock playlist data
        setPlaylist({
          id: id,
          name: "Discover Weekly",
          description:
            "Your weekly mixtape of fresh music. Enjoy new discoveries and deep cuts chosen just for you. Updated every Monday.",
          image:
            "https://i.scdn.co/image/ab67706f000000028a77de545b5f6d28d0e99d48",
          owner: "Spotify",
          followers: "6,293,524",
          totalTracks: 30,
          duration: "1hr 45min",
          tracks: [
            {
              id: 1,
              name: "Blinding Lights",
              artist: "The Weeknd",
              album: "After Hours",
              duration: "3:20",
              image:
                "https://i.scdn.co/image/ab67616d00001e02ef12a4e3bfac7c2745a6ec29",
              plays: "2,456,789",
              dateAdded: "2023-08-14",
            },
            {
              id: 2,
              name: "Save Your Tears",
              artist: "The Weeknd",
              album: "After Hours",
              duration: "3:35",
              image:
                "https://i.scdn.co/image/ab67616d00001e02ef12a4e3bfac7c2745a6ec29",
              plays: "1,876,543",
              dateAdded: "2023-08-14",
            },
            {
              id: 3,
              name: "Don't Start Now",
              artist: "Dua Lipa",
              album: "Future Nostalgia",
              duration: "3:03",
              image:
                "https://i.scdn.co/image/ab67616d0000b273bd26ede1ae69327010d49946",
              plays: "1,765,432",
              dateAdded: "2023-08-14",
            },
            {
              id: 4,
              name: "Watermelon Sugar",
              artist: "Harry Styles",
              album: "Fine Line",
              duration: "2:54",
              image:
                "https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e",
              plays: "1,654,321",
              dateAdded: "2023-08-14",
            },
            {
              id: 5,
              name: "Good Days",
              artist: "SZA",
              album: "Good Days",
              duration: "4:39",
              image:
                "https://i.scdn.co/image/ab67616d0000b2737ef2a45a9d7fbfff04efe96c",
              plays: "1,543,210",
              dateAdded: "2023-08-14",
            },
            {
              id: 6,
              name: "Leave The Door Open",
              artist: "Bruno Mars, Anderson .Paak, Silk Sonic",
              album: "Leave The Door Open",
              duration: "4:02",
              image:
                "https://i.scdn.co/image/ab67616d0000b273608d05af26bacca0804f7359",
              plays: "1,432,109",
              dateAdded: "2023-08-14",
            },
            {
              id: 7,
              name: "Peaches",
              artist: "Justin Bieber feat. Daniel Caesar, Giveon",
              album: "Justice",
              duration: "3:18",
              image:
                "https://i.scdn.co/image/ab67616d0000b2730f7ad75c51f7ec0c51a8735a",
              plays: "1,321,098",
              dateAdded: "2023-08-14",
            },
            {
              id: 8,
              name: "Levitating",
              artist: "Dua Lipa feat. DaBaby",
              album: "Future Nostalgia",
              duration: "3:23",
              image:
                "https://i.scdn.co/image/ab67616d0000b273bd26ede1ae69327010d49946",
              plays: "1,210,987",
              dateAdded: "2023-08-14",
            },
            {
              id: 9,
              name: "Kiss Me More",
              artist: "Doja Cat feat. SZA",
              album: "Planet Her",
              duration: "3:28",
              image:
                "https://i.scdn.co/image/ab67616d0000b2734df3245f26298a1579ecc321",
              plays: "1,109,876",
              dateAdded: "2023-08-14",
            },
            {
              id: 10,
              name: "Montero (Call Me By Your Name)",
              artist: "Lil Nas X",
              album: "Montero",
              duration: "2:18",
              image:
                "https://i.scdn.co/image/ab67616d0000b2736e41f9d65fd9512e2cc416a3",
              plays: "1,098,765",
              dateAdded: "2023-08-14",
            },
          ],
        });
        setIsLoading(false);
      }, 1000);
    };

    fetchPlaylist();
  }, [id]);

  if (isLoading) {
    return (
      <div className="text-spotify-white flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-spotify-green"></div>
      </div>
    );
  }

  if (!playlist) {
    return (
      <div className="text-spotify-white text-center py-20">
        <h1 className="text-3xl font-bold mb-4">Playlist not found</h1>
        <p className="text-spotify-grey">
          The playlist you're looking for doesn't exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="text-spotify-white pb-16">
      {/* Playlist header */}
      <div className="flex flex-col md:flex-row items-start md:items-end gap-6 mb-8">
        <div className="shadow-2xl">
          <img
            src={playlist.image}
            alt={playlist.name}
            className="h-60 w-60 object-cover shadow-lg"
          />
        </div>
        <div>
          <p className="text-xs uppercase font-bold mb-2">Playlist</p>
          <h1 className="text-8xl font-bold mb-6">{playlist.name}</h1>
          <p className="text-spotify-grey mb-4">{playlist.description}</p>
          <div className="flex items-center text-sm">
            <span className="font-bold">{playlist.owner}</span>
            <span className="mx-1">•</span>
            <span>{playlist.followers} likes</span>
            <span className="mx-1">•</span>
            <span>{playlist.totalTracks} songs,</span>
            <span className="ml-1 text-spotify-grey">
              about {playlist.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-6 mb-8">
        <button className="h-14 w-14 rounded-full bg-spotify-green flex items-center justify-center hover:scale-105 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-black"
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
        <button className="text-spotify-grey hover:text-spotify-white transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
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
        </button>
        <button className="text-spotify-grey hover:text-spotify-white transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>

      {/* Tracks table */}
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-spotify-grey border-b border-spotify-light-grey">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Album</th>
              <th className="px-6 py-3">Date added</th>
              <th className="px-6 py-3 text-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            {playlist.tracks.map((track, index) => (
              <tr
                key={track.id}
                className="hover:bg-spotify-dark-grey cursor-pointer group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="group-hover:hidden">{index + 1}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 hidden group-hover:block"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img
                      src={track.image}
                      alt={track.name}
                      className="h-10 w-10 mr-3"
                    />
                    <div>
                      <p className="font-medium">{track.name}</p>
                      <p className="text-spotify-grey">{track.artist}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-spotify-grey">{track.album}</td>
                <td className="px-6 py-4 text-spotify-grey">
                  {track.dateAdded}
                </td>
                <td className="px-6 py-4 text-right text-spotify-grey">
                  {track.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlaylistDetail;
