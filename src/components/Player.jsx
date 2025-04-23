import { useState } from "react";

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 217; // Example duration in seconds (3:37)

  // Mock song data
  const currentSong = {
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    coverArt:
      "https://i.scdn.co/image/ab67616d00001e02ef12a4e3bfac7c2745a6ec29",
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    setCurrentTime(newTime);
  };

  return (
    <div className="bg-spotify-dark-grey text-spotify-white h-20 px-4 flex items-center justify-between border-t border-spotify-light-grey">
      {/* Now playing info */}
      <div className="flex items-center w-1/3">
        {currentSong && (
          <>
            <img
              src={currentSong.coverArt}
              alt={`${currentSong.title} cover`}
              className="h-14 w-14 mr-3 shadow-md"
            />
            <div>
              <p className="text-sm font-medium">{currentSong.title}</p>
              <p className="text-xs text-spotify-grey">{currentSong.artist}</p>
            </div>
            <button className="ml-4 text-spotify-grey hover:text-spotify-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
          </>
        )}
      </div>

      {/* Player controls */}
      <div className="flex flex-col items-center w-1/3">
        <div className="flex items-center mb-2">
          <button className="mx-2 text-spotify-grey hover:text-spotify-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </button>
          <button className="mx-2 text-spotify-grey hover:text-spotify-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="h-8 w-8 rounded-full bg-spotify-white flex items-center justify-center mx-2 hover:scale-105 transition-transform"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </button>
          <button className="mx-2 text-spotify-grey hover:text-spotify-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
          <button className="mx-2 text-spotify-grey hover:text-spotify-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center w-full">
          <span className="text-xs text-spotify-grey mr-2">
            {formatTime(currentTime)}
          </span>
          <div className="relative flex-grow h-1 bg-spotify-light-grey rounded-full cursor-pointer group">
            <input
              type="range"
              min="0"
              max="100"
              value={(currentTime / duration) * 100}
              onChange={handleProgressChange}
              className="absolute w-full h-1 opacity-0 cursor-pointer z-10"
            />
            <div
              className="absolute h-1 bg-spotify-white rounded-full"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
            <div
              className="absolute h-3 w-3 bg-spotify-white rounded-full -mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>
          <span className="text-xs text-spotify-grey ml-2">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* Volume and other controls */}
      <div className="flex items-center justify-end w-1/3">
        <button className="mx-1 text-spotify-grey hover:text-spotify-white">
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
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <button className="mx-1 text-spotify-grey hover:text-spotify-white">
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
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </button>
        <button className="mx-1 text-spotify-grey hover:text-spotify-white">
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
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
        </button>
        <button className="mx-1 text-spotify-grey hover:text-spotify-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="relative w-24 mx-2 group">
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="w-full h-1 bg-spotify-light-grey rounded-lg appearance-none cursor-pointer"
          />
          <div
            className="absolute h-1 bg-spotify-white rounded-full top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{ width: `${volume}%` }}
          ></div>
        </div>
        <button className="mx-1 text-spotify-grey hover:text-spotify-white">
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
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Player;
